const {test, expect} = require('@playwright/test');

test('double click', async ({page}) => {
    await page.goto("https://qa-practice.netlify.app/double-click");
    const doubleclick = await page.locator('//*[@id="double-click-btn"]');
    await doubleclick.dblclick();
    await page.waitForTimeout(2000);
})