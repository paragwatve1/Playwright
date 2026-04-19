exports.parabankregister = 
class parabankregister 
{
    constructor(page)
    {
        this.page=page;
        this.firstname=this.page.locator('//*[@id="customer.firstName"]');
        this.lastname= this.page.locator('//*[@id="customer.lastName"]');
        this.address=this.page.locator('//*[@id="customer.address.street"]');
        this.city=this.page.locator('//*[@id="customer.address.city"]');
        this.state=this.page.locator('//*[@id="customer.address.state"]');
        this.zipcode=this.page.locator('//*[@id="customer.address.zipCode"]');
        this.phonenumber=this.page.locator('//*[@id="customer.phoneNumber"]');
        this.ssn=this.page.locator('//*[@id="customer.ssn"]')
        this.username=this.page.locator('//*[@id="customer.username"]');
        this.password=this.page.locator('//*[@id="customer.password"]');
        this.confirmpassword=this.page.locator('//*[@id="repeatedPassword"]');
        this.registerbutton=this.page.locator('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input');
    }
    async gotoregisterpage()
    {
        await this.page.goto("https://parabank.parasoft.com/parabank/register.htm");
    }
    async register(firstname,lastname,address,city,state,zipcode,phonenumber,ssn,username,password,confirmpassword)
    {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.address.fill(address);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zipcode.fill(zipcode);
        await this.phonenumber.fill(phonenumber);
        await this.ssn.fill(ssn);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmpassword.fill(confirmpassword);
        await this.registerbutton.click();
    }
}
//module.exports={parabankregister};