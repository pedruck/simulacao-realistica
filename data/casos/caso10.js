CASOS.push({
  id: 10,
  fonte: "Duas Colunas (8).pdf",
  local: "Pronto-atendimento",
  area: "Trauma",
  chamada: "Homem de 45 anos com dor abdominal irradiada para a lombar após acidente de carro",
  diagnostico: "Choque hemorrágico grave por trauma renal direito (hematoma perirrenal / retroperitoneal)",
  temas: ["Choque hemorrágico", "Trauma renal", "Retroperitônio", "ATLS"],
  cenarioOriginal: true,
  cenario: "João, 45 anos, é trazido ao Pronto-Atendimento com dor abdominal intensa, irradiando para a região lombar. Ele apresenta sinais de hipovolemia e refere que a dor começou subitamente após um acidente de carro há 2h.",
  impressao: "{{Paciente pálido, sudoreico, segurando o flanco direito.}}",
  triagem: {
    emergencia: true,
    explicacao: "Trauma com sinais de hipovolemia: atendimento ATLS (XABCDE) imediato. Anotação: “SALA VERMELHA NÃO SE APRESENTA!!” — na sala vermelha, nada de apresentação formal ou anamnese longa antes da avaliação primária."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "XABCDE (ATLS)",
      enunciado: "Conduza o atendimento primário seguindo o ATLS.",
      itens: [
        { t: "X — Sangramento externo exsanguinante (só se houver)", k: ["hemorragia", "sangramento externo", "sangramento", "exsanguin", "torniquete"], r: "Sem sangramento externo." },
        { t: "A — Via aérea (se ele consegue responder, está pérvia) + colar cervical", k: KW.viaAerea.concat(KW.colar, ["fala", "responde"]), r: "Responde às perguntas: via aérea pérvia. {{Colar cervical mantido.}}", c: 1 },
        { t: "B — Expor o tórax e auscultar", k: ["respira", "ventila", "auscult", "murmurio", "torax", "expansib"], r: "{{FR 26, MV presente bilateralmente, sem sinais de pneumo ou hemotórax; SpO₂ 95%.}}" },
        { t: "Oxigênio suplementar", k: KW.oxigenio, r: "{{SpO₂ 99% com máscara.}}", o: 1 },
        { t: "C — Monitorização, PA, FC e perfusão", k: KW.monitor.concat(["circula", "perfus", "pulso", "enchimento capilar", " tec ", " pressao", " pa "]), r: "{{PA 84/52 mmHg, FC 128 bpm, TEC 4 s, pele fria e pálida.}}", c: 1 },
        { t: "Dois acessos venosos calibrosos + tipagem/prova cruzada", k: KW.acesso, r: "Dois acessos calibrosos; amostras coletadas.", c: 1 },
        { t: "Cristaloide aquecido a 39 °C (Ringer lactato 250 mL em cada braço)", k: KW.cristaloide, r: "{{Resposta transitória: PA 96/60 → 82/50 em 10 min.}}", c: 1 },
        { t: "Hemotransfusão (antes de qualquer droga vasoativa) / transfusão maciça", k: KW.transfusao, r: "{{Após 2 CH + 2 plasma: PA 104/66, FC 106 — estabilizou.}}", c: 1 },
        { t: "Ácido tranexâmico 1 g EV (e outro 1 g em 8 h)", k: KW.tranexamico, c: 1 },
        { t: "FAST", k: KW.fast, r: "FAST negativo (sem líquido livre na cavidade peritoneal).", c: 1 },
        { t: "D — Glasgow e pupilas", k: KW.glasgow, r: "{{Glasgow 15; pupilas isocóricas e fotorreagentes.}}" },
        { t: "E — Exposição completa e prevenção de hipotermia", k: KW.exposicao, r: "Equimose periumbilical {{e em flanco direito}}." },
        { t: "Sonda vesical (após excluir lesão de uretra)", k: KW.sondaVesical, r: "Sonda vesical: <b>urina com sangue</b> (hematúria macroscópica).", c: 1 }
      ],
      ensino: "Anotações (ATLS): <b>X</b> só se sangramento externo; <b>A</b> se ele consegue te responder está bom; <b>B</b> expor o tórax e auscultar; <b>C</b> 2 acessos calibrosos, cristaloide aquecido a 39 °C (250 mL em cada braço), investigar sangramento interno (FAST/TC). Classificação: <b>leve → cristaloide; moderada → hemácias; grave (FC > 120 e hipotensão) → protocolo de transfusão maciça</b>."
    },
    {
      tipo: "anamnese",
      titulo: "Anamnese dirigida (AMPLA)",
      enunciado: "O que você pergunta, de forma dirigida?",
      itens: [
        { t: "Mecanismo do trauma (tipo de colisão, lado do impacto, cinto)", k: ["mecanismo", "como foi", "como aconteceu", "colisao", "batida", "cinto", "lado", "impacto", "velocidade"], r: "{{O carro foi atingido na lateral direita; usava cinto.}}", c: 1 },
        { t: "Dor: início, localização, irradiação", k: ["dor", "irradia"], r: "Dor súbita após o acidente, irradiando para a região lombar {{direita}}." },
        { t: "Alterações urinárias (sangue na urina)", k: ["urina", "xixi", "hematuria"], r: "{{Notou a urina avermelhada.}}", o: 1 },
        { t: "A — Alergias", k: KW.alergias, r: "{{Nega.}}" },
        { t: "M — Medicamentos (anticoagulantes?)", k: KW.medicacoes.concat(["anticoag"]), r: "{{Nenhum.}}" },
        { t: "P — Passado médico", k: KW.comorbidades.concat(["passado", "previo", "cirurg"]), r: "{{Hígido.}}" },
        { t: "L — Última refeição", k: ["ultima refeic", "comeu", "jejum", "alimenta"], r: "{{Almoçou há 3 h.}}" },
        { t: "A — Ambiente e eventos", k: ["ambiente", "evento", "alcool", "quanto tempo", "consciencia"], r: "Acidente há 2 h; {{não perdeu a consciência}}." }
      ]
    },
    {
      tipo: "exame",
      titulo: "Exame secundário",
      enunciado: "Descreva o exame físico secundário, com foco no abdome.",
      itens: [
        { t: "Abdome: inspeção, ausculta, percussão, palpação", k: ["abdom", "inspec", "auscult", "percu", "palp", "ruidos hidroaereos", " rha"], r: "<b>Ruídos hidroaéreos ausentes</b>, <b>equimose periumbilical</b> (sinal de Cullen) {{e em flanco direito (sinal de Grey Turner)}}, <b>dor à palpação</b> {{em flanco direito, sem descompressão brusca dolorosa}}.", c: 1 },
        { t: "Punho-percussão lombar (Giordano)", k: ["giordano", "punho percussao", "lombar"], r: "{{Dor intensa à punho-percussão lombar direita.}}", x: 1 },
        { t: "Períneo e meato uretral (antes da sonda vesical)", k: ["meato", "uretra", "perineo", "toque retal", "prostata"], r: "{{Sem sangue no meato uretral, sem hematoma perineal.}}" },
        { t: "Tórax (últimos arcos costais)", k: ["torax", "costela", "arcos costais"], r: "{{Dor à palpação da 11ª e 12ª costelas à direita.}}" },
        { t: "Pelve", k: ["pelve", "bacia"], r: "{{Estável.}}", o: 1 }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita e em que momento?",
      itens: [
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemácias", "2,90 milhões/mm³", "3,90 – 5,00", "L"],
          ["Hemoglobina", "8,5 g/dL", "12,0 – 16,0", "L"],
          ["Hematócrito", "26,0%", "35,0 – 45,0", "L"],
          ["Leucócitos", "9.000/mm³", "3.500 – 10.000", ""],
          ["Bastonetes", "2%", "até 6%", ""],
          ["Plaquetas", "290 mil", "150 – 400 mil", ""]
        ] }, c: 1 },
        { t: "Coagulograma", k: KW.coagulograma, r: "{{TP 13 s · INR 1,1 · TTPa 31 s (normais).}}" },
        { t: "Tipagem sanguínea e prova cruzada", k: KW.tipagem, r: "{{A+.}}", c: 1 },
        { t: "Gasometria (pH ↓ e lactato ↑)", k: KW.gasometria.concat(["lactato"]), r: { titulo: "Gasometria", tab: [
          ["pH", "{{7,28}}", "7,35 – 7,45", "L"],
          ["PaCO₂", "{{33 mmHg}}", "35 – 45", "L"],
          ["HCO₃⁻", "{{16 mEq/L}}", "22 – 26", "L"],
          ["Lactato", "{{4,2 mmol/L}}", "< 2,0", "H"]
        ] } },
        { t: "FAST", k: KW.fast, r: "Negativo — não avalia bem o retroperitônio." },
        { t: "TC de abdome com contraste — somente após estabilização", k: ["tomograf", " tc ", "tc de abdome"], r: "TC de abdome: <b>lesão no rim direito com sangue no espaço perirrenal</b>.", c: 1 },
        { t: "Urina (hematúria)", k: ["urina", "hematuria", " eas"], r: "Hematúria macroscópica.", o: 1 }
      ],
      ensino: "O <b>FAST</b> avalia a cavidade peritoneal e o pericárdio, mas <b>não enxerga bem o retroperitônio</b> (rins, pâncreas, aorta, parte do duodeno). FAST negativo + choque + hematúria → pense em sangramento retroperitoneal. Anotação: “se tiver estabilizado (estabilizar primeiro) → TC”."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o diagnóstico? Justifique.",
      itens: [
        { t: "Choque hipovolêmico/hemorrágico grave", k: ["hemorrag", "hipovolem"], c: 1 },
        { t: "Trauma renal direito com hematoma perirrenal (retroperitoneal) — lesão do sistema urinário", k: ["renal", " rim", "retroperit", "perirrenal", "urinario"], c: 1 },
        { t: "Justificativa: FAST negativo + hematúria + dor lombar + equimoses (Cullen/Grey Turner)", k: ["fast negativo", "hematuria", "cullen", "grey", "turner", "lombar"] },
        { t: "Gravidade: FC > 120 e hipotensão (classe III)", k: ["classe iii", "classe 3", "grave", " 120 "] },
        { t: "Diferenciais: lesão de pâncreas/duodeno, aorta, fratura pélvica", k: ["pancrea", "duoden", "aorta", "pelvi", "diferenc"], o: 1 }
      ]
    },
    {
      tipo: "conduta",
      enunciado: "Qual a conduta? Considere os dois cenários: estabiliza ou não estabiliza.",
      itens: [
        { t: "Hemoterapia / transfusão maciça (hemotransfusão antes da droga vasoativa)", k: KW.transfusao, c: 1 },
        { t: "Ácido tranexâmico 1 g EV + 1 g em 8 h", k: KW.tranexamico, c: 1 },
        { t: "Não estabilizou com hemoterapia (choque exsanguinante) → cirurgia", k: ["cirurg", "laparotom", "nefrectom", "centro cirurgico"], c: 1 },
        { t: "Estabilizou → TC com contraste e tratamento conservador ou angioembolização (urologia)", k: ["conservador", "angioemboliz", "emboliz", "urolog", "tomograf"], c: 1 },
        { t: "Droga vasoativa (noradrenalina) só após volume/hemocomponentes e de forma transitória", k: KW.noradrenalina, o: 1 },
        { t: "Aquecer fluidos e hemocomponentes; prevenir hipotermia", k: ["aquec", " 39 ", "hipoterm", "manta"] },
        { t: "Monitorizar: Hb/Ht seriados, diurese/hematúria, internação em UTI", k: ["seriad", "monitor", " uti ", "internac", "diurese", "hematuria"] }
      ],
      ensino: "Anotações: “conduta: encaminhar para cirurgia se não estabilizar com hemoterapia → choque exsanguinante”; “estabilizou: TC”."
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Como classificar a hemorragia e o que repor em cada grau?", r: "Pelo ATLS (classes I–IV) ou de forma simplificada: <b>leve</b> → cristaloide; <b>moderada</b> → concentrado de hemácias; <b>grave</b> (FC > 120 e hipotensão) → protocolo de transfusão maciça (CH : plasma : plaquetas 1:1:1)." },
        { p: "Por que o FAST foi negativo?", r: "Porque o sangramento é <b>retroperitoneal</b> (perirrenal). O FAST pesquisa líquido livre na cavidade peritoneal e no pericárdio, e não avalia bem o retroperitônio." },
        { p: "O que são os sinais de Cullen e de Grey Turner?", r: "<b>Cullen</b>: equimose periumbilical. <b>Grey Turner</b>: equimose em flancos. Indicam sangue retroperitoneal/intra-abdominal que dissecou até o subcutâneo (clássicos na pancreatite necro-hemorrágica e em hematomas retroperitoneais)." },
        { p: "Quais órgãos são retroperitoneais?", r: "Rins e ureteres, suprarrenais, pâncreas (exceto a cauda), aorta e veia cava inferior, duodeno (2ª a 4ª porções), cólon ascendente e descendente, e reto." },
        { p: "Por que transfundir antes de iniciar droga vasoativa?", r: "No choque hemorrágico falta volume (sangue): o vasopressor sem reposição aumenta a vasoconstrição e piora a perfusão tecidual. Prioridade: controlar o sangramento e repor hemocomponentes." }
      ]
    }
  ],
  alertas: [
    "Anotação: “sinal de Cullen = sangramento peritoneal”. Cullen (periumbilical) e Grey Turner (flancos) indicam sangue <b>retroperitoneal</b>/intra-abdominal que disseca até o subcutâneo.",
    "Anotação: “TC: vísceras peritoneais (rim, pâncreas, aorta…)”. Essas estruturas são <b>retroperitoneais</b> — exatamente por isso o FAST não as avalia bem e a TC é necessária.",
    "Anotação: “administrar droga vasoativa (noradrenalina)”. No choque hemorrágico, vasopressor não substitui volume; prioridade é hemostasia + hemocomponentes, e o vasopressor fica para uso transitório em casos selecionados."
  ],
  resumo: "Choque hemorrágico com FAST negativo e hematúria: pense em retroperitônio (rim). ATLS, cristaloide aquecido, hemotransfusão, ácido tranexâmico, sonda vesical; estabilizou → TC (lesão renal com hematoma perirrenal); não estabilizou → cirurgia."
});
