# Treino de Simulação Realística

Site estático para treinar, de forma discursiva, as estações de prova prática de simulação realística em medicina: **triagem → XABCDE (quando precisar) → anamnese → exame físico → exames → diagnóstico → conduta → arguição**.

- **Modo estudo**: depois de cada etapa aparece o checklist do avaliador, as respostas do paciente e os pontos-chave.
- **Modo prova**: você só recebe as informações do que perguntou, examinou ou pediu; o checklist completo aparece no final.
- Correção automática por palavras-chave (ajustável à mão), ditado por voz (Chrome), cronômetro da estação, prontuário com os dados obtidos.
- **Roteiros** de estudo (XABCDE, anamnese, exame físico/Glasgow, gasometria com interpretador, choque, sepse, reações transfusionais, hemorragia digestiva, epistaxe, anemia ferropriva, TRM, PCR) e banco de **perguntas do avaliador**.

Os casos foram montados a partir das anotações de aula (PDFs “Duas Colunas”). Trechos com sublinhado pontilhado foram complementados para a simulação funcionar. Material de estudo — não substitui as diretrizes nem a orientação dos professores.

## Rodar localmente

```bash
python3 -m http.server 8765
# abra http://localhost:8765
```

Não há build: HTML, CSS e JavaScript puros. O progresso fica salvo no navegador (localStorage).

## Estrutura

```
index.html
assets/app.js        lógica (rotas, sessão, correção, cronômetro, ditado)
assets/style.css     estilos (tema claro/escuro)
data/kw.js           palavras-chave compartilhadas da correção automática
data/casos/casoNN.js um arquivo por caso
data/roteiros.js     roteiros de estudo + perguntas
```

Para adicionar um caso, crie `data/casos/casoNN.js` com `CASOS.push({...})` seguindo o formato dos existentes e inclua o `<script>` no `index.html`.
