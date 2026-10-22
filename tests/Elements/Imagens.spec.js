
import { test, expect } from '@playwright/test';

test.describe('Elements | Imagens', () => {

  // Executa antes de cada teste.
  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de imagens.
    await page.goto('/broken');
  });

  // ========================================
  // TESTE 1: Identificar imagens quebradas
  // ========================================

  test('Identificar imagens quebradas', async ({ page }) => {

    const imagens = await page.locator('img').evaluateAll((imgs) =>
    imgs.map((img) => ({
      src: img.src,
      carregada: img.complete,
      larguraNatural: img.naturalWidth,
      alturaNatural: img.naturalHeight,
      quebrada: img.complete && img.naturalWidth === 0,
    }))
  );

  console.log('Todas as imagens:', imagens);

  const quebradas = imagens.filter((img) => img.quebrada);

  console.log('Quantidade de imagens quebradas:', quebradas.length);

  expect(imagens.length).toBeGreaterThan(0);

   
  });

  // ========================================
  // TESTE 2: Link Válido
  // ========================================

  test('Link Válido', async ({ page }) => {

        const link = page.getByRole('link', {
        name: 'Click Here for Valid Link',
        exact: true
        });

        await Promise.all([
        page.waitForURL('https://demoqa.com/'),
        link.click()
        ]);

        await expect(page).toHaveURL('https://demoqa.com/');
    
  });

  // ========================================
  // TESTE 3: Link Inválido
  // ========================================

  test('Link Inválido', async ({ page }) => {


        const linknot = page.getByRole('link', {
        name: 'Click Here for Broken Link',
        exact: true
        });

        await Promise.all([
        page.waitForURL('http://the-internet.herokuapp.com/status_codes/500'),
        linknot.click()
        ]);

        await expect(page).toHaveURL('http://the-internet.herokuapp.com/status_codes/500');
    
  });

});