export class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.usernamefield=page.locator('#user-name')
        this.passwordfield=page.locator('#password')
        this.loginButton=page.locator('#login-button')
        this.errorMsg=page.locator('.error-message-container error')
    }
    async openApplication()
    {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async login(username,password)
    {
        await this.usernamefield.fill(username)
        await this.passwordfield.fill(password)
        await this.loginButton.click()
    }
}