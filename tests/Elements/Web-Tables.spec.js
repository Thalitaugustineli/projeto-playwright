import { test, expect } from '@playwright/test';

// ========================================
// SELETORES REUTILIZÁVEIS
// ========================================

// Guardamos apenas os seletores CSS.
// Não usamos page aqui, pois ela pertence a cada teste.
const firstName = '#firstName';
const lastName = '#lastName';
const userEmail = '#userEmail';
const age = '#age';
const salary = '#salary';
const department = '#department';
const buttonAdd = '#addNewRecordButton';
const buttonSubmit = '#submit';
const buscador = '#searchBox';

// ========================================
// GRUPO DE TESTES
// ========================================

test.describe('Elements | Web tables', () => {

  // Executa antes de cada teste.
  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de Check Box.
    await page.goto('/webtables');

  });

  // ========================================
  // TESTE 1: Manipulação da tabela
  // ========================================

  test('Manipulação da tabela', async ({ page }) => {

    // Validar tabela completa:
    const linhas = page.locator('tbody tr');   // Localiza todas as linhas do corpo da tabela

    // Valida a quantidade esperada de linhas
    await expect(linhas).toHaveCount(3);

  // Descobre quantas linhas existem
  const quantidadeLinhas = await linhas.count();

  // Percorre todas as linhas
  for (let i = 0; i < quantidadeLinhas; i++) {
    const linha = linhas.nth(i);

    // Valida se a linha está visível
    await expect(linha).toBeVisible();

    // Valida se a linha possui células
    const celulas = linha.locator('td');

    await expect(celulas).toHaveCount(7);
  }

    // Validar, editar um usuário existente e validar os dados atualizados.

    // Localiza a linha que contém o e-mail da Cierra
        const linhaCierra = page.locator('tbody tr').filter({
        hasText: 'cierra@example.com'
        });
    
        // Valida que a linha existe
        await expect(linhaCierra).toHaveCount(1);

        // Valida os dados da linha
        await expect(linhaCierra).toContainText('Cierra');
        await expect(linhaCierra).toContainText('Vega');
        await expect(linhaCierra).toContainText('39');
        await expect(linhaCierra).toContainText('cierra@example.com');
        await expect(linhaCierra).toContainText('10000');
        await expect(linhaCierra).toContainText('Insurance');

        // Cria o locator dentro do teste
        const campoFirstName = page.locator(firstName);
        const campoLastName = page.locator(lastName);
        const campoUserEmail = page.locator(userEmail);
        const campoAge = page.locator(age);
        const campoSalary = page.locator(salary);
        const campoDepartament = page.locator(department)

        // Editar o usuário Cierra
        await page.locator('#edit-record-1').click();

        // Limpa o campo e preenche o novo nome
        await campoFirstName.fill('Sandra');
        await campoLastName.fill('Souza');
        await campoUserEmail.fill('sandra@testes.com.br')
        await campoAge.fill('35')
        await campoSalary.fill('35000')
        await campoDepartament.fill('Analista de Qualidade')

        // confirmando 
        const botaoSubmit = page.locator(buttonSubmit)

        await botaoSubmit.click()
        
        // Localiza a linha que contém o e-mail da Sandra
        const linhaSandra = page.locator('tbody tr').filter({
        hasText: 'sandra@testes.com.br'
        });
    
        // Valida que a linha existe
        await expect(linhaSandra).toHaveCount(1);

        // Valida os dados da linha
        await expect(linhaSandra).toContainText('Sandra');
        await expect(linhaSandra).toContainText('Souza');
        await expect(linhaSandra).toContainText('35');
        await expect(linhaSandra).toContainText('sandra@testes.com.br');
        await expect(linhaSandra).toContainText('35000');
        await expect(linhaSandra).toContainText('Analista de Qualidade');

    // Excluir um usuário e validar que a linha desapareceu.
        const linhaAlden = page.locator('tbody tr').filter({
        hasText: 'alden@example.com'
        });
    
        // Valida que a linha existe
        await expect(linhaAlden).toHaveCount(1);

        // Deletando
        await page.locator('#delete-record-2').click()

        // Validar exclusão do User Alden
        await expect(linhaAlden).toHaveCount(0);

    // Confirmar que os demais registros continuam presentes.
        // Confirma que Kierra continua na tabela
        await expect(page.locator('tbody tr').filter({
        hasText: 'kierra@example.com'
        })).toHaveCount(1);

  });

    test('Cadastro de usuários', async ({ page }) => {

    const campoAdd = page.locator(buttonAdd)

    // Cadastrar um usuário com dados válidos.
     await campoAdd.click();

        // Cria o locator dentro do teste
        const campoFirstName = page.locator(firstName);
        const campoLastName = page.locator(lastName);
        const campoUserEmail = page.locator(userEmail);
        const campoAge = page.locator(age);
        const campoSalary = page.locator(salary);
        const campoDepartament = page.locator(department)

     // Preenchendo formulário:
     await campoFirstName.fill('João');
     await campoLastName.fill('Santos Sousa');
     await campoUserEmail.fill('joaodesousa@teste.com')
     await campoAge.fill('31')
     await campoSalary.fill('2000')
     await campoDepartament.fill('Recursos Humanos')

        // confirmando 
        const botaoSubmit = page.locator(buttonSubmit)

        await botaoSubmit.click()

    // Validar se o usuário aparece na tabela com os dados corretos.
    const linhaJoao = page.locator('tbody tr').filter({
        hasText: 'joaodesousa@teste.com'
        });
    
        // Valida que a linha existe
        await expect(linhaJoao).toHaveCount(1);

        // Valida os dados da linha
        await expect(linhaJoao).toContainText('João');
        await expect(linhaJoao).toContainText('Santos Sousa');
        await expect(linhaJoao).toContainText('31');
        await expect(linhaJoao).toContainText('joaodesousa@teste.com');
        await expect(linhaJoao).toContainText('2000');
        await expect(linhaJoao).toContainText('Recursos Humano');


    // Cadastrar um segundo usuário com dados diferentes.
     await campoAdd.click();

     // Preenchendo formulário:
     await campoFirstName.fill('Maria');
     await campoLastName.fill('Antonieta Alves');
     await campoUserEmail.fill('maria@teste.com')
     await campoAge.fill('31')
     await campoSalary.fill('2000')
     await campoDepartament.fill('Operações')

     await botaoSubmit.click() // Enviado os dados da Maria

    // Confirmar que os dois usuários aparecem sem sobrescrever os dados um do outro.
    // Validar se o usuário aparece na tabela com os dados corretos.
    const linhaMaria = page.locator('tbody tr').filter({
        hasText: 'maria@teste.com'
        });
    
        // Valida que a linha existe
        await expect(linhaMaria).toHaveCount(1);

        // Valida os dados da linha
        await expect(linhaMaria).toContainText('Maria');
        await expect(linhaMaria).toContainText('Antonieta Alves');
        await expect(linhaMaria).toContainText('31');
        await expect(linhaMaria).toContainText('maria@teste.com');
        await expect(linhaMaria).toContainText('2000');
        await expect(linhaMaria).toContainText('Operações');


  });

  
    test('Pesquisa de registros', async ({ page }) => {

        const campoBusca = page.locator(buscador)

    // Pesquisar pelo nome de um usuário existente.

    await campoBusca.fill('Cierra');
    await campoBusca.press('Enter')

    // Localiza a linha que contém o e-mail da Cierra
        const linhaCierra = page.locator('tbody tr').filter({
        hasText: 'cierra@example.com'
        });
    
        // Valida que a linha existe
        await expect(linhaCierra).toHaveCount(1);

        // Valida os dados da linha
        await expect(linhaCierra).toContainText('Cierra');
        await expect(linhaCierra).toContainText('Vega');
        await expect(linhaCierra).toContainText('39');
        await expect(linhaCierra).toContainText('cierra@example.com');
        await expect(linhaCierra).toContainText('10000');
        await expect(linhaCierra).toContainText('Insurance');

    // Pesquisar por um sobrenome ou e-mail.
        await campoBusca.clear()
        await campoBusca.fill('kierra@example.com')
        
        // Localiza o botão de pesquisa pelo ID
            const botaoPesquisar = page.locator('#basic-addon2');

            // Clica no botão
            await botaoPesquisar.click();

        const linhaKierra = page.locator('tbody tr').filter({
        hasText: 'kierra@example.com'
        });

        // Valida que a linha existe
        await expect(linhaKierra).toHaveCount(1);

    // Pesquisar por um termo inexistente e validar o resultado vazio.

    await campoBusca.clear()
    await campoBusca.fill('João')

    await expect(page.locator('tbody tr')).toHaveCount(0);



    // Limpar a pesquisa e validar se os registros voltam a aparecer.

     await campoBusca.clear()

         // Validar tabela completa:
    const linhas = page.locator('tbody tr');   // Localiza todas as linhas do corpo da tabela

    // Valida a quantidade esperada de linhas
    await expect(linhas).toHaveCount(3);

  // Descobre quantas linhas existem
  const quantidadeLinhas = await linhas.count();

  // Percorre todas as linhas
  for (let i = 0; i < quantidadeLinhas; i++) {
    const linha = linhas.nth(i);

    // Valida se a linha está visível
    await expect(linha).toBeVisible();

    // Valida se a linha possui células
    const celulas = linha.locator('td');

    await expect(celulas).toHaveCount(7);

    
  }
  
  });
});
