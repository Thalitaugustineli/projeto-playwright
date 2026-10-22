
import { test, expect } from '@playwright/test';

test.describe('Elements | Dynamic Properties', () => {

  // Executa antes de cada teste.
  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de propriedades dinâmicas.
    await page.goto('/dynamic-properties');
  });

  // ========================================
  // TESTE 1: Botão habilitado após 5 segundos
  // ========================================

test('Botão habilitado após 5 segundos', async ({ page }) => {
  const botao = page.locator('#enableAfter');

  // Valida que o botão está inicialmente desabilitado
  await expect(botao).toBeDisabled();

  // Aguarda o botão ficar habilitado, respeitando o timeout
  await expect(botao).toBeEnabled({ timeout: 10000 });

  // Confirma que o botão está habilitado
  await expect(botao).toBeEnabled();
});

  // ========================================
  // TESTE 2: Alteração da cor do botão
  // ========================================


test('Botão altera a cor após alguns segundos', async ({ page }) => {
  const botao = page.locator('#colorChange');

  // Confirma que o botão está visível
  await expect(botao).toBeVisible();

  // Captura a cor inicial do botão
  const corInicial = await botao.evaluate((elemento) => {
    return window.getComputedStyle(elemento).color;
  });

  // Aguarda a cor mudar, com timeout de 10 segundos
  await expect.poll(
    async () => {
      return botao.evaluate((elemento) => {
        return window.getComputedStyle(elemento).color;
      });
    },
    { timeout: 50000, message: 'A cor do botão não mudou dentro do tempo esperado' }
  ).not.toBe(corInicial);

  // Captura a cor final
  const corFinal = await botao.evaluate((elemento) => {
    return window.getComputedStyle(elemento).color;
  });

  // Confirma que houve mudança de cor
  expect(corFinal).not.toBe(corInicial);

  console.log('Cor inicial:', corInicial);
  console.log('Cor final:', corFinal);
});


  // ========================================
  // TESTE 3: Botão visível após 5 segundos
  // ========================================

    test('Botão fica visível após 5 segundos', async ({ page }) => {
    const botao = page.locator('#visibleAfter');

    // Valida que o botão está inicialmente oculto
    await expect(botao).toBeHidden();

    // Aguarda o botão ficar visível
    await expect(botao).toBeVisible({ timeout: 10000 });

    // Confirma que o botão está visível
    await expect(botao).toBeVisible();
    });

});
