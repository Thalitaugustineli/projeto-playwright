import { test, expect } from '@playwright/test';

test.describe('Elements | Radio Button', () => {

  // Executa antes de cada teste.
  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de Check Box.
    await page.goto('/radio-button');

  });

  test('Select Radio Yes, Impressive e No', async ({ page }) => {

    const yes = page.locator('#yesRadio');
    const impressive = page.locator('#impressiveRadio');
    const noRadio = page.locator('#noRadio')
    const resultado = page.locator('.text-success')

   // ========================================
   // TESTE 1: YES
   // ========================================
    await yes.click();

    // Resultado
    await expect(resultado).toBeVisible();

    await expect(resultado).toHaveText('Yes')

    // ========================================
    // TESTE 1: Impressive
    // =========================================

    await impressive.click();

    // Resultado
    await expect(resultado).toBeVisible();

    await expect(resultado).toHaveText('Impressive')

    // ========================================
    // TESTE 1: No
    // =========================================
    
    // Valida se o radio button está desabilitado
    await expect(noRadio).toBeDisabled();

    // Resultado - Não deve mudar
    await expect(resultado).toBeVisible();

    await expect(resultado).toHaveText('Impressive')


    


    
  });

  });