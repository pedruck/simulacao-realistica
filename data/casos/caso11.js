CASOS.push({
  id: 11,
  fonte: "Duas Colunas (9).pdf / (11).pdf",
  local: "Pronto-atendimento",
  area: "Clínica / Gastro",
  chamada: "Homem de 65 anos com fezes escuras, fraqueza e dor abdominal",
  diagnostico: "Hemorragia digestiva baixa por doença diverticular dos cólons (sangramento diverticular)",
  temas: ["Hemorragia digestiva baixa", "HDA x HDB", "Estabilização hemodinâmica"],
  cenarioOriginal: true,
  cenario: "João, 65 anos, comparece ao Pronto-Atendimento com queixas de melena, astenia e dor abdominal.",
  impressao: "{{Paciente pálido, sudoreico, sentado na maca, um pouco sonolento.}}",
  triagem: {
    emergencia: true,
    explicacao: "Sangramento digestivo em idoso pálido e sudoreico: sinais de choque (anotações: “↓PA, hipotenso e taquicárdico → sinais de choque”). Estabilize primeiro (ABCDE + MOV) — “1º estabilização hemodinâmica”."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "Avaliação inicial (ABCDE + MOV)",
      enunciado: "Descreva a avaliação inicial e a estabilização.",
      itens: [
        { t: "Monitorização (PA, FC, SpO₂, FR)", k: KW.monitor, r: "{{PA 92/58 mmHg · FC 112 bpm · FR 22 · SpO₂ 96% · T 36,5 °C}}", c: 1 },
        { t: "A/B — Via aérea, respiração e oxigênio se necessário", k: KW.viaAerea.concat(KW.oxigenio, ["respira", "auscult"]), r: "{{Via aérea pérvia; MV presente, sem ruídos; SpO₂ 96% em ar ambiente.}}" },
        { t: "C — Perfusão (TEC, extremidades, pulsos, coloração)", k: ["circula", "perfus", "enchimento capilar", " tec ", "pulso", "extremidad", "palidez"], r: "{{TEC 3 s, extremidades frias, palidez 3+/4+.}}", c: 1 },
        { t: "Dois acessos venosos calibrosos + coleta (tipagem, prova cruzada, hemograma)", k: KW.acesso, r: "Dois acessos calibrosos; amostras coletadas.", c: 1 },
        { t: "Ringer lactato em bolus cuidadoso (idoso e hipertenso), reavaliando no monitor após ~10 min; sem resposta → acelerar", k: KW.cristaloide, r: "{{Após 500 mL em 10–15 min: PA 104/64, FC 100.}}", c: 1 },
        { t: "D — Consciência e glicemia", k: KW.glasgow.concat(KW.glicemia), r: "{{Glasgow 15, um pouco sonolento; glicemia 128 mg/dL.}}", o: 1 }
      ],
      ensino: "Anotações: “acesso venoso com Ringer lactato lento (idoso e hipertenso); olhar no monitor se respondeu depois de 10 min (não → aumenta velocidade)”."
    },
    {
      tipo: "anamnese",
      enunciado: "Com o paciente mais estável, conduza a anamnese. O que você pergunta?",
      itens: [
        { t: "Quando começou, quantos episódios, volume", k: KW.inicio.concat(["quantas vezes", "episodios", "volume"]), r: "{{Começou ontem; 4 evacuações escuras e amolecidas, a última há 1 h.}}", c: 1 },
        { t: "Aspecto e cheiro das fezes", k: ["cheiro", "odor", " cor ", "aspecto", "como sao as fezes", "fezes"], r: "{{Fezes escuras, “cor de vinho”, com cheiro muito forte.}}" },
        { t: "Diarreia / hábito intestinal", k: ["diarreia", "habito intestinal", "constip", "intestino preso", "evacua"], r: "{{Sem diarreia antes; tem constipação crônica.}}" },
        { t: "Hematêmese, vômitos em borra de café, dor epigástrica (pensar em HDA)", k: ["vomit", "hematemese", "borra de cafe", "epigast", "azia", "queimacao", "estomago"], r: "{{Nega vômitos com sangue ou em borra de café; nega dor epigástrica.}}", c: 1 },
        { t: "Dor abdominal (local e tipo)", k: ["dor"], r: "{{Cólicas difusas leves antes das evacuações.}}" },
        { t: "Episódios anteriores / alguém da família com algo parecido", k: KW.previo.concat(KW.familia), r: "{{Nunca teve; o pai tinha “divertículos”.}}" },
        { t: "Medicações: AINEs, AAS, anticoagulantes", k: KW.medicacoes.concat(["aine", "anti inflam", "ibuprofeno", "diclofenaco", " aas", "aspirina", "anticoag", "varfarina", "clopidogrel"]), r: "{{Usa AAS 100 mg/dia e toma ibuprofeno para dor no joelho.}}", c: 1 },
        { t: "Comorbidades (HAS, DM, doença crônica)", k: KW.comorbidades, r: "{{Hipertenso (losartana) e diabético (metformina).}}" },
        { t: "Hábitos de vida (tabagismo, etilismo, dieta pobre em fibras)", k: KW.habitos.concat(["dieta", "fibra", "aliment", "habitos"]), r: "{{Ex-tabagista; bebe nos fins de semana; dieta pobre em fibras.}}" },
        { t: "Sinais de alarme para neoplasia (perda de peso, alteração do hábito, afinamento das fezes)", k: ["peso", "emagrec", "apetite", "afinamento", "alteracao do habito"], r: "{{Nega perda de peso.}}" },
        { t: "Sintomas de anemia/choque (astenia, tontura, síncope)", k: ["tontura", "desmaio", "sincope", "fraqueza", "astenia", "cansaco"], r: "Astenia; {{tontura ao levantar}}." },
        { t: "Colonoscopia prévia", k: ["colonoscop"], r: "{{Nunca fez.}}", o: 1 },
        { t: "Alergias", k: KW.alergias, r: "{{Nega.}}" }
      ],
      ensino: "Anotações: “quando começou, se tem cheiro, se teve diarreia, se já teve antes, hábitos de vida”. Perfil de risco (anotações): idosos, AINEs, anticoagulantes, tabagismo, doenças crônicas (hipertenso, diabético)."
    },
    {
      tipo: "exame",
      enunciado: "Descreva o exame físico (anotações: ectoscopia, exame do tórax, abdome e extremidades).",
      itens: [
        { t: "Ectoscopia (coloração, hidratação, sudorese)", k: ["ectoscop", "inspecao geral", "estado geral", "corad", "palidez", "hidrata", "sudore", "mucosa"], r: "{{Hipocorado 3+/4+, sudoreico, desidratado +/4+.}}", c: 1 },
        { t: "Abdome na ordem: inspeção → ausculta → percussão → palpação", k: ["abdom", "inspec", "auscult", "percu", "palp"], r: "{{Plano; RHA aumentados; timpânico; flácido, dor leve à palpação profunda em flanco direito; sem massas ou peritonismo.}}", c: 1 },
        { t: "Toque retal", k: ["toque retal", "toque", "retal", "anuscop"], r: "{{Ampola com fezes vinhosas; sem massas; sem hemorroidas sangrantes.}}", x: 1, c: 1 },
        { t: "Exame do tórax (ausculta cardiopulmonar)", k: ["torax", "auscult", "pulmonar", "cardiaca", "bulha"], r: "{{Taquicárdico, ritmo regular; MV presente sem ruídos.}}" },
        { t: "Extremidades (tempo de enchimento capilar)", k: ["extremidad", "enchimento capilar", " tec ", "pulso"], r: "{{TEC 3 s, extremidades frias.}}" },
        { t: "Estigmas de hepatopatia (excluir varizes)", k: ["estigma", "ictericia", "aranha", "eritema palmar", "ascite", "hepatopat", "circulacao colateral"], r: "{{Ausentes.}}", o: 1 }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita? Lembre-se do estado hemodinâmico.",
      itens: [
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemoglobina", "{{8,1 g/dL}}", "13 – 17", "L"],
          ["Hematócrito", "{{24%}}", "40 – 50", "L"],
          ["VCM", "{{88 fL}}", "80 – 100", ""],
          ["Leucócitos", "{{9.800/mm³}}", "4.000 – 11.000", ""],
          ["Plaquetas", "{{210 mil}}", "150 – 400 mil", ""]
        ] }, c: 1 },
        { t: "Tipagem sanguínea e prova cruzada", k: KW.tipagem, r: "{{O+; reserva de 2 concentrados de hemácias.}}", c: 1 },
        { t: "Gasometria arterial com lactato", k: KW.gasometria.concat(["lactato"]), r: { titulo: "Gasometria arterial", tab: [
          ["pH", "7,35", "7,35 – 7,45", ""],
          ["pCO₂", "45 mmHg", "35 – 45", ""],
          ["HCO₃⁻", "22 mEq/L", "22 – 26", ""],
          ["Lactato", "2,5 mmol/L", "0,5 – 1,6", "H"]
        ] } },
        { t: "Eletrólitos e função renal", k: KW.funcaoRenal, r: { titulo: "Bioquímica", tab: [
          ["Potássio", "4,0 mEq/L", "3,5 – 5,5", ""],
          ["Sódio", "135 mEq/L", "135 – 145", ""],
          ["Creatinina", "1,2 mg/dL", "< 1,0", "H"],
          ["Ureia", "{{48 mg/dL}}", "15 – 45", "H"]
        ] } },
        { t: "Coagulograma", k: KW.coagulograma, r: "{{TP 12 s · INR 1,0 · TTPa 29 s (normais).}}" },
        { t: "Sangue oculto nas fezes", k: ["sangue oculto"], r: "{{Positivo}} — pouco acrescenta quando o sangramento já é visível.", o: 1 },
        { t: "Excluir HDA: sonda nasogástrica (aspirado) e/ou endoscopia digestiva alta", k: ["endoscop", " eda", "sonda nasogastrica", " sng", "lavado gastrico", "aspirado"], r: "{{Aspirado nasogástrico com bile, sem sangue; EDA sem lesões sangrantes.}}", c: 1 },
        { t: "Angiotomografia de abdome (após estabilização)", k: ["tomograf", " tc ", "angiotomograf", "angio"], r: "TC de abdome: divertículos no cólon com sinais de possível sangramento ativo nas áreas adjacentes; vasos com realce que podem indicar a fonte do sangramento." }
      ],
      ensino: "Anotações: “pedir exames → tipagem sanguínea, prova cruzada, gasometria, hemograma; TOMOGRAFIA NÃO (instável) → FAST, ultrassom”. A TC/angio-TC só depois de estabilizar."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o diagnóstico? Onde está o sangramento e quais os diferenciais?",
      itens: [
        { t: "Hemorragia digestiva baixa (distal ao ângulo de Treitz: delgado distal, cólon, reto)", k: ["hemorragia digestiva baixa", " hdb", "digestiva baixa", "sangramento baixo"], c: 1 },
        { t: "Etiologia: doença diverticular (sangramento diverticular)", k: ["diverticul"], c: 1 },
        { t: "Repercussão hemodinâmica: choque hipovolêmico (hipotensão, taquicardia, lactato ↑)", k: ["choque", "instab", "hipovolem", "hipoperf", "lactato"] },
        { t: "Diferenciais: angiodisplasia, hemorroidas, neoplasia colorretal, colite isquêmica e HDA (úlcera por AINE/AAS)", k: ["angiodisplas", "hemorroid", "neoplas", "cancer", "tumor", "colite", "isquem", "ulcera", " hda", "diferenc"], c: 1 },
        { t: "Fatores de risco: idade, AINEs/AAS, HAS, DM, constipação/dieta pobre em fibras", k: ["fator de risco", "fatores de risco", "aine", " aas", "idade", "idoso"], o: 1 }
      ]
    },
    {
      tipo: "conduta",
      enunciado: "Descreva a conduta completa.",
      itens: [
        { t: "Estabilização hemodinâmica: 2 acessos, cristaloide em bolus com reavaliação", k: KW.acesso.concat(KW.cristaloide, ["estabiliz"]), c: 1 },
        { t: "Se não melhorar: hemocomponentes — concentrado de hemácias (alvo Hb ≥ 7, ou ≥ 8 se cardiopata); plasma/plaquetas só se coagulopatia", k: KW.transfusao, c: 1 },
        { t: "Suspender AAS e AINEs (e o anti-hipertensivo enquanto hipotenso)", k: ["suspend", " aas", "aine", "ibuprofeno", "anti inflam"], x: 1 },
        { t: "Diferenciar HDA de HDB: sonda nasogástrica e/ou EDA", k: ["sonda nasogastrica", " sng", "endoscop", " eda", "diferenc"], c: 1 },
        { t: "Angiotomografia → arteriografia com embolização se sangramento ativo", k: ["angio", "emboliz", "arteriograf"], c: 1 },
        { t: "Colonoscopia após preparo intestinal (em até 24 h): diagnóstico e hemostasia", k: ["colonoscop", "preparo"], c: 1 },
        { t: "Analgesia: dipirona 1 g EV (evitar AINE)", k: ["dipirona", "analges", "paracetamol"] },
        { t: "Internação, jejum, Hb seriada e monitorização", k: ["internac", "monitor", "seriad", "jejum", " uti "] },
        { t: "Cirurgia (colectomia segmentar) se sangramento persistente/refratário", k: ["cirurg", "colectom"], o: 1 }
      ],
      dados: "{{Colonoscopia (após preparo): múltiplos divertículos no cólon direito, um deles com coágulo aderido — tratado com clipes; sem neoplasia.}}",
      ensino: "Anotações: “estabilização hemodinâmica”, “diferenciar HDA de HDB → passar sonda nasogástrica pra ver o estômago”, “se não melhorar: hemocomponentes (quais?)”, “angiotomografia (embolização)”, “dipirona 1 g endovenosa”, “preparo intestinal para colonoscopia”."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador (as 5 perguntas das anotações).",
      perguntas: [
        { p: "Onde está o sangramento? Quais as possíveis origens?", r: "HDB = sangramento <b>distal ao ângulo de Treitz</b>: intestino delgado distal, cólon e reto." },
        { p: "Quais os sintomas de HDB e quais o paciente apresenta?", r: "Hematoquezia/enterorragia (sangue vivo ou vinhoso), melena (se fonte proximal/cólon direito), astenia, tontura e sinais de choque (hipotensão, taquicardia). O paciente tem fezes escuras, astenia, hipotensão e taquicardia." },
        { p: "Que tipo de paciente tem HDB?", r: "Idosos; usuários de AINEs, AAS e anticoagulantes; tabagistas; portadores de doenças crônicas (hipertensão, diabetes, doença renal) e de constipação crônica/dieta pobre em fibras." },
        { p: "Quais as causas / diagnósticos diferenciais?", r: "Doença diverticular (a mais comum), angiodisplasia, hemorroidas, neoplasia colorretal, colite isquêmica, colites infecciosas/inflamatórias, sangramento pós-polipectomia — e HDA volumosa." },
        { p: "Como diferenciar HDA de HDB?", r: "Clínica (hematêmese/melena → alta; hematoquezia → baixa, exceto HDA maciça), relação ureia/creatinina elevada sugere HDA, aspirado por sonda nasogástrica (sensibilidade limitada) e, sobretudo, <b>endoscopia digestiva alta</b>." },
        { p: "Quais hemocomponentes usar?", r: "<b>Concentrado de hemácias</b> se Hb < 7 g/dL (< 8 em cardiopatas) ou instabilidade persistente; <b>plasma</b> se coagulopatia/INR alargado com sangramento; <b>plaquetas</b> se < 50.000 com sangramento ativo; protocolo de transfusão maciça se choque grave." }
      ]
    }
  ],
  alertas: [
    "Anotação: “HDB por diverticulite”. O sangramento ocorre na <b>doença diverticular (diverticulose)</b> — ruptura de um vaso no colo do divertículo, geralmente indolor. A diverticulite (inflamação) raramente sangra.",
    "<b>Melena</b> sugere fonte ALTA (acima do ângulo de Treitz) na maioria dos casos — por isso é obrigatório excluir HDA antes de concluir HDB. Sangramentos do cólon direito podem dar fezes escuras/vinhosas.",
    "A lavagem por sonda nasogástrica tem sensibilidade limitada; na dúvida, a endoscopia digestiva alta é o exame de escolha para excluir HDA."
  ],
  resumo: "Idoso com fezes escuras/vinhosas e sinais de choque: estabilize (volume cuidadoso, hemácias se preciso), suspenda AAS/AINE, exclua HDA (SNG/EDA), angio-TC se sangramento ativo (embolização) e colonoscopia após preparo."
});
