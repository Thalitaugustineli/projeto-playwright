Quero configurar neste projeto um fluxo reutilizável de automação de testes com Playwright, Gherkin e Playwright MCP.

**Meu objetivo:** informar uma URL no Copilot Chat e deixar o agente executar o fluxo de ponta a ponta, sem eu precisar solicitar cada etapa separadamente.

Antes de alterar qualquer arquivo, analise a estrutura atual do projeto e identifique como o Playwright, o TypeScript e o Playwright MCP estão configurados. Preserve os arquivos e as configurações existentes que já funcionam.

### Fluxo que quero automatizar

1. Solicitar a URL da página, caso eu ainda não a tenha informado.
2. Usar as ferramentas disponíveis do Playwright MCP para abrir e inspecionar a página.
3. Mapear títulos, campos, labels, botões, links, caixas de seleção, listas, mensagens acessíveis e elementos dinâmicos relevantes.
4. Explorar estados da interface com segurança, quando necessário, sem enviar formulários, fazer compras, excluir dados, enviar arquivos ou realizar ações irreversíveis.
5. Gerar um inventário estruturado em JSON com os elementos encontrados, seletores, atributos relevantes, estados explorados, observações de acessibilidade e itens ainda não confirmados.
6. Gerar cenários Gherkin em arquivos `.feature`, usando `Dado`, `Quando` e `Então`, organizados por funcionalidade.
7. Gerar testes Playwright em arquivos `.spec.ts` correspondentes aos cenários.
8. Preferir localizadores resilientes, como `getByRole`, `getByLabel`, `getByPlaceholder` e `getByText`, quando apropriados. Evitar XPath e seletores frágeis sem necessidade.
9. Validar a consistência entre inventário, cenários e testes. Executar verificações seguras, como análise de tipos e testes que não provoquem efeitos externos.
10. Apresentar um resumo dos arquivos criados, das verificações executadas e das limitações encontradas.

### Regras importantes

- Não invente regras de negócio, mensagens de erro ou comportamentos que não foram observados.
- Diferencie elementos observados, comportamentos efetivamente testados e hipóteses ainda não confirmadas.
- Se uma validação depender de enviar o formulário ou de uma ação com efeitos externos, registre-a como pendente em vez de executá-la automaticamente.
- Não coloque dados pessoais reais nos testes. Use dados fictícios.
- Não sobrescreva arquivos existentes sem antes avaliar o impacto.
- Não considere um teste aprovado apenas porque o arquivo foi gerado.
- Use o Playwright MCP para inspecionar a interface quando as ferramentas estiverem disponíveis. Não afirme que inspecionou a página se isso não aconteceu.
- Mantenha o código comentado e explique as decisões de forma didática, pois estou aprendendo automação.

### O que quero que você implemente agora

Crie uma estrutura reutilizável para esse fluxo, usando as instruções permanentes do Copilot e um prompt personalizado do projeto que eu possa invocar no Copilot Chat, preferencialmente com o comando `/mapear-pagina`.

O prompt personalizado deve iniciar o fluxo completo a partir de uma URL, usando o MCP quando disponível, e gerar o JSON, os arquivos `.feature` e os `.spec.ts`.

Aproveite a estrutura atual do projeto e adicione somente o necessário. Não crie arquivos de exemplo desnecessários nem substitua a configuração existente do Playwright.

Ao terminar, mostre a estrutura criada, explique como invocar `/mapear-pagina` e me oriente a fazer uma primeira execução de teste. Se houver alguma limitação técnica, explique-a claramente e implemente a melhor alternativa possível.