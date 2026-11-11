import {test,expect} from '@playwright/test'
test('login',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    const username=page.locator('#user-name')
    await username.fill('standard_user')
    const password=page.locator('//input[@placeholder="Password"]')
    await password.fill('secret_sauce')
    const loginbutton=page.locator('#login-button')
    await loginbutton.click()
})

test.('crrtuser',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    const username1=page.locator('#user-name')
    await username.fill('standard_user')
    const password=page.locator('//input[@placeholder="Password"]')
    await password.fill('incorrect')
    const loginbutton=page.locator('#login-button')
    await loginbutton.click()


})

test.('crrtpass',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    const username1=page.locator('#user-name')
    await username.fill('incorrect')
    const password=page.locator('//input[@placeholder="Password"]')
    await password.fill('secret_sauce')
    const loginbutton=page.locator('#login-button')
    await loginbutton.click()


})


//Allure report - detailed report


