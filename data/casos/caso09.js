CASOS.push({
  id: 9,
  fonte: "Duas Colunas (7).pdf",
  local: "Pronto-atendimento",
  area: "Clínica",
  chamada: "Idosa de 78 anos com febre, tosse e prostração",
  diagnostico: "Choque séptico de foco pulmonar (pneumonia bacteriana) em idosa",
  temas: ["Choque séptico", "Drogas vasoativas", "Culturas e antibiótico"],
  cenario: "{{Dona Maria, 78 anos, é trazida pela filha ao pronto-atendimento por febre e tosse há 3 dias; hoje está muito prostrada e sonolenta.}}",
  impressao: "{{Paciente pálida, sonolenta, respirando rápido.}}",
  triagem: {
    emergencia: true,
    explicacao: "Idosa sonolenta, taquipneica e febril: suspeita de sepse com hipoperfusão. Comece por ABCDE + MOV, investigando hipoperfusão (anotações: “investigar hipoperfusão → sinais”)."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "Avaliação inicial (ABCDE + MOV)",
      enunciado: "Descreva sua avaliação inicial e as medidas imediatas.",
      itens: [
        { t: "Monitorização (cardioscópio, oxímetro, PA)", k: KW.monitor, r: "{{PA 82/46 mmHg (PAM 58) · FC 118 bpm · FR 28 irpm · SpO₂ 89% (ar ambiente) · Tax 38,9 °C}}", c: 1 },
        { t: "A — Via aérea", k: KW.viaAerea.concat(["fala", "responde"]), r: "{{Pérvia; responde com frases curtas.}}" },
        { t: "Oxigênio suplementar (alvo SpO₂ 92–96%)", k: KW.oxigenio, r: "{{Cateter nasal 3 L/min → SpO₂ 93%.}}", c: 1 },
        { t: "B — Ausculta respiratória e cardíaca", k: ["auscult", "murmurio", "respira", "bulha", "cardiaca"], r: "{{Estertores crepitantes em base esquerda; taquicárdica, ritmo regular.}}" },
        { t: "C — Sinais de hipoperfusão: pele, TEC, pulsos, diurese", k: ["circula", "perfus", "hipoperf", "enchimento capilar", " tec ", "pulso", "pele", "diurese"], r: "{{Pele quente, palidez, TEC 3 s, pulsos finos.}}", c: 1 },
        { t: "Dois acessos venosos calibrosos, com coleta de exames e culturas", k: KW.acesso, r: "Dois acessos calibrosos; {{exames e hemoculturas coletados}}.", c: 1 },
        { t: "Ringer lactato 250 mL em cada braço (bolus), reavaliando a cada etapa", k: KW.cristaloide, r: "{{Após 1.500 mL em bolus (~25 mL/kg): PA 86/48 (PAM 60) — mantém hipotensão.}}", c: 1 },
        { t: "D — Glasgow e glicemia capilar", k: KW.glasgow.concat(KW.glicemia), r: "{{Glasgow 14 (confusa); glicemia 160 mg/dL.}}" },
        { t: "E — Exposição: temperatura, pele, lesões por pressão, outros focos", k: KW.exposicao.concat(["temperatura", "pele", "escara", "lesao por pressao", "foco"]), r: "{{Tax 38,9 °C; sem lesões de pele ou por pressão; sem outros focos aparentes.}}" }
      ],
      ensino: "Anotações: “2 acessos venosos calibrosos com Ringer lactato de 250 mL em cada braço + droga vasoativa”. Em idosos e cardiopatas, faça o volume em <b>bolus com reavaliação</b> (ausculta, perfusão, sinais de congestão)."
    },
    {
      tipo: "anamnese",
      enunciado: "A filha está presente. O que você pergunta?",
      itens: [
        { t: "Início e evolução", k: KW.inicio, r: "{{Febre e tosse há 3 dias; hoje sonolenta e “mole”.}}" },
        { t: "Tosse, expectoração e dispneia", k: ["tosse", "catarro", "escarro", "secrec", "falta de ar", "dispneia", "cansaco"], r: "{{Tosse com catarro amarelado e cansaço.}}" },
        { t: "Sintomas urinários (outro foco possível)", k: ["urin", "xixi", "ardencia", "disuria", "polaciuria"], r: "{{Sem queixas urinárias; urinou pouco hoje.}}" },
        { t: "Outros focos (diarreia, feridas, dor abdominal, cateteres)", k: ["diarreia", "ferida", "dor abdominal", "barriga", "cateter", "sonda", "foco"], r: "{{Nega.}}", o: 1 },
        { t: "Comorbidades e medicações", k: KW.comorbidades.concat(KW.medicacoes), r: "{{Hipertensa, diabética e com insuficiência cardíaca (“coração fraco”): losartana, metformina, furosemida e carvedilol.}}", c: 1 },
        { t: "Alergias", k: KW.alergias, r: "{{Nega alergias.}}", c: 1 },
        { t: "Internação ou antibiótico recentes (risco de germe resistente)", k: ["internac", "internado", "hospital", "usou antibiotico", "tomou antibiotico", "90 dias", "ultimos 3 meses"], r: "{{Nega.}}" },
        { t: "Estado basal (funcionalidade e cognição prévias)", k: ["basal", "funcional", "acamad", "independ", "demencia", "lucida", "antes de adoecer", "normalmente"], r: "{{Independente e lúcida até a semana passada.}}" },
        { t: "Vacinação", k: ["vacina"], r: "{{Vacina da gripe em dia; pneumocócica não.}}", o: 1 }
      ]
    },
    {
      tipo: "exame",
      enunciado: "Descreva o exame físico (anotações: ectoscopia, ausculta e extremidades).",
      itens: [
        { t: "Ectoscopia (palidez, pele quente, hidratação)", k: ["ectoscop", "inspecao", "estado geral", "palidez", "pele", "hidrata", "mucosa", "corad"], r: "Palidez, pele quente, {{mucosas secas}}.", c: 1 },
        { t: "Ausculta respiratória", k: ["auscult&pulm", "respirat", "pulmonar", "murmurio", "crepit", "estertor"], r: "{{Estertores crepitantes e sopro tubário em base esquerda.}}", c: 1 },
        { t: "Ausculta cardíaca", k: ["auscult&cora", "auscult&cardi", " cardi", "coracao", "bulha", "sopro"], r: "{{Taquicárdica, ritmo regular, sem sopros.}}" },
        { t: "Extremidades (TEC, pulsos, edema)", k: ["extremidad", "enchimento capilar", " tec ", "pulso", "edema"], r: "{{TEC 3 s, pulsos finos, sem edema de membros inferiores.}}", c: 1 },
        { t: "Neurológico", k: ["neurolog", "glasgow", "rigidez de nuca", "meninge", "focal"], r: "{{Confusa, Glasgow 14, sem rigidez de nuca ou déficit focal.}}" },
        { t: "Abdome", k: ["abdom", "globo vesical"], r: "{{Flácido, indolor, sem globo vesical.}}" }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita? (anotações: igual ao caso 5 + investigar hipoperfusão)",
      itens: [
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemácias", "3,5 milhões/mm³", "4,5 – 5,5 milhões", "L"],
          ["Hemoglobina", "11,5 g/dL", "13,0 – 16,0", "L"],
          ["Hematócrito", "35,0%", "40,0 – 50,0", "L"],
          ["Leucócitos", "15.000/mm³", "3.600 – 11.000", "H"],
          ["Plaquetas", "100 mil/mm³", "130 – 450 mil", "L"]
        ], nota: "Leucocitose — compatível com pneumonia bacteriana; plaquetopenia (disfunção orgânica)." } },
        { t: "PCR (sempre pedir em quadro inflamatório)", k: [" pcr", "proteina c"], r: "{{PCR 28 mg/dL (VR < 1,0) — muito elevada.}}" },
        { t: "Gasometria arterial + lactato", k: KW.gasometria.concat(["lactato"]), r: { titulo: "Gasometria", tab: [
          ["pH", "{{7,29}}", "7,35 – 7,45", "L"],
          ["PaCO₂", "{{30 mmHg}}", "35 – 45", "L"],
          ["HCO₃⁻", "{{14 mEq/L}}", "22 – 26", "L"],
          ["PaO₂", "{{62 mmHg}}", "80 – 100", "L"],
          ["Lactato", "{{4,8 mmol/L}}", "< 2,0", "H"]
        ] }, c: 1 },
        { t: "Função renal (perfusão renal) e eletrólitos", k: KW.funcaoRenal, r: { titulo: "Bioquímica", tab: [
          ["Ureia", "{{88 mg/dL}}", "15 – 45", "H"],
          ["Creatinina", "{{1,9 mg/dL}}", "0,6 – 1,1", "H"],
          ["Sódio", "{{136 mEq/L}}", "135 – 145", ""],
          ["Potássio", "{{5,0 mEq/L}}", "3,5 – 5,0", ""]
        ] } },
        { t: "Coagulograma", k: KW.coagulograma, r: { titulo: "Coagulograma", tab: [
          ["TP", "{{15 s}}", "10 – 14 s", "H"],
          ["INR", "{{1,4}}", "< 1,2", "H"],
          ["TTPa", "{{36 s}}", "25 – 35 s", "H"]
        ] } },
        { t: "Hemoculturas (2 amostras) e urocultura, antes do antibiótico", k: KW.culturas.concat(["urocultura"]), r: "Coletadas {{— resultados em 48–72 h}}.", c: 1 },
        { t: "Raio-X de tórax", k: KW.imagemTorax, r: "{{Consolidação em base esquerda.}}", c: 1 },
        { t: "Urina tipo I", k: ["urina tipo", " eas", "sumario de urina", "urina 1", "urinalise"], r: "{{Sem leucocitúria ou nitrito.}}", x: 1, o: 1 },
        { t: "Ecocardiograma à beira do leito (POCUS)", k: ["ecocardio", "pocus", " eco ", "ultrassom"], r: "{{Função sistólica do VE reduzida (FEVE estimada ~30%); veia cava inferior colabável.}}", x: 1, o: 1 }
      ],
      ensino: "Gasometria: pH 7,29 (acidemia), HCO₃⁻ 14 → acidose <b>metabólica</b>. Winter: 1,5 × 14 + 8 ± 2 = 27–31 → PaCO₂ 30 = <b>compensação adequada</b>. Lactato 4,8 → acidose lática por hipoperfusão."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o seu diagnóstico? Justifique.",
      itens: [
        { t: "Choque séptico (hipotensão persistente após volume + lactato > 2 → necessidade de vasopressor)", k: ["choque septic", "choque"], c: 1 },
        { t: "Foco pulmonar: pneumonia bacteriana", k: ["pneumonia", " pac", "pulmonar"], c: 1 },
        { t: "Disfunções orgânicas (SOFA): renal, coagulação/plaquetas, neurológica, cardiovascular", k: ["disfuncao", "sofa", "renal", "plaquetopenia", "coagul", "lesao renal"] },
        { t: "Acidose metabólica lática com compensação respiratória adequada", k: ["acidose metabolica", "latica", "lactica", "compensa", "winter"] },
        { t: "Investigar outros focos (urinário, pele, abdome)", k: ["urinario", " itu", "outro foco", "outros focos"], o: 1 }
      ]
    },
    {
      tipo: "conduta",
      enunciado: "Descreva a conduta na ordem em que faria (com doses quando souber).",
      itens: [
        { t: "1º — Hemoculturas e urocultura antes do antibiótico", k: KW.culturas.concat(["urocultura"]), c: 1 },
        { t: "2º — Antibiótico de amplo espectro na 1ª hora: ceftriaxona (+ macrolídeo) ou levofloxacino (quinolona respiratória)", k: ["ceftriax", "levoflox", "antibiot", " atb", "azitro", "macrolid", "quinolon"], c: 1 },
        { t: "Volume em bolus com reavaliação (cautela por idade e insuficiência cardíaca)", k: KW.cristaloide, c: 1 },
        { t: "Noradrenalina como vasopressor de 1ª linha, alvo PAM ≥ 65 mmHg", k: KW.noradrenalina, c: 1 },
        { t: "Dobutamina apenas se disfunção cardíaca com hipoperfusão persistente apesar de PAM adequada", k: ["dobutamina", "inotrop"], o: 1 },
        { t: "Oxigênio (alvo SpO₂ 92–96%)", k: KW.oxigenio },
        { t: "Dipirona 1 g EV", k: KW.antitermico },
        { t: "Reavaliar lactato (2–4 h), diurese (sonda vesical) e perfusão", k: KW.sondaVesical.concat(["repet&lactato", "repit&lactato", "lactato seriado", "reavali"]) },
        { t: "3º — Quando sair a hemocultura: conferir se o antibiótico empírico cobre o germe e descalonar", k: ["descalon", "ajust", "antibiograma", "resultado da hemocultura", "resultado das culturas", "guiado", "cobre"], c: 1 },
        { t: "Suspender losartana, metformina, furosemida e carvedilol (hipotensão, lesão renal, acidose)", k: ["suspend", "losartana", "metformina", "furosemida", "carvedilol"], x: 1, o: 1 },
        { t: "Internação em UTI", k: KW.uti, c: 1 }
      ],
      dados: "{{48 h depois: hemocultura → <i>Streptococcus pneumoniae</i> sensível à ceftriaxona; urocultura negativa. Lactato caiu para 1,8 mmol/L.}}",
      ensino: "Anotações: “1º colher hemocultura e urocultura → 2º antibioticoterapia de amplo espectro (levofloxacino [PAC] / ceftriaxona) → 3º quando sair a hemocultura, verificar se o antibiótico empírico bate”."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Para que serve a droga vasoativa no choque séptico e por que a noradrenalina?", r: "No choque distributivo há vasodilatação: o vasopressor (efeito α1) restaura o <b>tônus vascular</b> e a PAM, melhorando a perfusão. A noradrenalina é a 1ª linha em qualquer idade (Surviving Sepsis 2021); vasopressina é a 2ª droga; dobutamina (inotrópico) se disfunção cardíaca com hipoperfusão persistente." },
        { p: "Por que pedir PCR?", r: "É marcador inflamatório: costuma chegar muito elevado na infecção bacteriana e ajuda a acompanhar a resposta ao tratamento — mas sozinho não diagnostica sepse." },
        { p: "Como investigar hipoperfusão?", r: "Clínica: TEC > 3 s, pele mosqueada/fria, oligúria (< 0,5 mL/kg/h), alteração mental, hipotensão. Laboratório: lactato > 2 mmol/L, acidose metabólica, ↑ creatinina; outros: SvcO₂ e gap de CO₂." },
        { p: "O que fazer quando sair o resultado da hemocultura?", r: "Comparar com o antibiótico empírico: ajustar/<b>descalonar</b> para o espectro mais estreito eficaz (antibiograma) e definir a duração (geralmente 5–7 dias na PAC com boa resposta)." }
      ]
    }
  ],
  alertas: [
    "Anotação: “noradrenalina (se não fosse idoso) / idosos: dobutamina”. A <b>noradrenalina é o vasopressor de 1ª linha no choque séptico em qualquer idade</b>. A dobutamina é um inotrópico: é associada quando há disfunção cardíaca com hipoperfusão persistente apesar de volume e PAM adequados — usada sozinha pode piorar a hipotensão.",
    "Anotação: “droga vasoativa para que o volume fique dentro do vaso”. O vasopressor age restaurando o tônus vascular (vasoconstrição) e a PAM; ele não “segura” o líquido dentro do vaso."
  ],
  resumo: "Choque séptico pulmonar em idosa cardiopata: culturas → antibiótico na 1ª hora → volume em bolus com reavaliação → noradrenalina (PAM ≥ 65) → dobutamina só se disfunção cardíaca → descalonar pela cultura → UTI."
});
