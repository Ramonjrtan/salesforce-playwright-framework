const { test, expect } = require('@playwright/test');
const login = require('../utils/login');

test('Login Test', async ({ page }) => {
  await login(page);
  await expect(page.locator('text=Home')).toBeVisible();
});
