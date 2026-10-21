---
name: mapear-pagina
description: "Inspecione uma página com Playwright MCP e gere inventário JSON, cenários Gherkin e testes Playwright seguros."
argument-hint: "URL da página para mapear"
agent: agent
tools:
  - playwright/*
---

# Mapear uma página web

Execute o fluxo completo para a URL indicada pelo usuário. Preserve os arquivos existentes e siga as [orientações permanentes do projeto](../copilot-instructions.md).

## Idioma dos artefatos

- Escreva todas as respostas, explicações, documentações, descrições, títulos, nomes de cenários e comentários de código em português do Brasil (pt-BR).
- Use `# language: pt` e as palavras-chave Gherkin em português, como `Funcionalidade`, `Contexto`, `Cenário`, `Dado`, `Quando`, `Então`, `E` e `Mas`, respeitando o runner e a configuração reais do projeto.
- Preserve identificadores técnicos, APIs, propriedades JSON, seletores, atributos reais e textos literais da interface nos idiomas originais quando forem necessários para representar fielmente a página.

## URL e inspeção

1. Use a URL fornecida como argumento de `/mapear-pagina` ou na mensagem do usuário. Se não houver URL, pergunte qual página deve ser mapeada e aguarde a resposta. Não escolha uma URL de exemplo.
2. Quando disponíveis, use as ferramentas Playwright MCP: `playwright-browser_navigate` para abrir a URL e `playwright-browser_snapshot` para inspecionar a árvore acessível. Use `playwright-browser_evaluate` apenas para leitura do DOM que não seja atendida pelo snapshot; não altere o estado pela avaliação.
3. Mapeie títulos, campos, labels, placeholders, botões, links, caixas de seleção, opções, listas, mensagens acessíveis e elementos dinâmicos relevantes. Registre papel, nome acessível, tag, atributos úteis, seletores candidatos e observações de acessibilidade.
4. Explore estados adicionais apenas por ações claramente reversíveis, locais e sem efeitos externos. Não envie formulários, não siga links que possam causar ações, não compre, não exclua nem altere dados persistentes, não envie arquivos e não confirme diálogos destrutivos. Se houver dúvida, não interaja; registre o comportamento como não confirmado. Restaure o estado inicial após explorações seguras.
5. Não copie dados pessoais reais encontrados na página. Use dados fictícios apenas se forem indispensáveis e seguros; nunca os submeta.

Se o MCP estiver indisponível ou falhar, informe isso explicitamente. Não afirme que abriu ou inspecionou a página nem invente elementos ou comportamentos. Deixe pendentes os artefatos que dependam de evidência da interface.

## Arquivos a gerar

Antes de gravar, verifique os caminhos de destino e examine arquivos relacionados. Não sobrescreva artefatos existentes sem avaliar o impacto. Use um slug curto e estável por funcionalidade:

- `qa/mapping/<slug>.map.json` — inventário estruturado.
- `qa/features/<slug>.feature` — cenários Gherkin em português do Brasil, com `# language: pt` e palavras-chave Gherkin em português.
- `tests/<slug>.spec.ts` — testes Playwright correspondentes aos cenários seguros e confirmados.

Adapte a organização a convenções existentes se o projeto já tiver diretórios equivalentes; não crie exemplos artificiais.

O JSON deve incluir versão do esquema, URL solicitada e observada, título, data, método/ferramentas usados, estados inicial e final, ações realizadas e não realizadas, inventário por tipo com identificador, papel, nome acessível, tag, atributos, seletor Playwright candidato e observações de acessibilidade. Mantenha os nomes das propriedades JSON e os valores que reproduzam atributos ou textos reais da interface; escreva em pt-BR os valores descritivos. Marque explicitamente `observed` (observado), `tested` (interação realmente realizada) e `unconfirmed` (não confirmado). Inclua limitações e validações pendentes que dependam de envio ou efeito externo.

Não converta observações em regras de negócio. Não invente cenários de sucesso/erro, mensagens ou expectativas. Cenários dependentes de ações inseguras ou comportamentos não confirmados devem ser anotados como pendentes, sem um teste que aparente validá-los.

## Implementação e validação

- Faça cada cenário executável no `.feature` corresponder a um teste identificável no `.spec.ts`.
- Não afirme que os cenários `.feature` são executáveis se o projeto não tiver runner e suporte configurados para isso.
- Prefira `getByRole`, `getByLabel`, `getByPlaceholder` e `getByText`. Evite XPath, seletores posicionais e classes geradas; justifique em comentário curto em português qualquer seletor CSS necessário.
- Respeite as configurações e versões existentes do Playwright/TypeScript. Não adicione dependências nem substitua configurações apenas para executar Gherkin.
- Confira se cada seletor e expectativa tem suporte no inventário e se os cenários correspondem aos testes.
- Execute apenas verificações seguras. Rode testes gerados somente se não puderem submeter dados ou causar efeitos externos. Execute análise de tipos apenas se houver configuração e ferramenta disponíveis; não instale dependências para contornar sua ausência.

## Relatório final

Informe a URL inspecionada ou a limitação do MCP, os arquivos criados/atualizados, verificações realmente executadas e seus resultados. Separe **Observado**, **Explorado**, **Pendente/não confirmado** e **Verificações**. Não declare testes aprovados se eles não foram executados.
