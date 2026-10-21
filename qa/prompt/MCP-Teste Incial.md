Use as ferramentas do Playwright MCP para:

1. Navegar até https://demoqa.com/automation-practice-form
2. Capturar um snapshot de acessibilidade da página.
3. Identificar os títulos, campos de entrada, botões, caixas de seleção e links encontrados.
4. Para cada elemento, informar seu papel, nome acessível e seletor Playwright recomendado, quando for possível determiná-lo.
5. Não interagir com os controles nem alterar os dados nesta primeira verificação.
6. Informar se conseguiu navegar e inspecionar a página usando as ferramentas MCP.

Apresente o resultado em uma tabela. Não crie nem altere arquivos do projeto ainda.

# RETORNO DA IA
Vou navegar e capturar o snapshot sem interagir com os controles; depois identifico os elementos e seletores a partir da árvore de acessibilidade.

Search Tools

Navigate to a URL
Completed with input: {
  "url": "https://demoqa.com/automation-practice-form"
}

Page snapshot
Completed with input: {
  "depth": 10
}

A navegação e o snapshot foram concluídos. Como alguns controles aparecem sem nome acessível, vou consultar apenas atributos DOM de leitura para sugerir seletores mais precisos, sem alterar ou acionar nenhum elemento.

Search Tools

Evaluate JavaScript
Completed with input: {
  "function": "() => ({ headings: [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(e => ({tag:e.tagName, text:e.innerText.trim(), id:e.id, role:e.getAttribute('role')})), controls: [...document.querySelectorAll('input,textarea,select,button,[role=\"combobox\"]')].map(e => ({tag:e.tagName, type:e.getAttribute('type'), id:e.id, name:e.getAttribute('name'), placeholder:e.getAttribute('placeholder'), ariaLabel:e.getAttribute('aria-label'), role:e.getAttribute('role'), value:e.type === 'file' ? undefined : e.value, text:e.innerText?.trim(), labels:e.labels ? [...e.labels].map(l=>l.innerText.trim()) : []})), links: [...document.querySelectorAll('a')].map(e => ({text:e.innerText.trim(), href:e.href, ariaLabel:e.getAttribute('aria-label')})) })"
}

Read 
Completed with input: {
  "path": "C:\\Users\\tata_\\AppData\\Local\\Temp\\1792184381993-copilot-tool-output-3e0c404dc99a40dcae489662cde80ed5.txt"
}

Read , lines 1 to 200
Completed with input: {
  "path": "C:\\Users\\tata_\\AppData\\Local\\Temp\\1792184381993-copilot-tool-output-3e0c404dc99a40dcae489662cde80ed5.txt",
  "view_range": [
    1,
    200
  ]
}

Read , lines 201 to 400
Completed with input: {
  "path": "C:\\Users\\tata_\\AppData\\Local\\Temp\\1792184381993-copilot-tool-output-3e0c404dc99a40dcae489662cde80ed5.txt",
  "view_range": [
    201,
    400
  ]
}

**Resultado:** consegui navegar para a página e inspecioná-la com as ferramentas MCP do Playwright. Capturei o snapshot de acessibilidade e consultei atributos DOM em modo somente leitura para sugerir seletores. **Não interagi com os controles nem alterei dados.**

| Tipo | Papel | Nome acessível | Seletor Playwright recomendado |
|---|---|---|---|
| Título | `heading` (nível 1) | Practice Form | `getByRole('heading', { name: 'Practice Form', exact: true })` |
| Título | `heading` (nível 5) | Student Registration Form | `getByRole('heading', { name: 'Student Registration Form', exact: true })` |
| Campo | `textbox` | First Name | `getByRole('textbox', { name: 'First Name' })` ou `locator('#firstName')` |
| Campo | `textbox` | Last Name | `getByRole('textbox', { name: 'Last Name' })` ou `locator('#lastName')` |
| Campo | `textbox` | [name@example.com](mailto:name@example.com) | `getByRole('textbox', { name: 'name@example.com' })` ou `locator('#userEmail')` |
| Campo | `radio` | Male | `getByRole('radio', { name: 'Male' })` |
| Campo | `radio` | Female | `getByRole('radio', { name: 'Female' })` |
| Campo | `radio` | Other | `getByRole('radio', { name: 'Other' })` |
| Campo | `textbox` | Mobile Number | `getByRole('textbox', { name: 'Mobile Number' })` ou `locator('#userNumber')` |
| Campo | `textbox` | Sem nome acessível | `locator('#dateOfBirthInput')` |
| Campo | `combobox` | Sem nome acessível | `locator('#subjectsInput')` |
| Caixa de seleção | `checkbox` | Sports | `getByRole('checkbox', { name: 'Sports' })` |
| Caixa de seleção | `checkbox` | Reading | `getByRole('checkbox', { name: 'Reading' })` |
| Caixa de seleção | `checkbox` | Music | `getByRole('checkbox', { name: 'Music' })` |
| Botão | `button` | Choose File | `getByRole('button', { name: 'Choose File' })` |
| Campo | `textbox` | Current Address | `getByRole('textbox', { name: 'Current Address' })` ou `locator('#currentAddress')` |
| Campo | `combobox` | Sem nome acessível (State) | `locator('#react-select-3-input')` |
| Campo | `combobox` | Sem nome acessível (City) | `locator('#react-select-4-input')` |
| Botão | `button` | Submit | `getByRole('button', { name: 'Submit' })` ou `locator('#submit')` |
| Link | `link` | Sem nome acessível | `locator('a[href="https://demoqa.com/"]')` |
| Link | `link` | Practice Form | `getByRole('link', { name: 'Practice Form' })` |

Os campos de data, matérias, estado e cidade aparecem sem nome acessível no snapshot; os seletores por `id` foram identificados pela leitura dos atributos DOM. A lista de links acima corresponde aos links expostos no snapshot de acessibilidade.