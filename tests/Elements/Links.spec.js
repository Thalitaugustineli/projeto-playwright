
import { test, expect } from '@playwright/test';

test.describe('Elements | Links', () => {

  // ========================================
  // CONFIGURAÇÃO EXECUTADA ANTES DE CADA TESTE
  // ========================================

  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de Links.
    await page.goto('/links');
  });

  // ========================================
  // TESTE 1: Link - Home
  // ========================================

  test('Link | Home', async ({ page }) => {

    // Prepara o Playwright para capturar a nova aba.
    const [novaAba] = await Promise.all([
      page.context().waitForEvent('page'),

      // Clica no link Home.
      page.getByRole('link', {
        name: 'Home',
        exact: true
      }).click()
    ]);

    // Aguarda a nova aba carregar.
    await novaAba.waitForLoadState();

    // Valida a URL da nova aba.
    await expect(novaAba).toHaveURL(/demoqa\.com/);
  });

  // ========================================
  // TESTE 2: Link - Home Dinâmico
  // ========================================

  test('Link | Home Dinâmico', async ({ page }) => {

    // Localiza o link pelo ID estável,
    // sem depender do texto que pode mudar.
    const linkDinamico = page.locator('#dynamicLink');

    // Prepara a espera pela nova aba e clica no link.
    const [novaAba] = await Promise.all([
      page.context().waitForEvent('page'),
      linkDinamico.click()
    ]);

    // Aguarda a nova aba carregar.
    await novaAba.waitForLoadState();

    // Valida a URL da nova aba.
    await expect(novaAba).toHaveURL('https://demoqa.com/');
  });

  // ========================================
  // TESTE 3: Link - Created (201)
  // ========================================

  test('Link | Created', async ({ page }) => {

    // Prepara a captura da resposta HTTP esperada.
    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return url.origin === 'https://demoqa.com'
        && url.pathname === '/created'
        && resposta.status() === 201;
    });

    // Clica no link Created.
    await page.locator('#created').click();

    // Captura a resposta de rede.
    const resposta = await respostaPromise;

    // Valida o status HTTP.
    expect(resposta.status()).toBe(201);

    // Valida a mensagem exibida na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('201');
    await expect(mensagem).toContainText('Created');
  });

  // ========================================
  // TESTE 4: Link - No Content (204)
  // ========================================

  test('Link | No Content', async ({ page }) => {

    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return url.origin === 'https://demoqa.com'
        && url.pathname === '/no-content'
        && resposta.status() === 204;
    });

    // Clica no link No Content.
    await page.locator('#no-content').click();

    const resposta = await respostaPromise;

    // Valida o status HTTP.
    expect(resposta.status()).toBe(204);

    // Valida a mensagem na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('204');
    await expect(mensagem).toContainText('No Content');
  });

  // ========================================
  // TESTE 5: Link - Moved (301)
  // ========================================

  test('Link | Moved', async ({ page }) => {

    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return url.origin === 'https://demoqa.com'
        && url.pathname === '/moved'
        && resposta.status() === 301;
    });

    // Clica no link Moved.
    await page.locator('#moved').click();

    const resposta = await respostaPromise;

    // Valida o status HTTP.
    expect(resposta.status()).toBe(301);

    // Valida a mensagem na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('301');
    await expect(mensagem).toContainText('Moved');
  });

  // ========================================
  // TESTE 6: Link - Bad Request (400)
  // ========================================

  test('Link | Bad Request', async ({ page }) => {

    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return url.origin === 'https://demoqa.com'
        && url.pathname === '/bad-request'
        && resposta.status() === 400;
    });

    // Clica no link Bad Request.
    await page.locator('#bad-request').click();

    const resposta = await respostaPromise;

    // Valida o status HTTP.
    expect(resposta.status()).toBe(400);

    // Valida a mensagem na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('400');
    await expect(mensagem).toContainText('Bad Request');
  });

  // ========================================
  // TESTE 7: Link - Unauthorized (401)
  // ========================================

  test('Link | Unauthorized', async ({ page }) => {

    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return url.origin === 'https://demoqa.com'
        && url.pathname === '/unauthorized'
        && resposta.status() === 401;
    });

    // Clica no link Unauthorized.
    await page.locator('#unauthorized').click();

    const resposta = await respostaPromise;

    // Valida o status HTTP.
    expect(resposta.status()).toBe(401);

    // Valida a mensagem na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('401');
    await expect(mensagem).toContainText('Unauthorized');
  });

  // ========================================
  // TESTE 8: Link - Forbidden (403)
  // ========================================

  test('Link | Forbidden', async ({ page }) => {

    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return url.origin === 'https://demoqa.com'
        && url.pathname === '/forbidden'
        && resposta.status() === 403;
    });

    // Clica no link Forbidden.
    await page.locator('#forbidden').click();

    const resposta = await respostaPromise;

    // Valida o status HTTP.
    expect(resposta.status()).toBe(403);

    // Valida a mensagem na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('403');
    await expect(mensagem).toContainText('Forbidden');
  });

  // ========================================
  // TESTE 9: Link - Not Found (404)
  // ========================================

  test('Link | Not Found', async ({ page }) => {

    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return url.origin === 'https://demoqa.com'
        && url.pathname === '/invalid-url'
        && resposta.status() === 404;
    });

    // Clica no link de URL inválida.
    await page.locator('#invalid-url').click();

    const resposta = await respostaPromise;

    // Valida o status HTTP.
    expect(resposta.status()).toBe(404);

    // Valida a mensagem na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('404');
    await expect(mensagem).toContainText('Not Found');
  });

});
