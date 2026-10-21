Vamos começar do zero! 😊 Vou te ensinar como se estivéssemos fazendo a instalação juntas no VS Code, explicando o que digitar no terminal, para que serve cada comando e como executar seu primeiro teste automatizado com Playwright.

Como você está estudando automação de testes e já conhece um pouco de programação, vamos começar com JavaScript/TypeScript e Playwright Test, que é o caminho mais direto para criar testes E2E (ponta a ponta).

# 1. O que precisamos instalar?

[Microsoft Visual Studio Code - free Icon PNG, SVG](https://images.openai.com/static-rsc-4/SyBLVlG7wfqLVpZ3B6bRL1HGlwxdx9gUg640xIyauPU9riDk_R10dHc-UWnDLc3tybVxbBYw_zy58d4LkBtMyPtkAbpUl0DZOTlfcTQXcBoqK-QW3zlGtEMgyUvA9TzZS2CajtIDzexlleZ7lm2IVnJC2S1OvodAbDgrsvscJ8o?purpose=inline)

1\. Visual Studio Code (VS Code)

Editor onde você vai escrever, organizar e executar os testes.

Baixar VS Code

[Pengenalan Node JS Lengkap + Cara Install - Teziger Blog](https://images.openai.com/static-rsc-4/yhb6L_zHD89hq9StVnKJSbhV5YpcjpuXaUiwKe3Yd0Q3p8qLiwTo4xoM6cgkONkAC2R8lMT8_9O1FOAg1f3t88UK4wnh_g7GSnUoengav4u4Cuy4V1KWDeoEr_8EXAvRqrXtBzD4mBtIunoq3hjYaw1TePJfYx8Vj52vuhBOF50?purpose=inline)

2\. Node.js — versão LTS

Permite executar JavaScript no computador e inclui o npm, que instala as dependências do projeto.

Baixar Node.js

[Playwright Logo PNG Vector (SVG) Free Download](https://images.openai.com/static-rsc-4/LPhp5WGFs8AsPwkA7RmoAkYT6701vGdG47geLkGSQevIZhbryTBOdW8tXQjnI41K4_cWYD-C96onm7VCnjjtX5TT3xzeansU0mqC5KqXSxLIIOjWPs51DxGr3-6SBCNPQOmaVmw59V2ITdFfB8o2lqY65ner3viTnkZkZMPBWp0?purpose=inline)

3\. Playwright

Framework que automatiza navegadores, interações e verificações dos testes.

Documentação oficial

O instalador oficial do Playwright cria a estrutura inicial do projeto e pode baixar os navegadores necessários.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub

+1



# 2. Instalar e conferir o Node.js

Se você já tem o Node.js instalado, não precisa instalá-lo novamente.

1. Baixe a versão LTS pelo site oficial.
2. Execute o instalador e mantenha as opções padrão.
3. Termine a instalação.
4. Feche e abra novamente o VS Code.

No VS Code, abra o terminal em Terminal → Novo Terminal.

Digite um comando por vez:

```
node -v
```

Esse comando mostra a versão do Node.js.

```
npm -v
```

Esse comando mostra a versão do npm.

Se os dois comandos exibirem números de versão, está tudo certo para continuar. Se aparecer `command not found` ou `not recognized`, provavelmente será necessário conferir a instalação e reiniciar o terminal.

# 3. Criar seu primeiro projeto Playwright

Agora vamos criar uma pasta exclusiva para seus estudos.

No terminal do VS Code, digite os comandos abaixo, um de cada vez, pressionando `Enter` após cada um.

### Passo 1 — Criar a pasta

```
mkdir C:\projeto-playwright
```

Esse comando cria a pasta do projeto no disco C.

### Passo 2 — Entrar na pasta

```
cd C:\projeto-playwright
```

O `cd` significa change directory: entrar ou mudar de diretório.

### Passo 3 — Abrir a pasta no VS Code

```
code .
```

O ponto significa “a pasta atual”.

Se o comando `code` não for reconhecido, abra a pasta manualmente pelo menu Arquivo → Abrir Pasta.

### Passo 4 — Instalar o Playwright

```
npm init playwright@latest
```

Esse é o comando principal de instalação recomendado pela documentação oficial.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub



O instalador fará algumas perguntas. Para começar, escolha:

| Pergunta                       | O que escolher                       |
| ------------------------------ | ------------------------------------ |
| TypeScript or JavaScript?      | TypeScript (recomendado)             |
| Tests folder name?             | `tests`                              |
| Add a GitHub Actions workflow? | `false`, se quiser simplificar agora |
| Install Playwright browsers?   | `true`                               |

Se a sua intenção for estudar especificamente JavaScript, também pode selecionar essa opção. Os exemplos a seguir usam TypeScript, padrão oferecido pelo instalador.

## 4. Entenda o que foi criado

Após a instalação, sua estrutura será semelhante a esta:

projeto-playwright/

playwright.config.ts

Configura navegadores, execução, relatórios e outras opções dos testes.

package.json

Registra dependências e comandos disponíveis no projeto.

tests/

Pasta em que você escreverá os cenários automatizados.

tests/example.spec.ts

Arquivo de exemplo criado para você executar e estudar.

package-lock.json

Registra as versões exatas das dependências resolvidas pelo npm.

Os nomes e arquivos adicionais podem variar conforme as opções selecionadas.

# 5. Comandos essenciais para executar testes

Você não precisa decorar tudo agora. Comece pelos comandos desta tabela.

| Comando no terminal            | Para que serve                                  |
| ------------------------------ | ----------------------------------------------- |
| `node -v`                      | Verifica a versão do Node.js                    |
| `npm -v`                       | Verifica a versão do npm                        |
| `npm init playwright@latest`   | Cria ou inicializa um projeto Playwright        |
| `npx playwright --version`     | Mostra a versão instalada                       |
| `npx playwright install`       | Instala os navegadores necessários              |
| `npx playwright test`          | Executa todos os testes encontrados             |
| `npx playwright test --headed` | Executa mostrando a janela do navegador         |
| `npx playwright test --ui`     | Abre a interface visual de execução e depuração |
| `npx playwright test --debug`  | Executa com ferramentas de depuração            |
| `npx playwright show-report`   | Abre o relatório HTML da última execução        |
| `npx playwright test --list`   | Lista os testes encontrados sem executá-los     |
| `npx playwright test --help`   | Mostra as opções de execução disponíveis        |

Esses comandos fazem parte da interface oficial do Playwright.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://playwright.dev\&sz=32)

Playwright

+2



## Experimente executar seu primeiro teste

Dentro da pasta `projeto-playwright`, rode:

```
npx playwright test
```

Por padrão, os testes são executados sem abrir visualmente o navegador. Para acompanhar as ações, rode:

```
npx playwright test --headed
```

E para explorar os testes em uma interface interativa:

```
npx playwright test --ui
```

Depois de uma execução, abra o relatório com:

```
npx playwright show-report
```

O relatório mostra os resultados e os detalhes das falhas.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://playwright.dev\&sz=32)

Playwright



# 6. Escrevendo seu primeiro teste na prática

Abra `tests/example.spec.ts`. Você pode substituir o conteúdo por este exemplo didático:

```

import { test, expect } from '@playwright/test';

test('deve abrir a página inicial do Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

```

Salve com `Ctrl + S` e execute:

```
npx playwright test
```

Vamos entender o código:

`import { test, expect }`

Importa as ferramentas usadas para escrever e validar os testes.

`test('nome do teste', ...)`

Declara um cenário automatizado. O nome deve explicar o comportamento que será validado.

`page.goto(...)`

Navega até a URL informada.

`expect(page).toHaveTitle(...)`

Verifica se o título da página corresponde ao padrão esperado. Se não corresponder, o teste falha.

Uma dica: `async` e `await` são recursos do JavaScript que permitem trabalhar com operações assíncronas. No Playwright, você os encontrará com frequência porque a navegação e as interações com o navegador levam tempo.

# 7. Mais comandos úteis para o dia a dia

Quando o básico estiver funcionando, experimente estes:

```
# Executar somente um arquivo
npx playwright test tests/example.spec.ts

# Executar apenas testes cujo nome corresponda ao texto
npx playwright test -g "página inicial"

# Executar somente no projeto de navegador Chromium
npx playwright test --project=chromium

# Executar com apenas um worker
npx playwright test --workers=1

# Gerar código registrando interações no navegador
npx playwright codegen https://playwright.dev/

# Consultar todas as opções do Playwright
npx playwright --help
```

O `--project=chromium` depende de existir um projeto com esse nome no seu `playwright.config.ts`. O mesmo vale para outros navegadores configurados.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://playwright.dev\&sz=32)

Playwright

+1



## 8. Problemas comuns na instalação

Erro: `npm is not recognized`

Confira se o Node.js foi instalado. Feche e reabra o VS Code para atualizar o terminal. Depois, execute `node -v` e `npm -v`.

Erro: `Executable doesn't exist`

O navegador necessário pode não estar instalado. Tente:

```
npx playwright install
```

Erro: `No tests found`

Confira se você está na pasta correta e se o arquivo está dentro de `tests/`. Por padrão, o Playwright procura arquivos com nomes como `example.spec.ts` e `example.test.ts`.

O teste falhou, mas não sei por quê

Execute:

```
npx playwright test --debug
```

A ferramenta de depuração ajuda a acompanhar a execução e investigar o problema.

## 9. Seu checklist de conclusão

Progresso da instalação

### 0/6

Node.js instalado e versões conferidas

Pasta do projeto criada no VS Code

Playwright instalado

Arquivo de teste aberto e compreendido

Primeiro teste executado

Relatório HTML aberto

## 10. O que estudar depois da instalação?

Sugiro seguir esta ordem para construir uma base sólida em automação de QA:

1. Fundamentos: `test`, `expect`, `async/await` e estrutura dos testes.
2. Locators: `getByRole`, `getByText`, `getByLabel` e `locator`.
3. Ações: clicar, preencher campos, selecionar opções e navegar.
4. Assertions: validar textos, visibilidade, URLs e estados.
5. Organização: `beforeEach`, configuração, reutilização de código e Page Object Model.
6. Evolução: Gherkin, integração contínua, MCP e agentes de IA.

A documentação oficial para continuar é o guia de introdução do Playwright.

Minha recomendação: hoje, concentre-se apenas em instalar tudo, executar o exemplo e entender as três instruções `test`, `page.goto` e `expect`. Não precisa aprender todos os comandos de uma vez.

Quando chegar nessa etapa, o próximo exercício pode ser criar um teste de pesquisa, preencher um formulário e validar uma mensagem de sucesso — usando um site de demonstração.