CASOS.push({
  id: 1,
  fonte: "Duas Colunas.pdf",
  local: "Pronto-atendimento",
  area: "Clínica",
  chamada: "Idoso com tosse produtiva e febre há 3 dias",
  diagnostico: "Pneumonia adquirida na comunidade (PAC) grave, complicada com sepse",
  temas: ["Pneumonia", "Sepse", "Gasometria", "CURB-65 / qSOFA / NEWS"],
  cenario: "{{Sr. Antônio, 74 anos,}} é trazido pela filha ao pronto-atendimento com tosse com secreção e febre há 3 dias. Ela conta que ele está “cansado para tudo” e se alimentando pouco.",
  impressao: "Paciente em mau estado geral, respirando rápido, com as extremidades arroxeadas.",
  triagem: {
    emergencia: true,
    explicacao: "Idoso febril, taquipneico e com cianose de extremidades: há sinais de gravidade. Comece pela avaliação inicial (ABCDE + MOV: monitorização, oxigênio e veia), colhendo uma história dirigida ao mesmo tempo."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "Avaliação inicial (ABCDE + MOV)",
      enunciado: "Você entra na sala. Descreva sua avaliação inicial e as medidas imediatas, letra por letra.",
      itens: [
        { t: "Monitorização: cardioscópio, oxímetro e PA não invasiva", k: KW.monitor, r: "FC 115 bpm · FR 29 irpm · SpO₂ 90% em ar ambiente · Tax 39 °C · {{PA 100/60 mmHg}}", c: 1 },
        { t: "A — Via aérea: paciente fala, sem sinais de obstrução", k: KW.viaAerea.concat(["fala", "responde"]), r: "Responde com frases curtas, sem ruídos de obstrução: via aérea pérvia." },
        { t: "B — Respiração: FR, padrão respiratório, ausculta e SpO₂", k: ["respira", "auscult", "murmurio", "expansib", "padrao respiratorio"], r: "Taquipneico (FR 29), {{com uso de musculatura acessória}}; crepitações grosseiras em base direita; SpO₂ 90%." },
        { t: "Oxigênio suplementar (alvo SpO₂ ≥ 92%)", k: KW.oxigenio, r: "Com O₂ por {{cateter nasal 3 L/min}}, a SpO₂ sobe para {{94%}}.", c: 1 },
        { t: "C — Circulação: PA, FC, pulsos, tempo de enchimento capilar e perfusão", k: ["circula", "perfus", "enchimento capilar", " tec ", "pulso"], r: "FC 115, {{PA 100/60 mmHg, TEC 3 s}}, extremidades frias com cianose (+/4+)." },
        { t: "Acesso venoso calibroso com coleta de exames (hemoculturas antes do antibiótico)", k: KW.acesso, r: "Acesso venoso obtido; amostras coletadas.", c: 1 },
        { t: "Hidratação venosa com cristaloide (Ringer lactato), reavaliando ausculta e perfusão", k: KW.cristaloide, r: "Iniciado Ringer lactato em bolus. {{Após 500 mL: PA 108/64, FC 108, sem piora da ausculta.}}" },
        { t: "D — Nível de consciência (Glasgow), pupilas e glicemia capilar", k: KW.glasgow.concat(KW.glicemia), r: "{{Glasgow 15, orientado; pupilas isocóricas e fotorreagentes; glicemia capilar 132 mg/dL.}}" },
        { t: "E — Exposição: temperatura e inspeção da pele (outros focos)", k: KW.exposicao.concat(["temperatura", "pele"]), r: "Tax 39 °C; {{sem lesões de pele ou outros focos aparentes}}." }
      ],
      ensino: "Paciente grave → <b>ABCDE + MOV</b> (Monitorização, Oxigênio, Veia) enquanto colhe a história. Colha hemoculturas <b>antes</b> do antibiótico, mas sem atrasá-lo. Nas anotações: “soro (Ringer lactato), O₂, RX de tórax, hemograma, PCR e gasometria”."
    },
    {
      tipo: "anamnese",
      enunciado: "O paciente responde com frases curtas e a filha completa a história. Quais perguntas você faz?",
      itens: [
        { t: "Identificação (nome, idade, com quem mora)", k: KW.identificacao, r: "{{Antônio, 74 anos, aposentado, mora com a filha.}}" },
        { t: "Início e evolução dos sintomas", k: KW.inicio, r: "Tosse e febre há 3 dias, piorando." },
        { t: "Características da tosse e da secreção", k: ["secrec", "catarro", "escarro", "expector", "como e a tosse", "tosse seca", "tosse produtiva", "tosse com "], r: "Tosse com secreção {{amarelo-esverdeada}}." },
        { t: "Febre (aferida? calafrios?)", k: ["febre", "calafrio", "temperatura"], r: "Febre há 3 dias, {{com calafrios; chegou a 39,5 °C em casa}}." },
        { t: "Dispneia (esforço, repouso, ortopneia)", k: ["falta de ar", "dispneia", "cansaco", "cansado", "respirar", "folego"], r: "Falta de ar ao mínimo esforço e ao se levantar." },
        { t: "Dor torácica / hemoptise", k: ["dor no peito", "dor toracica", "pleurit", "hemopt", "sangue no catarro", "dor ao respirar", "dor"], r: "{{Dor em pontada no lado direito ao tossir; nega sangue no catarro.}}" },
        { t: "Alimentação, hidratação e diurese", k: ["aliment", "comendo", "come ", "hidrat", "bebendo", "apetite", "urina", "xixi", "diurese"], r: "Alimentação e hidratação reduzidas; {{urinando menos que o habitual}}." },
        { t: "Viagens recentes e contactantes doentes", k: ["viag", "contato", "alguem doente", "alguem com", "contactante", "mais alguem"], r: "Não viajou; ninguém em casa com sintomas parecidos." },
        { t: "Episódios anteriores", k: KW.previo, r: "Primeira vez que tem um quadro assim." },
        { t: "Fatores de melhora ou piora", k: ["melhora", "piora", "alivia", "fator"], r: "Sem fator de melhora ou piora." },
        { t: "Comorbidades e medicações em uso", k: KW.comorbidades.concat(KW.medicacoes), r: "Hipertenso, em uso de anlodipino. {{Nega diabetes, cardiopatia ou doença pulmonar.}}" },
        { t: "Alergias (antes de prescrever antibiótico)", k: KW.alergias, r: "{{Nega alergias.}}", c: 1 },
        { t: "Tabagismo e etilismo", k: KW.habitos, r: "Não é fumante. {{Bebe socialmente.}}" },
        { t: "Internação ou uso de antibiótico nos últimos 90 dias", k: ["internac", "internado", "hospital", "antibiotico recente", "usou antibiotico", "tomou antibiotico", "ultimos 3 meses", "90 dias"], r: "{{Sem internações ou antibióticos nos últimos 3 meses.}}" },
        { t: "Vacinação (influenza, pneumococo, COVID)", k: ["vacina"], r: "{{Não sabe informar se tomou as vacinas deste ano.}}", o: 1 }
      ],
      ensino: "Na PAC: caracterize tosse, febre, dispneia e dor pleurítica; pergunte comorbidades, medicações, <b>alergias</b> (antes do antibiótico), internação/antibiótico nos últimos 90 dias (risco de germe resistente) e vacinação."
    },
    {
      tipo: "exame",
      enunciado: "Descreva o exame físico que você realiza, verbalizando cada etapa.",
      itens: [
        { t: "Estado geral e ectoscopia (consciência, hidratação, coloração, cianose)", k: ["estado geral", "ectoscop", "inspecao geral", "hidrata", "mucosa", "corado", "cianose", "palidez", "descorad"], r: "Mau estado geral, cianose de extremidades (+/4+), {{mucosas secas}}." },
        { t: "Sinais vitais completos", k: KW.sinaisVitais, r: "FC 115 · FR 29 · SpO₂ 90% (ar ambiente) · Tax 39 °C · {{PA 100/60 mmHg}}" },
        { t: "Aparelho respiratório: inspeção, palpação (expansibilidade, frêmito), percussão e ausculta", k: ["respirat", "pulmonar", "auscult&pulm", "auscult&torax", "murmurio", "fremito", "percu", "expansib", "crepit", "estertor"], r: "{{Expansibilidade reduzida à direita, frêmito toracovocal aumentado e macicez em base direita;}} <b>crepitações grosseiras em base direita</b>.", c: 1 },
        { t: "Aparelho cardiovascular", k: [" cardi", "coracao", "bulha", "auscult&cora", "auscult&cardi", "sopro", "ritmo", "precordio"], r: "Taquicárdico, ritmo regular, {{bulhas normofonéticas, sem sopros}}." },
        { t: "Perfusão e extremidades (TEC, pulsos, edema)", k: ["extremidad", "enchimento capilar", " tec ", "pulsos", "edema", "perfus"], r: "{{TEC 3 s}}, extremidades frias e cianóticas, {{sem edema}}." },
        { t: "Neurológico sumário (orientação / confusão)", k: ["neurolog", "glasgow", "orientad", "consciencia", "confus"], r: "{{Consciente e orientado, Glasgow 15.}}" },
        { t: "Abdome", k: ["abdom", "barriga"], r: "{{Flácido, indolor, ruídos hidroaéreos presentes.}}", o: 1 }
      ],
      ensino: "<b>Síndrome de consolidação</b>: ↓ expansibilidade, ↑ frêmito toracovocal, macicez, crepitações/estertores e sopro tubário. Avalie sempre a perfusão (TEC, diurese, consciência): são sinais de choque."
    },
    {
      tipo: "exames",
      enunciado: "Quais exames complementares você solicita? Justifique cada um.",
      itens: [
        { t: "Raio-X de tórax (PA e perfil)", k: KW.imagemTorax, r: "Consolidação em base pulmonar direita {{(lobo inferior direito)}}.", c: 1 },
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemoglobina", "11,0 g/dL", "13,0 – 16,0", "L"],
          ["Leucócitos", "{{16.800/mm³}}", "3.600 – 11.000", "H"],
          ["Neutrófilos", "70%", "40 – 70%", ""],
          ["Bastões", "10%", "até 5%", "H"],
          ["Plaquetas", "{{110.000/mm³}}", "150.000 – 450.000", "L"]
        ], nota: "Leucocitose com desvio à esquerda, anemia e plaquetopenia." } },
        { t: "PCR (proteína C reativa)", k: [" pcr", "proteina c"], r: "PCR 30 {{mg/dL (VR < 1,0)}} — muito elevada." },
        { t: "Gasometria arterial", k: KW.gasometria, r: { titulo: "Gasometria arterial", tab: [
          ["pH", "7,10", "7,35 – 7,45", "L"],
          ["PaCO₂", "38 mmHg", "35 – 45", ""],
          ["HCO₃⁻", "16 mEq/L", "22 – 26", "L"],
          ["PaO₂", "{{58 mmHg}}", "80 – 100", "L"]
        ] }, c: 1 },
        { t: "Lactato", k: ["lactato"], r: "{{Lactato 3,4 mmol/L (VR < 2,0).}}" },
        { t: "Hemoculturas (2 amostras) antes do antibiótico", k: KW.culturas, r: "Coletadas {{2 amostras (resultado em 48–72 h)}}.", c: 1 },
        { t: "Função renal e eletrólitos (ureia, creatinina, Na, K)", k: KW.funcaoRenal, r: { titulo: "Bioquímica", tab: [
          ["Ureia", "{{58 mg/dL}}", "15 – 45", "H"],
          ["Creatinina", "{{1,4 mg/dL}}", "0,7 – 1,2", "H"],
          ["Sódio", "{{134 mEq/L}}", "135 – 145", "L"],
          ["Potássio", "{{4,1 mEq/L}}", "3,5 – 5,0", ""]
        ] } },
        { t: "Gram e cultura de escarro", k: ["escarro", " gram ", "gram do", "bacterioscop"], r: "{{Gram: diplococos Gram-positivos (sugere pneumococo).}}", o: 1 }
      ],
      ensino: "<b>Gasometria passo a passo</b>: (1) pH 7,10 → <b>acidemia</b>. (2) HCO₃⁻ 16 (↓) → acidose <b>metabólica</b>. (3) Compensação esperada (Winter): PaCO₂ = 1,5 × 16 + 8 ± 2 = <b>30 a 34 mmHg</b>. A PaCO₂ medida (38) é maior que a esperada → <b>acidose respiratória associada</b> (distúrbio misto) — sinal de fadiga respiratória."
    },
    {
      tipo: "diagnostico",
      enunciado: "Interprete os achados e formule o diagnóstico: principal, gravidade e diferenciais.",
      itens: [
        { t: "Pneumonia adquirida na comunidade (PAC) — base direita", k: ["pneumonia", " pac", "broncopneumonia"], c: 1 },
        { t: "Sepse de foco pulmonar", k: ["sepse", "septic"], c: 1 },
        { t: "Gravidade: CURB-65 = 3 (idade ≥ 65, ureia > 50, PAD ≤ 60) e qSOFA 2 (FR ≥ 22, PAS ≤ 100)", k: ["curb", "qsofa", "sofa", "news", "gravidade", "grave"] },
        { t: "Acidose mista (metabólica + respiratória) pela gasometria", k: ["acidose", "misto", "mista"] },
        { t: "Insuficiência respiratória aguda hipoxêmica", k: ["insuficiencia respirat", "hipoxem", "hipoxia", "irpa"] },
        { t: "Justifica a gravidade: idade e instabilidade (taquicardia, taquipneia, hipoxemia)", k: ["idade", "idoso", "instab", "complicad"] },
        { t: "Diferenciais: TEP, insuficiência cardíaca, tuberculose, influenza/COVID, broncoaspiração", k: ["diferenc", " tep", "embolia", "tuberculose", "covid", "influenza", "insuficiencia cardiaca", " icc", "aspirat", "broncoaspir"] }
      ],
      ensino: "<b>Sepse</b> (Sepsis-3): disfunção orgânica ameaçadora à vida por resposta desregulada à infecção (↑ SOFA ≥ 2). <b>qSOFA</b> (FR ≥ 22, PAS ≤ 100, alteração mental) ≥ 2 = alto risco. <b>CURB-65</b>: Confusão, Ureia > 50 mg/dL, FR ≥ 30, PAS < 90 ou PAD ≤ 60, idade ≥ 65 → 0–1 ambulatorial; 2 internação; ≥ 3 PAC grave (considerar UTI)."
    },
    {
      tipo: "conduta",
      enunciado: "Descreva a conduta terapêutica completa (com doses quando souber) e o destino do paciente.",
      itens: [
        { t: "Oxigênio com alvo de SpO₂ 92–96%; VNI/IOT se piora ou fadiga", k: KW.oxigenio.concat([" vni", "intub", " iot"]), c: 1 },
        { t: "Antibiótico EV na 1ª hora: cefalosporina de 3ª geração (ceftriaxona 1–2 g EV 1×/dia)", k: ["ceftriax", "cefalospor", "antibiot", " atb"], c: 1 },
        { t: "Associar macrolídeo (azitromicina 500 mg EV 1×/dia) ou usar quinolona respiratória", k: ["azitro", "claritro", "macrolid", "levoflox", "moxiflox", "quinolon"], x: 1 },
        { t: "Pacote da 1ª hora: lactato, hemoculturas antes do ATB, antibiótico, volume e vasopressor se necessário", k: ["pacote", "primeira hora", "1a hora", "1 hora", "hemocultura", "lactato"] },
        { t: "Cristaloide (Ringer lactato) 30 mL/kg se hipotensão ou lactato ≥ 4, reavaliando a ausculta", k: KW.cristaloide.concat(["30 ml"]), c: 1 },
        { t: "Noradrenalina se PAM < 65 mmHg após volume", k: KW.noradrenalina },
        { t: "Antitérmico: dipirona 1 g EV", k: KW.antitermico },
        { t: "Monitorar diurese (≥ 0,5 mL/kg/h) e repetir lactato", k: KW.sondaVesical.concat(["balanco hidrico", "repet&lactato", "repit&lactato", "lactato seriado", "lactato de controle"]) },
        { t: "Internação em UTI / semi-intensiva (CURB-65 ≥ 3 + sepse)", k: KW.uti, c: 1 },
        { t: "Suspender o anlodipino enquanto hipotenso", k: ["suspend", "anlodipino"], x: 1, o: 1 },
        { t: "Profilaxia de TVP (enoxaparina)", k: ["enoxaparina", "heparina", " tvp", "tromboprofilaxia", "profilaxia"], x: 1, o: 1 }
      ],
      ensino: "Anotações: “cefalosporina de 3ª geração; dipirona (febre)” e, no choque, “hidratação volumosa e vai auscultando; antibiótico empírico de amplo espectro”. PAC grave internada: <b>β-lactâmico + macrolídeo</b> (ou quinolona respiratória)."
    },
    {
      tipo: "arguicao",
      enunciado: "O avaliador faz algumas perguntas. Responda de forma discursiva.",
      perguntas: [
        { p: "Por que essa pneumonia é considerada complicada/grave?", r: "Pela <b>idade</b> (≥ 65) e pela <b>instabilidade</b>: taquicardia, taquipneia, hipoxemia e PAD ≤ 60. Há disfunção orgânica (acidose, plaquetopenia, ↑ ureia/creatinina): CURB-65 = 3 e qSOFA = 2 → PAC grave com sepse." },
        { p: "Diferencie qSOFA, SOFA e NEWS.", r: "<b>qSOFA</b>: triagem à beira do leito (FR ≥ 22, PAS ≤ 100, alteração mental); ≥ 2 = maior risco de morte. <b>SOFA</b>: mede disfunção de 6 sistemas (respiratório, coagulação, fígado, cardiovascular, SNC, renal); aumento ≥ 2 pontos define sepse. <b>NEWS/MEWS</b>: escores de alerta precoce para deterioração clínica (FR, SpO₂, uso de O₂, PA, FC, consciência e temperatura); quanto maior, mais urgente a resposta." },
        { p: "Como avaliar se o paciente está em choque à beira do leito?", r: "Tempo de enchimento capilar > 3 s, diurese < 0,5 mL/kg/h, alteração do nível de consciência, pele fria/mosqueada, hipotensão (PAM < 65), taquicardia, lactato > 2 mmol/L e índice de choque (FC/PAS) > 1." },
        { p: "Como corrigir a acidose metabólica desse paciente?", r: "Tratando a <b>causa</b>: oxigenação, volume, antibiótico precoce e vasopressor se necessário (melhorar a perfusão reduz o lactato). O aumento da FR é a <b>compensação fisiológica</b> (alcalose respiratória compensatória), não o tratamento. Bicarbonato só em casos selecionados (pH ≤ 7,2 com lesão renal aguda)." }
      ]
    }
  ],
  alertas: [
    "Nas anotações, pH 7,1 foi marcado como “alcalemia”. pH abaixo de 7,35 é <b>acidemia</b>.",
    "Pela fórmula de Winter (1,5 × HCO₃⁻ + 8 ± 2), com HCO₃⁻ 16 a PaCO₂ esperada é 30–34 mmHg. PaCO₂ 38 indica <b>acidose respiratória associada</b> (distúrbio misto), e não compensação adequada.",
    "A anotação “corrigir acidose metabólica: ↑FR” descreve a compensação do organismo; a conduta médica é tratar a causa (perfusão e infecção)."
  ],
  resumo: "PAC grave em idoso com sepse: estabilize (O₂, acesso, volume), colha culturas e lactato, inicie antibiótico na 1ª hora (β-lactâmico + macrolídeo), classifique a gravidade (CURB-65, qSOFA) e interne em UTI."
});
