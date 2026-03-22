const { test, expect } = require('@playwright/test');
const login = require('../utils/login');
const OpportunityPage = require('../pages/OpportunityPage');

test('Create Opportunity', async ({ page }) => {
  await login(page);

  const opp = new OpportunityPage(page);
  await opp.navigate();

  const name = 'Opportunity_' + Date.now();
  await opp.createOpportunity(name);

  await expect(page.locator(`text=${name}`)).toBeVisible();
});
