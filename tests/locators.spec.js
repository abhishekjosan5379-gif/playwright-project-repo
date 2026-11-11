//LOCATOR:- Locator is used in playwright to find and interact with the elements.
import{test,expect} from '@playwright/test'
test ('locator',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    //const webelementname=page.locator('locatorvalue')
    const a="hello"
    const message=page.locator('#single-input-field')
    await message.fill(a)
    const button1=page.locator('#button-one')
    await button1.click()
    })

test('csselectors',async({page})=>{
    //id=#id
    const message=page.locator('#single-input-field')
    const button1=page.locator('#button-one')
    const button2=page.locator('#button-two')
    //class=.class
    const checkbox1=page.locator('.form-check-input')
    const selectallbutton=page.locator('.form-control')
    const totalbutton=page.locator('.form-control')
    //tag and attribute
    //tagname[attrubute='value']
    const input=page.locator('input[placeholder="Message"]')
})

test('xpath',async({page})=>{
/*THERE ARE TWO TYPES OF XPATH:-
1.ABSOLUTE XPATH-"/html/body/section/div/div/div[2]/div[1]/div/div[2]/form/button"
Starts from the root node(not reccommended as it may break easily)

2.RELATIVE XPATH:- Starts from anywhere in the DOM, 
syntax:- //tagname[@attribute='value']
*/
const input=page.locator('//input[@id="single-input-field"]')
const button2=page.locator('//button[@id="button-one"]')
const subjectbox=page.locator('//input[@id="subject"]')
const textdescription=page.locator('//textarea[@id="description"]')
//text():-syntax:- //tagname[text()='value']
const text=page.locator("//button[text()='Show Message']")
const total=page.locator("//button[text()='Get Total']")

//contains():-syntax:-//tagname[contains(@attribute,'value')]
//syntax:- //tagname[contains(text(),'value')]
const inputfeild=page.locator("//input[contains(@id,'single-input-field')]")
const buttontwo=page.locator("//input[contains(@id,'button-one')]")
const button=page.locator("//button[contains(text(),'Get Firs')]")


//startswith() syntax:- //taganem[starts-with(@attribute,'value')]
// //tagname[starts-with(text(),'value')]

const inputfeild1=page.locator("//input[starts-with(@id,'single')")
const EnterVal=page.locator("//input[starts-with(@id,'value-b')]")

//sarts-with-text()
const buttontotal=page.locator("//button[starts-with(text(),'Get Total')]")
const startdownload=page.locator("//button[starts-with(text(),'Start Download')]")


//AND syntax-//tagname[@attibute='value' and @attribute='value]
const inputfirst=page.locator('//input[@id="single-input-field" and @placeholder="Message"]')
const valuea=page.locator('//input[@id="value-a" and @placeholder="Enter Value"]')

//AND SYNTAx-//tagname[@attribute='value' and text()='value']
const datebutton=page.locator("//button[@id='button-one' and text()='Show Date']")
const datebutton2=page.locator("//button[@id='button-two'and text()='Show Date']")


})