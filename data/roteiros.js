window.ROTEIROS = [
  {
    id: "estacao",
    titulo: "Como conduzir a estação",
    html: `
<p>Na prova prática o avaliador pontua o que você <b>fala e faz</b>. Verbalize tudo: “estou avaliando…”, “peço…”, “minha conduta é…”.</p>
<ol class="steps">
  <li><b>Entrada</b> — higienizar as mãos, EPI quando indicado, apresentar-se, confirmar a identidade do paciente e pedir consentimento. <span class="tag">Sala vermelha: apresentação rápida — a prioridade é o XABCDE.</span></li>
  <li><b>Primeira impressão (10 s)</b> — está estável? Fala? Respira? Está chocado? <b>Se instável → XABCDE/ABCDE + MOV antes da anamnese completa.</b></li>
  <li><b>Anamnese</b> — completa no paciente estável; dirigida (AMPLA) no trauma/emergência.</li>
  <li><b>Exame físico</b> — sinais vitais + exame geral + exame dirigido à queixa.</li>
  <li><b>Exames complementares</b> — peça o que muda conduta e <b>justifique</b>. Interprete os resultados em voz alta.</li>
  <li><b>Diagnóstico</b> — sindrômico → etiológico → gravidade → diferenciais.</li>
  <li><b>Conduta</b> — medidas imediatas, medicações com dose e via, destino (alta, internação, UTI, cirurgia), reavaliação.</li>
  <li><b>Comunicação</b> — explicar ao paciente/familiar, orientações, sinais de alarme e retorno.</li>
</ol>
<div class="callout">Dica: se travar, volte ao roteiro e diga “vou reavaliar o ABCDE”. Reavaliar sempre pontua.</div>`,
    perguntas: [
      { p: "Qual é a sequência de atendimento em uma estação de simulação?", r: "Apresentação/identificação → primeira impressão (estável?) → XABCDE/ABCDE + MOV se instável → anamnese → exame físico → exames → diagnóstico (sindrômico, etiológico, gravidade, diferenciais) → conduta (com doses e destino) → comunicação e reavaliação." }
    ]
  },
  {
    id: "xabcde",
    titulo: "XABCDE e ABCDE + MOV",
    html: `
<h4>Trauma — XABCDE (ATLS)</h4>
<table class="ref">
<thead><tr><th>Letra</th><th>Avaliar</th><th>Fazer</th></tr></thead>
<tbody>
<tr><td><b>X</b></td><td>Hemorragia externa exsanguinante</td><td>Compressão direta, torniquete</td></tr>
<tr><td><b>A</b></td><td>Via aérea + coluna cervical: fala? sangue, corpo estranho, ruídos (estridor, gorgolejo)</td><td>Estabilização manual/colar, elevação do mento/tração da mandíbula, aspiração, cânula; IOT se Glasgow ≤ 8 ou via aérea ameaçada</td></tr>
<tr><td><b>B</b></td><td>Expor o tórax: FR, expansibilidade, desvio de traqueia, turgência jugular, percussão, ausculta, SpO₂</td><td>O₂ 10–15 L/min (máscara com reservatório); descompressão de pneumotórax hipertensivo; drenagem torácica</td></tr>
<tr><td><b>C</b></td><td>PA, FC, pulsos, TEC, pele, fontes de sangramento (tórax, abdome, pelve, ossos longos, externo)</td><td>Monitorização, 2 acessos calibrosos (14–16G) com coleta (tipagem/prova cruzada), cristaloide aquecido (39 °C), hemocomponentes, ácido tranexâmico, FAST, cinta pélvica</td></tr>
<tr><td><b>D</b></td><td>Glasgow, pupilas, déficit focal, glicemia</td><td>Corrigir hipoglicemia, evitar hipóxia/hipotensão (TCE)</td></tr>
<tr><td><b>E</b></td><td>Exposição completa, rolamento em bloco (dorso)</td><td>Prevenir hipotermia (manta, fluidos aquecidos)</td></tr>
</tbody></table>
<p><b>Adjuntos</b>: monitor, sonda vesical (se sem sinais de lesão uretral), sonda gástrica (se sem fratura de base de crânio), gasometria/lactato, RX de tórax e pelve, FAST.</p>
<p><b>Avaliação secundária</b>: história AMPLA + exame da cabeça aos pés.</p>
<h4>Emergência clínica — ABCDE + MOV</h4>
<p><b>M</b>onitorização (cardioscópio, oxímetro, PA), <b>O</b>xigênio (se SpO₂ &lt; 92–94% ou desconforto), <b>V</b>eia (acesso calibroso com coleta). Faça junto com o ABCDE e uma anamnese dirigida.</p>
<div class="callout">Anotações: “trauma = atendimento ATLS → X só em sangramento externo; A: se ele conseguir te responder tá bom; B: expor o tórax, auscultar; C: 2 acessos venosos calibrosos, cristaloide aquecido a 39 °C”.</div>`,
    perguntas: [
      { p: "O que avaliar e fazer em cada letra do XABCDE?", r: "X: hemorragia exsanguinante (compressão/torniquete). A: via aérea + coluna cervical (fala? aspirar, cânula, IOT se Glasgow ≤ 8). B: expor tórax, FR, ausculta, SpO₂ (O₂ alto fluxo, tratar pneumotórax). C: PA, FC, perfusão, fontes de sangramento (2 acessos, cristaloide aquecido, hemocomponentes, ácido tranexâmico, FAST). D: Glasgow, pupilas, glicemia. E: expor, rolamento em bloco, prevenir hipotermia." },
      { p: "O que significa MOV?", r: "Monitorização, Oxigênio e Veia (acesso venoso) — medidas iniciais em todo paciente grave, feitas junto com o ABCDE." },
      { p: "Quando intubar na avaliação primária?", r: "Glasgow ≤ 8, via aérea não protegida (sangue, vômito, edema), insuficiência respiratória refratária, ou expectativa de deterioração (queimadura de via aérea, hematoma cervical expansivo)." }
    ]
  },
  {
    id: "anamnese",
    titulo: "Anamnese",
    html: `
<ol class="steps">
  <li><b>Identificação</b>: nome, idade, profissão, procedência, com quem mora.</li>
  <li><b>Queixa principal</b> e duração (nas palavras do paciente).</li>
  <li><b>HDA</b> — para cada sintoma: início, duração, localização, intensidade, características, irradiação, fatores de melhora/piora, sintomas associados, evolução, tratamentos já feitos. <span class="tag">Dor: ALICIA — Aparecimento, Localização, Intensidade, Características, Irradiação, Alívio/Agravo</span></li>
  <li><b>Interrogatório sobre os diversos aparelhos</b> (febre, perda de peso, sintomas cardiorrespiratórios, gastrointestinais, urinários, neurológicos).</li>
  <li><b>Antecedentes pessoais</b>: comorbidades, <b>medicações</b> (anticoagulantes, antiagregantes, AINEs!), <b>alergias</b>, cirurgias, internações, transfusões, vacinação; gineco-obstétricos (DUM, gestações, abortos, contracepção).</li>
  <li><b>Antecedentes familiares</b>.</li>
  <li><b>Hábitos</b>: tabagismo (maços-ano), etilismo (quantidade e tempo), drogas, alimentação, atividade física.</li>
  <li><b>Condições socioeconômicas</b> e rede de apoio.</li>
</ol>
<h4>Trauma — AMPLA</h4>
<p><b>A</b>lergias · <b>M</b>edicamentos · <b>P</b>assado médico/prenhez · <b>L</b>íquidos e alimentos ingeridos · <b>A</b>mbiente e eventos (mecanismo do trauma).</p>
<div class="callout">Pergunte <b>alergias antes de prescrever</b> (principalmente antibiótico) e <b>medicações que sangram</b> em qualquer sangramento.</div>`,
    perguntas: [
      { p: "O que significa AMPLA?", r: "Alergias, Medicamentos em uso, Passado médico/prenhez, Líquidos e alimentos ingeridos (última refeição), Ambiente e eventos relacionados ao trauma." },
      { p: "Quais perguntas não podem faltar em um paciente com sangramento?", r: "Início, volume e frequência; episódios prévios; uso de anticoagulantes, antiagregantes (AAS, clopidogrel) e AINEs; comorbidades (hepatopatia, HAS); sangramentos em outros locais; história familiar de coagulopatia; sintomas de choque (tontura, síncope)." }
    ]
  },
  {
    id: "exame",
    titulo: "Exame físico e Glasgow",
    html: `
<ol class="steps">
  <li><b>Sinais vitais</b>: PA, FC, FR, SpO₂, temperatura, glicemia capilar, dor.</li>
  <li><b>Ectoscopia</b>: estado geral, consciência, fácies, hidratação, coloração (corado/hipocorado, cianose, icterícia — graduar em cruzes /4+), perfusão (TEC), edema.</li>
  <li><b>Cardiovascular</b>: ictus, bulhas, sopros, pulsos, turgência jugular.</li>
  <li><b>Respiratório</b>: inspeção (FR, padrão, tiragem), palpação (expansibilidade, frêmito toracovocal), percussão, ausculta.</li>
  <li><b>Abdome</b>: <b>inspeção → ausculta → percussão → palpação</b>. Sinais: Blumberg, Murphy, Giordano, Cullen (periumbilical), Grey Turner (flancos). Toque retal quando indicado (sangramento!).</li>
  <li><b>Neurológico</b>: Glasgow, pupilas, força, sensibilidade, reflexos, sinais meníngeos.</li>
  <li><b>Extremidades</b>: TEC, pulsos, edema, sinais de TVP.</li>
</ol>
<h4>Escala de coma de Glasgow</h4>
<table class="ref">
<thead><tr><th>Abertura ocular</th><th>Resposta verbal</th><th>Resposta motora</th></tr></thead>
<tbody>
<tr><td>4 espontânea</td><td>5 orientada</td><td>6 obedece comandos</td></tr>
<tr><td>3 ao som</td><td>4 confusa</td><td>5 localiza</td></tr>
<tr><td>2 à pressão</td><td>3 palavras</td><td>4 flexão normal (retirada)</td></tr>
<tr><td>1 ausente</td><td>2 sons</td><td>3 flexão anormal</td></tr>
<tr><td></td><td>1 ausente</td><td>2 extensão</td></tr>
<tr><td></td><td></td><td>1 ausente</td></tr>
</tbody></table>
<p>Glasgow 15 = normal · 13–14 leve · 9–12 moderado · <b>≤ 8 grave (proteger via aérea)</b>. Glasgow-P: subtrair 1 ou 2 pontos conforme pupilas não reativas.</p>
<h4>Síndrome de consolidação pulmonar</h4>
<p>↓ expansibilidade, <b>↑ frêmito toracovocal</b>, macicez, estertores crepitantes, sopro tubário.</p>`,
    perguntas: [
      { p: "Qual a ordem do exame do abdome e por quê?", r: "Inspeção → ausculta → percussão → palpação. A ausculta vem antes da palpação/percussão para não alterar os ruídos hidroaéreos." },
      { p: "Quais são os componentes da escala de Glasgow?", r: "Abertura ocular (1–4), resposta verbal (1–5) e resposta motora (1–6). Total 3–15; ≤ 8 indica TCE grave e necessidade de proteger a via aérea." },
      { p: "Quais achados caracterizam a síndrome de consolidação?", r: "Expansibilidade diminuída, frêmito toracovocal aumentado, macicez à percussão, estertores crepitantes e sopro tubário." }
    ]
  },
  {
    id: "gasometria",
    titulo: "Gasometria passo a passo",
    html: `
<ol class="steps">
  <li><b>pH</b> (7,35–7,45): &lt; 7,35 = <b>acidemia</b>; &gt; 7,45 = <b>alcalemia</b>.</li>
  <li><b>Distúrbio primário</b>: qual valor explica o pH? HCO₃⁻ (22–26) → metabólico; PaCO₂ (35–45) → respiratório.</li>
  <li><b>Compensação esperada</b>:
    <ul>
      <li>Acidose metabólica (Winter): PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2</li>
      <li>Alcalose metabólica: PaCO₂ = 0,7 × HCO₃⁻ + 21 ± 2</li>
      <li>Acidose respiratória: HCO₃⁻ ↑ 1 (aguda) ou 3,5 (crônica) a cada 10 mmHg de PaCO₂ acima de 40</li>
      <li>Alcalose respiratória: HCO₃⁻ ↓ 2 (aguda) ou 4–5 (crônica) a cada 10 mmHg abaixo de 40</li>
    </ul>
    Fora do esperado → <b>distúrbio misto</b>.</li>
  <li><b>Ânion gap</b> (na acidose metabólica): AG = Na⁺ − (Cl⁻ + HCO₃⁻); normal 8–12 (corrigir +2,5 para cada 1 g/dL de albumina abaixo de 4). AG ↑: lactato, cetoacidose, uremia, intoxicações. AG normal: diarreia, acidose tubular, SF em excesso.</li>
  <li><b>Oxigenação</b>: PaO₂ &lt; 80 = hipoxemia; &lt; 60 = insuficiência respiratória. Relação PaO₂/FiO₂.</li>
</ol>
<div data-widget="gaso"></div>`,
    perguntas: [
      { p: "Como interpretar uma gasometria passo a passo?", r: "1) pH: acidemia ou alcalemia. 2) Distúrbio primário: HCO₃⁻ (metabólico) ou PaCO₂ (respiratório) explica o pH? 3) Compensação esperada (Winter na acidose metabólica: PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2); fora do esperado = distúrbio misto. 4) Ânion gap na acidose metabólica. 5) Oxigenação (PaO₂, PaO₂/FiO₂)." },
      { p: "Qual a fórmula de Winter e para que serve?", r: "PaCO₂ esperada = 1,5 × HCO₃⁻ + 8 ± 2. Serve para saber se a compensação respiratória de uma acidose metabólica é adequada: PaCO₂ acima do esperado = acidose respiratória associada; abaixo = alcalose respiratória associada." }
    ]
  },
  {
    id: "laboratorio",
    titulo: "Exames laboratoriais — leitura rápida",
    html: `
<table class="ref">
<thead><tr><th>Exame</th><th>Referência usual</th><th>O que olhar</th></tr></thead>
<tbody>
<tr><td>Hemoglobina</td><td>H 13–17 · M 12–16 g/dL</td><td>Anemia; transfundir se &lt; 7 (&lt; 8 cardiopata) ou instabilidade</td></tr>
<tr><td>VCM / HCM / RDW</td><td>80–100 fL / 27–31 pg / 11,5–14,5%</td><td>Microcítica (ferropriva, talassemia), macrocítica (B12, folato, álcool)</td></tr>
<tr><td>Leucócitos</td><td>4.000–11.000/mm³ · bastões até 5%</td><td>Leucocitose com desvio à esquerda → infecção bacteriana</td></tr>
<tr><td>Plaquetas</td><td>150–450 mil</td><td>Plaquetopenia: sepse/CIVD, hiperesplenismo (cirrose)</td></tr>
<tr><td>TP / INR / TTPa</td><td>10–14 s / &lt; 1,2 / 25–35 s</td><td>Anticoagulantes, hepatopatia, coagulopatia do trauma, CIVD</td></tr>
<tr><td>Lactato</td><td>&lt; 2 mmol/L</td><td>Hipoperfusão; &gt; 4 = gravidade (sepse/choque)</td></tr>
<tr><td>Ureia / creatinina</td><td>15–45 / 0,6–1,2 mg/dL</td><td>Lesão renal; ureia alta isolada → sangue digerido (HDA)</td></tr>
<tr><td>Ferritina / sat. transferrina</td><td>30–400 ng/mL / 20–50%</td><td>Ambas ↓ = ferropenia</td></tr>
<tr><td>LDH / BI / haptoglobina</td><td>&lt; 250 / &lt; 0,9 / 41–165</td><td>Hemólise: LDH ↑, BI ↑, haptoglobina ↓</td></tr>
<tr><td>PCR</td><td>&lt; 0,5–1,0 mg/dL</td><td>Inflamação/infecção; acompanhar resposta</td></tr>
<tr><td>β-hCG</td><td>—</td><td>Sempre em mulher em idade fértil (sangramento, dor abdominal, antes de imagem com radiação)</td></tr>
</tbody></table>`,
    perguntas: [
      { p: "Que exames compõem a avaliação de hemólise?", r: "LDH (↑), bilirrubina indireta (↑), haptoglobina (↓), reticulócitos (↑), esfregaço (esquizócitos/esferócitos), Coombs direto (hemólise imune) e urina (hemoglobinúria)." },
      { p: "Quando pedir β-hCG?", r: "Em toda mulher em idade fértil com sangramento vaginal, dor abdominal, antes de exames com radiação ou medicações teratogênicas — “sempre pedir”." }
    ]
  },
  {
    id: "choque",
    titulo: "Choque",
    html: `
<p><b>Choque</b> = hipoperfusão tecidual (oferta de O₂ insuficiente). Sinais: taquicardia, taquipneia, TEC &gt; 3 s, pele fria/mosqueada (quente no distributivo inicial), oligúria, alteração mental, lactato &gt; 2; <b>hipotensão é tardia</b>. Índice de choque (FC/PAS) &gt; 1 = grave.</p>
<table class="ref">
<thead><tr><th>Tipo</th><th>Exemplos</th><th>Achados</th><th>Tratamento-chave</th></tr></thead>
<tbody>
<tr><td>Hipovolêmico</td><td>Hemorragia, desidratação</td><td>Pele fria, veias colabadas</td><td>Controle do sangramento, hemocomponentes, cristaloide</td></tr>
<tr><td>Distributivo</td><td>Séptico, neurogênico, anafilático</td><td>Pele quente (início); neurogênico com <b>bradicardia</b></td><td>Volume + noradrenalina; anafilaxia: adrenalina IM</td></tr>
<tr><td>Cardiogênico</td><td>IAM, IC descompensada</td><td>Congestão, B3, estertores</td><td>Inotrópico (dobutamina), revascularização</td></tr>
<tr><td>Obstrutivo</td><td>Tamponamento, pneumotórax hipertensivo, TEP</td><td>Turgência jugular</td><td>Desfazer a obstrução (punção, drenagem, trombólise)</td></tr>
</tbody></table>
<h4>Choque hemorrágico — classes (ATLS)</h4>
<table class="ref">
<thead><tr><th></th><th>I</th><th>II</th><th>III</th><th>IV</th></tr></thead>
<tbody>
<tr><td>Perda</td><td>&lt; 15%</td><td>15–30%</td><td>31–40%</td><td>&gt; 40%</td></tr>
<tr><td>FC</td><td>normal</td><td>normal/↑</td><td>↑ (&gt; 120)</td><td>↑↑ (&gt; 140)</td></tr>
<tr><td>PA</td><td>normal</td><td>normal</td><td>↓</td><td>↓↓</td></tr>
<tr><td>Diurese</td><td>normal</td><td>normal</td><td>↓</td><td>↓↓</td></tr>
<tr><td>Consciência</td><td>normal</td><td>ansioso</td><td>confuso</td><td>letárgico</td></tr>
<tr><td>Conduta</td><td>observar</td><td>cristaloide ± sangue</td><td>hemácias</td><td>transfusão maciça</td></tr>
</tbody></table>
<div class="callout">Anotações: “leve → cristaloide; moderada → hemácias; grave (FC &gt; 120 e hipotensão) → protocolo de transfusão maciça”. <b>Hemotransfusão antes de droga vasoativa.</b> Ácido tranexâmico 1 g em 10 min (até 3 h) + 1 g em 8 h.</div>`,
    perguntas: [
      { p: "Quais os tipos de choque e um exemplo de cada?", r: "Hipovolêmico (hemorragia), distributivo (séptico, neurogênico, anafilático), cardiogênico (IAM) e obstrutivo (tamponamento, pneumotórax hipertensivo, TEP)." },
      { p: "Quais são as classes de choque hemorrágico e a conduta de cada?", r: "I (< 15%): observar. II (15–30%): cristaloide ± sangue. III (31–40%; FC > 120, PA ↓, confusão): hemácias. IV (> 40%): transfusão maciça e controle imediato do sangramento." },
      { p: "Como diferenciar choque neurogênico de hemorrágico?", r: "Neurogênico: hipotensão com bradicardia, pele quente e seca, déficit neurológico. Hemorrágico: hipotensão com taquicardia, pele fria e pálida. No trauma, sempre excluir hemorragia primeiro." }
    ]
  },
  {
    id: "sepse",
    titulo: "Sepse e pneumonia",
    html: `
<p><b>Sepse</b> (Sepsis-3): disfunção orgânica ameaçadora à vida por resposta desregulada à infecção (aumento ≥ 2 no SOFA). <b>Choque séptico</b>: vasopressor para PAM ≥ 65 mmHg <b>e</b> lactato &gt; 2 mmol/L apesar de volume adequado.</p>
<table class="ref">
<thead><tr><th>Escore</th><th>Componentes</th><th>Uso</th></tr></thead>
<tbody>
<tr><td>qSOFA</td><td>FR ≥ 22 · PAS ≤ 100 · alteração mental</td><td>Triagem à beira do leito; ≥ 2 = alto risco</td></tr>
<tr><td>SOFA</td><td>PaO₂/FiO₂, plaquetas, bilirrubina, PAM/vasopressor, Glasgow, creatinina/diurese</td><td>Define disfunção orgânica</td></tr>
<tr><td>NEWS2 / MEWS</td><td>FR, SpO₂, O₂ suplementar, PA, FC, consciência, temperatura</td><td>Alerta precoce de deterioração</td></tr>
<tr><td>CURB-65</td><td>Confusão, Ureia &gt; 50, FR ≥ 30, PAS &lt; 90 ou PAD ≤ 60, idade ≥ 65</td><td>PAC: 0–1 ambulatorial · 2 internar · ≥ 3 grave (UTI?)</td></tr>
</tbody></table>
<h4>Pacote da 1ª hora</h4>
<ol class="steps">
  <li>Lactato (repetir se &gt; 2).</li>
  <li>Hemoculturas <b>antes</b> do antibiótico (sem atrasá-lo).</li>
  <li>Antibiótico de amplo espectro na 1ª hora.</li>
  <li>Cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4 (reavaliar a cada bolus).</li>
  <li>Noradrenalina se PAM &lt; 65 durante/após o volume (1ª linha em qualquer idade).</li>
</ol>
<p>Dobutamina: se disfunção cardíaca com hipoperfusão persistente. Vasopressina: 2º vasopressor. Hidrocortisona: se dose crescente de noradrenalina.</p>
<h4>Antibiótico na PAC</h4>
<p>Ambulatorial: amoxicilina ou macrolídeo. Internado: <b>β-lactâmico (ceftriaxona) + macrolídeo (azitromicina)</b> ou quinolona respiratória (levofloxacino). Ao sair a cultura: ajustar/descalonar.</p>`,
    perguntas: [
      { p: "Quais são os itens do pacote da 1ª hora da sepse?", r: "Medir lactato (repetir se > 2), colher hemoculturas antes do antibiótico, antibiótico de amplo espectro, cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4, e vasopressor (noradrenalina) se PAM < 65 mmHg." },
      { p: "Quais os critérios do CURB-65 e como usá-lo?", r: "Confusão, Ureia > 50 mg/dL, FR ≥ 30, PAS < 90 ou PAD ≤ 60, idade ≥ 65. 0–1: tratamento ambulatorial; 2: internação; ≥ 3: PAC grave (considerar UTI)." },
      { p: "Qual o esquema antibiótico para PAC internada?", r: "β-lactâmico (ex.: ceftriaxona 1–2 g/dia) + macrolídeo (azitromicina 500 mg/dia), ou quinolona respiratória (levofloxacino 750 mg/dia) em monoterapia." }
    ]
  },
  {
    id: "transfusao",
    titulo: "Reações transfusionais",
    html: `
<div class="callout"><b>Conduta geral em qualquer reação:</b> parar a transfusão → manter acesso com SF 0,9% → sinais vitais (comparar com o basal) → conferir bolsa e identificação → notificar o banco de sangue e enviar bolsa + amostras → tratar conforme o tipo.</div>
<table class="ref">
<thead><tr><th>Reação</th><th>Tempo / mecanismo</th><th>Quadro</th><th>Conduta</th></tr></thead>
<tbody>
<tr><td>Hemolítica aguda (ABO)</td><td>Aguda · imune</td><td>Febre, dor lombar, hipotensão, hemoglobinúria, CIVD</td><td>Parar, hidratar (diurese), suporte, tratar CIVD</td></tr>
<tr><td>Febril não hemolítica</td><td>Aguda · imune</td><td>↑ ≥ 1 °C, calafrios, tremores</td><td>Antitérmico; leucorredução nas próximas</td></tr>
<tr><td>Alérgica</td><td>Aguda · imune</td><td>Urticária, prurido</td><td>Anti-histamínico</td></tr>
<tr><td>Anafilática</td><td>Aguda · imune (ex.: anti-IgA)</td><td>Hipotensão, broncoespasmo, angioedema</td><td>Adrenalina IM 0,5 mg</td></tr>
<tr><td>TRALI</td><td>Aguda (até 6 h) · imune</td><td>Hipoxemia, edema pulmonar não cardiogênico, febre</td><td>Suporte respiratório (sem diurético)</td></tr>
<tr><td>TACO</td><td>Aguda (até 12 h) · não imune</td><td>Dispneia, HAS, turgência jugular, congestão</td><td>Diurético, reduzir velocidade</td></tr>
<tr><td>Contaminação bacteriana</td><td>Aguda · não imune</td><td>Febre alta, tremores, hipotensão</td><td>Culturas (paciente + bolsa), antibiótico amplo espectro</td></tr>
<tr><td>Hemolítica tardia</td><td>3–14 dias · imune</td><td>Queda de Hb, icterícia, Coombs +</td><td>Suporte, fenotipagem</td></tr>
<tr><td>DECH transfusional</td><td>Tardia · imune</td><td>Febre, rash, pancitopenia</td><td>Prevenção: hemocomponente irradiado</td></tr>
<tr><td>Púrpura pós-transfusional</td><td>~1 semana · imune</td><td>Plaquetopenia grave</td><td>Imunoglobulina EV</td></tr>
<tr><td>Sobrecarga de ferro</td><td>Tardia · não imune</td><td>Politransfundidos</td><td>Quelantes de ferro</td></tr>
</tbody></table>`,
    perguntas: [
      { p: "Qual a conduta geral diante de qualquer reação transfusional?", r: "Parar a transfusão, manter o acesso com SF 0,9%, aferir sinais vitais, conferir a bolsa e a identificação do paciente, notificar o banco de sangue enviando a bolsa e amostras, e tratar conforme o tipo de reação." },
      { p: "Diferencie TRALI de TACO.", r: "TRALI: imune (anticorpos do doador), edema pulmonar não cardiogênico, hipoxemia, febre, pode haver hipotensão; tratamento de suporte respiratório, sem diurético. TACO: sobrecarga de volume (não imune), hipertensão, turgência jugular, congestão; tratamento com diurético e redução da velocidade." }
    ]
  },
  {
    id: "hemorragia",
    titulo: "Hemorragia digestiva",
    html: `
<table class="ref">
<thead><tr><th></th><th>HDA (acima do ângulo de Treitz)</th><th>HDB (abaixo de Treitz)</th></tr></thead>
<tbody>
<tr><td>Apresentação</td><td>Hematêmese, melena</td><td>Hematoquezia/enterorragia (melena se cólon direito)</td></tr>
<tr><td>Causas</td><td>Úlcera péptica (AINE, H. pylori), varizes, Mallory-Weiss, gastrite</td><td>Doença diverticular, angiodisplasia, colite isquêmica, hemorroidas, neoplasia</td></tr>
<tr><td>Pistas</td><td>Ureia ↑ desproporcional (sangue digerido)</td><td>Idoso, constipação, AINE/AAS</td></tr>
<tr><td>Exame</td><td>Endoscopia digestiva alta em até 24 h (varizes: até 12 h)</td><td>Colonoscopia após preparo; angio-TC se instável/sangramento ativo</td></tr>
</tbody></table>
<h4>Conduta inicial (ambas)</h4>
<p>ABCDE (IOT se rebaixamento + hematêmese), 2 acessos calibrosos, tipagem/prova cruzada, cristaloide com cautela, <b>transfusão restritiva</b> (Hb &lt; 7; &lt; 8 cardiopatas), suspender AINE/AAS/anticoagulantes conforme risco.</p>
<h4>HDA varicosa (cirrose)</h4>
<ol class="steps">
  <li>Proteção de via aérea se necessário.</li>
  <li>Droga vasoativa esplâncnica: <b>terlipressina 2 mg EV 4/4 h</b> (ou octreotida 50 mcg + 50 mcg/h).</li>
  <li><b>Ceftriaxona 1 g/dia</b> (profilaxia, até 7 dias).</li>
  <li>EDA em até 12 h com <b>ligadura elástica</b>.</li>
  <li>Refratário: balão de Sengstaken-Blakemore (ponte) e TIPS.</li>
</ol>
<h4>HDA não varicosa</h4>
<p>IBP EV (ex.: omeprazol 80 mg em bolus, depois manutenção), EDA em até 24 h com terapia endoscópica; pesquisar e tratar H. pylori.</p>`,
    perguntas: [
      { p: "Como diferenciar HDA de HDB?", r: "Anatomicamente pelo ângulo de Treitz. Clínica: hematêmese/melena → HDA; hematoquezia → HDB (exceto HDA maciça). Ureia desproporcionalmente elevada sugere HDA. Sonda nasogástrica (aspirado) e, principalmente, endoscopia digestiva alta confirmam." },
      { p: "Qual a conduta na HDA varicosa?", r: "ABCDE com proteção da via aérea, 2 acessos, transfusão restritiva (Hb 7–8), terlipressina/octreotida, ceftriaxona profilática, EDA em até 12 h com ligadura elástica; balão e TIPS se refratário." }
    ]
  },
  {
    id: "epistaxe",
    titulo: "Epistaxe",
    html: `
<p><b>Anterior</b> (~90%): plexo de Kiesselbach (área de Little), sangra pela narina, ponto visível, cede com compressão. <b>Posterior</b>: ramos da artéria esfenopalatina, idosos/hipertensos, sangue escorrendo pela orofaringe, não cede com compressão anterior.</p>
<ol class="steps">
  <li>Paciente <b>sentado e inclinado para a frente</b>; avaliar via aérea e estabilidade.</li>
  <li><b>Compressão bidigital das asas nasais por 10–15 min</b>, contínua.</li>
  <li>Vasoconstritor tópico (oximetazolina) ± anestésico em algodão.</li>
  <li>Rinoscopia anterior: ponto visível → cauterização química (nitrato de prata).</li>
  <li>Persistiu: <b>tamponamento anterior</b> (gaze com vaselina, Merocel).</li>
  <li>Persistiu: <b>tamponamento posterior</b> (sonda de Foley/balão) + internação + otorrino.</li>
</ol>
<p><b>Orientações</b>: umidificar o ambiente, soro fisiológico nasal, não manipular nem assoar com força, evitar esforço e anti-inflamatórios, retornar se recorrer.</p>`,
    perguntas: [
      { p: "Descreva o escalonamento do tratamento da epistaxe.", r: "Sentado inclinado para a frente + compressão 10–15 min → vasoconstritor tópico → cauterização química se ponto visível → tamponamento anterior → tamponamento posterior com internação e otorrino (ligadura/embolização se refratário)." }
    ]
  },
  {
    id: "anemia",
    titulo: "Anemia ferropriva",
    html: `
<p><b>Clínica</b>: fadiga, palidez, palpitações, dispneia aos esforços, tontura, pica (gelo), unhas quebradiças/coiloníquia, queilite angular, glossite, sopro funcional.</p>
<p><b>Laboratório</b>: Hb ↓, VCM ↓, HCM ↓, <b>RDW ↑</b>, <b>ferritina ↓ (&lt; 30)</b>, saturação de transferrina ↓ (&lt; 20%), reticulócitos baixos.</p>
<p><b>Causa</b>: perda de sangue até prova em contrário — mulher em idade fértil: sangramento uterino (PALM-COEIN); homem/pós-menopausa: investigar trato gastrointestinal (EDA + colonoscopia). Outras: dieta, má absorção (bariátrica, doença celíaca), gestação.</p>
<h4>Tratamento</h4>
<ol class="steps">
  <li><b>Ferro oral</b>: 60–120 mg/dia de ferro elementar (dose única diária ou dias alternados).</li>
  <li>Tomar longe das refeições, com <b>vitamina C (suco de laranja)</b>; evitar leite, café, chá, antiácidos/IBP perto da dose.</li>
  <li>Efeitos: fezes escuras, constipação, náusea.</li>
  <li>Resposta: reticulócitos ↑ em 7–10 dias; Hb ↑ 1–2 g/dL em 2–4 semanas.</li>
  <li>Manter ~3 meses após normalizar a Hb (repor estoques).</li>
  <li>Ferro EV: intolerância, má absorção, perda contínua, necessidade de reposição rápida.</li>
  <li><b>Tratar a causa.</b></li>
</ol>`,
    perguntas: [
      { p: "Como orientar a reposição de ferro oral?", r: "Ferro elementar 60–120 mg/dia, em jejum ou longe das refeições, com vitamina C (suco de laranja); evitar leite, café, chá, antiácidos e IBP perto da dose; avisar sobre fezes escuras e constipação; reavaliar em 2–4 semanas; manter cerca de 3 meses após normalizar a Hb; tratar a causa." }
    ]
  },
  {
    id: "trm",
    titulo: "Trauma raquimedular",
    html: `
<p><b>Suspeitar</b>: mecanismo de risco (mergulho em água rasa, queda, colisão), dor cervical, déficit neurológico, intoxicação ou lesão distrativa.</p>
<ol class="steps">
  <li>Restrição de movimento da coluna (estabilização manual, colar, maca rígida, rolamento em bloco).</li>
  <li>XABCDE: atenção à ventilação (lesões altas: paralisia diafragmática/intercostal).</li>
  <li><b>Hipotensão no trauma é hemorrágica até prova em contrário</b> — excluir sangramento.</li>
  <li><b>Choque neurogênico</b> (lesão acima de T6): hipotensão + <b>bradicardia</b> + pele quente → volume com cautela, <b>noradrenalina</b>, atropina se bradicardia sintomática; manter PAM elevada (~85–90 mmHg) nos primeiros dias.</li>
  <li><b>Choque medular</b>: perda transitória de reflexos/tônus abaixo da lesão (não é choque circulatório).</li>
  <li>Imagem: <b>TC de coluna</b> (RM para medula/ligamentos).</li>
  <li>Sonda vesical, prevenção de lesão por pressão e TVP; neurocirurgia precoce. Corticoide não é rotina.</li>
</ol>`,
    perguntas: [
      { p: "Quais os sinais do choque neurogênico e como tratá-lo?", r: "Hipotensão, bradicardia, pele quente e seca, em lesão medular acima de T6. Tratamento: excluir hemorragia, volume com cautela, noradrenalina (alvo PAM ~85–90), atropina se bradicardia sintomática." }
    ]
  },
  {
    id: "pcr",
    titulo: "Parada cardiorrespiratória",
    html: `
<ol class="steps">
  <li>Segurança da cena → responsividade → respiração e pulso (≤ 10 s).</li>
  <li>Chamar ajuda e pedir o desfibrilador/carrinho.</li>
  <li><b>Compressões</b> de alta qualidade: 100–120/min, 5–6 cm, retorno total do tórax, mínimas interrupções; troca do compressor a cada 2 min.</li>
  <li><b>Ventilação</b>: 30:2 sem via aérea avançada; com via aérea avançada, 1 ventilação a cada 6 s, sem pausar compressões.</li>
  <li><b>Ritmo chocável</b> (FV/TV sem pulso): choque o quanto antes → RCP 2 min → adrenalina 1 mg após o 2º choque, a cada 3–5 min → amiodarona 300 mg (depois 150 mg).</li>
  <li><b>Não chocável</b> (AESP/assistolia): <b>adrenalina 1 mg o quanto antes</b>, a cada 3–5 min.</li>
  <li>Causas reversíveis — <b>5H</b>: hipovolemia, hipóxia, H⁺ (acidose), hipo/hipercalemia, hipotermia; <b>5T</b>: tensão no tórax (pneumotórax), tamponamento, toxinas, trombose coronária, trombose pulmonar.</li>
</ol>
<div class="callout">Anotações: “compressão → ventilação → adrenalina”. Cada minuto sem RCP/desfibrilação reduz a sobrevida em ~7–10%.</div>`,
    perguntas: [
      { p: "Quais são as causas reversíveis de PCR (5H e 5T)?", r: "5H: hipovolemia, hipóxia, H⁺ (acidose), hipo/hipercalemia, hipotermia. 5T: tensão no tórax (pneumotórax hipertensivo), tamponamento cardíaco, toxinas, trombose coronária, trombose pulmonar." },
      { p: "Quando e quanto de adrenalina na PCR?", r: "1 mg EV/IO a cada 3–5 min. Ritmo não chocável: o quanto antes. Ritmo chocável: após o 2º choque." }
    ]
  }
];
