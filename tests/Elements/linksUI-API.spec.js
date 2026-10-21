import { test, expect } from '@playwright/test';

test.describe('Links | UI + API', () => {

  test('Created | Validar resposta de rede e interface', async ({ page }) => {

    // 1. Acessa a página de Links.
    await page.goto('/links');

    // 2. Prepara a espera pela resposta de rede.
    // Não usamos await aqui porque ainda vamos realizar o clique.
    const respostaPromise = page.waitForResponse((resposta) => {
      const url = new URL(resposta.url());

      return (
        url.origin === 'https://demoqa.com' &&
        url.pathname.endsWith('/created')
      );
    });

    // 3. Executa a ação na interface.
    await page.locator('#created').click();

    // 4. Captura a resposta que corresponde ao endpoint.
    const resposta = await respostaPromise;

    // 5. Valida o status HTTP real.
    expect(resposta.status()).toBe(201);

    // 6. Valida a mensagem apresentada na interface.
    const mensagem = page.locator('#linkResponse');

    await expect(mensagem).toBeVisible();
    await expect(mensagem).toContainText('201');
    await expect(mensagem).toContainText('Created');

  });

});