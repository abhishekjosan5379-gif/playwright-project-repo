import {test,expect} from '@playwright/test'
test('calendar',async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    await page.locator('#single-input-field').click()
    const targetyear=1997
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()
    //wait until the calendar pop up element is visible on the page,and verify that it is displayed
    //we do not immediaetly interact with calendar, ui may take time to load
    const swtichbutton=page.locator('.datepicker-switch:visible')//visible is used to fikter and select only visible elemtns
    await swtichbutton.click()
    await swtichbutton.click()
    let attempt=10//avoid infinite loop
    while(attempt--)
    {
        const decades=await swtichbutton.innerText()
        //innertext() gets the text visible on the screen
        //reads the currebt calendar header text(2020-2029)
        const startyear=parseInt(decades.split('-')[0].trim())
        /*decades="2020-2029"
        decades.split('-')=['2020","2029"]
        trim()-["2020","2029"] removes extra space from the beginning and end of a string
        parseInt()-used to convert string to integer
        */
       /*1997>=2020
       /2010-2019
       1917>=2010
       2000-2009
       1997>=2000
       1990-1999
       1997>=1990 && 1997<=1990+9
       */
       if(targetyear>=startyear && targetyear<=startyear+9)
       {
        break
       }
        await page.locator('.prev:visible').click()

    }
    await page.locator('.year:visible').filter({hasText:"1997"}).click()//hasText is used to filter eklements based on the filter text
    await page.locator('.month:visible').filter({hasText:"Oct"}).click()
    await page.locator('.day:not(.old):not(.new)').filter({hasText:/^8$/}).click()
    await page.locator('#button-one').click()

})
