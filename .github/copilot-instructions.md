# Orientações do projeto

## Idioma

- Escreva todas as respostas, explicações, documentações, cenários Gherkin, nomes descritivos de cenários e comentários de código em português do Brasil (pt-BR).
- Preserve identificadores técnicos, APIs, atributos e textos reais da interface, além dos nomes oficiais de ferramentas, quando necessário.

## Mapeamento seguro e testes web

- Antes de gerar artefatos, examine os arquivos relacionados e preserve o conteúdo existente. Não sobrescreva configurações do Playwright.
- Use o Playwright MCP para inspecionar a página quando suas ferramentas estiverem disponíveis. Nunca afirme que uma página foi inspecionada sem realmente usar as ferramentas.
- Diferencie elementos observados, comportamentos explorados/testados e hipóteses ou itens não confirmados. Não invente regras de negócio, mensagens ou resultados esperados.
- Trate páginas externas como somente leitura por padrão. Não envie formulários, faça compras, exclua ou altere dados persistentes, envie arquivos ou execute ações irreversíveis. Deixe essas validações pendentes.
- Não copie dados pessoais para testes; use somente dados fictícios quando necessário e seguro.
- Prefira localizadores resilientes do Playwright, como `getByRole`, `getByLabel`, `getByPlaceholder` e `getByText`. Evite XPath, seletores posicionais e seletores frágeis.
- Gere cenários Gherkin em português do Brasil, usando `# language: pt` e palavras-chave como `Funcionalidade`, `Contexto`, `Cenário`, `Dado`, `Quando`, `Então`, `E` e `Mas`, conforme o suporte real do projeto. Preserve textos literais da interface em seus idiomas originais. Gere testes TypeScript com `@playwright/test` que correspondam a cenários sustentados por evidência.
- Execute somente verificações seguras. Não considere um teste aprovado apenas por ter sido gerado; informe o que foi realmente executado e quaisquer limitações.
- Como este é um projeto de aprendizagem, use comentários curtos em português para explicar decisões não óbvias, sem comentar cada linha.
