CASOS.push({
  id: 8,
  fonte: "Duas Colunas (6).pdf",
  local: "Sala vermelha",
  area: "Trauma",
  chamada: "Motorista de 30 anos após colisão frontal, com dor abdominal, palidez e sudorese",
  diagnostico: "Choque hemorrágico classe III por trauma abdominal fechado com hemoperitônio (provável lesão esplênica)",
  temas: ["Choque hemorrágico", "Trauma abdominal", "XABCDE", "FAST"],
  cenarioOriginal: true,
  cenario: "Paciente masculino, 30 anos, motorista, é admitido na Sala Vermelha do Pronto-Atendimento vítima de colisão frontal entre veículos, apresentando dor abdominal intensa, palidez e sudorese. Foi encontrado quase inconsciente no local do acidente. Acidente ocorreu há cerca de 60 minutos.",
  impressao: "{{Paciente em prancha rígida com colar cervical, pálido, sudoreico, gemendo.}}",
  triagem: {
    emergencia: true,
    explicacao: "Politrauma com sinais de choque (palidez, sudorese, rebaixamento): <b>XABCDE</b> imediato. Na sala vermelha, nada de anamnese longa antes da avaliação primária."
  },
  etapas: [
    {
      tipo: "xabcde",
      titulo: "XABCDE",
      enunciado: "Conduza o atendimento primário, letra por letra.",
      itens: [
        { t: "Monitorização multiparamétrica", k: KW.monitor, r: "PA 80/50 mmHg · SpO₂ 91% · {{FC 132 bpm · FR 28 irpm}}", c: 1 },
        { t: "X — Hemorragia exsanguinante externa", k: ["hemorragia", "sangramento", "exsanguin", "torniquete", "compressao direta"], r: "Sem sangramento externo." },
        { t: "A — Via aérea (fala? responde?) com restrição da coluna cervical", k: KW.viaAerea.concat(KW.colar, ["fala", "responde", "consciente"]), r: "{{Responde com voz fraca e confusa}}: via aérea pérvia. {{Colar cervical mantido.}}", c: 1 },
        { t: "B — Expor o tórax: inspeção, palpação, percussão e ausculta", k: ["respira", "ventila", "auscult", "murmurio", "expansib", "torax", "percu"], r: "{{Expansibilidade simétrica, MV presente bilateralmente, sem desvio de traqueia ou enfisema subcutâneo.}}" },
        { t: "Oxigênio em alto fluxo (máscara não reinalante 10–15 L/min)", k: KW.oxigenio, r: "{{SpO₂ sobe para 97%.}}", c: 1 },
        { t: "C — Perfusão: pulsos, pele, tempo de enchimento capilar", k: ["circula", "perfus", "enchimento capilar", " tec ", "pulso", "pele"], r: "{{Pulsos finos e rápidos}}, TEC muito lentificado, pele fria, pálida e sudoreica: <b>chocado!</b>", c: 1 },
        { t: "Dois acessos venosos calibrosos, coletando tipagem/prova cruzada antes de infundir", k: KW.acesso, r: "Dois acessos calibrosos {{(14G)}}; amostras coletadas antes da infusão.", c: 1 },
        { t: "Cristaloide aquecido (Ringer lactato, 250 mL em cada acesso) e reavaliar a resposta", k: KW.cristaloide, r: "{{Resposta transitória: PA 92/60 → volta a cair para 78/48 em 10 min.}}", c: 1 },
        { t: "Hemocomponentes precoces / protocolo de transfusão maciça", k: KW.transfusao, r: "{{Banco de sangue acionado; concentrados de hemácias O negativo liberados.}}", x: 1, c: 1 },
        { t: "Ácido tranexâmico 1 g EV em 10 min (até 3 h do trauma)", k: KW.tranexamico, x: 1, c: 1 },
        { t: "FAST na sala de emergência", k: KW.fast, r: "{{FAST positivo: líquido livre no espaço esplenorrenal e no hepatorrenal (Morrison).}}", x: 1, c: 1 },
        { t: "Avaliar a pelve (estabilidade, sem manipulação repetida)", k: ["pelve", "bacia", "pelvic", "cinta pelvica"], r: "{{Pelve estável.}}", x: 1, o: 1 },
        { t: "D — Glasgow, pupilas e glicemia", k: KW.glasgow.concat(KW.glicemia), r: "{{Glasgow 13 (AO 3, RV 4, RM 6); pupilas isocóricas e fotorreagentes.}}" },
        { t: "E — Exposição completa, rolamento em bloco e prevenção de hipotermia", k: KW.exposicao.concat(["em bloco"]), r: "{{Equimose em faixa no abdome (sinal do cinto de segurança) e escoriações em hipocôndrio esquerdo; dorso sem lesões; manta térmica aplicada.}}" }
      ],
      ensino: "Anotações: “monitorização → PA 80/50, SpO₂ 91”, “XABCDE: sem sangramento; perguntar coisas pra saber se está consciente; chocado!”, “reposição volêmica: cristaloide (Ringer) 250 mL cada, 2 acessos — pedir [exames] antes”."
    },
    {
      tipo: "anamnese",
      titulo: "Anamnese dirigida (AMPLA)",
      enunciado: "O socorrista ainda está na sala. O que você pergunta?",
      itens: [
        { t: "Mecanismo: velocidade, cinto, airbag, deformação do veículo, ejeção, vítimas fatais", k: ["mecanismo", "velocidade", "cinto", "airbag", "deforma", "ejet", "ejecao", "como foi", "como aconteceu", "obito no local", "morte"], r: "{{Colisão frontal a ~80 km/h; usava cinto; airbag acionado; volante deformado.}}", c: 1 },
        { t: "Dor: localização e irradiação", k: ["dor", "onde doi"], r: "{{Dor abdominal intensa, pior no hipocôndrio esquerdo, irradiando para o ombro esquerdo (sinal de Kehr).}}" },
        { t: "A — Alergias", k: KW.alergias, r: "{{Desconhecidas.}}" },
        { t: "M — Medicamentos", k: KW.medicacoes, r: "{{Desconhecidos.}}" },
        { t: "P — Passado médico", k: KW.comorbidades.concat(["passado", "previo"]), r: "{{Desconhecido.}}" },
        { t: "L — Última refeição", k: ["ultima refeic", "comeu", "jejum", "liquido", "alimenta"], r: "{{Desconhecido.}}" },
        { t: "A — Ambiente e eventos (tempo, perda de consciência, álcool)", k: ["quanto tempo", "ambiente", "evento", "consciencia", "desmaiou", "alcool", "bebida"], r: "Acidente há ~60 min; encontrado quase inconsciente no local." }
      ]
    },
    {
      tipo: "exame",
      titulo: "Exame secundário",
      enunciado: "Após estabilizar o possível, faça o exame da cabeça aos pés. O que você avalia?",
      itens: [
        { t: "Abdome: inspeção, ausculta, percussão e palpação", k: ["abdom", "palp", "percu", "ruidos hidroaereos", " rha", "descompressao", "defesa", "peritonite", "blumberg"], r: "{{Distendido, equimose em faixa, RHA diminuídos, macicez em flancos, defesa e descompressão dolorosa no hipocôndrio esquerdo.}}", c: 1 },
        { t: "Tórax (fraturas de costelas, ausculta)", k: ["torax", "costela", "auscult"], r: "{{Dor à palpação de arcos costais inferiores à esquerda; ausculta normal.}}" },
        { t: "Pelve e períneo (sangue no meato uretral)", k: ["pelve", "bacia", "perineo", "meato", "uretra"], r: "{{Pelve estável; sem sangue no meato uretral.}}" },
        { t: "Extremidades", k: ["extremidad", "membros", "pulsos"], r: "{{Sem deformidades; pulsos finos.}}" },
        { t: "Neurológico (Glasgow, pupilas, déficits)", k: KW.glasgow.concat(["deficit"]), r: "{{Glasgow 13, sem déficits focais.}}" }
      ]
    },
    {
      tipo: "exames",
      enunciado: "Quais exames você solicita (e quais NÃO devem ser feitos agora)?",
      itens: [
        { t: "FAST", k: KW.fast, r: "{{Líquido livre no espaço esplenorrenal e no hepatorrenal (Morrison).}}", x: 1, c: 1 },
        { t: "Tipagem sanguínea e prova cruzada", k: KW.tipagem, r: "{{O+.}}", c: 1 },
        { t: "Hemograma", k: KW.hemograma, r: { titulo: "Hemograma", tab: [
          ["Hemoglobina", "{{9,6 g/dL}}", "13 – 17", "L"],
          ["Hematócrito", "{{29%}}", "40 – 50", "L"],
          ["Leucócitos", "{{14.800/mm³}}", "4.000 – 11.000", "H"],
          ["Plaquetas", "{{210 mil}}", "150 – 400 mil", ""]
        ], nota: "No sangramento agudo a Hb pode estar pouco alterada no início — não descarta choque." }, x: 1 },
        { t: "Gasometria arterial com lactato", k: KW.gasometria.concat(["lactato"]), r: { titulo: "Gasometria", tab: [
          ["pH", "{{7,24}}", "7,35 – 7,45", "L"],
          ["PaCO₂", "{{32 mmHg}}", "35 – 45", "L"],
          ["HCO₃⁻", "{{15 mEq/L}}", "22 – 26", "L"],
          ["Excesso de bases", "{{−9}}", "−2 a +2", "L"],
          ["Lactato", "{{5,8 mmol/L}}", "< 2,0", "H"]
        ] }, x: 1 },
        { t: "Coagulograma (coagulopatia do trauma)", k: KW.coagulograma, r: { titulo: "Coagulograma", tab: [
          ["TP", "{{15 s}}", "10 – 14 s", "H"],
          ["INR", "{{1,3}}", "< 1,2", "H"],
          ["TTPa", "{{38 s}}", "25 – 35 s", "H"],
          ["Fibrinogênio", "{{160 mg/dL}}", "200 – 400", "L"]
        ] }, x: 1 },
        { t: "RX de tórax e pelve na sala", k: ["raio x", " rx", "radiograf"], r: "{{Sem alterações.}}", x: 1, o: 1 },
        { t: "Evitar: levar à tomografia com o paciente instável", k: ["tomograf", " tc "], neg: 1 }
      ],
      ensino: "Paciente <b>instável não vai à tomografia</b>: FAST positivo + instabilidade = centro cirúrgico."
    },
    {
      tipo: "diagnostico",
      enunciado: "Qual o diagnóstico? Classifique o choque.",
      itens: [
        { t: "Choque hemorrágico (hipovolêmico)", k: ["hemorrag", "hipovolem"], c: 1 },
        { t: "Classe III (FC > 120, hipotensão, confusão; perda de 31–40% da volemia)", k: ["classe iii", "classe 3", "grau iii", "grau 3", " 31 ", "40%"] },
        { t: "Trauma abdominal fechado com hemoperitônio (FAST +), provável lesão esplênica", k: ["hemoperit", "baco", "esplen", "figado", "hepat", "trauma abdominal", "viscera", "abdome agudo"], c: 1 },
        { t: "Coagulopatia do trauma / tríade letal (hipotermia, acidose, coagulopatia)", k: ["coagulopat", "triade", "hipoterm", "acidose"], x: 1 },
        { t: "Possível TCE leve associado (Glasgow 13) — reavaliar", k: [" tce", "traumatismo cranio", "cranioencef"], o: 1 }
      ]
    },
    {
      tipo: "conduta",
      enunciado: "Qual a conduta definitiva?",
      itens: [
        { t: "Laparotomia exploradora de urgência (instável + FAST positivo)", k: ["laparotom", "cirurg", "centro cirurgico", "bloco"], c: 1 },
        { t: "Hemocomponentes na proporção 1:1:1 (CH : plasma : plaquetas) — protocolo de transfusão maciça", k: KW.transfusao, c: 1 },
        { t: "Ácido tranexâmico 1 g EV em 10 min + 1 g em 8 h", k: KW.tranexamico, c: 1 },
        { t: "Hipotensão permissiva (PAS ~80–90 mmHg) até o controle do sangramento, se sem TCE grave", k: ["permissiva", "pas 80", "pas de 80", "90 mmhg", "hipotensao permitida"], x: 1 },
        { t: "Prevenir hipotermia (fluidos e hemocomponentes aquecidos, manta térmica)", k: ["aquec", "manta", "hipoterm", " 39 "] },
        { t: "Limitar cristaloide (evita diluição e piora da coagulopatia)", k: ["limit", "evit&excesso", "restri&cristaloide", "pouco cristaloide"], x: 1, o: 1 },
        { t: "Evitar: tomografia antes da cirurgia em paciente instável", k: ["tomograf", " tc "], neg: 1 }
      ]
    },
    {
      tipo: "arguicao",
      enunciado: "Perguntas do avaliador.",
      perguntas: [
        { p: "Qual a classe de choque hemorrágico e por quê?", r: "<b>Classe III</b>: FC > 120, PA sistólica diminuída, pressão de pulso diminuída, FR 30–40, confusão/ansiedade, diurese reduzida; perda de 31–40% da volemia (1.500–2.000 mL). Exige hemocomponentes." },
        { p: "O que é resposta transitória ao volume e o que ela significa?", r: "Melhora inicial da PA/FC após o bolus, seguida de nova piora: indica <b>sangramento ativo</b> que continua → hemocomponentes e controle cirúrgico do sangramento." },
        { p: "Por que não levar esse paciente à tomografia?", r: "Paciente hemodinamicamente <b>instável</b> não sai da sala de emergência para exames. Com FAST positivo, a conduta é laparotomia." },
        { p: "O que é a tríade letal do trauma?", r: "<b>Hipotermia, acidose e coagulopatia</b> — uma piora a outra. Prevenção: aquecer, controlar o sangramento cedo, hemocomponentes balanceados, evitar excesso de cristaloide." },
        { p: "Qual a dose e a janela do ácido tranexâmico?", r: "1 g EV em 10 min, nas primeiras <b>3 h</b> após o trauma, seguido de 1 g em 8 h (estudo CRASH-2). Após 3 h, o benefício se perde." }
      ]
    }
  ],
  alertas: [
    "Anotações: “Ringer 250 mL em cada acesso”. O ATLS recomenda bolus inicial de até 1 L de cristaloide aquecido no adulto, e as recomendações mais recentes enfatizam limitar o cristaloide e iniciar hemocomponentes precocemente. Siga o protocolo ensinado pelos seus professores."
  ],
  resumo: "Colisão frontal + choque classe III + FAST positivo: XABCDE, O₂, 2 acessos, cristaloide aquecido com resposta transitória, transfusão maciça, ácido tranexâmico e laparotomia de urgência — sem tomografia."
});
