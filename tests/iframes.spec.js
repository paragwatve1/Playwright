const {test, expect} = require('@playwright/test');

test('iframe test', async ({page}) => {
    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick");
    const frame = page.frameLocator('#iframeResult');
    await frame.locator('button[onclick="myFunction()"]').click();
    const resulttext = await frame.locator('#demo').textContent();
    expect(resulttext).toContain("Hello World");
    await page.waitForTimeout(3000);
    await page.locator("/button[@id='runbtn']").click();
    expect(page.locator("/button[@id='runbtn']")).toBeTruthy();
})