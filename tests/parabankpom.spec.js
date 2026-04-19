import {test,expect} from '@playwright/test';
import {parabankregister} from '../Pages/parabankregister';
import {parabanklogin} from '../Pages/parabanklogin';

test('parabank register and login test',async({page})=>
{
     const register= new parabankregister(page);
     await register.gotoregisterpage();
     await register.register("aditya","kumar","A-112,pashan,pune","pune","maharashtra","411021","9876548210","123-45-6789","adityakumar","adityakumar123","adityakumar123");

     const login = new parabanklogin(page);
     await login.gotologinpage();
     await login.login("adityakumar","adityakumar123");
     await page.waitForTimeout(3000);
     await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/overview.htm");
})