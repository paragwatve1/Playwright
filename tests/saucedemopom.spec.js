// import {test, expect} from '@playwright/test';
// import { saucedemo } from '../Pages/saucedemologin';
// import { saucedemoproduct } from '../Pages/saucedemoproduct';

// test('saucedemo login & product test', async ({ page }) => 
// {
//  const login = new saucedemo(page);
//  await login.gotologinpage();
//  await login.login("standard_user","secret_sauce");
//  await page.waitForTimeout(3000);
//  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

//  const product = new saucedemoproduct(page);
//  await product.addtocartproduct();
//  await page.waitForTimeout(3000);
//  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
// })
import { test, expect } from '@playwright/test';
import { saucedemo } from '../Pages/saucedemologin';
import { saucedemoproduct } from '../Pages/saucedemoproduct';
import testData from '../data/testdata.json';

for (const user of testData) {
  test(`Login test for ${user.username}`, async ({ page }) => {
    const login = new saucedemo(page);
    await login.gotologinpage();
    await login.login(user.username, user.password);

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  const product = new saucedemoproduct(page);
  await product.addtocartproduct();
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
 })
}