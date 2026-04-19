exports.orangehrmlogin =
class orangehrmlogin 
{
    constructor(page)
    {
        this.page=page;
        this.username= this.page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input');
        this.password= this.page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input');
        this.loginbutton= this.page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button');
    }
    async gotologinpage()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}
//module.exports={orangehrmlogin};