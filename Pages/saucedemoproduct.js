exports.saucedemoproduct =
class saucedemoproduct
{
    constructor(page)
    {
        this.page=page;
        this.addtocart =this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.cart= this.page.locator("//div[@id='shopping_cart_container']//a//span");
        this.checkout = this.page.locator("//button[@id='checkout']");
        this.firstname = this.page.locator("//input[@id='first-name']");
        this.lastname = this.page.locator("//input[@id='last-name']");
        this.postalcode = this.page.locator("//input[@id='postal-code']");
        this.continuebutton = this.page.locator("//input[@id='continue']");
        this.finishbutton = this.page.locator("//button[@id='finish']");
        this.orderconfirmation = this.page.locator("//button[@id='back-to-products']");
    }
    async addtocartproduct()
    {
        await this.addtocart.click();
        await this.cart.click();
        await this.checkout.click();
        await this.firstname.fill("aditya");
        await this.lastname.fill("sharma");
        await this.postalcode.fill("12345");
        await this.continuebutton.click();
        await this.finishbutton.click();
        await this.orderconfirmation.click();
    }
}