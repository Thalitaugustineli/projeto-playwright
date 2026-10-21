
import { test, expect } from '@playwright/test';

test('Elements | Text Box', async ({ page }) => {

  // Definindo o tamanho da tela
    await page.setViewportSize({ width: 1920, height: 1080 });

  // Acessa a página do formulário
  await page.goto('/text-box');


  // Valida se o título da página está visível
  await expect(page.getByText('Text Box', { exact: true }).first()).toBeVisible();

  // Preenche o campo Full Name usando o placeholder
  await page.getByPlaceholder('Full Name').fill('Maria Joana de Oliveira');

  // Preenche o campo de e-mail usando o ID
  await page.locator('#userEmail').fill('maria.joana@teste.com.br');

  // Preenche o campo Current Address usando o placeholder
  await page.getByPlaceholder('Current Address').fill(
    'Rua São José dos Campos, 34 - Parque Viana - SP'
  );

  // Preenche o campo Permanent Address usando o ID
  await page.locator('#permanentAddress').fill(
    'Rua São Italo, 300 - Jardim Antonia - RJ'
  );

  // Clica no botão Submit para enviar o formulário
  await page.getByRole('button', { name: 'Submit' }).click();

  // -----------------------------------------
  // VALIDAÇÃO DOS RESULTADOS APÓS O ENVIO
  // -----------------------------------------

  // Valida o nome exibido
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#name')).toHaveText(
    'Name:Maria Joana de Oliveira'
  );

  // Valida o e-mail exibido
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#email')).toHaveText(
    'Email:maria.joana@teste.com.br'
  );

  // Valida o endereço atual.
  // O seletor p#currentAddress identifica o parágrafo,
  // evitando confusão com o textarea que tem o mesmo ID.
  await expect(page.locator('p#currentAddress')).toBeVisible();
  await expect(page.locator('p#currentAddress')).toHaveText(
    'Current Address :Rua São José dos Campos, 34 - Parque Viana - SP'
  );

  // Valida o endereço permanente exibido
  await expect(page.locator('p#permanentAddress')).toBeVisible();
  await expect(page.locator('p#permanentAddress')).toHaveText(
    'Permananet Address :Rua São Italo, 300 - Jardim Antonia - RJ'
  );

});
