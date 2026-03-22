require('dotenv').config();

async function login(page) {
  await page.goto(process.env.SF_URL);

  await page.fill('#username', process.env.SF_USERNAME);
  await page.fill('#password', process.env.SF_PASSWORD);

  await page.click('#Login');

  await page.waitForSelector('text=Home', { timeout: 20000 });
}

module.exports = login;
