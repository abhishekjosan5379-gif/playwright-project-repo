//mouse events in playwright are used to perform actions that a user normally performs with mouse such as click, double click,rightclick,mouseover
import {test,expect} from '@playwright/test'
test('mouseevent',async({page})=>{
     await page.goto('https://selenium.qabible.in/drag-drop.php')
     await page.locator('//span[text()="Draggable n°1"]').click({button:'right'})


})


test('mousehover',async({page})=>{
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    await page.locator('#others').hover()
    


})

test('doubleclick',async({page})=>{
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    await page.locator('//h4[text()="Draggable Items List"]').dblclick()


})

test.only('draganddrop',async({page})=>{
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    await page.locator('//span[text()="Draggable n°2"]').dragTo(page.locator('#mydropzone'))
    await page.waitForTimeout(3000)

})


