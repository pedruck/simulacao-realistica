CASOS.push({
  id: 3,
  fonte: "Duas Colunas (2).pdf",
  local: "UBS",
  area: "Clínica / Ginecologia",
  chamada: "Mulher de 38 anos com cansaço, palidez e palpitações",
  diagnostico: "Anemia ferropriva por sangramento uterino anormal (miomas submucosos e pólipos endometriais)",
  temas: ["Anemia ferropriva", "Sangramento uterino anormal", "Hemograma"],
  cenario: "Mulher, 38 anos, procura a UBS por fadiga constante há 1–2 meses, palidez há 1 mês e “batedeira no coração” há 2 semanas.",
  impressao: "{{Paciente deambulando, consciente, conversando normalmente, um pouco descorada.}}",
  triagem: {
    emergencia: false,
    explicacao: "Paciente estável, deambulando, em atendimento ambulatorial (UBS) e com sinais vitais normais (FC 78, PA 130/80): não precisa de XABCDE. Comece pela apresentação e por uma anamnese completa."
  },
  etapas: [
    {
      tipo: "anamnese",
      enunciado: "Apresente-se e conduza a anamnese. O que você pergunta?",
      itens: [
        { t: "Apresentação e identificação", k: KW.apresentacao.concat(KW.identificacao), r: "{{Carla, 38 anos, professora, mora em Brasília.}}" },
        { t: "Fadiga: início, evolução e relação com esforço", k: ["cansaco", "fadiga", "esforco", "fraqueza", "quando comec", "quanto tempo", "inicio"], r: "Cansaço constante há 1–2 meses, mesmo sem esforço." },
        { t: "Palidez e palpitações (início e características)", k: ["palidez", "palida", "batedeira", "palpita", "coracao"], r: "Notou a palidez há 1 mês; a “batedeira” começou há 2 semanas." },
        { t: "Sinais de gravidade (dispneia, dor torácica, síncope, tontura)", k: ["falta de ar", "dispneia", "dor no peito", "dor toracica", "desmaio", "sincope", "tontura"], r: "{{Tontura ao levantar rápido; nega dor torácica ou desmaio.}}" },
        { t: "História menstrual (regularidade, intervalo, duração, volume)", k: ["menstru", "ciclo", "fluxo", "absorvente", "sangramento vaginal", "regra"], r: "Menstruação irregular: ciclos espaçados (a cada ~3 meses), mas dura <b>12 dias</b>, {{com fluxo intenso e coágulos (troca o absorvente a cada 1–2 h)}}.", c: 1 },
        { t: "Antecedentes gineco-obstétricos (gestações, partos, abortos, contracepção)", k: ["gesta", "gravidez", "gravida", "parto", "aborto", "filhos", "anticoncep", "contracep", "ultima menstrua"], r: "Teve um aborto {{espontâneo há 6 anos (G2P1A1); não usa contraceptivo hormonal}}." },
        { t: "Alimentação (aprofundar: carne, feijão, verduras, dieta restritiva)", k: ["aliment", "dieta", "come ", "carne", "vegetar", "vegan", "feijao", "refeic"], r: "Alimentação ok — {{come carne vermelha 3×/semana, feijão e verduras}}." },
        { t: "Perdas gastrointestinais (sangue nas fezes, fezes escuras, hábito intestinal)", k: ["fezes", "evacua", "sangue nas fezes", "melena", "intestin", "coco"], r: "Sem sangue nas fezes; {{hábito intestinal normal}}." },
        { t: "Pica / perversão do apetite (gelo, terra)", k: ["pica", "gelo", "terra", "perversao", "vontade de comer"], r: "{{Tem vontade de mastigar gelo.}}", o: 1 },
        { t: "Sintomas constitucionais (perda de peso, febre, sudorese)", k: ["peso", "emagrec", "febre", "sudorese", "suor"], r: "{{Nega perda de peso, febre ou sudorese.}}" },
        { t: "Comorbidades, medicações (AINEs, IBP) e cirurgias (bariátrica)", k: KW.comorbidades.concat(KW.medicacoes, ["anti inflam", "ibuprofeno", "omeprazol", "cirurg", "bariatric"]), r: "{{Sem doenças crônicas; usa ibuprofeno às vezes para cólica; nega cirurgias.}}" },
        { t: "História familiar (anemia, sangramentos, miomas, câncer)", k: KW.familia, r: "{{Mãe teve miomas e fez histerectomia.}}" }
      ],
      ensino: "Anemia ferropriva = <b>perda de sangue até prova em contrário</b>. Na mulher em idade fértil, a causa mais comum é o sangramento menstrual aumentado; no homem e na mulher pós-menopausa, investigue sangramento gastrointestinal (como nas anotações)."
    },
    {
      tipo: "exame",
      enunciado: "Descreva o exame físico.",
      itens: [
        { t: "Sinais vitais", k: KW.sinaisVitais, r: "FC 78 bpm · PA 130/80 mmHg · {{FR 16 · SpO₂ 98% · T 36,4 °C}}" },
        { t: "Ectoscopia: palidez cutaneomucosa (graduar em cruzes), icterícia, hidratação", k: ["palidez", "descorad", "hipocorad", "mucosa", "conjuntiv", "corad", "ectoscop", "inspecao"], r: "Hipocorada {{(2+/4+), anictérica, hidratada}}.", c: 1 },
        { t: "Sinais de carência de ferro (unhas, língua, comissuras labiais)", k: ["unha", "coiloniq", "lingua", "glossite", "queilite", "comissura", "cabelo"], r: "{{Unhas quebradiças e discreta queilite angular.}}" },
        { t: "Aparelho cardiovascular (sopro funcional, taquicardia)", k: [" cardi", "coracao", "auscult&cora", "auscult&cardi", "sopro", "bulha", "precordio", "ritmo"], r: "{{RCR 2T, sopro sistólico suave (2+/6+) em foco mitral — sopro funcional da anemia.}}" },
        { t: "Abdome (visceromegalias, massas)", k: ["abdom", "figado", "baco", "hepatomeg", "esplenomeg", "massa"], r: "{{Flácido, indolor, sem visceromegalias.}}" },
        { t: "Exame ginecológico (especular e toque bimanual) ou encaminhamento", k: ["ginecolog", "especular", "toque vaginal", "bimanual", "toque"], r: "{{Útero aumentado de volume, de contorno irregular, móvel e indolor ao toque bimanual.}}" },
        { t: "Linfonodos", k: ["linfonod", "ganglio", "adenomeg", "linfadenomeg"], r: "{{Sem linfonodomegalias.}}", o: 1 }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita para investigar essa anemia e sua causa?",
      itens: [
        { t: "Hemograma completo com índices (VCM, HCM, RDW)", k: KW.hemograma.concat(["vcm", "hcm", "rdw"]), r: { titulo: "Hemograma", tab: [
          ["Hemácias", "3,2 milhões/mm³", "4,5 – 5,5 milhões", "L"],
          ["Hemoglobina", "8,0 g/dL", "13,0 – 16,0", "L"],
          ["Hematócrito", "25,0%", "40,0 – 50,0", "L"],
          ["VCM", "72 fL", "80 – 100", "L"],
          ["HCM", "24 pg", "27 – 31", "L"],
          ["RDW", "17%", "11,5 – 14,5", "H"]
        ], nota: "Anemia microcítica e hipocrômica com anisocitose." }, c: 1 },
        { t: "Cinética do ferro: ferritina e saturação de transferrina", k: ["ferritina", "ferro serico", "transferrina", "cinetica", "tibc", "capacidade de ligacao", "ferro"], r: { titulo: "Perfil de ferro", tab: [
          ["Ferritina", "8 ng/mL", "30 – 400", "L"],
          ["Saturação de transferrina", "12%", "20 – 50", "L"]
        ] }, c: 1 },
        { t: "Contagem de reticulócitos (glóbulos vermelhos jovens)", k: ["reticul"], r: "{{Reticulócitos 0,8% — baixos para o grau de anemia (medula sem ferro para produzir).}}" },
        { t: "β-hCG (sempre pedir na mulher em idade fértil)", k: ["beta", "hcg", "teste de gravidez", "gravidez", "gestacao"], r: "β-hCG negativo.", c: 1 },
        { t: "Parasitológico de fezes", k: ["parasitolog", " epf", "verminose", "parasit"], r: "Negativo." },
        { t: "Pesquisa de sangue oculto nas fezes", k: ["sangue oculto", "pesquisa de sangue"], r: "Negativa." },
        { t: "TSH", k: [" tsh", "tireoid"], r: "Normal." },
        { t: "Vitamina B12 (e ácido fólico)", k: ["b12", "cobalamina", "folato", "acido folico"], r: "{{Normais.}}" },
        { t: "Ultrassonografia pélvica/transvaginal", k: ["ultrassom", "ultrassonografia", " usg", "transvaginal", "pelvica", "pelvico"], r: "Útero aumentado de volume, com miomas submucosos e intramurais. Endométrio espessado (15 mm).", c: 1 },
        { t: "Videohisteroscopia (após a USG)", k: ["histeroscop"], r: "Pólipos endometriais e miomas submucosos." }
      ],
      ensino: "<b>Padrão ferropriva</b>: VCM ↓ (microcitose), HCM ↓ (hipocromia), RDW ↑ (anisocitose), ferritina ↓ (< 30 ng/mL — o exame mais específico), saturação de transferrina ↓ (< 20%) e reticulócitos baixos. Na talassemia minor a microcitose vem com RDW e ferritina normais."
    },
    {
      tipo: "diagnostico",
      enunciado: "Formule o diagnóstico sindrômico, etiológico e a causa.",
      itens: [
        { t: "Síndrome anêmica", k: ["sindrome anemica", "anemia"], c: 1 },
        { t: "Anemia microcítica e hipocrômica por deficiência de ferro (ferritina e saturação ↓, RDW ↑)", k: ["ferropriva", "deficiencia de ferro", "carencia de ferro", "ferropenica", "microcit", "hipocrom"], c: 1 },
        { t: "Causa: perda sanguínea por sangramento uterino anormal — miomas submucosos e pólipos endometriais (PALM-COEIN: P + L)", k: ["mioma", "polipo", "sangramento uterino", " sua ", "palm", "menorrag", "hipermenor", "hiperpolimen", "leiomioma", "perda menstrual", "perda de sangue", "perda sanguinea"], c: 1 },
        { t: "Repercussão sistêmica (palpitações, fadiga, sopro), porém hemodinamicamente estável", k: ["repercuss", "estavel", "palpita", "hemodinamic", "sistemic"] },
        { t: "Diferenciais de anemia microcítica: talassemia, anemia de doença crônica, sideroblástica", k: ["talassem", "doenca cronica", "sideroblast", "diferenc", "inflamat"] }
      ]
    },
    {
      tipo: "conduta",
      enunciado: "Qual sua conduta e quais orientações você dá à paciente?",
      itens: [
        { t: "Ferro oral: 60–120 mg/dia de ferro elementar (ex.: sulfato ferroso), em dose única diária ou em dias alternados", k: ["sulfato ferroso", "ferro oral", "ferroso", "noripurum", "repor ferro", "reposicao de ferro", "ferro"], c: 1 },
        { t: "Orientar a tomada: longe das refeições, com vitamina C (suco de laranja); evitar leite, café, chá e antiácidos/IBP perto da dose; fezes escurecidas e constipação são esperadas", k: ["suco de laranja", "vitamina c", "laranja", "jejum", "longe das refeic", "antes das refeic", "leite", "cafe", " cha ", "antiacido", "protetor gastrico", "omeprazol", "fezes escuras", "efeito colateral", "efeitos colaterais", "constipa"], c: 1 },
        { t: "Duração: manter cerca de 3 meses após normalizar a Hb (repor estoques/ferritina)", k: ["3 meses", "tres meses", "estoque", "ate normalizar", "por quanto tempo", "duracao"], x: 1 },
        { t: "Reavaliar: reticulócitos em 7–10 dias e Hb em 2–4 semanas (esperado ↑ 1–2 g/dL)", k: ["reavali", "retorno", "controle", "repet&hemograma", "repit&hemograma", "novo hemograma", "reticul"], x: 1 },
        { t: "Tratar a causa: encaminhar à ginecologia (histeroscopia cirúrgica — polipectomia/miomectomia)", k: ["ginecolog", "encaminh", "histeroscop", "miomectomia", "polipectomia", "cirurg", "trat&causa", "causa base"], c: 1 },
        { t: "Controle do sangramento: contraceptivo hormonal/progestágeno, DIU de levonorgestrel ou ácido tranexâmico na menstruação", k: ["anticoncep", "progest", " diu", "mirena", "levonorgestrel", "tranexam", "hormonal"], x: 1 },
        { t: "Ferro endovenoso se intolerância, má absorção ou perda contínua importante", k: ["endoven", "intraven", "ferro ev", "ferro iv", "sacarato", "carboximaltose", "parenteral"], x: 1, o: 1 },
        { t: "Transfusão não indicada (estável, anemia crônica bem tolerada)", k: ["transfus", "concentrado de hemacias"], o: 1 }
      ],
      ensino: "Anotações: “ferro oral 100 mg; se der, com suco de laranja; sem protetor gástrico?” — a vitamina C aumenta a absorção, e o IBP/antiácido reduz (precisa de acidez gástrica). Tratar a causa é tão importante quanto repor o ferro."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Por que pedir β-hCG nessa paciente?", r: "Mulher em idade fértil com sangramento uterino anormal: é obrigatório excluir gestação (abortamento, gravidez ectópica) antes de investigar e tratar — muda a conduta e os exames de imagem." },
        { p: "Qual o exame mais específico para deficiência de ferro e qual a sua limitação?", r: "<b>Ferritina</b> baixa (< 30 ng/mL). Limitação: é proteína de fase aguda — pode estar falsamente normal/alta em inflamação, infecção ou hepatopatia." },
        { p: "Por que tomar o ferro com suco de laranja e evitar “protetor gástrico”?", r: "A vitamina C mantém o ferro na forma ferrosa (Fe²⁺), mais absorvível. IBP e antiácidos reduzem a acidez gástrica e, com isso, a absorção. Leite, café e chá também atrapalham." },
        { p: "Quais exames compõem a investigação de uma anemia?", r: "Hemograma com VCM, HCM e RDW; contagem de reticulócitos; ferritina e saturação de transferrina; B12 e folato; TSH; e exames dirigidos à causa (β-hCG, USG pélvica, sangue oculto, parasitológico, EDA/colonoscopia quando indicado)." },
        { p: "Se fosse um homem com anemia ferropriva, qual seria a principal suspeita?", r: "Perda <b>gastrointestinal</b> (úlcera, neoplasia colorretal, angiodisplasia, parasitoses) → investigar com endoscopia digestiva alta e colonoscopia." }
      ]
    }
  ],
  alertas: [
    "Nas anotações aparece “hiperpolimenorreia”. A nomenclatura atual é <b>sangramento uterino anormal (SUA)</b>, classificado pela FIGO (PALM-COEIN) — aqui por pólipo (P) e leiomioma (L)."
  ],
  resumo: "Anemia microcítica/hipocrômica com ferritina baixa em mulher com SUA por miomas e pólipos: repor ferro oral com orientações corretas, reavaliar resposta e tratar a causa com a ginecologia."
});
