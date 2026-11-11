import{test,expect} from '@playwright/test'
test('titlevalid',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    const title= await page.title()
    console.log(title)
    await expect(page).toHaveTitle(title)

})

test('urlvalid',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    const url= page.url()
    console.log(url)
    await expect(page).toHaveURL(url)
})