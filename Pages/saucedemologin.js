exports.saucedemo =
class saucedemo
{
    constructor(page)
    {
        this.page=page;
        this.usernameInput = this.page.locator("//input[@id='user-name']");
        this.passwordInput = this.page.locator("//input[@id='password']");
        this.loginbutton = this.page.locator("//input[@id='login-button']");
    }
    async gotologinpage()
    {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username,password)
    {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginbutton.click();
    }
}