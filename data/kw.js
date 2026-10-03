// Palavras-chave usadas na correção automática.
// O texto do aluno é normalizado (minúsculas, sem acentos, pontuação vira espaço).
// Espaço no início/fim da palavra-chave = limite de palavra (" pa " não casa com "mapa").
// "a&b" = o texto precisa conter "a" E "b".
window.CASOS = window.CASOS || [];

window.KW = {
  apresentacao: ["apresent", "meu nome", "sou o medico", "sou a medica", "sou medico", "sou medica", "sou o doutor", "sou a doutora", "bom dia", "boa tarde", "boa noite"],
  identificacao: ["identifica", "seu nome", "qual o nome", "nome do paciente", "nome completo", " idade", "quantos anos", "profiss", "trabalha", "onde mora", "procedencia", "natural de"],
  sinaisVitais: ["sinais vitais", " pressao", " pa ", "frequencia cardiaca", " fc ", "frequencia respiratoria", " fr ", "satura", "spo2", " sat ", "oximetr", "temperatura", " temp "],
  monitor: ["monitor", "cardioscop", "oximetr", "multiparametr", "sinais vitais"],
  oxigenio: [" o2", "oxigen", "mascara", "cateter nasal", "reservatorio", "nao reinalante", "venturi", "suporte ventilatorio", "alto fluxo"],
  acesso: ["acesso ", "acessos", "jelco", "abocath", "calibros", "puncao venosa", "puncion", "cateter venoso", " veia"],
  cristaloide: ["ringer", "cristaloide", "soro", "volume", "hidrata", "expansao", "bolus", "ml kg", "fluido", "reposicao volemica"],
  tipagem: ["tipagem", "tipo sanguineo", "grupo sanguineo", " abo ", "prova cruzada", "reserva de sangue", "reserv&sangue", "fator rh"],
  hemograma: ["hemograma", "hemoglobina", " hb ", "hematocrito"],
  coagulograma: ["coagulograma", "coagulacao", " tp ", " inr", " rni", "ttpa", "tempo de protrombina", "fibrinogenio"],
  gasometria: ["gasometria", "gaso ", " ph ", "bicarbonato"],
  culturas: ["hemocultura", "cultura"],
  funcaoRenal: ["ureia", "creatinina", "funcao renal", "eletrolit", "sodio", "potassio"],
  alergias: ["alerg"],
  medicacoes: ["medicac", "medicament", "remedio", "uso continuo", "toma algum", "usa algum", "faz uso"],
  comorbidades: ["comorbid", "doenca", "doencas", "problema de saude", "hipertens", "pressao alta", "diabet", "cardiopat"],
  habitos: ["fuma", "fumante", "tabag", "cigarro", "alcool", "bebe ", "bebida", "etil", "droga"],
  inicio: ["quando comec", "quando iniciou", "ha quanto tempo", "quanto tempo", "inicio", "desde quando", "comecou", "quantos dias"],
  familia: ["famil", "pai ", "mae ", "irmao", "irma ", "parente"],
  previo: ["primeira vez", "ja aconteceu", "ja teve", "outras vezes", "outros episodios", "episodio anterior", "episodios anteriores", "episodio previo", "episodios previos", "antes "],
  glasgow: ["glasgow", "consciencia", "pupila", "neurolog", "orientad", "confus"],
  glicemia: ["glicemia", "dextro", "hgt", "glicose"],
  exposicao: ["expo", "expor", "despir", "retir&roupa", "tir&roupa", "hipoterm", "manta", "rolamento", "log roll", "dorso"],
  perfusao: ["perfus", "enchimento capilar", " tec ", "pulso", "extremidad", "pele fria", "pele quente"],
  colar: ["colar", "cervical", "coluna", "prancha", "imobiliz", "restricao de movimento", "estabilizacao manual"],
  viaAerea: ["via aerea", "vias aereas", "pervia", "perviedade"],
  respiracao: ["respira", "ventila", "auscult&pulm", "murmurio", "expansib", "torax", "frequencia respiratoria"],
  fast: ["fast", "ultrassom", " usg", "efast"],
  tranexamico: ["tranexam", "transamin"],
  transfusao: ["transfus", "hemocomponente", "concentrado de hemacias", "hemacias", "plasma", " ptm", "protocolo de transfusao", "sangue o "],
  noradrenalina: ["noradrenalina", "norepinefrina", " nora ", "vasopressor", "droga vasoativa", " dva"],
  antitermico: ["dipirona", "paracetamol", "antitermico", "antipiretico"],
  uti: [" uti ", "terapia intensiva", "semi intensiva", "internac", "internar", "interno o", "interno em", "interno na"],
  sondaVesical: ["sonda vesical", " svd", "cateter vesical", "sondagem vesical", "diurese", "debito urinario"],
  imagemTorax: ["raio x", " rx", "radiograf", "raiox", "tomografia de torax", "tc de torax"]
};
