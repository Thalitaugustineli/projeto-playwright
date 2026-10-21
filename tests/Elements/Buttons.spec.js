
import { test, expect } from '@playwright/test';

test.describe('Elements | Buttons', () => {

  // Executa antes de cada teste.
  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de botões.
    await page.goto('/buttons');
  });

  // ========================================
  // TESTE 1: Clique simples
  // ========================================

  test('Click Me (1x)', async ({ page }) => {

    // Localiza o botão pelo papel e nome acessível.
    const botaoUmClique = page.getByRole('button', {
      name: 'Click Me',
      exact: true
    });

    // Confirma também as classes CSS esperadas.
    const botaoValidado = botaoUmClique.and(
      page.locator('button.btn.btn-primary')
    );

    // Clica no botão.
    await botaoValidado.click();

    // Valida a mensagem exibida após o clique.
    const mensagemClique = page.locator('#dynamicClickMessage');

    await expect(mensagemClique).toBeVisible();
    await expect(mensagemClique).toHaveText(
      'You have done a dynamic click'
    );
  });

  // ========================================
  // TESTE 2: Clique com o botão direito
  // ========================================

  test('Right Click Me (direito)', async ({ page }) => {

    // Localiza o botão pelo nome acessível.
    const botaoDireito = page.getByRole('button', {
      name: 'Right Click Me',
      exact: true
    });

    // Clica com o botão direito do mouse.
    await botaoDireito.click({
      button: 'right'
    });

    // Valida a mensagem exibida.
    const mensagemCliqueDireito = page.locator('#rightClickMessage');

    await expect(mensagemCliqueDireito).toBeVisible();
    await expect(mensagemCliqueDireito).toHaveText(
      'You have done a right click'
    );
  });

  // ========================================
  // TESTE 3: Duplo clique
  // ========================================

  test('Double Click Me (2x)', async ({ page }) => {

    // Localiza o botão pelo nome acessível.
    const botaoDuploClique = page.getByRole('button', {
      name: 'Double Click Me',
      exact: true
    });

    // Executa o duplo clique.
    await botaoDuploClique.dblclick();

    // Valida a mensagem exibida.
    const mensagemDuploClique = page.locator('#doubleClickMessage');

    await expect(mensagemDuploClique).toBeVisible();
    await expect(mensagemDuploClique).toHaveText(
      'You have done a double click'
    );
  });

  // ========================================
  // TESTE 4: Executar todos os cliques
  // ========================================

  test('Todos os Cliques', async ({ page }) => {

    // --------------------------------------
    // Clique simples
    // --------------------------------------

    // A constante é criada neste teste.
    const botaoUmClique = page.getByRole('button', {
      name: 'Click Me',
      exact: true
    });

    await botaoUmClique.click();

    // Valida o resultado do clique simples.
    await expect(page.locator('#dynamicClickMessage'))
      .toHaveText('You have done a dynamic click');

    // --------------------------------------
    // Clique com o botão direito
    // --------------------------------------

    const botaoDireito = page.getByRole('button', {
      name: 'Right Click Me',
      exact: true
    });

    await botaoDireito.click({
      button: 'right'
    });

    // Valida o resultado do clique direito.
    await expect(page.locator('#rightClickMessage'))
      .toHaveText('You have done a right click');

    // --------------------------------------
    // Duplo clique
    // --------------------------------------

    const botaoDuploClique = page.getByRole('button', {
      name: 'Double Click Me',
      exact: true
    });

    await botaoDuploClique.dblclick();

    // Valida o resultado do duplo clique.
    await expect(page.locator('#doubleClickMessage'))
      .toHaveText('You have done a double click');
  });

});
