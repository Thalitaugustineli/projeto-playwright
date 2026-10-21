import { expect, test } from '@playwright/test';

test.describe('Formulários | Cadastro de estudante', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
      width: 1600,
      height: 900
    });

    await page.goto('/automation-practice-form');
  });

  test('exibe os títulos da página', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Practice Form', exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', {
        name: 'Student Registration Form',
        exact: true
      })
    ).toBeVisible();
  });

  test('exibe os campos de informações pessoais', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();
    await expect(
      page.getByRole('textbox', { name: 'name@example.com' })
    ).toBeVisible();
    await expect(
      page.getByRole('textbox', { name: 'Mobile Number' })
    ).toBeVisible();
    await expect(
      page.getByRole('textbox', { name: 'Current Address' })
    ).toBeVisible();
  });

  test('exibe as opções de gênero e passatempos', async ({ page }) => {
    for (const name of ['Male', 'Female', 'Other']) {
      await expect(page.getByRole('radio', { name, exact: true })).toBeVisible();
    }

    for (const name of ['Sports', 'Reading', 'Music']) {
      await expect(
        page.getByRole('checkbox', { name, exact: true })
      ).toBeVisible();
    }
  });

  test('exibe os demais controles sem enviar o formulário', async ({ page }) => {
    await expect(page.getByText('Date of Birth', { exact: true })).toBeVisible();
    await expect(page.getByRole('combobox')).toHaveCount(2);
    await expect(page.getByText('Select State', { exact: true })).toBeVisible();
    await expect(page.getByText('Select City', { exact: true })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Choose File', exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Submit', exact: true })
    ).toBeVisible();
  });
});
