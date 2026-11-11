import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginpage'
import validlogindata from '../utilities/testdatacredentials.json'
test('verify login with valid credentials',async({page})=>{
    const lp=new LoginPage(page)
    await lp.openApplication()
    const usernamevalue=validlogindata.username
    const passwordvalue=validlogindata.password
    await lp.login(usernamevalue,passwordvalue)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    
} )