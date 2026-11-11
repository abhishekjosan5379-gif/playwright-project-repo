//https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html
import{test,expect} from '@playwright/test'
test ('checkbox',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const box1=page.locator('//input[@value="option-1"]')
    //await box1.check()
    await box1.click()
    const status=await box1.isChecked()
    console.log(status)
    await expect(box1).toBeChecked()
})

test('checkbox2',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const box2=page.locator('//input[@value="option-2"]')
        await box2.click()
        await box2.click()
})

test('checkbox4',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const box4=page.locator('//input[@value="option-4"]')
    await box4.check()
    await box4.check()
})

test('checkbox3',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const box3=page.locator('//input[@value="option-3"]')
    await box3.uncheck()
})

test('HW',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const box4=page.locator('//input')
})


