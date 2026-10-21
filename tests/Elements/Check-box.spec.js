
import { test, expect } from '@playwright/test';

// ========================================
// SELETORES REUTILIZÁVEIS
// ========================================

// Guardamos apenas os seletores CSS.
// Não usamos page aqui, pois ela pertence a cada teste.
const seletorArvore = '.rc-tree-switcher';
const seletorResultados = '#result';
const seletorItensSelecionados = '.text-success';

// ========================================
// GRUPO DE TESTES
// ========================================

test.describe('Elements | Check Box', () => {

  // Executa antes de cada teste.
  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de Check Box.
    await page.goto('/checkbox');

  });

  // ========================================
  // TESTE 1: SELECIONAR HOME
  // ========================================

  test('Select Home', async ({ page }) => {

    // Cria os localizadores usando a page deste teste.
    const resultados = page.locator(seletorResultados);
    const itensSelecionados = page.locator(seletorItensSelecionados);

    // Seleciona Home.
    await page.getByLabel('Select Home').check();

    // Valida se os resultados estão visíveis.
    await expect(resultados).toBeVisible();

    // Valida o texto completo dos resultados.
    await expect(resultados).toHaveText(
      'You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral'
    );

    // Valida a quantidade de itens selecionados.
    await expect(itensSelecionados).toHaveCount(17);

  });

  // ========================================
  // TESTE 2: DESMARCAR HOME
  // ========================================

  test('Uncheck Home', async ({ page }) => {

    const resultados = page.locator(seletorResultados);

    // Marca Home.
    await page.getByLabel('Select Home').check();

    // Desmarca Home.
    await page.getByLabel('Select Home').uncheck();

    // Valida se os resultados estão ocultos.
    await expect(resultados).toBeHidden();

  });
  // ========================================
  // TESTE 3: SELECIONAR DESKTOP
  // ========================================

  test('Select Desktop', async ({ page }) => {

    // Cria os localizadores deste teste.
    const home = page.locator(seletorArvore).first();
    const desktop = page.locator(seletorArvore).nth(1);
    const resultados = page.locator(seletorResultados);

    // Abre a árvore Home.
    await home.click();

    // Valida se Home foi expandida.
    await expect(home).toHaveClass(/rc-tree-switcher_open/);

    // Abre a árvore Documents.
    await desktop.click();

    // Valida se Documents foi expandida.
    await expect(desktop).toHaveClass(/rc-tree-switcher_open/);

    // ----------------------------------------
    // SELECIONAR Desktop
    // ----------------------------------------
    await page.getByLabel('Select Desktop').check(); // Selecionando Desktop

    // Valida se os resultados estão visíveis.
    await expect(resultados).toBeVisible();

    // Valida o texto completo dos resultados.
    await expect(resultados).toHaveText(
      'You have selected :desktopnotescommands'
    );

    // Retirnaod a Seleção de Uma Opção
    await page.getByLabel('Select Commands').uncheck();

    // Resultado Alterado
    await expect(resultados).toHaveText('You have selected :notes')

  });

  // ========================================
  // TESTE 4: SELECIONAR DOCUMENTS
  // ========================================

  test('Select Documents', async ({ page }) => {

    // Cria os localizadores deste teste.
    const home = page.locator(seletorArvore).first();
    const documents = page.locator(seletorArvore).nth(2);
    const resultados = page.locator(seletorResultados);
    const workSpace = page.locator('[role="treeitem"]').filter({
        has: page.locator('[title="WorkSpace"]')
    });
    const office = page.locator('[role="treeitem"]').filter({
        has: page.locator('[title="Office"]')
    });

    // Abre a árvore Home.
    await home.click();

    // Valida se Home foi expandida.
    await expect(home).toHaveClass(/rc-tree-switcher_open/);

    // Abre a árvore Documents.
    await documents.click();

    // Valida se Documents foi expandida.
    await expect(documents).toHaveClass(/rc-tree-switcher_open/);

    // ----------------------------------------
    // SELECIONAR WorkSpace
    // ----------------------------------------
    await workSpace.locator('.rc-tree-switcher').click();

    await page.getByLabel('Select WorkSpace').check()

    // Resultados
    await expect(resultados).toBeVisible();

    await expect(resultados).toHaveText('You have selected :workspacereactangularveu')

    // Retirando todas as Seleções
    await workSpace.locator('.rc-tree-switcher').click(); // Desmarcando
    await page.getByLabel('Select WorkSpace').uncheck()   // Desmarcando

    // ----------------------------------------
    // SELECIONAR Office
    // ----------------------------------------

    await office.locator('.rc-tree-switcher').click();

    await page.getByLabel('Select Office').check()

    // Resultados
    await expect(resultados).toBeVisible();

    await expect(resultados).toHaveText('You have selected :officepublicprivateclassifiedgeneral')





  });

  // ========================================
  // TESTE 5: SELECIONAR DOWNLOADS
  // ========================================

  test('Select Downloads', async ({ page }) => {

    // Cria os localizadores deste teste.
    const home = page.locator(seletorArvore).first();
    const downloads = page.locator(seletorArvore).nth(3);
    const resultados = page.locator(seletorResultados);

    // Abre a árvore Home.
    await home.click();

    // Valida se Home foi expandida.
    await expect(home).toHaveClass(/rc-tree-switcher_open/);

    // Abre a árvore Downloads.
    await downloads.click();

    // Valida se Downloads foi expandida.
    await expect(downloads).toHaveClass(/rc-tree-switcher_open/);

    // ----------------------------------------
    // SELECIONAR WORD FILE
    // ----------------------------------------

    await page.getByLabel('Select Word File.doc').check();

    await expect(resultados).toBeVisible();
    await expect(resultados).toHaveText(
      'You have selected :wordFile'
    );

    // Desmarca Word File.
    await page.getByLabel('Select Word File.doc').uncheck();

    // ----------------------------------------
    // SELECIONAR EXCEL FILE
    // ----------------------------------------

    await page.getByLabel('Select Excel File.doc').check();

    await expect(resultados).toBeVisible();
    await expect(resultados).toHaveText(
      'You have selected :excelFile'
    );

    // Desmarca Excel File.
    await page.getByLabel('Select Excel File.doc').uncheck();

    // ----------------------------------------
    // SELECIONAR A PASTA DOWNLOADS
    // ----------------------------------------

    await page.getByLabel('Select Downloads').check();

    await expect(resultados).toBeVisible();
    await expect(resultados).toHaveText(
      'You have selected :downloadswordFileexcelFile'
    );

  });

  

});
