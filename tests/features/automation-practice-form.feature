# language: pt
Funcionalidade: Inventário da página de cadastro de estudante
  O formulário pode ser inspecionado sem alterar ou enviar seu conteúdo.

  Contexto:
    Dado que acesso o formulário de cadastro de estudante do DemoQA

  Cenário: Exibe os títulos da página
    Então vejo o título "Practice Form"
    E vejo o título "Student Registration Form"

  Cenário: Exibe os campos de informações pessoais
    Então vejo o campo de texto "First Name"
    E vejo o campo de texto "Last Name"
    E vejo o campo de texto "name@example.com"
    E vejo o campo de texto "Mobile Number"
    E vejo o campo de texto "Current Address"

  Cenário: Exibe as opções de gênero e passatempos
    Então vejo as opções de rádio "Male", "Female" e "Other"
    E vejo as caixas de seleção "Sports", "Reading" e "Music"

  Cenário: Exibe os demais controles sem enviar o formulário
    Então vejo o rótulo "Date of Birth"
    E vejo os comboboxes de disciplinas e "Select State"
    E vejo o texto "Select City"
    E vejo o botão "Choose File"
    E vejo o botão "Submit" sem clicá-lo
