exports.parabanklogin =
class parabanklogin
{
    constructor(page)
    {
        this.page= page;
        this.username= this.page.locator('//*[@id="loginPanel"]/form/div[1]/input');
        this.password= this.page.locator('//*[@id="loginPanel"]/form/div[2]/input');
        this.loginbutton= this.page.locator('//*[@id="loginPanel"]/form/div[3]/input');
    }
    async gotologinpage()
    {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
    }
    async login(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}
//module.exports={parabanklogin};