//visual testing in playwright verifies the visual apperance of a webpage by comparing 
// the current screenshot with a previously saved baseline screenshot
//for a static page, capture the baseline using 'toHaveScreenshot()', then run the test again to detect unexpected changes
/* defects detected:-
1.Color Changes
2.Layout Issues
3.Font Changes
4.Missing or Extra elements
5.Space Issues

How does visual testing work?
Step:-1
Capture the baseline screenshot
Take the first screenshot of the page this becomes the expected apperance, called the baseline screenshot

Step:-2 
Run the test again
playwright captures a new screenshot of the same page

Step:-3 
Compare Screenshots 
playwright compares the new screenshots with the baseline and reports visual defects
*/
import{test,expect} from '@playwright/test'
test ('visualtest',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('sourcedemo.png',{threshold:0.2})
})

/* 
0-strict(No difference allowed)
0.1-very small diff allowed
0.2-small difference allowed
1-large difference allowed
*/