/*common js(CJS) and es module(ESM)
In javascript common js and es modules are two diff module systems
used to organize and share code
MODULE:- a module is a javascript file that contains variables
functions and classes that can be exported and imported to other files
COMMONJS and ES modules are two module systems in javascript
CJS uses require() and module.exports , ES uses import and export
ES modules are the standadized modern javascript system and are commonly used in modern application
common js; is the older modle system
es module; modern javascript module system*/

//example CJS
Math.js
function add(a,b)
{
return a+b
module.exports add
}
app.js
const sum=require("./Math")
console.log(add(2,3))

//example ESM
Math1.js
export fucntion add1(a,b)
{
    return a+b
}

app1.js
import {add1} from "./Math1.js"
console.log(add1(2,3))


