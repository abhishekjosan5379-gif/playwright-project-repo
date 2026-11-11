import {test,expect} from '@playwright/test'
test('frame',async({page})=>{
    await page.goto('https://demoqa.com/frames')
    const frameelement=page.frameLocator('#frame1')
    console.log(await frameelement.locator('#sampleHeading').textContent())
    

})
/* WHAT IS A FRAME IN PLAYWRIGHT
A FRAME IS A HTML DOCUMENT EMBEDDED INSIDE ANOTHER WEBPAGE, ushually thrugh an iframe elemnt
HOW DO U HANDLE FRAMES IN PLAYWRIGHT?
we can use page.frameLocator() to locate elemnt inside an iframe and perfrom actions such as clicking,
WHat is the diff btw page.locator() and page.frameLocator()
page.locator()-locate elements in the main page 
page.frameLocator()-locate elements inside an iframe
*/
