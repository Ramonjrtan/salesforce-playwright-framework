const { test, expect } = require('@playwright/test');
const login = require('../utils/login');
const AccountPage = require('../pages/AccountPage');

test('Create Account', async ({ page }) => {
  await login(page);

  const account = new AccountPage(page);
  await account.navigate();

  const name = 'AutoAccount_' + Date.now();
  await account.createAccount(name);

  await expect(page.locator(`text=${name}`)).toBeVisible();
});
