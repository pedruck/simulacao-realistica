CASOS.push({
  id: 5,
  fonte: "Duas Colunas (4).pdf",
  local: "Pronto-atendimento",
  area: "Clínica",
  chamada: "Homem de 63 anos com febre alta, tosse produtiva e confusão mental",
  diagnostico: "Sepse/choque séptico de foco pulmonar (pneumonia) com insuficiência respiratória aguda e acidose mista",
  temas: ["Choque séptico", "Pneumonia", "Gasometria", "Suporte ventilatório"],
  cenario: "José, 63 anos, chega ao pronto-atendimento com febre alta há 2 dias, tosse produtiva, queda do estado geral e confusão mental.",
  impressao: "Paciente cansado, {{sonolento}}, respirando rápido e superficial; o monitor mostra a saturação caindo.",
  triagem: {
    emergencia: true,
    explicacao: "Confusão mental, cansaço e SpO₂ caindo: paciente instável. Prioridade é ABCDE com suporte ventilatório imediato (anotações: “SpO₂ caindo → suporte ventilatório!!!!”)."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "Avaliação inicial (ABCDE + MOV)",
      enunciado: "Descreva sua avaliação inicial e as medidas imediatas.",
      itens: [
        { t: "Monitorização (cardioscópio, oxímetro, PA)", k: KW.monitor, r: "PA 90/60 mmHg · FC 120 bpm · {{FR 32 irpm}} · SpO₂ {{86%}} e caindo · {{Tax 39,4 °C}}", c: 1 },
        { t: "A — Via aérea", k: KW.viaAerea.concat(["fala", "responde"]), r: "{{Pérvia; responde com palavras soltas, confuso.}}" },
        { t: "Suporte ventilatório: O₂ em máscara com reservatório 10–15 L/min; preparar VNI/IOT se não melhorar", k: KW.oxigenio.concat([" vni", "intub", " iot"]), r: "{{Com máscara não reinalante a 15 L/min, a SpO₂ sobe para 92%.}}", c: 1 },
        { t: "B — Padrão respiratório e ausculta", k: ["respira", "auscult", "murmurio", "expansib", "padrao respiratorio", "musculatura acessoria"], r: "{{Taquipneico, com uso de musculatura acessória; estertores crepitantes em hemitórax direito.}}" },
        { t: "C — PA, FC e perfusão periférica", k: ["circula", "perfus", "enchimento capilar", " tec ", "pulso"], r: "PA 90/60 (PAM 70), FC 120, {{TEC 4 s, extremidades frias}}." },
        { t: "Acesso venoso calibroso com coleta (hemograma, gasometria, lactato, hemoculturas)", k: KW.acesso, r: "Acesso obtido; exames coletados.", c: 1 },
        { t: "Cristaloide (Ringer lactato) em bolus com reavaliação", k: KW.cristaloide, r: "{{Após 1.000 mL de RL: PA 96/62, FC 112.}}" },
        { t: "D — Glasgow, pupilas e glicemia capilar", k: KW.glasgow.concat(KW.glicemia), r: "{{Glasgow 13 (AO 3, RV 4, RM 6); pupilas isocóricas e fotorreagentes; glicemia 145 mg/dL.}}", c: 1 },
        { t: "E — Exposição e temperatura", k: KW.exposicao.concat(["temperatura", "pele"]), r: "{{Tax 39,4 °C; pele quente; sem lesões ou outros focos aparentes.}}" }
      ],
      ensino: "Anotações: “SpO₂ caindo → suporte ventilatório!!!! Quanto? L de O₂? 10–15 L”, “pedir hemograma e colocar acesso venoso com antibiótico de amplo espectro + antitérmico”, “Glasgow”."
    },
    {
      tipo: "anamnese",
      enunciado: "José está confuso; a {{esposa}} o acompanha. O que você pergunta?",
      itens: [
        { t: "Início e evolução do quadro", k: KW.inicio, r: "Febre alta há 2 dias e tosse com catarro; {{hoje ficou confuso e muito cansado}}." },
        { t: "Características da tosse e do escarro", k: ["secrec", "catarro", "escarro", "expector", "como e a tosse", "tosse seca", "tosse produtiva", "tosse com "], r: "{{Catarro amarelo-esverdeado.}}" },
        { t: "Dispneia e dor torácica", k: ["falta de ar", "dispneia", "cansaco", "dor no peito", "dor toracica", "dor"], r: "{{Falta de ar progressiva; dor em pontada no lado direito.}}" },
        { t: "Alteração do nível de consciência (quando começou)", k: ["confus", "sonolen", "desorient", "consciencia", "comportamento"], r: "{{A confusão começou hoje de manhã.}}", c: 1 },
        { t: "Comorbidades e medicações", k: KW.comorbidades.concat(KW.medicacoes), r: "{{Diabético tipo 2 (metformina) e hipertenso (enalapril).}}" },
        { t: "Alergias", k: KW.alergias, r: "{{Nega alergias.}}", c: 1 },
        { t: "Internação ou antibiótico nos últimos 90 dias", k: ["internac", "internado", "hospital", "usou antibiotico", "tomou antibiotico", "90 dias", "ultimos 3 meses"], r: "{{Nega.}}" },
        { t: "Tabagismo e etilismo", k: KW.habitos, r: "{{Tabagista (30 maços-ano); bebe nos fins de semana.}}" },
        { t: "Diurese", k: ["urina", "xixi", "diurese"], r: "{{Urinou pouco hoje.}}" },
        { t: "Vacinação", k: ["vacina"], r: "{{Não vacinou contra influenza este ano.}}", o: 1 }
      ]
    },
    {
      tipo: "exame",
      enunciado: "Descreva o exame físico.",
      itens: [
        { t: "Ectoscopia (estado geral, hidratação, cianose)", k: ["estado geral", "ectoscop", "inspecao", "hidrata", "mucosa", "cianose", "corado"], r: "{{Mau estado geral, sonolento, desidratado (2+/4+), cianose labial discreta.}}" },
        { t: "Aparelho respiratório completo (inspeção, palpação, percussão, ausculta)", k: ["respirat", "pulmonar", "auscult&pulm", "auscult&torax", "murmurio", "fremito", "percu", "expansib", "crepit", "estertor"], r: "{{Expansibilidade ↓ à direita; frêmito ↑ e macicez em base direita; estertores crepitantes no terço inferior direito.}}", c: 1 },
        { t: "Aparelho cardiovascular", k: [" cardi", "coracao", "bulha", "auscult&cora", "auscult&cardi", "sopro", "ritmo"], r: "{{Taquicárdico, RCR 2T, sem sopros.}}" },
        { t: "Perfusão e extremidades (TEC, pulsos)", k: ["extremidad", "enchimento capilar", " tec ", "pulso", "perfus"], r: "{{TEC 4 s, extremidades frias, pulsos finos.}}", c: 1 },
        { t: "Neurológico (Glasgow, sinais meníngeos, déficit focal)", k: ["neurolog", "glasgow", "rigidez de nuca", "meninge", "deficit", "focal"], r: "{{Glasgow 13, sem rigidez de nuca ou déficit focal.}}" },
        { t: "Abdome", k: ["abdom"], r: "{{Flácido, indolor.}}", o: 1 }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita?",
      itens: [
        { t: "Raio-X de tórax", k: KW.imagemTorax, r: "Consolidação à direita.", c: 1 },
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hematócrito", "25,0%", "40,0 – 50,0", "L"],
          ["Hemoglobina", "8,5 g/dL", "12 – 16", "L"],
          ["Leucócitos", "15.000/mm³", "3.600 – 11.000", "H"],
          ["Plaquetas", "150 mil/mm³", "130 – 450 mil", ""]
        ] } },
        { t: "Gasometria arterial", k: KW.gasometria, r: { titulo: "Gasometria", tab: [
          ["pH", "7,25", "7,35 – 7,45", "L"],
          ["pCO₂", "55 mmHg", "35 – 45", "H"],
          ["PaO₂", "60 mmHg", "80 – 100", "L"],
          ["HCO₃⁻", "20 mEq/L", "22 – 26", "L"]
        ] }, c: 1 },
        { t: "Lactato", k: ["lactato"], r: "{{Lactato 4,6 mmol/L (VR < 2,0).}}", c: 1 },
        { t: "Hemoculturas (2 amostras) antes do antibiótico", k: KW.culturas, r: "{{Coletadas antes do antibiótico.}}", c: 1 },
        { t: "Função renal e eletrólitos", k: KW.funcaoRenal, r: { titulo: "Bioquímica", tab: [
          ["Ureia", "{{72 mg/dL}}", "15 – 45", "H"],
          ["Creatinina", "{{1,8 mg/dL}}", "0,7 – 1,2", "H"],
          ["Sódio", "{{133 mEq/L}}", "135 – 145", "L"],
          ["Potássio", "{{4,8 mEq/L}}", "3,5 – 5,0", ""]
        ] } },
        { t: "PCR", k: [" pcr", "proteina c"], r: "{{PCR 24 mg/dL (VR < 1,0).}}" },
        { t: "Coagulograma e bilirrubinas (avaliar disfunção orgânica/SOFA)", k: KW.coagulograma.concat(["bilirrub"]), r: "{{INR 1,3; bilirrubina total 1,1 mg/dL.}}", o: 1 }
      ],
      ensino: "<b>Gasometria</b>: pH 7,25 → acidemia. pCO₂ 55 (↑) → componente <b>respiratório</b>; HCO₃⁻ 20 (↓) → componente <b>metabólico</b>. Os dois empurram para acidose → <b>acidose mista</b>. Na acidose respiratória aguda o HCO₃⁻ esperado subiria ~1 mEq/L a cada 10 mmHg de pCO₂ (~25,5); estar em 20 confirma a acidose metabólica (lática) associada. PaO₂ 60 → hipoxemia. Anotação: “quem alterou primeiro, pCO₂ ou pH? A pneumonia fez a pCO₂ subir (respiratória)”."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o seu diagnóstico? Justifique com os achados.",
      itens: [
        { t: "Pneumonia (PAC) — consolidação à direita", k: ["pneumonia", " pac", "consolida"], c: 1 },
        { t: "Sepse com hipoperfusão / choque séptico", k: ["sepse", "septic", "choque"], c: 1 },
        { t: "Acidose mista (respiratória + metabólica/lática)", k: ["acidose", "misto", "mista"] },
        { t: "Insuficiência respiratória aguda (hipoxêmica e hipercápnica)", k: ["insuficiencia respirat", "hipoxem", "hipercap", "irpa"] },
        { t: "Disfunções orgânicas: neurológica (confusão), renal, hiperlactatemia", k: ["disfuncao", "encefalopat", "confus", "renal", "lactato", "sofa"] },
        { t: "Sinais de choque: hipotensão, taquicardia, taquipneia, febre e confusão", k: ["taquicard", "taquipn", "hipotens", "sinais de choque"] }
      ],
      ensino: "<b>Sepsis-3</b>: <b>sepse</b> = disfunção orgânica por resposta desregulada à infecção; <b>choque séptico</b> = sepse que, após volume adequado, precisa de vasopressor para PAM ≥ 65 mmHg <b>e</b> tem lactato > 2 mmol/L. Com PA 90/60 e lactato alto, trate como choque: volume e, se PAM < 65, noradrenalina."
    },
    {
      tipo: "conduta",
      enunciado: "Descreva a conduta completa (com doses quando souber).",
      itens: [
        { t: "Oxigênio em alto fluxo; VNI ou IOT se fadiga/rebaixamento (pCO₂ 55 + confusão)", k: KW.oxigenio.concat([" vni", "intub", " iot", "ventilacao mecanica"]), c: 1 },
        { t: "Antibiótico de amplo espectro na 1ª hora: ceftriaxona 2 g EV (+ azitromicina)", k: ["ceftriax", "antibiot", " atb", "cefalospor", "azitro", "macrolid", "levoflox"], c: 1 },
        { t: "Hemoculturas antes do antibiótico, sem atrasá-lo", k: KW.culturas },
        { t: "Cristaloide 30 mL/kg nas primeiras 3 h, com reavaliação frequente", k: KW.cristaloide.concat(["30 ml"]), c: 1 },
        { t: "Noradrenalina se PAM < 65 mmHg após volume", k: KW.noradrenalina, x: 1 },
        { t: "Antitérmico: dipirona 1 g EV", k: KW.antitermico },
        { t: "Repetir lactato em 2–4 h e controlar diurese", k: KW.sondaVesical.concat(["repet&lactato", "repit&lactato", "lactato seriado", "lactato de controle", "novo lactato"]) },
        { t: "Internação em UTI", k: KW.uti, c: 1 },
        { t: "Suspender metformina e anti-hipertensivo", k: ["suspend", "metformina", "enalapril"], x: 1, o: 1 }
      ],
      ensino: "Anotações: “ceftriaxona”, “antitérmico (dipirona)”, “suporte ventilatório 10–15 L”. Pacote da 1ª hora: lactato, culturas, antibiótico, volume e vasopressor se necessário."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Na gasometria, quem alterou primeiro: a pCO₂ ou o pH? Qual o distúrbio?", r: "A pneumonia (↓ ventilação alveolar efetiva + fadiga) elevou a <b>pCO₂</b>, gerando acidose respiratória; a hipoperfusão gerou acidose <b>lática</b> (HCO₃⁻ 20). Resultado: <b>acidose mista</b> — por isso o pH caiu tanto." },
        { p: "Quais sinais e sintomas de choque esse paciente apresenta?", r: "Hipotensão (PA 90/60), taquicardia (120), taquipneia, febre, confusão mental, TEC prolongado, extremidades frias, oligúria e lactato elevado." },
        { p: "Quanto oxigênio ofertar e por qual dispositivo?", r: "Na hipoxemia grave: <b>máscara não reinalante com reservatório 10–15 L/min</b> (FiO₂ ~60–90%). Cateter nasal até 4–6 L/min (FiO₂ ~24–44%); Venturi para FiO₂ precisa. Alvo SpO₂ 92–96% (88–92% em DPOC retentor). Sem resposta, rebaixamento ou fadiga → VNI (se consciente e protegendo via aérea) ou IOT." },
        { p: "Pela definição Sepsis-3, o que é choque séptico?", r: "Sepse com necessidade de vasopressor para manter PAM ≥ 65 mmHg <b>e</b> lactato > 2 mmol/L, apesar de reposição volêmica adequada." }
      ]
    }
  ],
  alertas: [
    "Anotação: “Glasgow, pedir FAST”. O FAST é um protocolo de <b>trauma</b>. Na sepse, o ultrassom à beira do leito (POCUS: coração, veia cava, pulmão) pode ajudar a avaliar volemia e foco, mas não substitui o raio-X de tórax."
  ],
  resumo: "Pneumonia com sepse e hipoperfusão, insuficiência respiratória e acidose mista: O₂ em alto fluxo (VNI/IOT se necessário), culturas, ceftriaxona na 1ª hora, volume 30 mL/kg, noradrenalina se PAM < 65 e UTI."
});
