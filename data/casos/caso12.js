CASOS.push({
  id: 12,
  fonte: "Duas Colunas (10).pdf",
  local: "Pronto-atendimento",
  area: "Clínica / Gastro",
  chamada: "Homem de 54 anos com hematêmese volumosa há 30 minutos",
  diagnostico: "Hemorragia digestiva alta varicosa (varizes esofágicas) por hipertensão portal — cirrose alcoólica",
  temas: ["Hemorragia digestiva alta", "Varizes esofágicas", "Cirrose", "Via aérea"],
  cenarioOriginal: true,
  cenario: "João, 54 anos, é trazido ao Pronto-Atendimento pelo sobrinho, apresentando hematêmese volumosa há 30 minutos.",
  impressao: "Paciente <b>inconsciente</b> na maca, {{com sangue na boca e nas roupas}}.",
  triagem: {
    emergencia: true,
    explicacao: "Hematêmese volumosa em paciente inconsciente: risco imediato de broncoaspiração e choque. Conduta das anotações: <b>ABCDE</b> — e o “A” aqui é crítico (proteger a via aérea)."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "ABCDE",
      enunciado: "Conduza a avaliação inicial e as medidas imediatas.",
      itens: [
        { t: "Monitorização", k: KW.monitor, r: "{{PA 78/44 mmHg · FC 128 bpm · FR 26 irpm · SpO₂ 90% · T 36,0 °C}}", c: 1 },
        { t: "A — Via aérea em risco (sangue + rebaixamento): aspirar, lateralizar e intubar para proteção (IOT)", k: ["aspir", "intub", " iot", "via aerea", "proteger", "protej", "protecao", "lateraliz", "decubito lateral"], r: "{{Sangue na orofaringe, ruído gorgolejante. Após aspiração e IOT, via aérea protegida.}}", c: 1 },
        { t: "B — Oxigênio e ausculta pulmonar", k: KW.oxigenio.concat(["auscult", "murmurio", "respira"]), r: "{{Roncos difusos; SpO₂ 96% após IOT e O₂.}}" },
        { t: "C — Dois acessos venosos calibrosos + coleta (tipagem/prova cruzada)", k: KW.acesso, r: "Dois acessos calibrosos; {{amostras coletadas}}.", c: 1 },
        { t: "Reposição cautelosa (cristaloide aquecido em pequenos volumes) e hemocomponentes", k: KW.cristaloide.concat(KW.transfusao), r: "{{Após 500 mL de RL aquecido e início de concentrado de hemácias: PA 90/56.}}", c: 1 },
        { t: "D — Glasgow, pupilas e glicemia", k: KW.glasgow.concat(KW.glicemia), r: "{{Glasgow 8 (AO 2, RV 2, RM 4) antes da IOT; pupilas isocóricas; glicemia 78 mg/dL.}}", c: 1 },
        { t: "E — Exposição: estigmas de hepatopatia, temperatura", k: KW.exposicao.concat(["estigma", "ictericia", "ascite", "temperatura"]), r: "{{Icterícia, ascite, circulação colateral abdominal (cabeça de medusa), aranhas vasculares, eritema palmar e ginecomastia.}}" }
      ],
      ensino: "Glasgow ≤ 8 + hematêmese volumosa = <b>proteger a via aérea (IOT)</b> antes da endoscopia. Anotações: “Choque = inicia conduta → 2 acessos venosos: soro aquecido; sangue + tipagem sanguínea”."
    },
    {
      tipo: "anamnese",
      enunciado: "O paciente está inconsciente: colha a história com o sobrinho. O que você pergunta?",
      itens: [
        { t: "Alergias", k: KW.alergias, r: "{{Nenhuma conhecida.}}" },
        { t: "Doenças prévias (fígado, icterícia, “barriga d’água”)", k: KW.comorbidades.concat(["figado", "cirrose", "hepat", "amarelo", "ictericia", "barriga"]), r: "{{Dizem que ele tem “problema no fígado”; já ficou amarelo e com a barriga inchada.}}", c: 1 },
        { t: "Bebe? Quanto e há quanto tempo?", k: ["bebe", "bebida", "alcool", "etil", "cachaca", "cerveja"], r: "Bebe <b>muito</b> — {{cachaça todos os dias há cerca de 30 anos}}.", c: 1 },
        { t: "Fuma?", k: ["fuma", "fumante", "tabag", "cigarro"], r: "{{Fuma 1 maço por dia.}}" },
        { t: "Primeira vez que acontece?", k: KW.previo, r: "{{Primeira vez que vomita sangue.}}" },
        { t: "Medicações (AINEs, anticoagulantes, betabloqueador)", k: KW.medicacoes.concat(["anti inflam", "diclofenaco", "ibuprofeno", "anticoag", "propranolol", "betabloq"]), r: "{{Não faz acompanhamento; às vezes toma diclofenaco para dor.}}" },
        { t: "Sintomas prévios (fezes pretas, sonolência, confusão, aumento do abdome)", k: ["fezes", "melena", "sonolen", "confus", "comportamento", "aumento da barriga", "inchaco"], r: "{{Há 2 dias com fezes pretas e mais sonolento.}}" }
      ],
      ensino: "Anotações: “inconsciente; alergia? doenças prévias? bebe ou fuma? → muito; primeira vez que acontece?”."
    },
    {
      tipo: "exame",
      titulo: "Exame físico",
      enunciado: "Descreva o exame físico (ectoscopia e sinais de hepatopatia).",
      itens: [
        { t: "Ectoscopia: coloração, icterícia, perfusão", k: ["ectoscop", "inspecao", "estado geral", "corad", "palidez", "ictericia", "ictero", "perfus", "enchimento capilar"], r: "{{Hipocorado 3+/4+, ictérico 2+/4+, TEC 4 s.}}", c: 1 },
        { t: "Estigmas de hepatopatia crônica (aranhas vasculares, eritema palmar, ginecomastia, circulação colateral)", k: ["estigma", "aranha", "telangiect", "eritema palmar", "ginecomastia", "circulacao colateral", "cabeca de medusa", "hepatopat"], r: "{{Aranhas vasculares em tórax, eritema palmar, ginecomastia, circulação colateral abdominal.}}", c: 1 },
        { t: "Abdome: ascite (macicez móvel, piparote), esplenomegalia", k: ["abdom", "ascite", "macicez movel", "piparote", "baco", "esplenomeg", "figado"], r: "{{Abdome globoso, macicez móvel (ascite moderada), baço palpável a 3 cm do rebordo costal esquerdo.}}" },
        { t: "Toque retal (melena)", k: ["toque retal", "toque", "retal"], r: "{{Melena na luva.}}", x: 1 },
        { t: "Neurológico (Glasgow, pupilas)", k: KW.glasgow, r: "{{Glasgow 8 antes da IOT; pupilas isocóricas e fotorreagentes.}}" }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita?",
      itens: [
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemoglobina", "6,5 g/dL", "13,0 – 17,0", "L"],
          ["Hematócrito", "19,0%", "33,0 – 50,0", "L"],
          ["Plaquetas", "90 mil/mm³", "150 – 400 mil", "L"]
        ] }, c: 1 },
        { t: "Função hepática e coagulação (albumina, bilirrubinas, transaminases, INR)", k: ["funcao hepatica", "hepatograma", "albumina", "bilirrub", "tgo", "tgp", "transaminase", " ast", " alt", " inr", "coagulograma", " tp "], r: { titulo: "Função hepática", tab: [
          ["Albumina", "{{2,6 g/dL}}", "3,5 – 5,0", "L"],
          ["Bilirrubina total", "{{3,4 mg/dL}}", "até 1,2", "H"],
          ["TGO (AST)", "{{112 U/L}}", "< 40", "H"],
          ["TGP (ALT)", "{{58 U/L}}", "< 41", "H"],
          ["INR", "{{1,9}}", "< 1,2", "H"]
        ], nota: "Função hepática alterada; TGO > TGP (padrão alcoólico)." }, c: 1 },
        { t: "Lactato", k: ["lactato", "gasometria"], r: "{{Lactato 4,2 mmol/L.}}" },
        { t: "Tipagem sanguínea e prova cruzada", k: KW.tipagem, r: "{{O+.}}", c: 1 },
        { t: "Função renal e eletrólitos", k: KW.funcaoRenal, r: "{{Ureia 92 mg/dL (sangue digerido) · creatinina 1,3 · Na 129 · K 4,6.}}" },
        { t: "Endoscopia digestiva alta (em até 12 h, após estabilização)", k: ["endoscop", " eda"], r: "{{Varizes esofágicas de grosso calibre com sangramento ativo em jato → ligadura elástica com sucesso.}}", c: 1 }
      ]
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o diagnóstico? Explique a fisiopatologia.",
      itens: [
        { t: "Hemorragia digestiva alta varicosa (ruptura de varizes esofágicas)", k: ["variz", "varicos"], c: 1 },
        { t: "Hipertensão portal por cirrose hepática (provável etiologia alcoólica)", k: ["cirrose", "hipertensao portal", "hepatopat", "fibrose", "alcool"], c: 1 },
        { t: "Choque hemorrágico/hipovolêmico", k: ["choque", "hipovolem", "hemorrag"], c: 1 },
        { t: "Rebaixamento de consciência: choque ± encefalopatia hepática", k: ["encefalopat", "rebaixamento", "glasgow"] },
        { t: "Gravidade da cirrose (Child-Pugh C)", k: ["child"], x: 1, o: 1 },
        { t: "Diferenciais: úlcera péptica (AINE), Mallory-Weiss, gastropatia da hipertensão portal", k: ["ulcera", "mallory", "gastropatia", "diferenc"] }
      ],
      ensino: "Anotações: “doença varicosa = fígado (cirrose): fibrosado → altera a pressão dos vasos → varizes, no esôfago e no fundo gástrico”; “sangramento varicoso é mais grave que o não varicoso”."
    },
    {
      tipo: "conduta",
      enunciado: "Descreva a conduta completa (com doses quando souber).",
      itens: [
        { t: "Proteção da via aérea (IOT) antes da endoscopia", k: ["intub", " iot", "via aerea", "proteger", "protej", "protecao"], c: 1 },
        { t: "Dois acessos calibrosos, tipagem e reserva de sangue", k: KW.acesso.concat(KW.tipagem), c: 1 },
        { t: "Reposição cautelosa + transfusão restritiva (alvo Hb 7–8 g/dL); evitar hiperexpansão", k: KW.transfusao.concat(["restritiv", "hb 7", "alvo"]), c: 1 },
        { t: "Droga vasoativa esplâncnica precoce: terlipressina 2 mg EV 4/4 h (ou octreotida 50 mcg em bolus + 50 mcg/h; somatostatina)", k: ["terlipress", "octreot", "somatostat", "vasopressina", "vasoativa"], c: 1 },
        { t: "Antibiótico profilático: ceftriaxona 1 g EV/dia (até 7 dias)", k: ["ceftriax", "antibiot", " atb", "profilaxia", "norflox", "ciproflox"], x: 1, c: 1 },
        { t: "Endoscopia digestiva alta em até 12 h com ligadura elástica", k: ["endoscop", " eda", "ligadura"], c: 1 },
        { t: "IBP EV até a endoscopia", k: ["omeprazol", "pantoprazol", " ibp", "inibidor de bomba"], x: 1, o: 1 },
        { t: "Refratário: balão de Sengstaken-Blakemore (ponte) e TIPS", k: ["balao", "sengstaken", "tips"], x: 1, o: 1 },
        { t: "Prevenir/tratar encefalopatia (lactulose)", k: ["lactulose", "encefalopat"], x: 1, o: 1 },
        { t: "Internação em UTI", k: KW.uti }
      ],
      ensino: "Anotações: “choque = inicia conduta → 2 acessos venosos; soro aquecido; sangue + tipagem sanguínea; drogas vasoativas específicas; endoscopia o quanto antes!”."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Por que o sangramento varicoso é mais grave que o não varicoso?", r: "Sangra de veias dilatadas sob <b>alta pressão portal</b>, em paciente com coagulopatia (fígado não produz fatores), plaquetopenia (hiperesplenismo) e baixa reserva — por isso o sangramento é volumoso, recidiva mais e tem maior mortalidade." },
        { p: "Explique a fisiopatologia das varizes esofágicas.", r: "Cirrose → fibrose e nódulos → ↑ resistência ao fluxo portal → <b>hipertensão portal</b> → abertura de colaterais portossistêmicas (esôfago, fundo gástrico, reto, parede abdominal) → varizes que podem romper." },
        { p: "Quais são as drogas vasoativas específicas e suas doses?", r: "<b>Terlipressina</b> 2 mg EV a cada 4 h (reduzir para 1 mg após controle); <b>octreotida</b> 50 mcg em bolus + 50 mcg/h; <b>somatostatina</b> 250 mcg em bolus + 250 mcg/h — por 2 a 5 dias. Reduzem o fluxo esplâncnico e a pressão portal." },
        { p: "Por que dar antibiótico profilático?", r: "Cirróticos com HDA têm alto risco de infecções bacterianas (PBE, bacteremia); a profilaxia (ceftriaxona 1 g/dia) reduz infecção, ressangramento e mortalidade." },
        { p: "Por que não transfundir até Hb 10?", r: "Hiperexpansão aumenta a pressão portal e o ressangramento. A estratégia <b>restritiva</b> (transfundir se Hb < 7, alvo 7–8 g/dL) reduz ressangramento e mortalidade." }
      ]
    }
  ],
  alertas: [
    "Anotação: “soro aquecido”. Na HDA varicosa a reposição deve ser <b>cautelosa</b>: hiperexpansão aumenta a pressão portal e o ressangramento — use transfusão restritiva (alvo Hb 7–8 g/dL).",
    "Paciente inconsciente com hematêmese volumosa: a primeira medida do ABCDE é <b>proteger a via aérea</b> (aspiração + intubação)."
  ],
  resumo: "Etilista com hematêmese volumosa, inconsciente e chocado: IOT, 2 acessos, transfusão restritiva, terlipressina/octreotida, ceftriaxona profilática e EDA com ligadura em até 12 h."
});
