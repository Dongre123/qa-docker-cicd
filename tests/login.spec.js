const { test, expect } = require('@playwright/test');

test('Login page should be displayed', async ({ page }) => {
    await page.goto('http://localhost:3001');

    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});