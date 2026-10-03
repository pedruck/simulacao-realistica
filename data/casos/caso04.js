CASOS.push({
  id: 4,
  fonte: "Duas Colunas (3).pdf",
  local: "Pronto-atendimento",
  area: "Hemoterapia",
  chamada: "Paciente com febre, calafrios e tremores durante uma transfusão",
  diagnostico: "Reação febril não hemolítica (RFNH)",
  temas: ["Reação transfusional", "Hemólise", "Hemoterapia"],
  cenario: "João, 58 anos, está no pronto-atendimento recebendo uma transfusão de concentrado de hemácias. {{Cerca de 40 minutos após o início,}} apresenta febre, calafrios e tremores. A enfermagem chama você.",
  impressao: "{{Paciente tremendo, coberto, consciente e falando normalmente; a bolsa de sangue ainda está correndo.}}",
  triagem: {
    emergencia: true,
    explicacao: "Reação transfusional aguda é uma emergência até prova em contrário: a primeira ação é <b>interromper a transfusão</b> e avaliar sinais vitais/ABC antes de qualquer anamnese."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "Conduta imediata",
      enunciado: "O que você faz imediatamente, na ordem?",
      itens: [
        { t: "Interromper a transfusão imediatamente (fechar o gotejamento)", k: ["parar", " paro ", " pare ", "interromp", "suspend", "fechar", "fecho", "pausar", "pauso", "cessar", "clampe", "desligar", "desligo"], r: "Transfusão interrompida.", c: 1 },
        { t: "Manter o acesso venoso com soro fisiológico 0,9% (novo equipo)", k: ["mant&acesso", "mant&acesso", "soro fisiologico", " sf ", "equipo", "fisiologico", "acesso"], r: "Acesso mantido com SF 0,9%.", c: 1 },
        { t: "Aferir sinais vitais e comparar com os pré-transfusionais", k: KW.sinaisVitais.concat(["antes da transfus", "pre transfus", "basal"]), r: "{{Antes da transfusão: T 36,6 °C · PA 130/80 · FC 84. Agora: T 38,4 °C · PA 132/84 · FC 104 · FR 20 · SpO₂ 97% (ar ambiente).}}", c: 1 },
        { t: "Conferir a bolsa e a identificação do paciente à beira do leito (rótulo, tipagem, registro)", k: ["confer", "confir", "checar", "checo", "identifica", "bolsa", "rotulo", "etiqueta", "pulseira", "checagem"], r: "Identificação conferida: bolsa correta para o paciente {{(O+, mesmo registro)}}.", c: 1 },
        { t: "Avaliar sinais de gravidade (hipotensão, dispneia, dor lombar, urticária, urina escura)", k: ["dispneia", "falta de ar", "lombar", "urticaria", "mancha", "prurido", "coceira", "hipotens", "urina escura", "hemoglobinuria", "sibil", "gravidade"], r: "{{Sem dispneia, sibilos, urticária, dor lombar ou hipotensão; urina clara.}}" },
        { t: "Comunicar/notificar o banco de sangue e enviar a bolsa com o equipo + amostras do paciente", k: ["banco de sangue", "agencia transfusional", "notific", "hemovigil", "comunic", "enviar a bolsa", "envio a bolsa", "mando a bolsa", "devolv", "hemocentro"], r: "Banco de sangue acionado; bolsa e amostras encaminhadas.", c: 1 },
        { t: "Antitérmico endovenoso (dipirona ou paracetamol)", k: KW.antitermico, r: "{{Dipirona 1 g EV administrada.}}" }
      ],
      ensino: "Toda reação transfusional: <b>PARAR → manter acesso com SF → sinais vitais → conferir bolsa e identificação → notificar o banco e enviar bolsa + amostras → tratar sintomas</b>. Só depois classifique a reação."
    },
    {
      tipo: "anamnese",
      enunciado: "O paciente está consciente e colaborativo. O que você pergunta?",
      itens: [
        { t: "Dor (lombar, torácica, no local da infusão)", k: ["dor"], r: "Nega dor lombar, torácica ou no local do acesso." },
        { t: "Manchas, coceira ou inchaço (reação alérgica)", k: ["mancha", "coceira", "prurido", "urticaria", "inchaco", "vermelh", "alerg"], r: "Nega manchas ou coceira." },
        { t: "Transfusões anteriores e reações prévias", k: ["transfus", "ja recebeu", "ja fez", "reacao anterior", "outras vezes", "antes "], r: "Já recebeu várias transfusões {{(a última há 4 meses) e uma vez teve “febre e tremedeira” parecida}}.", c: 1 },
        { t: "Doenças prévias", k: KW.comorbidades.concat(["falcifor", "previa"]), r: "Anemia falciforme e hipertensão." },
        { t: "Medicações em uso", k: KW.medicacoes, r: "{{Ácido fólico, hidroxiureia e losartana.}}" },
        { t: "Falta de ar ou tosse", k: ["falta de ar", "dispneia", "tosse", "respirar"], r: "{{Nega.}}" },
        { t: "Alteração na cor da urina", k: ["urina", "xixi"], r: "{{Urina clara, sem alteração.}}" },
        { t: "Motivo/indicação da transfusão", k: ["motivo", "indicac", "por que esta recebendo", "por que recebe", "por que precisou"], r: "{{Anemia sintomática (Hb 7,0 g/dL) com cansaço importante.}}", o: 1 }
      ],
      ensino: "Anotações: “perguntar dor, manchas, se já fez transfusão antes, se tem doença prévia (anemia falciforme, hipertensão)”. Politransfundidos (como na anemia falciforme) têm mais anticorpos contra leucócitos → mais RFNH."
    },
    {
      tipo: "exame",
      enunciado: "Descreva o exame físico dirigido.",
      itens: [
        { t: "Sinais vitais seriados", k: KW.sinaisVitais, r: "{{T 38,4 °C · PA 132/84 · FC 104 · FR 20 · SpO₂ 97%}}" },
        { t: "Pele (urticária, exantema, icterícia, petéquias)", k: ["pele", "urticaria", "rash", "exantema", "ictericia", "ictero", "mancha", "petequia", "ectoscop", "inspecao"], r: "{{Sem urticária, exantema, icterícia ou petéquias.}}" },
        { t: "Ausculta pulmonar (TRALI, TACO, broncoespasmo)", k: ["auscult&pulm", "pulm", "murmurio", "crepit", "sibil", "respirat"], r: "{{MV presente bilateralmente, sem ruídos adventícios.}}", c: 1 },
        { t: "Sinais de sobrecarga volêmica (turgência jugular, edema)", k: ["jugular", "turgencia", "edema", "sobrecarga", "estase"], r: "{{Sem turgência jugular ou edema.}}" },
        { t: "Ausculta cardíaca", k: [" cardi", "coracao", "bulha", "sopro", "auscult&cora", "auscult&cardi"], r: "{{Taquicárdico, RCR 2T, sopro sistólico 2+/6+ (anemia).}}" },
        { t: "Local da punção", k: ["local da puncao", "sitio", "flebite", "local do acesso"], r: "{{Sem dor, calor ou extravasamento.}}", o: 1 }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita para investigar essa reação?",
      itens: [
        { t: "Repetir tipagem ABO/Rh do paciente e da bolsa", k: KW.tipagem.filter(function (k) { return k !== "prova cruzada"; }), r: { titulo: "Banco de sangue", tab: [
          ["Tipagem do paciente", "O+", "", ""],
          ["Tipagem da bolsa transfundida", "O+", "", ""]
        ] }, c: 1 },
        { t: "Prova cruzada", k: ["prova cruzada", "compatibilidade"], r: "Prova cruzada: sem hemólise ou aglutinação.", c: 1 },
        { t: "Coombs direto (teste da antiglobulina direta)", k: ["coombs", "antiglobulina"], r: "{{Negativo.}}", x: 1 },
        { t: "Hemograma com esfregaço", k: KW.hemograma.concat(["esfregaco"]), r: { titulo: "Hemograma", tab: [
          ["Hemoglobina", "7,0 g/dL", "13 – 17", "L"],
          ["Leucócitos", "10.200/mm³", "3.600 – 11.000", ""],
          ["Plaquetas", "210 mil", "150 – 400 mil", ""],
          ["Esfregaço", "Sem alterações", "", ""]
        ] } },
        { t: "Marcadores de hemólise: LDH, bilirrubinas e haptoglobina", k: ["ldh", "desidrogenase", "bilirrub", "haptoglob", "hemolise", "bioquim"], r: { titulo: "Bioquímica", tab: [
          ["LDH", "240 U/L", "< 250", ""],
          ["Bilirrubina total", "1,0 mg/dL", "até 1,2", ""],
          ["Bilirrubina direta", "0,3 mg/dL", "até 0,3", ""],
          ["Bilirrubina indireta", "0,7 mg/dL", "até 0,9", ""],
          ["Haptoglobina", "130", "41 – 165", ""]
        ] }, c: 1 },
        { t: "Função renal e potássio", k: ["creatinina", "potassio", "funcao renal", "ureia", "eletrolit", "bioquim"], r: { titulo: "Bioquímica", tab: [
          ["Creatinina", "0,9 mg/dL", "< 1,0", ""],
          ["Potássio", "4,2 mEq/L", "3,5 – 5,0", ""]
        ] } },
        { t: "Dímero-D / coagulação (rastrear CIVD)", k: ["dimero", "coagulograma", "civd", "fibrinogenio"], r: "Dímero-D 450 ng/mL (VR < 500) — normal." },
        { t: "Hemocultura do paciente e cultura da bolsa (se suspeita de contaminação)", k: ["hemocultura", "cultura"], r: "{{Colhidas — negativas em 48 h.}}", x: 1, o: 1 },
        { t: "Urina tipo I (hemoglobinúria)", k: ["urina", " eas", "sumario de urina", "hemoglobinuria"], r: "{{Sem hemoglobinúria.}}", x: 1, o: 1 }
      ],
      ensino: "Para <b>excluir hemólise</b>: tipagem e prova cruzada compatíveis, Coombs direto negativo, LDH, bilirrubina indireta e haptoglobina normais e ausência de hemoglobinúria → não é reação hemolítica aguda."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o diagnóstico? Defina o conceito e cite os diferenciais.",
      itens: [
        { t: "Reação febril não hemolítica (RFNH)", k: ["febril nao hemolit", "rfnh", "reacao febril"], c: 1 },
        { t: "Conceito: aumento ≥ 1 °C (temperatura ≥ 38 °C) durante ou até 4 h após a transfusão, ± calafrios/tremores, sem outra causa", k: ["1 grau", "1 c ", "um grau", "4 horas", "quatro horas", "4h", "durante a transfus", "citocina", "anticorpo", "leucocit"], c: 1 },
        { t: "Hemólise excluída pelos exames", k: ["sem hemolise", "hemolise excluida", "exclui hemolise", "exclu&hemolise", "nao hemolit", "ldh normal", "bilirrubina normal", "haptoglobina normal"] },
        { t: "Diferenciais: hemolítica aguda (ABO), contaminação bacteriana/sepse, TRALI, TACO, alérgica/anafilática", k: ["diferenc", "hemolitica aguda", "contamina", "sepse", "trali", "taco", "anafil", "alergica"] },
        { t: "Classificação: reação aguda (< 24 h) e imune", k: ["aguda", "imune", "imunolog"] }
      ],
      ensino: "Anotações: “o que é? reação febril não hemolítica → <b>conceito!</b>” e “geralmente sobe 1 °C, por isso preciso dos sinais vitais do paciente antes da transfusão”."
    },
    {
      tipo: "conduta",
      enunciado: "Qual a conduta a partir de agora?",
      itens: [
        { t: "Antitérmico (dipirona 1 g EV ou paracetamol)", k: KW.antitermico, c: 1 },
        { t: "Notificar o banco de sangue/hemovigilância (ficha de reação transfusional)", k: ["notific", "banco de sangue", "hemovigil", "agencia transfusional", "comunic"], c: 1 },
        { t: "Não reinstalar a mesma bolsa (devolver ao banco de sangue)", k: ["nao reinstal", "nao reinici", "nao reinfund", "descart", "nao retom", "nao volt", "devolv", "outra bolsa", "nova bolsa"], x: 1 },
        { t: "Se ainda houver indicação (Hb 7 sintomática): nova bolsa de concentrado de hemácias, de preferência leucorreduzida", k: ["concentrado de hemacias", "nova bolsa", "outra bolsa", "leucorreduz", "leucodeple", "filtrad", "nova transfus"], c: 1 },
        { t: "Monitorar sinais vitais antes, durante (principalmente nos 15 min iniciais) e após", k: ["monitor", "sinais vitais", "observ", "reavali"] },
        { t: "Prevenção nas próximas transfusões: hemocomponentes leucorreduzidos (pré-medicação com antitérmico só se recorrente)", k: ["leucorreduz", "leucodeple", "pre medic", "premedic", "prevenc", "proximas transfus"], x: 1 },
        { t: "Meperidina se tremores intensos", k: ["meperidina", "petidina"], x: 1, o: 1 }
      ],
      ensino: "Anotações — conduta específica por reação: <b>TACO</b> → diurético; <b>TRALI</b> → suporte respiratório (olhar a saturação antes e depois); <b>alérgica</b> → anti-histamínico; <b>RFNH</b> → antitérmico; <b>sepse</b> → antitérmico, hemoculturas e antibiótico de amplo espectro; <b>anafilaxia</b> → adrenalina."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "O que é a reação febril não hemolítica?", r: "Aumento de temperatura ≥ 1 °C (atingindo ≥ 38 °C), com ou sem calafrios e tremores, durante ou até 4 h após a transfusão, sem outra causa. Mecanismo: citocinas acumuladas na bolsa e/ou anticorpos do receptor contra leucócitos do doador. É <b>diagnóstico de exclusão</b> (afastar hemólise e contaminação bacteriana)." },
        { p: "Quais reações transfusionais são agudas e quais são tardias?", r: "<b>Agudas</b> (< 24 h): hemolítica aguda, RFNH, alérgica, anafilática, TRALI, TACO, contaminação bacteriana, hipotensiva e distúrbios metabólicos (hipocalcemia, hipercalemia, hipotermia). <b>Tardias</b> (> 24 h): hemolítica tardia, aloimunização, doença do enxerto contra o hospedeiro transfusional, púrpura pós-transfusional, sobrecarga de ferro e infecções transmitidas." },
        { p: "Como classificá-las em imunes e não imunes?", r: "<b>Imunes</b>: hemolítica aguda e tardia, RFNH, alérgica, anafilática, TRALI, DECH, púrpura pós-transfusional, aloimunização. <b>Não imunes</b>: TACO, contaminação bacteriana, hemólise não imune (mecânica/térmica), hipotermia, distúrbios metabólicos, sobrecarga de ferro, embolia gasosa e infecções." },
        { p: "Qual a conduta específica de cada reação?", r: "TACO: diurético e reduzir velocidade. TRALI: suporte respiratório (O₂/ventilação), sem diurético. Alérgica: anti-histamínico. RFNH: antitérmico. Contaminação/sepse: culturas do paciente e da bolsa + antibiótico de amplo espectro. Anafilaxia: adrenalina IM 0,5 mg. Hemolítica aguda: hidratação para manter diurese, suporte e tratamento de CIVD." },
        { p: "Por que é necessário aferir os sinais vitais antes da transfusão?", r: "Para ter o <b>basal</b>: a RFNH e outras reações são definidas por variação (ex.: aumento ≥ 1 °C, queda de PA, queda de SpO₂ no TRALI)." }
      ]
    }
  ],
  alertas: [],
  resumo: "Febre e calafrios durante transfusão: pare a transfusão, mantenha o acesso com SF, confira bolsa e identificação, notifique o banco e exclua hemólise. RFNH → antitérmico e, se necessário, nova bolsa leucorreduzida."
});
