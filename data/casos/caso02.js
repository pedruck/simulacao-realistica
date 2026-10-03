CASOS.push({
  id: 2,
  fonte: "Duas Colunas (1).pdf",
  local: "Pronto-atendimento",
  area: "Clínica / Otorrino",
  chamada: "Homem de 55 anos com sangramento nasal intenso há 40 minutos",
  diagnostico: "Epistaxe anterior (plexo de Kiesselbach) por ressecamento da mucosa e trauma digital",
  temas: ["Epistaxe", "Sangramento", "Coagulograma"],
  cenario: "Homem, 55 anos, chega ao pronto-atendimento com sangramento nasal intenso, unilateral, há 40 minutos, sem trauma aparente.",
  impressao: "{{Paciente sentado, ansioso, segurando um pano encharcado de sangue no nariz, mas conversando normalmente.}}",
  triagem: {
    emergencia: true,
    explicacao: "Há sangramento ativo intenso: antes da anamnese detalhada, faça uma avaliação rápida de estabilidade (via aérea/aspiração e sinais de choque) e as medidas para conter o sangramento. Não é um XABCDE de trauma completo, mas é uma abordagem inicial de urgência — exatamente a ordem das anotações: 1º parar o sangramento, 2º ameaça à vida?, 3º monitorar."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "Abordagem inicial",
      enunciado: "Quais são suas primeiras ações diante desse sangramento?",
      itens: [
        { t: "Paramentação/EPI (luvas, máscara, óculos — risco de respingo)", k: [" epi", "luva", "oculos", "avental", "paramenta", "protecao individual"], o: 1 },
        { t: "Paciente sentado e inclinado para a frente (evita deglutir/aspirar sangue)", k: ["sentad", "inclin", "para frente", "pra frente", "cabeca para frente", "nao deitar"], r: "Paciente sentado, inclinado para a frente, cuspindo o sangue em uma cuba.", c: 1 },
        { t: "Compressão digital contínua das asas nasais por 10–15 min", k: ["compress", "comprim", "apert", "pression", "pincar", "tamp&nariz", "tampa o nariz", "asas nasais", "asa nasal"], r: "Com a compressão, o sangramento diminui, mas {{volta ao soltar}}.", c: 1 },
        { t: "Avaliar via aérea e risco de aspiração (tosse, sangue na orofaringe)", k: KW.viaAerea.concat(["aspira", "tosse", "orofaringe", "engol", "deglut", "garganta"]), r: "{{Sem tosse; pouco sangue escorrendo para a orofaringe.}}" },
        { t: "Sinais vitais e sinais de choque (PA, FC, perfusão)", k: KW.sinaisVitais.concat(["choque", "perfus", "monitor"]), r: "{{PA 168/96 mmHg · FC 98 bpm ·}} FR 18 · SpO₂ 98% · T 37,0 °C · {{perfusão preservada}}.", c: 1 },
        { t: "Acesso venoso se sangramento volumoso ou instabilidade", k: KW.acesso, r: "{{Acesso venoso periférico obtido.}}", o: 1 }
      ],
      ensino: "Ordem das anotações: <b>1º parar o sangramento → 2º há ameaça à vida?</b> (tosse/aspiração, choque hipovolêmico, disfunção renal) <b>→ 3º monitorar o sangramento</b>. A compressão deve ser contínua por 10–15 min, sem soltar para conferir."
    },
    {
      tipo: "anamnese",
      enunciado: "O sangramento diminuiu com a compressão. O que você pergunta ao paciente?",
      itens: [
        { t: "Episódios anteriores", k: KW.previo.concat(["recorr", "frequente"]), r: "Nunca aconteceu antes." },
        { t: "Comorbidades", k: KW.comorbidades, r: "Hipertenso." },
        { t: "Medicações — especialmente anticoagulantes e antiagregantes", k: KW.medicacoes.concat(["anticoag", "antiagreg", " aas", "aspirina", "varfarina", "clopidogrel", "rivaroxabana", "apixabana", "anti inflam"]), r: "Losartana. {{Nega AAS, anticoagulantes ou anti-inflamatórios.}}", c: 1 },
        { t: "Algo diferente nos últimos dias (dor, obstrução, resfriado, rinite)", k: ["ultimos dias", "algo diferente", "alguma coisa diferente", "obstruc", "entupid", "congest", "resfriad", "gripe", "rinite", "coriza", "dor"], r: "Dor na parte superior do nariz nos últimos dias." },
        { t: "Manipulação nasal ou trauma (fez alguma coisa diferente?)", k: ["trauma", "bateu", "pancada", "manipul", "cocar", "cutucar", "meleca", "dedo", "assoou", "assoar", "fez alguma coisa", "fez algo"], r: "Tirou meleca do nariz pouco antes de começar a sangrar.", c: 1 },
        { t: "Ambiente e clima (ar seco, ar-condicionado)", k: ["clima", "seco", "umidade", "ar condicionado", "onde mora", "tempo seco", "ambiente"], r: "Mora em Brasília; o tempo está muito seco nas últimas semanas." },
        { t: "História familiar de sangramentos", k: KW.familia, r: "Ninguém na família com a mesma queixa {{nem com doenças de sangramento}}." },
        { t: "Sangramentos em outros locais (gengiva, hematomas, urina, fezes)", k: ["gengiva", "hematoma", "mancha roxa", "roxo", "equimose", "outro lugar", "outros locais", "outros sangramentos", "urina", "fezes"], r: "{{Nega sangramentos em outros locais.}}" },
        { t: "Alergias", k: KW.alergias, r: "{{Nega alergias.}}" },
        { t: "Hábitos (álcool, tabaco, cocaína inalada)", k: KW.habitos.concat(["cocaina"]), r: "{{Nega tabagismo e drogas; bebe socialmente.}}", o: 1 }
      ],
      ensino: "Causas <b>locais</b>: trauma digital, ressecamento (clima seco), rinite, corpo estranho, tumor. Causas <b>sistêmicas</b>: HAS, anticoagulantes/antiagregantes, coagulopatias, hepatopatia. Pergunte <b>sempre</b> sobre anticoagulantes e antiagregantes."
    },
    {
      tipo: "exame",
      enunciado: "Descreva o exame físico que você realiza.",
      itens: [
        { t: "Rinoscopia anterior com boa iluminação após remover coágulos (localizar a fonte)", k: ["rinoscop", "especulo", "fonte", "ponto sangrante", "kiesselbach", "septo", "fossa nasal", "examin&nariz", "olh&nariz", "inspecao nasal"], r: "{{Ponto sangrante na região anterior do septo nasal (área de Little / plexo de Kiesselbach), com mucosa ressecada e crostas.}}", c: 1 },
        { t: "Oroscopia (sangue escorrendo pela parede posterior da faringe sugere fonte posterior)", k: ["oroscop", "orofaringe", "garganta", "faringe", "boca"], r: "{{Mínimo sangue na orofaringe, que cessa com a compressão anterior.}}" },
        { t: "Sinais vitais", k: KW.sinaisVitais, r: "{{PA 168/96 mmHg · FC 98 bpm ·}} T 37,0 °C · SpO₂ 98%" },
        { t: "Perfusão e coloração (sinais de instabilidade)", k: ["perfus", "enchimento capilar", " tec ", "palidez", "corado", "mucosa", "pulso"], r: "{{Corado, TEC < 2 s, pulsos cheios.}}" },
        { t: "Sinais de discrasia (petéquias, equimoses)", k: ["petequia", "equimose", "hematoma", "pele"], r: "{{Sem petéquias ou equimoses.}}", o: 1 }
      ],
      ensino: "Cerca de 90% das epistaxes são <b>anteriores</b> (plexo de Kiesselbach). A <b>posterior</b> é mais comum em idosos, hipertensos e ateroscleróticos: sangue escorre pela orofaringe mesmo com compressão anterior."
    },
    {
      tipo: "exames",
      enunciado: "Você pede algum exame complementar? Quais e por quê?",
      itens: [
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemácias", "5,2 milhões/mm³", "4,5 – 5,5 milhões", ""],
          ["Hemoglobina", "14,5 g/dL", "13,0 – 16,0", ""],
          ["Hematócrito", "47,0%", "40,0 – 50,0", ""],
          ["Leucócitos", "7.000/mm³", "3.600 – 11.000", ""],
          ["Plaquetas", "250 mil/mm³", "130 – 450 mil", ""]
        ] } },
        { t: "Coagulograma (TP/INR e TTPa)", k: KW.coagulograma, r: { titulo: "Coagulograma", tab: [
          ["TP", "12 s", "12 – 14 s", ""],
          ["INR", "1,1", "0,8 – 1,2", ""],
          ["TTPa", "30 s", "25 – 35 s", ""]
        ] } },
        { t: "Tipagem sanguínea (se sangramento volumoso)", k: KW.tipagem, r: "{{O+}}", o: 1 }
      ],
      ensino: "Epistaxe anterior simples, sem anticoagulante, não exige exames obrigatoriamente. Peça hemograma e coagulograma se o sangramento for volumoso, recorrente, houver uso de anticoagulante ou suspeita de coagulopatia. Aqui está tudo normal → <b>causa local</b>."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o seu diagnóstico? Justifique.",
      itens: [
        { t: "Epistaxe anterior (plexo de Kiesselbach)", k: ["epistaxe", "sangramento nasal", "anterior", "kiesselbach", "little"], c: 1 },
        { t: "Causa local: ressecamento da mucosa (clima seco) + trauma digital", k: ["seco", "resseca", "clima", "meleca", "digital", "manipul", "trauma"], c: 1 },
        { t: "Paciente estável, sem anemia e sem coagulopatia (exames normais)", k: ["estavel", "sem coagulopatia", "exames normais", "coagulograma normal", "hemograma normal", "sem anemia"] },
        { t: "Hipertensão arterial como fator associado (PA elevada)", k: ["hipertens", "pressao alta", "pa elevada", "pressao elevada"] },
        { t: "Diferenciais: epistaxe posterior, coagulopatia/anticoagulante, tumor nasal, corpo estranho", k: ["diferenc", "posterior", "coagulopat", "tumor", "neoplas", "corpo estranho"] }
      ],
      ensino: "Anotação: “epistaxe por tempo seco”. Sangramento unilateral, anterior, com ponto visível no septo, após manipulação digital em clima seco."
    },
    {
      tipo: "conduta",
      enunciado: "Descreva sua conduta, do primeiro passo até a alta.",
      itens: [
        { t: "Compressão bidigital das asas nasais 10–15 min, sentado e inclinado para a frente", k: ["compress", "comprim", "apert", "pression", "tamp&nariz", "asas nasais", "inclin"], c: 1 },
        { t: "Vasoconstritor tópico (oximetazolina/nafazolina) em algodão", k: ["vasoconstrit", "oximetazolina", "nafazolina", "afrin", "adrenalina topica", "algodao"], x: 1 },
        { t: "Cauterização química (nitrato de prata) se ponto sangrante visível", k: ["cauteriz", "nitrato de prata", "eletrocaut"], x: 1 },
        { t: "Se persistir: tamponamento nasal anterior (gaze com vaselina/pomada, Merocel)", k: ["tampon", "gaze", "merocel"], r: "{{Com o tamponamento anterior, o sangramento cessa.}}", c: 1 },
        { t: "Se falhar: tamponamento posterior (sonda de Foley/balão), internação e otorrino", k: ["posterior", "foley", "balao", "otorrino", "especialista"] },
        { t: "Controle da PA sem redução abrupta (analgesia/ansiolítico se necessário)", k: ["anti hipert", "controle da pressao", "control&pressao", "controle pressorico", "reduz&pressao", "baix&pressao", "captopril", "ansiolit"], x: 1, o: 1 },
        { t: "Orientações: umidificar o ambiente, soro fisiológico nasal, não manipular nem assoar com força, evitar esforço, retornar se recorrer", k: ["orient", "umidific", "soro fisiologico", "lavagem nasal", "nao manipular", "nao cocar", "nao assoar", "retorn", "vaselina", "hidrat"], c: 1 },
        { t: "Monitorar o sangramento antes da alta", k: ["monitor", "observ", "reavali"], r: "{{Após 30 min de observação, sem novo sangramento.}}" }
      ],
      ensino: "Escalonamento: <b>compressão → vasoconstritor tópico → cauterização (ponto visível) → tamponamento anterior → tamponamento posterior/otorrino</b> (ligadura ou embolização em casos refratários). Anotações: “resolveu? sim → anterior (tamponamento com gaze); não → posterior”."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Por que inclinar o paciente para a frente e não para trás?", r: "Para o sangue sair pelas narinas, evitando que seja deglutido (náuseas, vômitos, falsa hematêmese) ou <b>aspirado</b> para a via aérea." },
        { p: "Quais são as ameaças à vida em um paciente com epistaxe?", r: "Aspiração/comprometimento da via aérea, <b>choque hipovolêmico</b> (sangramentos volumosos, principalmente posteriores) e descompensação de doenças prévias (ex.: disfunção renal por hipoperfusão, isquemia em cardiopatas)." },
        { p: "Como diferenciar epistaxe anterior de posterior?", r: "<b>Anterior</b>: sangra pela narina, ponto visível na rinoscopia anterior, cede com compressão. <b>Posterior</b>: sangue escorrendo pela orofaringe, frequentemente bilateral, não cede com compressão anterior; mais comum em idosos/hipertensos (ramos da artéria esfenopalatina)." },
        { p: "Quando pedir exames laboratoriais?", r: "Sangramento volumoso ou recorrente, sinais de instabilidade, uso de anticoagulante/antiagregante, suspeita de coagulopatia (sangramentos em outros locais) ou hepatopatia." }
      ]
    }
  ],
  alertas: [
    "Nas anotações: “tampar o nariz por 5 min”. As recomendações atuais são de compressão <b>contínua por 10–15 min</b> antes de escalar a conduta."
  ],
  resumo: "Epistaxe anterior por ressecamento + manipulação: posicione inclinado para a frente, comprima 10–15 min, use vasoconstritor/cauterização e tamponamento anterior se preciso; oriente umidificação e retorno."
});
