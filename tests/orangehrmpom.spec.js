import {test,expect} from '@playwright/test';
import {orangehrmlogin} from '../Pages/orangehrmlogin';

test('orangehrm login test',async({page})=>
{
    const login = new orangehrmlogin(page);
    await login.gotologinpage();
    await login.login("Admin","admin123");
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})