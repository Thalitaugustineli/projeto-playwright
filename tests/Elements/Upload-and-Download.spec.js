

import { test, expect } from '@playwright/test'; 
import fs from 'node:fs/promises'; // importa o módulo fs/promises para manipulação de arquivos de forma assíncrona
import path from 'node:path';     // importa o módulo path para manipulação de caminhos de arquivos

const pastaArquivos = 'C:\\git\\projeto-playwright\\Arquivos\\upload';


test.describe('Elements | Upload and Download', () => {

  // Executa antes de cada teste.
  test.beforeEach(async ({ page }) => {

    // Define o tamanho da tela.
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    // Acessa a página de botões.
    await page.goto('/upload-download');
  });

  // ========================================
  // TESTE 1: Download
  // ========================================

  test('Download', async ({ page }) => {

    // Caminho onde o arquivo será salvo
  const pastaDownloads = 'C:\\git\\projeto-playwright\\Arquivos\\downloads';

  // Garante que a pasta exista
  await fs.mkdir(pastaDownloads, { recursive: true });

  // Localiza o botão Download
  const botaoDownload = page.getByRole('button', {
    name: 'Download',
    exact: true
  });

  // Valida se o botão está visível e habilitado
  await expect(botaoDownload).toBeVisible();
  await expect(botaoDownload).toBeEnabled();

  // Aguarda o download e clica no botão
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    botaoDownload.click()
  ]);

  // Verifica se o download apresentou algum erro
  const erroDownload = await download.failure();
  expect(erroDownload).toBeNull();

  // Obtém o nome original do arquivo
  const nomeArquivo = download.suggestedFilename();

  // Define o caminho completo de destino
  const caminhoArquivo = path.join(pastaDownloads, nomeArquivo);

  // Salva o arquivo no caminho especificado
  await download.saveAs(caminhoArquivo);

  // Confirma que o arquivo existe
  const arquivoExiste = await fs.stat(caminhoArquivo);
  expect(arquivoExiste.isFile()).toBeTruthy();

  // Confirma que o arquivo não está vazio
  expect(arquivoExiste.size).toBeGreaterThan(0);

  console.log('Download realizado com sucesso!');
  console.log('Arquivo:', caminhoArquivo);
  console.log('Tamanho:', arquivoExiste.size, 'bytes');
    
  });

  // ========================================
  // TESTE 2: Upload de imagem PNG
  // ========================================

  test('Upload de imagem PNG', async ({ page }) => {
  const arquivo = path.join(pastaArquivos, 'Festa.png');

  await expect(page.locator('#uploadFile')).toBeVisible();
  await expect(fs.stat(arquivo).then(() => true)).resolves.toBe(true);

  await page.locator('#uploadFile').setInputFiles(arquivo);

  await expect(page.locator('#uploadedFilePath'))
    .toContainText('Festa.png');
});

  // ========================================
  // TESTE 3: Upload de documento Word
  // ========================================

test('Upload de documento Word', async ({ page }) => {
  const arquivo = path.join(pastaArquivos, 'TESTES.docx');

  await expect(page.locator('#uploadFile')).toBeVisible();
  await fs.access(arquivo);

  await page.locator('#uploadFile').setInputFiles(arquivo);

  await expect(page.locator('#uploadedFilePath'))
    .toContainText('TESTES.docx');
});
  // ========================================
  // TESTE 4: Upload de documento PDF
  // ========================================

test('Upload de documento PDF', async ({ page }) => {
  const arquivo = path.join(pastaArquivos, 'TESTES.pdf');

  await expect(page.locator('#uploadFile')).toBeVisible();
  await fs.access(arquivo);

  await page.locator('#uploadFile').setInputFiles(arquivo);

  await expect(page.locator('#uploadedFilePath'))
    .toContainText('TESTES.pdf');
});

  // ========================================
  // TESTE 5: Upload de documento Excel
  // ========================================
test('Upload de planilha Excel', async ({ page }) => {
  const arquivo = path.join(pastaArquivos, 'TESTES.xlsx');

  await expect(page.locator('#uploadFile')).toBeVisible();
  await fs.access(arquivo);

  await page.locator('#uploadFile').setInputFiles(arquivo);

  await expect(page.locator('#uploadedFilePath'))
    .toContainText('TESTES.xlsx');
});

});
