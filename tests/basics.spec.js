import{test,expect} from '@playwright/test'
//OFFICAL PLAYWRIGHT TEST RUNNER USED TO WRITE EXECUTE AND VALIDATE
//test:-used to create test case
//expect:-used to validate
test('urllauch',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://selenium.qabible.in/')

})
//async:-marks a function as aysncronous
//await:-waits for an asyncronous operation to finish
//browser:- its a playwright fixture, a fixture in playwright is a resuable mechanism that provides a required environment to a test playwirght provides built in fixtures
//such as page,browser,context and request
//fixtures improve code reusability,reduce duplicate setup code and make test script easier to maintain
//browser provides the browser instance
//context provides the bowser context of the session(like incognito-means a claer browser environment with no cookies or histories)'
//page-provides a browser page or tab
//request-used for API testing

test('urlshortcut',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
})
/*playwright is an open soruce automation testing framework developed by microsoft 
it is mainly used to automate and test web applications
playwright can automate; mouse actions,keyboard action,forms and input feild,multiple window or tabs,alerts or dialogs,frames
screenshot capturing,video capturing,asertion(used for validation),ap testing,visual testing
playwright supports chromium,firefox,webkit
languages:-javascript,typescript,java,python,.net

playwirght.conflict.js:- is the central configuration file in a playwright project
it is used to manage settings such as test directory,browser,timeout,screenshots,videos,reports and other test execution process
*/


/* webelements are the building blocks of a webpage, respresenting individual elements such as
buttons,links,text etc. In playwright automation web elements are used to interact with a webpage,
enabling actions like clicking buttons or links or entering text in to input feild etc.
*/
/*LOCATOR:- Locator is used in playwright to find and interact with the elements.
