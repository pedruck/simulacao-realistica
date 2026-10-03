CASOS.push({
  id: 7,
  fonte: "Duas Colunas (5).pdf",
  local: "Pronto-atendimento",
  area: "Trauma",
  chamada: "Jovem de 19 anos que não consegue se mexer após mergulho em cachoeira",
  diagnostico: "Trauma raquimedular cervical (fratura C6–C7) com choque neurogênico",
  temas: ["Trauma raquimedular", "Choque neurogênico", "XABCDE"],
  cenarioOriginal: true,
  cenario: "Kleberson, 19 anos de idade, solteiro, estudante. Trazido pelos colegas após mergulho em cachoeira. Relata não conseguir se mexer e refere ter perdido a sensibilidade.",
  impressao: "{{Paciente deitado na maca, imóvel, consciente, com respiração curta.}}",
  triagem: {
    emergencia: true,
    explicacao: "Trauma por mergulho em água rasa + déficit motor e sensitivo: suspeita de trauma raquimedular cervical. Comece pelo <b>XABCDE</b> com restrição de movimento da coluna (anotação: “→ xABCDE!”)."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "XABCDE",
      enunciado: "Conduza o atendimento primário, letra por letra, dizendo o que avalia e o que faz.",
      itens: [
        { t: "X — Hemorragia exsanguinante externa", k: ["hemorragia", "sangramento", "exsanguin", "torniquete", "compressao direta"], r: "Sem hemorragia externa exsanguinante." },
        { t: "A — Via aérea + proteção da coluna cervical (estabilização manual, colar, maca rígida)", k: KW.viaAerea.concat(KW.colar, ["fala", "responde"]), r: "Fala normalmente: via aérea pérvia. {{Colar cervical posicionado, com restrição de movimento da coluna.}}", c: 1 },
        { t: "B — Expor o tórax: FR, padrão respiratório, ausculta e SpO₂", k: ["respira", "ventila", "auscult", "murmurio", "torax", "satura", "spo2", "padrao respiratorio"], r: "SpO₂ 83%. {{Respiração predominantemente abdominal (diafragmática), FR 24, MV presente bilateralmente, sem sinais de pneumotórax.}}", c: 1 },
        { t: "Oxigênio suplementar", k: KW.oxigenio, r: "Com O₂ por cateter nasal 3 L/min, a SpO₂ sobe {{para 95%}}.", c: 1 },
        { t: "C — Monitorização: PA, FC, pulsos, pele e perfusão", k: KW.monitor.concat(["circula", "perfus", "pulso", "enchimento capilar", " tec ", " pressao", " pa "]), r: "PA 70/40 mmHg; {{FC 52 bpm (bradicardia); pele quente e seca; TEC 2 s}}; sem sangramento visível.", c: 1 },
        { t: "Dois acessos venosos calibrosos + coleta de exames", k: KW.acesso, r: "Dois acessos venosos obtidos.", c: 1 },
        { t: "Cristaloide aquecido (Ringer lactato 250 mL em cada acesso) e reavaliar", k: KW.cristaloide, r: "Após Ringer lactato 250 mL em cada acesso, a PA sobe {{para 84/50 mmHg}}.", c: 1 },
        { t: "Excluir choque hemorrágico (FAST, pelve, fontes ocultas de sangramento)", k: KW.fast.concat(["hemorrag", "sangramento interno", "pelve", "bacia"]), r: "{{FAST negativo; pelve estável.}}", x: 1, c: 1 },
        { t: "D — Glasgow, pupilas, força e sensibilidade (nível neurológico)", k: KW.glasgow.concat(["sensibilidade", "forca", "motor", "nivel sensitivo", "deficit", "mex", "reflexo"]), r: "{{Glasgow 15; pupilas isocóricas e fotorreagentes. Tetraparesia flácida (mexe os ombros e flexiona os cotovelos, não move mãos nem pernas), arreflexia e perda de sensibilidade abaixo das clavículas.}}", c: 1 },
        { t: "E — Exposição, rolamento em bloco (dorso) e prevenção de hipotermia", k: KW.exposicao.concat(["em bloco"]), r: "{{Sem outras lesões; priapismo presente; dorso sem lesões. Manta térmica aplicada.}}" }
      ],
      ensino: "<b>Choque neurogênico</b> (distributivo): hipotensão + <b>bradicardia</b> + pele quente e seca, por perda do tônus simpático (lesões acima de T6). Mas no trauma, <b>hipotensão = hemorragia até prova em contrário</b>: procure sangramento (FAST, pelve, tórax) antes de atribuir ao TRM."
    },
    {
      tipo: "anamnese",
      titulo: "Anamnese dirigida (AMPLA)",
      enunciado: "Após a avaliação primária, colha a história dirigida. O que você pergunta?",
      itens: [
        { t: "Mecanismo do trauma (altura, profundidade, como caiu, perda de consciência, afogamento)", k: ["mecanismo", "como aconteceu", "como foi", "altura", "profund", "raso", "cabeca", "bateu", "desmaiou", "perdeu a consciencia", "afog"], r: "{{Pulou de cabeça de uma pedra de ~3 m em local raso e bateu a cabeça no fundo; não perdeu a consciência; os colegas o retiraram da água.}}", c: 1 },
        { t: "Sintomas (dor cervical, formigamento, falta de ar)", k: ["dor", "formig", "parestes", "falta de ar", "sente"], r: "{{Dor na nuca, formigamento nos braços e sensação de falta de ar.}}" },
        { t: "A — Alergias", k: KW.alergias, r: "{{Nega.}}" },
        { t: "M — Medicamentos em uso", k: KW.medicacoes, r: "{{Nenhum.}}" },
        { t: "P — Passado médico / prenhez", k: KW.comorbidades.concat(["passado", "previo", "cirurg"]), r: "{{Hígido.}}" },
        { t: "L — Líquidos e alimentos ingeridos (última refeição)", k: ["ultima refeic", "comeu", "jejum", "liquido", "bebeu", "alimenta"], r: "{{Almoçou há 2 h.}}" },
        { t: "A — Ambiente e eventos (álcool, drogas, tempo até o atendimento)", k: ["alcool", "bebida", "droga", "quanto tempo", "ambiente", "evento"], r: "{{Bebeu 3 latas de cerveja; chegou cerca de 1 h após o acidente.}}" }
      ],
      ensino: "No trauma, a anamnese é a <b>AMPLA</b>: Alergias, Medicamentos, Passado médico/prenhez, Líquidos e alimentos ingeridos, Ambiente e eventos relacionados ao trauma."
    },
    {
      tipo: "exame",
      titulo: "Exame secundário",
      enunciado: "Faça o exame secundário, com foco no exame neurológico e da coluna. O que você avalia?",
      itens: [
        { t: "Palpação da coluna (dor, degrau, crepitação) com rolamento em bloco", k: ["palp", "coluna", "degrau", "espinhos", "em bloco", "rolamento"], r: "{{Dor e degrau palpável na transição cervicotorácica (C6–C7).}}", c: 1 },
        { t: "Força muscular por grupos (miótomos)", k: ["forca", "motor", "miotomo", "mex", "movimenta"], r: "{{Ombros e flexão de cotovelos preservados (C5–C6); sem extensão de punho/cotovelo nem movimento de mãos e pernas.}}", c: 1 },
        { t: "Sensibilidade por dermátomos — definir o nível sensitivo", k: ["sensibilidade", "dermatomo", "nivel sensitivo", "sensitivo", "tato", "dor e temperatura"], r: "{{Sensibilidade presente em ombros, face lateral dos braços e polegar; ausente abaixo das clavículas.}}", c: 1 },
        { t: "Reflexos e tônus", k: ["reflexo", "tonus", "flacid", "babinski"], r: "{{Arreflexia e flacidez em membros inferiores (choque medular).}}" },
        { t: "Toque retal: tônus esfincteriano e sensibilidade perianal (lesão completa × incompleta)", k: ["toque retal", "toque", "esfincter", "perianal", "sacral"], r: "{{Esfíncter anal flácido, sem sensibilidade perianal — sugere lesão completa.}}", x: 1 },
        { t: "Priapismo / retenção urinária", k: ["priapismo", "bexiga", "globo vesical", "retencao urinaria"], r: "{{Priapismo presente; globo vesical palpável.}}", o: 1 },
        { t: "Exame da cabeça aos pés (outras lesões)", k: ["cabeca aos pes", "cabeca", "outras lesoes", "torax", "abdome", "extremidad"], r: "{{Escoriação frontal; sem outras lesões.}}" }
      ],
      ensino: "Classifique a lesão (escala ASIA): o toque retal define se é <b>completa</b> (sem função motora/sensitiva sacral) ou <b>incompleta</b> — o que muda o prognóstico."
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita?",
      itens: [
        { t: "Imagem da coluna cervical (TC é o exame de escolha; RX nas anotações)", k: ["raio x", " rx", "radiograf", " tc ", "tomograf", "coluna cervical", "cervical"], r: "RX cervical: <b>fratura de C6–C7</b>. {{(No adulto com suspeita de lesão cervical, a TC é o exame inicial de escolha.)}}", c: 1 },
        { t: "Ressonância magnética de coluna (medula e ligamentos)", k: ["ressonancia", " rm ", " rnm", " rmn"], r: "{{Contusão medular em C6–C7.}}", x: 1, o: 1 },
        { t: "FAST e RX de tórax e pelve (excluir hemorragia)", k: KW.fast.concat(["torax", "pelve", "bacia"]), r: "{{FAST negativo; RX de tórax e pelve sem alterações.}}", x: 1 },
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemácias", "5.200.000/mm³", "4.500.000 – 5.500.000", ""],
          ["Hemoglobina", "13,5 g/dL", "13,0 – 16,0", ""],
          ["Hematócrito", "42%", "40 – 50", ""],
          ["Leucócitos", "15.000/mm³", "4.000 – 10.000", "H"],
          ["Plaquetas", "250.000/mm³", "150.000 – 450.000", ""]
        ] } },
        { t: "Coagulograma", k: KW.coagulograma, r: { titulo: "Coagulograma", tab: [
          ["TP", "12 s", "10 – 14 s", ""],
          ["RNI", "1,1", "< 1,2", ""],
          ["TTPa", "30 s", "25 – 35 s", ""]
        ] } },
        { t: "Tipagem sanguínea e prova cruzada", k: KW.tipagem, r: "{{O+.}}", o: 1 },
        { t: "Gasometria arterial com lactato", k: KW.gasometria.concat(["lactato"]), r: "{{pH 7,36 · PaCO₂ 44 · PaO₂ 78 (com O₂) · HCO₃⁻ 24 · lactato 1,4 mmol/L.}}", x: 1, o: 1 }
      ],
      ensino: "Leucocitose (15.000) com Hb normal: resposta ao estresse do trauma. Hb e lactato normais e FAST negativo reforçam um choque <b>não hemorrágico</b> — mas a reavaliação seriada é obrigatória."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o seu diagnóstico? Justifique e cite o principal diferencial.",
      itens: [
        { t: "Trauma raquimedular cervical (fratura C6–C7)", k: ["raquimedular", " trm", "lesao medular", "medula", "fratura", "c6", "c7"], c: 1 },
        { t: "Choque neurogênico (distributivo)", k: ["neurogenic", "distributivo"], c: 1 },
        { t: "Justificativa: hipotensão + bradicardia + pele quente (perda do tônus simpático)", k: ["bradicard", "pele quente", "simpat", "vasodilat", "tonus"] },
        { t: "Comprometimento respiratório (paralisia de intercostais, respiração diafragmática)", k: ["insuficiencia respirat", "hipoxem", "intercost", "diafragm", "respirat"] },
        { t: "Diferencial obrigatório: choque hemorrágico (excluído); não confundir com choque medular", k: ["hemorrag", "hipovolem", "choque medular", "diferenc"], c: 1 }
      ],
      ensino: "<b>Choque medular</b> ≠ choque neurogênico: o medular é a perda transitória de reflexos e tônus abaixo da lesão (flacidez, arreflexia); o neurogênico é hemodinâmico (hipotensão + bradicardia)."
    },
    {
      tipo: "conduta",
      enunciado: "Descreva a conduta e o destino do paciente.",
      itens: [
        { t: "Manter restrição de movimento da coluna (colar, maca rígida, rolamento em bloco)", k: KW.colar.concat(["em bloco"]), c: 1 },
        { t: "O₂ e vigilância respiratória (IOT se fadiga ou hipoxemia refratária)", k: KW.oxigenio.concat(["intub", " iot"]) },
        { t: "Volume com cautela e, se a hipotensão persistir, noradrenalina (iniciar ~0,05–0,1 mcg/kg/min e titular)", k: KW.noradrenalina, c: 1 },
        { t: "Alvo de PAM elevado (≈ 85–90 mmHg) nos primeiros dias, para perfusão medular", k: [" pam", " 85 ", "pressao arterial media", "perfusao medular"], x: 1 },
        { t: "Atropina se bradicardia sintomática", k: ["atropina"], x: 1 },
        { t: "Sonda vesical (bexiga neurogênica) e controle de diurese", k: KW.sondaVesical, x: 1 },
        { t: "Neurocirurgia/ortopedia: descompressão e estabilização precoces; centro de trauma", k: ["neurocirurg", "ortoped", "cirurg", "descompress", "estabiliza", "transfer", "especialista"], c: 1 },
        { t: "Prevenir complicações: hipotermia, lesões por pressão, TVP", k: ["hipoterm", "lesao por pressao", "escara", "decubito", " tvp", "profilaxia"], x: 1, o: 1 }
      ],
      ensino: "Corticoide (metilprednisolona) <b>não é recomendado de rotina</b> no TRM agudo. Anotação: “noradrenalina → dose?” — dose inicial usual 0,05–0,1 mcg/kg/min, titulada a cada 5–15 min até o alvo de PAM."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Diferencie choque neurogênico de choque medular.", r: "<b>Neurogênico</b>: distúrbio hemodinâmico por perda do tônus simpático (lesão acima de T6) → hipotensão, bradicardia, pele quente. <b>Medular</b>: perda transitória de função medular abaixo da lesão → flacidez, arreflexia, anestesia; não é um choque circulatório." },
        { p: "Por que o paciente fica bradicárdico e com a pele quente?", r: "A lesão interrompe a via simpática (que sai de T1–L2): perde-se a vasoconstrição (vasodilatação → pele quente, hipotensão) e o estímulo cardíaco simpático, predominando o tônus vagal (bradicardia)." },
        { p: "No trauma, por que não se pode assumir de imediato que a hipotensão é neurogênica?", r: "Porque <b>hipotensão no trauma é hemorrágica até prova em contrário</b>. É preciso procurar sangramento (tórax, abdome/FAST, pelve, ossos longos, externo) antes de atribuir ao TRM." },
        { p: "Qual a dose inicial de noradrenalina?", r: "Em geral 0,05–0,1 mcg/kg/min em bomba de infusão (alguns protocolos iniciam em 0,01–0,05), titulando até o alvo de PAM. Pode ser iniciada em acesso periférico calibroso até obter acesso central." },
        { p: "Qual a sequência de atendimento de uma parada cardiorrespiratória? (anotação no topo da página do caso)", r: "Reconhecer (não responde, não respira normalmente, sem pulso) → chamar ajuda/desfibrilador → <b>compressões</b> de alta qualidade (100–120/min, 5–6 cm) → <b>ventilação</b> (30:2 sem via aérea avançada) → ritmo chocável? choque → <b>adrenalina</b> 1 mg a cada 3–5 min. Cada minuto sem RCP reduz a sobrevida em ~7–10%." }
      ]
    }
  ],
  alertas: [
    "Anotação: “O₂ por cateter 3 L/min”. Funcionou no caso, mas com SpO₂ de 83% no trauma o habitual é começar com O₂ em alto fluxo (máscara com reservatório 10–15 L/min) e reduzir conforme a saturação.",
    "Anotação: “1 min → 10% de sequela” (PCR). O dado clássico é que cada minuto sem RCP/desfibrilação reduz a <b>sobrevida</b> em cerca de 7–10%."
  ],
  resumo: "Mergulho em água rasa + tetraparesia + hipotensão com bradicardia: TRM cervical com choque neurogênico. XABCDE com proteção da coluna, excluir hemorragia, volume com cautela, noradrenalina e neurocirurgia."
});
