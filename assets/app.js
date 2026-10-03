"use strict";
(function () {
  const CASOS = (window.CASOS || []).slice().sort((a, b) => a.id - b.id);
  const ROTEIROS = window.ROTEIROS || [];
  const app = document.getElementById("app");
  const toastEl = document.getElementById("toast");
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  const TIPOS = {
    triagem: { nome: "Triagem", sigla: "T", cor: "--st-triagem" },
    xabcde: { nome: "XABCDE", sigla: "X", cor: "--st-xabcde" },
    anamnese: { nome: "Anamnese", sigla: "A", cor: "--st-anamnese" },
    exame: { nome: "Exame físico", sigla: "EF", cor: "--st-exame" },
    exames: { nome: "Exames complementares", sigla: "EC", cor: "--st-exames" },
    diagnostico: { nome: "Diagnóstico", sigla: "Dx", cor: "--st-diagnostico" },
    conduta: { nome: "Conduta", sigla: "Tx", cor: "--st-conduta" },
    arguicao: { nome: "Arguição", sigla: "?", cor: "--st-arguicao" }
  };

  const PLACEHOLDER = {
    xabcde: "Ex.: X — sem sangramento externo. A — avalio a via aérea: ele fala? … Monitorizo, ofereço O₂, puncionei dois acessos calibrosos…",
    anamnese: "Ex.: Quando começou? Já aconteceu antes? Tem alguma doença? Usa algum remédio? Tem alergia? …",
    exame: "Ex.: Verifico os sinais vitais, faço a ectoscopia, ausculta pulmonar e cardíaca, examino o abdome…",
    exames: "Ex.: Peço hemograma para…, gasometria arterial para…, raio-X de tórax…",
    diagnostico: "Ex.: Meu diagnóstico é…, justificado por… Como diferenciais penso em…",
    conduta: "Ex.: Prescrevo… (dose e via), monitorizo…, encaminho para… e oriento…"
  };

  // ---------- armazenamento local (só conveniência; funciona sem ele) ----------
  const PFX = "simreal:v1:";
  const store = {
    get(k, d) { try { const v = localStorage.getItem(PFX + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(PFX + k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } },
    del(k) { try { localStorage.removeItem(PFX + k); } catch (e) { /* sem armazenamento */ } }
  };
  const settings = Object.assign({ modo: "estudo", tempo: 10, mostrarDx: false, tema: "auto" }, store.get("settings", {}));
  const saveSettings = () => store.set("settings", settings);

  // ---------- utilidades ----------
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const COMP_TITLE = "Complementado para a simulação — não estava nas anotações";
  const fmt = (s) => String(s == null ? "" : s).replace(/\{\{([\s\S]*?)\}\}/g, '<span class="comp" title="' + COMP_TITLE + '">$1</span>');
  const strip = (s) => String(s == null ? "" : s).replace(/\{\{|\}\}/g, "").replace(/<[^>]+>/g, "");
  const norm = (s) => " " + String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9%]+/g, " ").replace(/\s+/g, " ").trim() + " ";
  const fmtNum = (n) => String(Math.round(n * 10) / 10).replace(".", ",");
  const pct = (p, m) => (m ? Math.round((100 * p) / m) : 0);
  const mmss = (ms) => { const s = Math.max(0, Math.floor(ms / 1000)); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); };
  const rotuloCurto = (t) => strip(t).split(/[:(,]/)[0].replace(/\s+[—-]\s*$/, "").trim();
  const nomeEtapa = (et) => et.titulo || TIPOS[et.tipo].nome;
  const CURTO = { xabcde: "XABCDE", anamnese: "Anamnese", exame: "Exame físico", exames: "Exames", diagnostico: "Diagnóstico", conduta: "Conduta", arguicao: "Arguição" };
  function rotuloPasso(et) {
    if (et.tipo !== "xabcde") return CURTO[et.tipo];
    const t = et.titulo || "";
    if (/XABCDE/.test(t)) return "XABCDE";
    if (/ABCDE/.test(t)) return "ABCDE";
    return t || "XABCDE";
  }
  const finePointer = () => window.matchMedia && window.matchMedia("(pointer: fine)").matches;

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }

  const ICON = {
    mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20L12 3z"/><path d="M12 10v4M12 17.5v.5"/></svg>'
  };

  // ---------- correção automática ----------
  const keyCache = new WeakMap();
  function chaves(item) {
    let c = keyCache.get(item);
    if (!c) {
      c = (item.k || []).map((k) => String(k).split("&").map((p) => {
        const core = norm(p).trim();
        if (!core) return null;
        return (/^\s/.test(p) ? " " : "") + core + (/\s$/.test(p) ? " " : "");
      }).filter(Boolean)).filter((a) => a.length);
      keyCache.set(item, c);
    }
    return c;
  }
  // Siglas comuns ganham a forma por extenso ao lado, para casar com as palavras-chave.
  const EXPANDE = {
    rl: "ringer", sf: "soro fisiologico", ch: "concentrado de hemacias", atb: "antibiotico", iot: "intubacao",
    eda: "endoscopia digestiva alta", sng: "sonda nasogastrica", svd: "sonda vesical", tc: "tomografia",
    rx: "raio x", usg: "ultrassom", hda: "hemorragia digestiva alta", hdb: "hemorragia digestiva baixa",
    pac: "pneumonia", dva: "droga vasoativa", ptm: "transfusao macica", mnr: "mascara nao reinalante"
  };
  function normResposta(s) {
    const t = " " + norm(s).trim().split(" ").map((w) => (EXPANDE[w] ? w + " " + EXPANDE[w] : w)).join(" ") + " ";
    // "Ringer lactato" é soro, não o exame lactato.
    return t.replace(/ ringer (?:com )?lactato(?= )/g, " ringer");
  }
  // Para itens "evitar", só conta se a menção não vier negada ("não levaria à tomografia").
  const NEGACAO = /^(nao|sem|evito|evitar|evitaria|evitando|nunca|jamais|contraindicad[oa]s?)$/;
  function ocorrenciaAfirmada(tn, p) {
    for (let idx = tn.indexOf(p); idx !== -1; idx = tn.indexOf(p, idx + 1)) {
      const antes = tn.slice(Math.max(0, idx - 60), idx).trim().split(" ").slice(-6);
      if (!antes.some((w) => NEGACAO.test(w))) return true;
    }
    return false;
  }
  const casa = (tn, item) => chaves(item).some((parts) => parts.every((p) => (item.neg ? ocorrenciaAfirmada(tn, p) : tn.includes(p))));

  // ---------- sessão e pontuação ----------
  let C = null; // caso aberto
  let S = null; // sessão do caso aberto
  const sessKey = (id) => "sess:" + id;
  const save = () => { if (C && S) store.set(sessKey(C.id), S); };

  function novaSessao(c) {
    return {
      v: 1, id: c.id, sid: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      modo: settings.modo, alvo: settings.tempo, iniciado: false, decorrido: 0,
      triagem: null, atual: 0, textos: {}, enviado: {}, auto: {}, checks: {},
      arg: {}, argNota: {}, argCorrigido: {}, fim: false
    };
  }

  function pontosEtapa(et, i) {
    if (et.tipo === "arguicao") {
      const notas = S.argNota[i] || {};
      let pts = 0;
      et.perguntas.forEach((_, k) => { pts += Number(notas[k] || 0); });
      return { pts, max: et.perguntas.length, crit: [], neg: 0 };
    }
    const ch = S.checks[i] || {};
    let pts = 0, max = 0, neg = 0;
    const crit = [];
    et.itens.forEach((it, j) => {
      const on = !!ch[j];
      if (it.neg) { if (on) neg++; return; }
      if (!it.o) max++;
      if (on) pts++;
      else if (it.c) crit.push(it.t);
    });
    pts = Math.max(0, Math.min(max, pts) - neg);
    return { pts, max, crit, neg };
  }

  function totais(c) {
    const linhas = [];
    const triOk = S.triagem !== null && (S.triagem === 1) === !!c.triagem.emergencia;
    linhas.push({ nome: "Triagem", tipo: "triagem", pts: triOk ? 1 : 0, max: 1, crit: [] });
    c.etapas.forEach((et, i) => {
      const sc = pontosEtapa(et, i);
      linhas.push({ nome: nomeEtapa(et), tipo: et.tipo, pts: sc.pts, max: sc.max, crit: sc.crit, neg: sc.neg });
    });
    const pts = linhas.reduce((a, l) => a + l.pts, 0);
    const max = linhas.reduce((a, l) => a + l.max, 0);
    return { linhas, pts, max };
  }

  const historico = () => store.get("hist", []);
  function registrarHistorico() {
    const t = totais(C);
    const h = historico();
    const idx = h.findIndex((r) => r.sid === S.sid);
    const rec = { id: C.id, sid: S.sid, modo: S.modo, data: new Date().toISOString(), pct: pct(t.pts, t.max), tempo: S.decorrido };
    if (idx >= 0) h[idx] = Object.assign(h[idx], { pct: rec.pct, tempo: rec.tempo });
    else h.push(rec);
    store.set("hist", h.slice(-300));
  }
  function statsCaso(id) {
    const recs = historico().filter((r) => r.id === id);
    if (!recs.length) return null;
    return { ultima: recs[recs.length - 1].pct, melhor: Math.max.apply(null, recs.map((r) => r.pct)), n: recs.length };
  }

  // ---------- cronômetro ----------
  let tick = null, tickBase = 0;
  function startTimer() {
    stopTimer();
    if (!S || !S.iniciado || S.fim) { updateTimer(); return; }
    tickBase = Date.now() - S.decorrido;
    tick = setInterval(() => {
      S.decorrido = Date.now() - tickBase;
      updateTimer();
      if (Math.floor(S.decorrido / 1000) % 5 === 0) save();
    }, 1000);
    updateTimer();
  }
  function stopTimer() {
    if (tick) {
      clearInterval(tick);
      tick = null;
      if (S && S.iniciado && !S.fim) { S.decorrido = Date.now() - tickBase; save(); }
    }
  }
  function updateTimer() {
    const el = document.getElementById("timer");
    if (!el || !S) return;
    const alvo = S.alvo * 60000;
    el.querySelector("span").textContent = (S.iniciado ? mmss(S.decorrido) : "--:--") + " / " + mmss(alvo);
    el.classList.toggle("over", S.iniciado && S.decorrido > alvo);
  }

  // ---------- ditado por voz ----------
  let rec = null, recBtn = null;
  function micBtn(target) {
    return '<button type="button" class="btn ghost sm mic" data-act="mic" data-target="' + target + '"' + (SR ? "" : " hidden") + ">" + ICON.mic + "<span>Ditar</span></button>";
  }
  function stopMic() {
    if (!rec) return;
    const r = rec;
    rec = null;
    if (recBtn) recBtn.classList.remove("rec");
    recBtn = null;
    try { r.stop(); } catch (e) { /* já parado */ }
  }
  function toggleMic(btn) {
    if (!SR) { toast("Ditado por voz não é suportado neste navegador — use o Chrome."); return; }
    if (rec) { const mesmo = recBtn === btn; stopMic(); if (mesmo) return; }
    const ta = document.getElementById(btn.dataset.target);
    if (!ta) return;
    const r = new SR();
    r.lang = "pt-BR";
    r.continuous = true;
    r.interimResults = true;
    let base = ta.value;
    r.onresult = (ev) => {
      let fin = "", inter = "";
      for (let k = ev.resultIndex; k < ev.results.length; k++) {
        const res = ev.results[k];
        if (res.isFinal) fin += res[0].transcript; else inter += res[0].transcript;
      }
      if (fin) base = (base && !/\s$/.test(base) ? base + " " : base) + fin.trim();
      ta.value = base + (inter ? (base ? " " : "") + inter : "");
      ta.dispatchEvent(new Event("input", { bubbles: true }));
    };
    r.onerror = (ev) => {
      if (ev.error === "not-allowed" || ev.error === "service-not-allowed") toast("Permita o uso do microfone para ditar.");
      else if (ev.error === "network") toast("O ditado precisa de internet (serviço de voz do navegador).");
      else if (ev.error !== "no-speech" && ev.error !== "aborted") toast("Ditado interrompido (" + ev.error + ").");
    };
    r.onend = () => {
      ta.value = base;
      ta.dispatchEvent(new Event("input", { bubbles: true }));
      if (rec === r) { rec = null; if (recBtn) recBtn.classList.remove("rec"); recBtn = null; }
    };
    try { r.start(); } catch (e) { toast("Não foi possível iniciar o ditado."); return; }
    rec = r;
    recBtn = btn;
    btn.classList.add("rec");
  }

  // ---------- blocos de HTML reutilizáveis ----------
  function tabelaHTML(o) {
    const linhas = o.tab.map((row) => {
      const f = row[3] || "";
      const cls = f === "H" ? "hi" : f === "L" ? "lo" : "";
      const seta = f === "H" ? ' <span class="flag" aria-label="acima da referência">↑</span>' : f === "L" ? ' <span class="flag" aria-label="abaixo da referência">↓</span>' : "";
      return '<tr class="' + cls + '"><td>' + fmt(row[0]) + '</td><td class="v">' + fmt(row[1]) + seta + '</td><td class="ref">' + fmt(row[2]) + "</td></tr>";
    }).join("");
    return '<div class="lab">' + (o.titulo ? '<div class="lab-t">' + esc(o.titulo) + "</div>" : "") +
      '<div class="lab-scroll"><table><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th></tr></thead><tbody>' + linhas + "</tbody></table></div>" +
      (o.nota ? '<p class="lab-n">' + fmt(o.nota) + "</p>" : "") + "</div>";
  }
  function respHTML(r) {
    if (r == null) return "";
    if (Array.isArray(r)) return r.map(respHTML).join("");
    if (typeof r === "object" && r.tab) return tabelaHTML(r);
    return '<div class="resp">' + fmt(r) + "</div>";
  }
  function badge(tipo) {
    return '<span class="badge" aria-hidden="true">' + TIPOS[tipo].sigla + "</span>";
  }
  function tagsItem(it, auto) {
    const t = [];
    if (it.c) t.push('<span class="tag t-crit">crítico</span>');
    if (it.o) t.push('<span class="tag t-bonus">bônus</span>');
    if (it.neg) t.push('<span class="tag t-neg">evitar</span>');
    if (it.x) t.push('<span class="tag t-comp" title="' + COMP_TITLE + '">complementar</span>');
    if (auto) t.push('<span class="tag t-auto">detectado no seu texto</span>');
    return t.join("");
  }
  function itemHTML(i, j, it) {
    const on = !!(S.checks[i] || {})[j];
    const auto = !!(S.auto[i] || {})[j];
    const cls = ["ck", on ? "on" : "", it.neg ? "neg" : "", it.c && !on && !it.neg ? "miss" : ""].join(" ");
    return '<li class="' + cls + '"><label><input type="checkbox" data-ck="' + i + ":" + j + '"' + (on ? " checked" : "") + '><span class="ck-t">' + fmt(it.t) + "</span></label>" +
      '<div class="ck-tags">' + tagsItem(it, auto) + "</div>" + (it.r ? respHTML(it.r) : "") + "</li>";
  }
  const scoreTxt = (sc) => fmtNum(sc.pts) + "/" + sc.max;

  // ---------- views: início ----------
  function viewHome() {
    C = null; S = null;
    const cards = CASOS.map((c) => {
      const st = statsCaso(c.id);
      const sess = store.get(sessKey(c.id), null);
      const emAndamento = sess && sess.iniciado && !sess.fim;
      const chips = ['<span class="mini" style="--c: var(--st-triagem)">T</span>'].concat(c.etapas.map((et) => '<span class="mini" style="--c: var(' + TIPOS[et.tipo].cor + ')" title="' + esc(nomeEtapa(et)) + '">' + TIPOS[et.tipo].sigla + "</span>")).join("");
      const foot = emAndamento ? '<span class="pill warn">Em andamento</span>' : st ? '<span class="pill">Última ' + st.ultima + '%</span><span class="pill ok">Melhor ' + st.melhor + "%</span>" : '<span class="pill muted">Não treinado</span>';
      return '<a class="case-card" href="#/caso/' + c.id + '">' +
        '<div class="cc-top"><span class="cc-num">Caso ' + c.id + '</span><span class="chip">' + esc(c.local) + '</span><span class="chip">' + esc(c.area) + "</span></div>" +
        '<p class="cc-q">' + esc(c.chamada) + "</p>" +
        (settings.mostrarDx ? '<p class="cc-dx">' + esc(c.diagnostico) + "</p>" : "") +
        '<div class="cc-stages">' + chips + "</div>" +
        '<div class="cc-foot">' + foot + "</div></a>";
    }).join("");

    const seg = (v, label) => '<button type="button" class="seg-b' + (settings.modo === v ? " sel" : "") + '" data-act="modo" data-v="' + v + '" aria-pressed="' + (settings.modo === v) + '">' + label + "</button>";
    const tempos = [8, 10, 12, 15].map((m) => '<option value="' + m + '"' + (settings.tempo === m ? " selected" : "") + ">" + m + " min</option>").join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-text">' +
          '<p class="eyebrow">Prova prática · simulação realística</p>' +
          "<h1>Treine o atendimento completo, em voz alta.</h1>" +
          '<p class="lead">Cada caso segue o roteiro da estação — <b>XABCDE</b> (quando precisar), <b>anamnese</b>, <b>exame físico</b>, <b>exames</b>, <b>diagnóstico</b> e <b>conduta</b>. Você escreve ou dita o que faria <b>antes</b> de ver qualquer resposta, e o checklist do avaliador marca o que você cobriu.</p>' +
        "</div>" +
        '<div class="hero-card card">' +
          '<div class="field"><span class="field-l">Modo de treino</span><div class="seg" role="group" aria-label="Modo de treino">' + seg("estudo", "Estudo") + seg("prova", "Prova") + "</div></div>" +
          '<p class="seg-desc">' + (settings.modo === "estudo"
            ? "<b>Estudo:</b> após cada etapa você vê o checklist do avaliador, as respostas do paciente e os pontos-chave."
            : "<b>Prova:</b> você só recebe as informações do que perguntou, examinou ou pediu. O checklist completo aparece no final.") + "</p>" +
          '<div class="field row"><label class="field-l" for="sel-tempo">Tempo da estação</label><select id="sel-tempo" data-setting="tempo">' + tempos + "</select></div>" +
          '<button type="button" class="btn primary block" data-act="sortear">' + ICON.shuffle + "<span>Sortear um caso</span></button>" +
        "</div>" +
      "</section>" +
      '<section class="sec">' +
        '<div class="sec-head"><h2>Casos</h2><label class="switch"><input type="checkbox" data-setting="mostrarDx"' + (settings.mostrarDx ? " checked" : "") + "><span>Mostrar diagnósticos</span></label></div>" +
        '<div class="case-grid">' + cards + "</div>" +
        '<p class="note">Não há “Caso 6” nas anotações; a numeração original foi mantida. Trechos com <span class="comp">sublinhado pontilhado</span> foram complementados para a simulação funcionar (ex.: respostas do paciente que não estavam anotadas).</p>' +
      "</section>" +
      '<section class="sec how">' +
        "<h2>Como treinar</h2>" +
        '<ol class="how-grid">' +
          "<li><b>Leia o cenário e inicie a estação.</b> O cronômetro conta o tempo. Primeiro decida: o paciente precisa de XABCDE antes da anamnese?</li>" +
          "<li><b>Responda cada etapa como falaria ao avaliador.</b> Use o botão <b>Ditar</b> para treinar a fala — ou escreva. Seja específico: doses, vias, justificativas.</li>" +
          "<li><b>Confira o checklist.</b> Itens que aparecem no seu texto são marcados sozinhos; ajuste o que a correção automática não entendeu.</li>" +
          "<li><b>Revise.</b> No resultado você vê os itens críticos que faltaram e os pontos em que as anotações divergem das diretrizes.</li>" +
        "</ol>" +
      "</section>";
  }

  // ---------- views: caso ----------
  function viewCaso(id) {
    const c = CASOS.find((x) => x.id === id);
    if (!c) { app.innerHTML = '<section class="sec"><h1>Caso não encontrado</h1><p><a href="#/">Voltar aos casos</a></p></section>'; return; }
    C = c;
    S = store.get(sessKey(c.id), null);
    if (!S || S.v !== 1 || !S.sid) S = novaSessao(c);
    renderCaso();
    window.scrollTo(0, 0);
    startTimer();
  }

  function stepperHTML(c) {
    const n = c.etapas.length;
    const passos = [{ sigla: "T", nome: "Triagem", cor: "--st-triagem", estado: S.triagem !== null ? "done" : S.iniciado ? "cur" : "todo", alvo: "triagem" }];
    c.etapas.forEach((et, i) => {
      const estado = S.fim || i < S.atual ? "done" : (i === S.atual && S.triagem !== null ? "cur" : "todo");
      passos.push({ sigla: TIPOS[et.tipo].sigla, nome: rotuloPasso(et), titulo: nomeEtapa(et), cor: TIPOS[et.tipo].cor, estado, alvo: "etapa-" + i });
    });
    return '<ol class="stepper" aria-label="Etapas do caso">' + passos.map((p, k) =>
      '<li class="st ' + p.estado + '" style="--c: var(' + p.cor + ')"><button type="button" data-act="ir" data-alvo="' + p.alvo + '"' + (p.estado === "todo" ? " disabled" : "") + ' title="' + esc(p.titulo || p.nome) + '"><span class="st-b">' + p.sigla + '</span><span class="st-n">' + esc(p.nome) + "</span></button></li>" +
      (k < n ? '<li class="st-sep" aria-hidden="true"></li>' : "")).join("") + "</ol>";
  }

  function cenarioHTML(c) {
    const seg = (v, label) => '<button type="button" class="seg-b' + (S.modo === v ? " sel" : "") + '" data-act="modo-caso" data-v="' + v + '" aria-pressed="' + (S.modo === v) + '">' + label + "</button>";
    return '<section class="card cenario" id="cenario">' +
      '<div class="cen-head"><span class="eyebrow">Cenário</span>' + (c.cenarioOriginal ? '<span class="tag t-src">texto do slide</span>' : "") + "</div>" +
      '<p class="cen-txt">' + fmt(c.cenario) + "</p>" +
      (!S.iniciado
        ? '<div class="cen-start"><div class="seg" role="group" aria-label="Modo de treino">' + seg("estudo", "Estudo") + seg("prova", "Prova") + "</div>" +
          '<p class="muted">Leia o cenário. Ao iniciar, o cronômetro da estação (' + S.alvo + " min) começa a contar.</p>" +
          '<button type="button" class="btn primary lg" data-act="iniciar">Iniciar estação ' + ICON.arrow + "</button></div>"
        : "") +
      "</section>";
  }

  function triagemHTML(c) {
    if (!S.iniciado) return "";
    const t = c.triagem;
    const imp = '<p class="impressao"><span class="imp-l">Ao entrar na sala</span>' + fmt(c.impressao) + "</p>";
    if (S.triagem === null) {
      return '<section class="card stage current" id="triagem" style="--c: var(--st-triagem)">' +
        '<header class="stage-head">' + badge("triagem") + '<div><div class="eyebrow">Primeira impressão</div><h2>Triagem</h2></div></header>' +
        imp + '<p class="enunciado">Este paciente precisa de abordagem de emergência (XABCDE / ABCDE + MOV) <b>antes</b> da anamnese completa?</p>' +
        '<div class="choice"><button type="button" class="btn" data-act="triagem" data-v="1">Sim — estabilizar primeiro</button><button type="button" class="btn" data-act="triagem" data-v="0">Não — seguir para a anamnese</button></div>' +
        "</section>";
    }
    const ok = (S.triagem === 1) === !!t.emergencia;
    return '<section class="card stage done" id="triagem" style="--c: var(--st-triagem)">' +
      '<div class="stage-sum static">' + badge("triagem") + '<span class="stage-name">Triagem — você respondeu “' + (S.triagem === 1 ? "Sim" : "Não") + "”</span>" +
      '<span class="verdict ' + (ok ? "ok" : "bad") + '">' + (ok ? "Correto" : "Reveja") + "</span></div>" +
      '<div class="stage-body">' + imp + "<p>" + fmt(t.explicacao) + "</p></div></section>";
  }

  function feedbackHTML(c, i) {
    const et = c.etapas[i];
    if (S.modo === "prova" && !S.fim) {
      const auto = S.auto[i] || {};
      const obtidos = et.itens.filter((it, j) => it.r && auto[j] && !it.neg);
      return '<div class="feedback prova">' +
        '<div class="fb-head"><b>Informações obtidas</b><span class="muted">O paciente/avaliador responde ao que você perguntou, examinou ou pediu.</span></div>' +
        (obtidos.length
          ? '<ul class="dados">' + obtidos.map((it) => '<li><span class="dados-t">' + esc(rotuloCurto(it.t)) + "</span>" + respHTML(it.r) + "</li>").join("") + "</ul>"
          : '<p class="empty">Nada do que você escreveu gerou informações nesta etapa. Na prova você só recebe o que pergunta, examina ou pede — complemente a resposta acima e clique em “Atualizar resposta”.</p>') +
        (et.dados ? '<div class="dados-extra">' + fmt(et.dados) + "</div>" : "") +
        "</div>";
    }
    const sc = pontosEtapa(et, i);
    return '<div class="feedback estudo">' +
      '<div class="fb-head"><b>Checklist do avaliador</b><span class="score-pill" data-score="' + i + '">' + scoreTxt(sc) + "</span>" +
      '<span class="muted">Itens marcados automaticamente pelo seu texto — confira e ajuste.</span></div>' +
      '<ul class="checklist">' + et.itens.map((it, j) => itemHTML(i, j, it)).join("") + "</ul>" +
      (et.dados ? '<div class="dados-extra">' + fmt(et.dados) + "</div>" : "") +
      (et.ensino ? '<div class="ensino"><div class="ensino-h">Pontos-chave</div><div>' + fmt(et.ensino) + "</div></div>" : "") +
      "</div>";
  }

  function arguicaoHTML(c, i, final) {
    const et = c.etapas[i];
    const corr = !!S.argCorrigido[i];
    const txt = S.arg[i] || {};
    const notas = S.argNota[i] || {};
    const qs = et.perguntas.map((q, k) => {
      const id = "ta-" + i + "-" + k;
      const resp = final || corr
        ? '<blockquote class="your">' + (txt[k] ? esc(txt[k]) : '<span class="muted">(sem resposta)</span>') + "</blockquote>"
        : '<div class="answer"><textarea id="' + id + '" data-arg="' + i + ":" + k + '" rows="3" placeholder="Sua resposta…">' + esc(txt[k] || "") + '</textarea><div class="answer-bar">' + micBtn(id) + "</div></div>";
      const gab = corr
        ? '<div class="arg-r"><div class="ensino-h">Resposta esperada</div><div>' + fmt(q.r) + "</div></div>" +
          '<div class="grade" role="group" aria-label="Autoavaliação">' + [[1, "Acertei"], [0.5, "Parcial"], [0, "Errei"]].map((p) =>
            '<button type="button" class="gbtn g' + String(p[0]).replace(".", "") + (notas[k] === p[0] ? " sel" : "") + '" data-nota="' + i + ":" + k + ":" + p[0] + '">' + p[1] + "</button>").join("") + "</div>"
        : "";
      return '<li class="arg-q"><p class="arg-p">' + fmt(q.p) + "</p>" + resp + gab + "</li>";
    }).join("");
    let barra = "";
    if (!corr) barra = '<div class="next-bar"><button type="button" class="btn primary" data-act="corrigir-arg" data-i="' + i + '">Ver respostas esperadas</button></div>';
    else if (!final) barra = '<div class="next-bar"><span class="muted">Avalie cada resposta e veja o resultado.</span><button type="button" class="btn primary" data-act="proxima" data-i="' + i + '">Ver resultado ' + ICON.arrow + "</button></div>";
    return '<ol class="arg">' + qs + "</ol>" + barra;
  }

  function etapaHTML(c, i) {
    const et = c.etapas[i];
    const tp = TIPOS[et.tipo];
    const n = c.etapas.length;
    const nome = nomeEtapa(et);
    const corEstilo = ' style="--c: var(' + tp.cor + ')"';

    if (i < S.atual || S.fim) {
      const sc = pontosEtapa(et, i);
      const mostrarScore = S.modo === "estudo" || S.fim;
      const aberto = S.fim && S.modo === "prova" ? " open" : "";
      const corpo = et.tipo === "arguicao"
        ? arguicaoHTML(c, i, true)
        : '<div class="your-h">Sua resposta</div><blockquote class="your">' + (S.textos[i] ? esc(S.textos[i]) : '<span class="muted">(vazio)</span>') + "</blockquote>" + feedbackHTML(c, i);
      return '<section class="card stage done" id="etapa-' + i + '"' + corEstilo + "><details" + aberto + ">" +
        '<summary class="stage-sum">' + badge(et.tipo) + '<span class="stage-name">' + esc(nome) + "</span>" +
        (mostrarScore ? '<span class="score-pill" data-score="' + i + '">' + scoreTxt(sc) + "</span>" : '<span class="muted sm">enviado</span>') +
        "</summary>" + '<div class="stage-body">' + corpo + "</div></details></section>";
    }

    const enviado = !!S.enviado[i];
    const head = '<header class="stage-head">' + badge(et.tipo) + '<div><div class="eyebrow">Etapa ' + (i + 1) + " de " + n + "</div><h2>" + esc(nome) + "</h2></div></header>" +
      '<p class="enunciado">' + fmt(et.enunciado) + "</p>";
    if (et.tipo === "arguicao") {
      return '<section class="card stage current" id="etapa-' + i + '"' + corEstilo + ">" + head + arguicaoHTML(c, i, false) + "</section>";
    }
    const id = "ta-" + i;
    const prox = i + 1 < n ? "Próxima: " + esc(nomeEtapa(c.etapas[i + 1])) : "Ver resultado";
    return '<section class="card stage current" id="etapa-' + i + '"' + corEstilo + ">" + head +
      '<div class="answer"><label class="sr-only" for="' + id + '">Sua resposta</label>' +
      '<textarea id="' + id + '" data-txt="' + i + '" rows="7" placeholder="' + esc(PLACEHOLDER[et.tipo] || "") + '">' + esc(S.textos[i] || "") + "</textarea>" +
      '<div class="answer-bar">' + micBtn(id) + '<span class="kbd">Ctrl + Enter envia</span>' +
      '<button type="button" class="btn ' + (enviado ? "" : "primary") + '" data-act="enviar" data-i="' + i + '">' + (enviado ? "Atualizar resposta" : "Enviar resposta") + "</button></div></div>" +
      (enviado ? feedbackHTML(c, i) + '<div class="next-bar"><button type="button" class="btn primary" data-act="proxima" data-i="' + i + '">' + prox + " " + ICON.arrow + "</button></div>" : "") +
      "</section>";
  }

  function resultadoHTML(c) {
    const t = totais(c);
    const p = pct(t.pts, t.max);
    const barras = t.linhas.map((l) => {
      const lp = pct(l.pts, l.max);
      return '<li style="--c: var(' + TIPOS[l.tipo].cor + ')"><span class="rb-n">' + esc(l.nome) + '</span><span class="rb-bar"><span style="width:' + lp + '%"></span></span><span class="rb-v">' + fmtNum(l.pts) + "/" + l.max + "</span></li>";
    }).join("");
    const criticos = [];
    t.linhas.forEach((l) => l.crit.forEach((x) => criticos.push({ etapa: l.nome, t: x })));
    const negs = [];
    c.etapas.forEach((et, i) => { if (et.itens) et.itens.forEach((it, j) => { if (it.neg && (S.checks[i] || {})[j]) negs.push(it.t); }); });
    const idx = CASOS.findIndex((x) => x.id === c.id);
    const prox = CASOS[(idx + 1) % CASOS.length];
    const naoAvaliadas = (() => {
      let n = 0;
      c.etapas.forEach((et, i) => { if (et.tipo === "arguicao") et.perguntas.forEach((_, k) => { if ((S.argNota[i] || {})[k] === undefined) n++; }); });
      return n;
    })();
    return '<section class="card resultado" id="resultado">' +
      '<div class="res-top">' +
        '<div class="ring" style="--p:' + p + '" role="img" aria-label="Pontuação ' + p + '%"><span>' + p + "%</span></div>" +
        '<div class="res-info"><div class="eyebrow">Resultado · Caso ' + c.id + " · modo " + (S.modo === "prova" ? "prova" : "estudo") + "</div>" +
          "<h2>" + esc(c.diagnostico) + "</h2>" +
          '<p class="muted">' + fmtNum(t.pts) + " de " + t.max + " pontos · tempo " + mmss(S.decorrido) + " (alvo " + S.alvo + " min)" + (S.decorrido > S.alvo * 60000 ? ' · <span class="bad-t">acima do tempo</span>' : "") + "</p>" +
        "</div>" +
      "</div>" +
      '<ul class="rbars">' + barras + "</ul>" +
      (naoAvaliadas ? '<p class="note">Avalie suas respostas da arguição (Acertei/Parcial/Errei) para completar a nota.</p>' : "") +
      (S.modo === "prova" ? '<p class="note">Modo prova: confira abaixo os checklists de cada etapa — a marcação automática pode ter deixado passar algo que você disse com outras palavras.</p>' : "") +
      (criticos.length ? '<div class="res-blk crit"><h3>Itens críticos que faltaram</h3><ul>' + criticos.map((x) => "<li><span class=\"muted\">" + esc(x.etapa) + ":</span> " + fmt(x.t) + "</li>").join("") + "</ul></div>" : '<div class="res-blk okb"><h3>Nenhum item crítico faltou</h3></div>') +
      (negs.length ? '<div class="res-blk crit"><h3>Condutas a evitar que apareceram na sua resposta</h3><ul>' + negs.map((x) => "<li>" + fmt(x) + "</li>").join("") + "</ul></div>" : "") +
      '<div class="res-blk"><h3>Resumo do caso</h3><p>' + fmt(c.resumo) + "</p></div>" +
      (c.alertas && c.alertas.length ? '<div class="res-blk alertas"><h3>' + ICON.alert + "Atenção: anotações × diretrizes</h3><ul>" + c.alertas.map((a) => "<li>" + fmt(a) + "</li>").join("") + "</ul></div>" : "") +
      '<div class="res-actions"><button type="button" class="btn" data-act="reiniciar">Refazer este caso</button><a class="btn primary" href="#/caso/' + prox.id + '">Próximo: Caso ' + prox.id + " " + ICON.arrow + '</a><a class="btn ghost" href="#/">Todos os casos</a></div>' +
      "</section>";
  }

  function prontuarioHTML(c) {
    const blocos = [];
    blocos.push('<div class="pr-blk"><h4>Cenário</h4><p>' + fmt(c.cenario) + "</p>" + (S.iniciado ? '<p class="muted">' + fmt(c.impressao) + "</p>" : "") + "</div>");
    c.etapas.forEach((et, i) => {
      if (et.tipo === "arguicao" || !S.enviado[i]) return;
      const auto = S.auto[i] || {};
      const itens = et.itens.filter((it, j) => it.r && !it.neg && (S.modo === "estudo" || S.fim || auto[j]));
      if (!itens.length && !et.dados) return;
      blocos.push('<div class="pr-blk" style="--c: var(' + TIPOS[et.tipo].cor + ')"><h4>' + esc(nomeEtapa(et)) + "</h4><ul>" +
        itens.map((it) => '<li><span class="pr-t">' + esc(rotuloCurto(it.t)) + "</span>" + respHTML(it.r) + "</li>").join("") +
        (et.dados ? "<li>" + respHTML(et.dados) + "</li>" : "") + "</ul></div>");
    });
    const vazio = blocos.length === 1 ? '<p class="muted sm">Os dados que você obtiver (respostas, sinais vitais, exames) vão aparecer aqui.</p>' : "";
    return blocos.join("") + vazio;
  }

  function renderCaso() {
    stopMic();
    const c = C;
    const n = c.etapas.length;
    const modoTxt = S.modo === "prova" ? "Modo prova" : "Modo estudo";
    const bar = '<div class="case-bar">' +
      '<a class="back" href="#/">' + ICON.back + "<span>Casos</span></a>" +
      '<div class="case-title"><b>Caso ' + c.id + '</b><span class="chip">' + esc(c.local) + '</span><span class="chip">' + esc(c.area) + '</span><span class="chip mode ' + S.modo + '">' + modoTxt + "</span></div>" +
      '<div class="case-tools"><span id="timer" class="timer">' + ICON.clock + "<span></span></span>" +
      (S.iniciado ? '<button type="button" class="btn ghost sm" data-act="reiniciar">Recomeçar</button>' : "") + "</div></div>";

    let fluxo = "";
    if (S.fim) {
      fluxo += resultadoHTML(c) + '<h3 class="corr-h">Correção detalhada</h3>' + triagemHTML(c);
      for (let i = 0; i < n; i++) fluxo += etapaHTML(c, i);
    } else {
      fluxo += triagemHTML(c);
      if (S.triagem !== null) for (let i = 0; i <= Math.min(S.atual, n - 1); i++) fluxo += etapaHTML(c, i);
    }

    app.innerHTML = bar + stepperHTML(c) +
      '<div class="case-layout">' +
        '<div class="case-main">' + cenarioHTML(c) + fluxo + "</div>" +
        '<aside class="case-side"><details class="pront" id="pront"' + (window.innerWidth >= 1024 ? " open" : "") + '><summary>Prontuário <span class="muted sm">dados obtidos</span></summary><div class="pront-body">' + prontuarioHTML(c) + "</div></details></aside>" +
      "</div>";
    updateTimer();
  }

  function rolarPara(id, foco) {
    const el = document.getElementById(id);
    if (!el) return;
    const d = el.querySelector("details");
    if (d) d.open = true;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (foco && finePointer()) {
      const ta = el.querySelector("textarea");
      if (ta) setTimeout(() => ta.focus({ preventScroll: true }), 350);
    }
  }

  function enviar(i) {
    const et = C.etapas[i];
    const txt = (S.textos[i] || "").trim();
    if (!txt) { toast("Escreva ou dite sua resposta antes de enviar."); return; }
    const tn = normResposta(txt);
    const auto = S.auto[i] || {};
    const checks = S.checks[i] || {};
    let novos = 0;
    et.itens.forEach((it, j) => {
      if (casa(tn, it) && !auto[j]) { auto[j] = true; checks[j] = true; novos++; }
    });
    S.auto[i] = auto;
    S.checks[i] = checks;
    const reenvio = !!S.enviado[i];
    S.enviado[i] = true;
    save();
    renderCaso();
    if (reenvio) toast(novos ? novos + (novos === 1 ? " novo item identificado." : " novos itens identificados.") : "Nenhum item novo identificado.");
    const fb = document.querySelector("#etapa-" + i + " .feedback");
    if (fb) fb.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function proxima(i) {
    const n = C.etapas.length;
    if (i + 1 >= n) {
      S.atual = n;
      S.fim = true;
      stopTimer();
      S.decorrido = Math.max(S.decorrido, 0);
      save();
      registrarHistorico();
      renderCaso();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    S.atual = i + 1;
    save();
    renderCaso();
    rolarPara("etapa-" + (i + 1), true);
  }

  function atualizarPlacar() {
    document.querySelectorAll("[data-score]").forEach((el) => {
      const i = Number(el.dataset.score);
      el.textContent = scoreTxt(pontosEtapa(C.etapas[i], i));
    });
    const r = document.getElementById("resultado");
    if (r) {
      const tmp = document.createElement("div");
      tmp.innerHTML = resultadoHTML(C);
      r.replaceWith(tmp.firstChild);
    }
  }

  // ---------- views: roteiros ----------
  function viewRoteiros() {
    C = null; S = null;
    const toc = ROTEIROS.map((r) => '<li><a href="#/roteiros/' + r.id + '" data-rot="' + r.id + '">' + esc(r.titulo) + "</a></li>").join("");
    const secs = ROTEIROS.map((r) => '<section class="card rot" id="rot-' + r.id + '"><h2>' + esc(r.titulo) + "</h2>" + r.html + "</section>").join("");
    app.innerHTML = '<section class="page-head"><p class="eyebrow">Material de apoio</p><h1>Roteiros de estudo</h1><p class="lead">Resumos dos protocolos usados nos casos. As perguntas de cada roteiro também estão na aba Perguntas.</p></section>' +
      '<div class="rot-layout"><nav class="rot-toc" aria-label="Roteiros"><ul>' + toc + '</ul></nav><div class="rot-content">' + secs + "</div></div>";
    montarGaso();
  }
  function scrollToRoteiro(id) {
    document.querySelectorAll(".rot-toc a").forEach((a) => a.classList.toggle("active", a.dataset.rot === id));
    if (!id) { window.scrollTo(0, 0); return; }
    const el = document.getElementById("rot-" + id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------- interpretador de gasometria ----------
  function montarGaso() {
    const box = document.querySelector('[data-widget="gaso"]');
    if (!box) return;
    const ex = [
      { n: "Caso 1", v: [7.1, 38, 16] }, { n: "Caso 5", v: [7.25, 55, 20] },
      { n: "Caso 9", v: [7.29, 30, 14] }, { n: "Caso 11", v: [7.35, 45, 22] }
    ];
    const campo = (id, label, step, ph) => '<label class="g-f"><span>' + label + '</span><input type="number" inputmode="decimal" step="' + step + '" id="g-' + id + '" placeholder="' + ph + '"></label>';
    box.className = "gaso card-inset";
    box.innerHTML = '<div class="gaso-h"><b>Interpretador de gasometria</b><span class="muted sm">Treine: interprete primeiro, depois confira.</span></div>' +
      '<div class="g-grid">' + campo("ph", "pH", "0.01", "7,40") + campo("pco2", "PaCO₂ (mmHg)", "1", "40") + campo("hco3", "HCO₃⁻ (mEq/L)", "1", "24") +
      campo("na", "Na⁺ (opcional)", "1", "140") + campo("cl", "Cl⁻ (opcional)", "1", "104") + campo("alb", "Albumina (opcional)", "0.1", "4,0") + "</div>" +
      '<div class="g-ex"><span class="muted sm">Exemplos:</span>' + ex.map((e, k) => '<button type="button" class="btn ghost sm" data-act="gaso-ex" data-k="' + k + '">' + e.n + "</button>").join("") + "</div>" +
      '<ol class="g-out" id="g-out"><li class="muted">Preencha pH, PaCO₂ e HCO₃⁻.</li></ol>';
    box.dataset.ex = JSON.stringify(ex.map((e) => e.v));
  }
  function lerNum(id) {
    const el = document.getElementById("g-" + id);
    if (!el || el.value === "") return null;
    const v = parseFloat(String(el.value).replace(",", "."));
    return isFinite(v) ? v : null;
  }
  function interpretarGaso() {
    const out = document.getElementById("g-out");
    if (!out) return;
    const ph = lerNum("ph"), pco2 = lerNum("pco2"), hco3 = lerNum("hco3");
    const na = lerNum("na"), cl = lerNum("cl"), alb = lerNum("alb");
    if (ph == null || pco2 == null || hco3 == null) { out.innerHTML = '<li class="muted">Preencha pH, PaCO₂ e HCO₃⁻.</li>'; return; }
    const r = (x) => fmtNum(x);
    const passos = [];
    let estado;
    if (ph < 7.35) estado = "acidemia"; else if (ph > 7.45) estado = "alcalemia"; else estado = "normal";
    passos.push("<b>pH " + ph.toFixed(2).replace(".", ",") + "</b> → " + (estado === "normal" ? "dentro da faixa (7,35–7,45)" : "<b>" + estado + "</b>") + ".");
    let prim = null;
    if (estado === "acidemia") {
      if (hco3 < 22 && pco2 > 45) prim = "misto-acid";
      else if (hco3 < 22) prim = "acid-met";
      else if (pco2 > 45) prim = "acid-resp";
    } else if (estado === "alcalemia") {
      if (hco3 > 26 && pco2 < 35) prim = "misto-alc";
      else if (hco3 > 26) prim = "alc-met";
      else if (pco2 < 35) prim = "alc-resp";
    } else {
      if (pco2 > 45 && hco3 > 26) prim = "normal-ar-am";
      else if (pco2 < 35 && hco3 < 22) prim = "normal-al-ac";
    }
    const nomes = {
      "acid-met": "acidose metabólica (HCO₃⁻ ↓)", "acid-resp": "acidose respiratória (PaCO₂ ↑)",
      "alc-met": "alcalose metabólica (HCO₃⁻ ↑)", "alc-resp": "alcalose respiratória (PaCO₂ ↓)",
      "misto-acid": "acidose mista: metabólica (HCO₃⁻ ↓) + respiratória (PaCO₂ ↑)",
      "misto-alc": "alcalose mista: metabólica (HCO₃⁻ ↑) + respiratória (PaCO₂ ↓)",
      "normal-ar-am": "pH normal com PaCO₂ ↑ e HCO₃⁻ ↑: acidose respiratória + alcalose metabólica (ou compensação crônica)",
      "normal-al-ac": "pH normal com PaCO₂ ↓ e HCO₃⁻ ↓: alcalose respiratória + acidose metabólica (ou compensação crônica)"
    };
    if (prim) passos.push("Distúrbio primário: <b>" + nomes[prim] + "</b>.");
    else if (estado !== "normal") passos.push("Os valores não explicam o pH — confira se foram digitados corretamente.");
    else passos.push("PaCO₂ e HCO₃⁻ normais → gasometria sem distúrbio ácido-base evidente.");

    if (prim === "acid-met") {
      const e = 1.5 * hco3 + 8;
      let s = "Compensação (Winter): PaCO₂ esperada = 1,5 × " + r(hco3) + " + 8 ± 2 = <b>" + r(e - 2) + " a " + r(e + 2) + " mmHg</b>. ";
      if (pco2 > e + 2) s += "PaCO₂ " + r(pco2) + " está <b>acima</b> → acidose respiratória associada (distúrbio misto).";
      else if (pco2 < e - 2) s += "PaCO₂ " + r(pco2) + " está <b>abaixo</b> → alcalose respiratória associada.";
      else s += "PaCO₂ " + r(pco2) + " dentro do esperado → <b>compensação adequada</b>.";
      passos.push(s);
    } else if (prim === "alc-met") {
      const e = 0.7 * hco3 + 21;
      let s = "Compensação: PaCO₂ esperada = 0,7 × " + r(hco3) + " + 21 ± 2 = <b>" + r(e - 2) + " a " + r(e + 2) + " mmHg</b>. ";
      if (pco2 > e + 2) s += "Acima → acidose respiratória associada.";
      else if (pco2 < e - 2) s += "Abaixo → alcalose respiratória associada.";
      else s += "Dentro do esperado → compensação adequada.";
      passos.push(s);
    } else if (prim === "acid-resp") {
      const ag = 24 + 0.1 * (pco2 - 40), cr = 24 + 0.35 * (pco2 - 40);
      let s = "HCO₃⁻ esperado: aguda ≈ <b>" + r(ag) + "</b>, crônica ≈ <b>" + r(cr) + "</b> mEq/L. ";
      if (hco3 < ag - 2) s += "HCO₃⁻ " + r(hco3) + " abaixo do esperado → acidose metabólica associada.";
      else if (hco3 > cr + 2) s += "HCO₃⁻ " + r(hco3) + " acima do esperado → alcalose metabólica associada.";
      else s += "Compatível com acidose respiratória " + (hco3 <= (ag + cr) / 2 ? "aguda" : "crônica") + ".";
      passos.push(s);
    } else if (prim === "alc-resp") {
      const ag = 24 - 0.2 * (40 - pco2), cr = 24 - 0.45 * (40 - pco2);
      let s = "HCO₃⁻ esperado: aguda ≈ <b>" + r(ag) + "</b>, crônica ≈ <b>" + r(cr) + "</b> mEq/L. ";
      if (hco3 > ag + 2) s += "HCO₃⁻ " + r(hco3) + " acima do esperado → alcalose metabólica associada.";
      else if (hco3 < cr - 2) s += "HCO₃⁻ " + r(hco3) + " abaixo do esperado → acidose metabólica associada.";
      else s += "Compatível com alcalose respiratória " + (hco3 >= (ag + cr) / 2 ? "aguda" : "crônica") + ".";
      passos.push(s);
    } else if (prim === "misto-acid") {
      passos.push("Os dois componentes empurram o pH para baixo: não há compensação, há <b>dois distúrbios</b>. Ex.: pneumonia (retém CO₂) + hipoperfusão (lactato).");
    }

    if (na != null && cl != null && (prim === "acid-met" || prim === "misto-acid" || hco3 < 22)) {
      let agap = na - (cl + hco3);
      let s = "Ânion gap = " + r(na) + " − (" + r(cl) + " + " + r(hco3) + ") = <b>" + r(agap) + "</b>";
      if (alb != null) { const corr = agap + 2.5 * (4 - alb); s += "; corrigido pela albumina = <b>" + r(corr) + "</b>"; agap = corr; }
      s += agap > 12 ? " → <b>AG aumentado</b> (lactato, cetoacidose, uremia, intoxicações)." : " → AG normal (hiperclorêmica: diarreia, acidose tubular, excesso de SF).";
      if (agap > 12 && hco3 < 24) {
        const dd = (agap - 12) / (24 - hco3);
        s += " Delta/delta = " + r(dd) + (dd < 1 ? " → acidose hiperclorêmica associada." : dd > 2 ? " → alcalose metabólica associada." : " → AG aumentado “puro”.");
      }
      passos.push(s);
    }
    out.innerHTML = passos.map((p) => "<li>" + p + "</li>").join("");
  }

  // ---------- views: perguntas ----------
  const POOL = [];
  CASOS.forEach((c) => c.etapas.forEach((et) => {
    if (et.tipo === "arguicao") et.perguntas.forEach((q, k) => POOL.push({ id: "c" + c.id + "-" + k, grupo: "c:" + c.id, origem: "Caso " + c.id, p: q.p, r: q.r }));
  }));
  ROTEIROS.forEach((r) => (r.perguntas || []).forEach((q, k) => POOL.push({ id: "r-" + r.id + "-" + k, grupo: "r:" + r.id, origem: r.titulo, p: q.p, r: q.r })));
  const PQ = { filtro: "todas", ordem: POOL.map((q) => q.id), idx: 0, revelado: false, textos: {} };

  function listaPQ() {
    const notas = store.get("perg", {});
    const porId = {};
    POOL.forEach((q) => { porId[q.id] = q; });
    return PQ.ordem.map((id) => porId[id]).filter((q) => {
      if (!q) return false;
      if (PQ.filtro === "todas") return true;
      if (PQ.filtro === "nao") return notas[q.id] === undefined;
      if (PQ.filtro === "rever") return notas[q.id] !== undefined && notas[q.id] < 1;
      return q.grupo === PQ.filtro;
    });
  }
  function viewPerguntas() {
    C = null; S = null;
    const notas = store.get("perg", {});
    const vals = POOL.map((q) => notas[q.id]).filter((v) => v !== undefined);
    const ok = vals.filter((v) => v === 1).length, parc = vals.filter((v) => v === 0.5).length, err = vals.filter((v) => v === 0).length;
    const lista = listaPQ();
    if (PQ.idx >= lista.length) PQ.idx = Math.max(0, lista.length - 1);
    const q = lista[PQ.idx];
    const opt = (v, l) => '<option value="' + v + '"' + (PQ.filtro === v ? " selected" : "") + ">" + esc(l) + "</option>";
    const filtros = opt("todas", "Todas (" + POOL.length + ")") + opt("nao", "Não respondidas") + opt("rever", "Para revisar (errei/parcial)") +
      '<optgroup label="Casos">' + CASOS.filter((c) => POOL.some((x) => x.grupo === "c:" + c.id)).map((c) => opt("c:" + c.id, "Caso " + c.id)).join("") + "</optgroup>" +
      '<optgroup label="Roteiros">' + ROTEIROS.filter((r) => (r.perguntas || []).length).map((r) => opt("r:" + r.id, r.titulo)).join("") + "</optgroup>";

    let card;
    if (!q) {
      card = '<section class="card pq-card"><p class="empty">Nenhuma pergunta neste filtro.</p></section>';
    } else {
      const nota = notas[q.id];
      card = '<section class="card pq-card">' +
        '<div class="pq-meta"><span class="chip">' + esc(q.origem) + '</span><span class="muted sm">' + (PQ.idx + 1) + " de " + lista.length + "</span>" +
        (nota !== undefined ? '<span class="pill ' + (nota === 1 ? "ok" : nota === 0.5 ? "warn" : "bad") + '">' + (nota === 1 ? "acertou" : nota === 0.5 ? "parcial" : "errou") + " da última vez</span>" : "") + "</div>" +
        '<p class="pq-p">' + fmt(q.p) + "</p>" +
        '<div class="answer"><label class="sr-only" for="pq-ta">Sua resposta</label><textarea id="pq-ta" data-pq-txt="' + q.id + '" rows="5" placeholder="Responda como responderia ao avaliador…">' + esc(PQ.textos[q.id] || "") + "</textarea>" +
        '<div class="answer-bar">' + micBtn("pq-ta") + (PQ.revelado ? "" : '<button type="button" class="btn primary" data-act="pq-revelar">Ver resposta esperada</button>') + "</div></div>" +
        (PQ.revelado
          ? '<div class="arg-r"><div class="ensino-h">Resposta esperada</div><div>' + fmt(q.r) + "</div></div>" +
            '<div class="grade" role="group" aria-label="Autoavaliação">' + [[1, "Acertei"], [0.5, "Parcial"], [0, "Errei"]].map((p) =>
              '<button type="button" class="gbtn g' + String(p[0]).replace(".", "") + (nota === p[0] ? " sel" : "") + '" data-act="pq-nota" data-v="' + p[0] + '">' + p[1] + "</button>").join("") + "</div>"
          : "") +
        '<div class="pq-nav"><button type="button" class="btn ghost" data-act="pq-ant"' + (PQ.idx === 0 ? " disabled" : "") + ">" + ICON.back + "<span>Anterior</span></button>" +
        '<button type="button" class="btn" data-act="pq-prox"' + (PQ.idx >= lista.length - 1 ? " disabled" : "") + "><span>Próxima</span>" + ICON.arrow + "</button></div>" +
        "</section>";
    }
    app.innerHTML = '<section class="page-head"><p class="eyebrow">Arguição</p><h1>Perguntas do avaliador</h1>' +
      '<p class="lead">Perguntas discursivas dos casos e dos roteiros. Responda em voz alta ou por escrito e compare com a resposta esperada.</p></section>' +
      '<div class="pq-tools"><label class="sr-only" for="pq-filtro">Filtro</label><select id="pq-filtro" data-pq="filtro">' + filtros + "</select>" +
      '<button type="button" class="btn ghost sm" data-act="pq-embaralhar">' + ICON.shuffle + "<span>Embaralhar</span></button>" +
      '<span class="pq-stats"><span class="pill ok">✓ ' + ok + '</span><span class="pill warn">~ ' + parc + '</span><span class="pill bad">✗ ' + err + '</span><span class="muted sm">de ' + POOL.length + "</span></span></div>" +
      card;
  }

  // ---------- eventos ----------
  let confirmarReinicio = 0;
  app.addEventListener("click", (e) => {
    const nota = e.target.closest("[data-nota]");
    if (nota && S) {
      const parts = nota.dataset.nota.split(":");
      const i = Number(parts[0]), k = Number(parts[1]), v = Number(parts[2]);
      S.argNota[i] = S.argNota[i] || {};
      S.argNota[i][k] = v;
      save();
      nota.parentElement.querySelectorAll(".gbtn").forEach((b) => b.classList.toggle("sel", b === nota));
      if (S.fim) { registrarHistorico(); atualizarPlacar(); }
      return;
    }
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const act = el.dataset.act;
    const i = Number(el.dataset.i);
    switch (act) {
      case "modo":
        settings.modo = el.dataset.v; saveSettings(); viewHome(); break;
      case "sortear": {
        const c = CASOS[Math.floor(Math.random() * CASOS.length)];
        location.hash = "#/caso/" + c.id;
        break;
      }
      case "modo-caso":
        S.modo = el.dataset.v; settings.modo = S.modo; saveSettings(); save(); renderCaso(); break;
      case "iniciar":
        S.iniciado = true; S.decorrido = 0; save(); renderCaso(); startTimer(); rolarPara("triagem"); break;
      case "triagem":
        S.triagem = Number(el.dataset.v); save(); renderCaso(); rolarPara("etapa-0", true); break;
      case "enviar":
        enviar(i); break;
      case "proxima":
        proxima(i); break;
      case "corrigir-arg":
        S.argCorrigido[i] = true; save(); renderCaso(); rolarPara("etapa-" + i); break;
      case "mic":
        toggleMic(el); break;
      case "ir":
        rolarPara(el.dataset.alvo); break;
      case "reiniciar": {
        const agora = Date.now();
        if (agora - confirmarReinicio > 3000) {
          confirmarReinicio = agora;
          el.textContent = "Confirmar recomeço?";
          el.classList.add("danger");
          setTimeout(() => { if (el.isConnected) { el.textContent = el.closest(".res-actions") ? "Refazer este caso" : "Recomeçar"; el.classList.remove("danger"); } }, 3000);
          break;
        }
        confirmarReinicio = 0;
        stopTimer();
        S = novaSessao(C);
        save();
        renderCaso();
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      }
      case "gaso-ex": {
        const box = document.querySelector('[data-widget="gaso"]');
        const v = JSON.parse(box.dataset.ex)[Number(el.dataset.k)];
        ["ph", "pco2", "hco3"].forEach((f, k) => { document.getElementById("g-" + f).value = v[k]; });
        ["na", "cl", "alb"].forEach((f) => { document.getElementById("g-" + f).value = ""; });
        interpretarGaso();
        break;
      }
      case "pq-revelar":
        PQ.revelado = true; viewPerguntas(); break;
      case "pq-nota": {
        const lista = listaPQ();
        const q = lista[PQ.idx];
        if (!q) break;
        const notas = store.get("perg", {});
        notas[q.id] = Number(el.dataset.v);
        store.set("perg", notas);
        if (PQ.filtro === "nao" || PQ.filtro === "rever") { PQ.revelado = false; }
        viewPerguntas();
        break;
      }
      case "pq-ant":
        stopMic(); PQ.idx = Math.max(0, PQ.idx - 1); PQ.revelado = false; viewPerguntas(); break;
      case "pq-prox":
        stopMic(); PQ.idx += 1; PQ.revelado = false; viewPerguntas(); break;
      case "pq-embaralhar": {
        const a = PQ.ordem.slice();
        for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); const t = a[k]; a[k] = a[j]; a[j] = t; }
        PQ.ordem = a; PQ.idx = 0; PQ.revelado = false; viewPerguntas();
        break;
      }
    }
  });

  let saveTimer = null;
  const saveDebounced = () => { clearTimeout(saveTimer); saveTimer = setTimeout(save, 400); };
  app.addEventListener("input", (e) => {
    const t = e.target;
    if (t.dataset.txt !== undefined && S) { S.textos[Number(t.dataset.txt)] = t.value; saveDebounced(); return; }
    if (t.dataset.arg !== undefined && S) {
      const p = t.dataset.arg.split(":");
      S.arg[p[0]] = S.arg[p[0]] || {};
      S.arg[p[0]][p[1]] = t.value;
      saveDebounced();
      return;
    }
    if (t.dataset.pqTxt !== undefined) { PQ.textos[t.dataset.pqTxt] = t.value; return; }
    if (t.closest && t.closest(".gaso")) interpretarGaso();
  });

  app.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.ck && S) {
      const p = t.dataset.ck.split(":");
      const i = Number(p[0]), j = Number(p[1]);
      S.checks[i] = S.checks[i] || {};
      S.checks[i][j] = t.checked;
      save();
      const li = t.closest("li.ck");
      if (li) {
        li.classList.toggle("on", t.checked);
        const it = C.etapas[i].itens[j];
        li.classList.toggle("miss", !!(it.c && !t.checked && !it.neg));
      }
      if (S.fim) registrarHistorico();
      atualizarPlacar();
      return;
    }
    if (t.dataset.setting === "mostrarDx") { settings.mostrarDx = t.checked; saveSettings(); viewHome(); return; }
    if (t.dataset.setting === "tempo") { settings.tempo = Number(t.value); saveSettings(); return; }
    if (t.dataset.pq === "filtro") { PQ.filtro = t.value; PQ.idx = 0; PQ.revelado = false; viewPerguntas(); }
  });

  app.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && e.target.dataset && e.target.dataset.txt !== undefined) {
      e.preventDefault();
      enviar(Number(e.target.dataset.txt));
    }
  });

  // ---------- tema ----------
  const temaBtn = document.getElementById("tema");
  function aplicarTema() {
    const root = document.documentElement;
    if (settings.tema === "claro") root.dataset.theme = "light";
    else if (settings.tema === "escuro") root.dataset.theme = "dark";
    else delete root.dataset.theme;
    if (temaBtn) {
      const rot = { auto: "Tema: automático", claro: "Tema: claro", escuro: "Tema: escuro" }[settings.tema];
      temaBtn.setAttribute("aria-label", rot);
      temaBtn.title = rot;
      temaBtn.dataset.tema = settings.tema;
    }
  }
  if (temaBtn) temaBtn.addEventListener("click", () => {
    settings.tema = { auto: "claro", claro: "escuro", escuro: "auto" }[settings.tema] || "auto";
    saveSettings();
    aplicarTema();
  });
  aplicarTema();

  // ---------- roteamento ----------
  let view = null;
  function route() {
    stopTimer();
    stopMic();
    const parts = (location.hash || "#/").slice(1).split("/").filter(Boolean);
    const p0 = parts[0] || "", p1 = parts[1];
    const navKey = p0 === "caso" ? "" : p0;
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.nav === navKey));
    if (p0 === "caso" && p1) { view = "caso"; viewCaso(Number(p1)); return; }
    if (p0 === "roteiros") {
      const ja = view === "roteiros";
      view = "roteiros";
      if (!ja) { viewRoteiros(); window.scrollTo(0, 0); }
      scrollToRoteiro(p1);
      return;
    }
    if (p0 === "perguntas") { view = "perguntas"; viewPerguntas(); window.scrollTo(0, 0); return; }
    view = "home";
    viewHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  window.addEventListener("pagehide", () => { stopTimer(); save(); });
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") save(); });
  route();
})();
