/*const { Given, When, Then } = require('@cucumber/cucumber')
const { chromium } = require('playwright')
const { expect } = require('@playwright/test')

let browser
let page

Given('User is on the login page', async function () {
    browser = await chromium.launch({ headless: false })
    page = await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
})

When('User enters valid user-name and password', async function () {
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
})

Then('User should be logged in', async function () {
    await expect(
        page.toHaveUrl("https://www.saucedemo.com/inventory.html")
    )

    await browser.close()
})*/