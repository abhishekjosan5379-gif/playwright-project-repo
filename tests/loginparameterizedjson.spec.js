import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import validlogindata from '../utilities/parameterizedcredentials.json'
for (const data of validlogindata){


test(`log creden ${data.username} ${data.password}`,async({page})=>{
    const lp=new LoginPage(page)
    await lp.openApplication()
    await lp.login(validlogindata.username,validlogindata.password)
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
}