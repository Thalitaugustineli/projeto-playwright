Quero evoluir o mapeamento da página Practice Form do DemoQA usando as ferramentas do Playwright MCP.

URL esperada: https://demoqa.com/automation-practice-form

**Objetivo:** produzir um inventário de UI estruturado que servirá de base para gerar cenários Gherkin e testes Playwright.

**Regras de exploração:**

1. Confirme a URL atual antes de começar. Se for diferente da URL esperada, informe a diferença e não explore outra página sem autorização.
2. Inspecione a página inicial e registre os elementos encontrados: headings, campos, labels, placeholders, botões, radios, checkboxes, links, seletores e mensagens.
3. Para cada elemento, registre:
   - identificador único no inventário;
   - tipo e papel acessível;
   - nome acessível;
   - label, placeholder e atributos DOM relevantes;
   - seletor Playwright recomendado;
   - se o elemento foi observado ou efetivamente testado;
   - problemas de acessibilidade ou ausência de nome acessível.
4. Explore os componentes interativos em etapas, quando for seguro: abrir os seletores de matérias, estado e cidade; observar opções disponíveis; verificar se a cidade depende do estado selecionado; inspecionar o seletor de data.
5. Registre os estados adicionais encontrados e os elementos que aparecem após as interações.
6. Não envie o formulário nesta etapa. Não faça upload de arquivos nem use dados pessoais reais.
7. Não invente regras de negócio ou resultados esperados. Marque como "a confirmar" tudo que não puder ser comprovado pela interface.

**Saída desejada:**

Crie o arquivo `tests/mapping/practice-form.map.json` com o inventário estruturado e os estados explorados.

Antes de criar o arquivo, apresente um resumo da exploração e a estrutura JSON proposta. Depois, salve o arquivo no projeto e confirme o caminho e o conteúdo criado.

Não gere ainda os arquivos `.feature` e `.spec.ts`; faremos isso na próxima etapa.