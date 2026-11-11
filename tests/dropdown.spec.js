import{test,expect} from '@playwright/test'
test ('dropdown',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const drop1=page.locator('//select[@id="dropdowm-menu-1"]')
    //index
    //syntax await webelemntname.selectOption({index:value})
    await drop1.selectOption({index:3})

})

test ('dropdown-byvalue',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const drop2=page.locator('#dropdowm-menu-2')
    //syntax await webelemtnname.selectOption({value:valuename})
    await drop2.selectOption({value:"maven"})



})


test ('dropdrown-bytext',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const drop3=page.locator('#dropdowm-menu-3')
    await drop3.selectOption({label:'JQuery'})
    await page.waitForTimeout(3000)
})

test.only('custom-dropdown',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const drop4=page.locator('#dropdowm-menu-1')
    await drop4.click()
    const c1=page.locator('//option[@value="c#"]')
    await c1.click()
})