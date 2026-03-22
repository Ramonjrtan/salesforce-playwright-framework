const { test, expect } = require('@playwright/test');
const login = require('../utils/login');
const LeadPage = require('../pages/LeadPage');

test('Create Lead', async ({ page }) => {
  await login(page);

  const lead = new LeadPage(page);
  await lead.navigate();

  await lead.createLead('Juan', 'Dela Cruz', 'Test Company');

  await expect(page.locator('text=Juan')).toBeVisible();
});
