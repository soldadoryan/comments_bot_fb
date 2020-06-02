const BOT = require('puppeteer');

const run = async () => {
  const browser = await BOT.launch({
    headless: false,
    args: ['--start-fullscreen']
  });

  const page = await browser.newPage();

  await page.goto('LINK DA PUBLI');

  await page.waitFor('input[name=email]');
  await page.$eval('input[name=email]', el => el.value = 'EMAIL_CONTA');

  await page.waitFor('input[name=pass]');
  await page.$eval('input[name=pass]', el => el.value = 'SENHA_CONTA');

  await page.keyboard.press('Enter');

  await page.waitFor(10000);

  while (true) {
    await page.waitFor(3000);
    await page.keyboard.type(`H4CK3D BY AN4L0G!!! ${Math.random()}`);
    await page.keyboard.press('Enter');
  }
}

run();
