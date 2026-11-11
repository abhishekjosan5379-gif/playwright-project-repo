//throw
//throw is mainly used to normally generate an error in javascript
//syntax
//throw new error(error message)
let age=20
if (age<18)
{
    throw new Error("Age must be 18 or above")
}
console.log("eligible")
console.log("******************")
try{
    let age=20
    if (age<18)
    {
        throw new Error("age must be 18 or above")
    }
    console.log("eligible")

}
catch(error)
{
    console.log(error.message)
}

console.log("******************")

try
{
    let num=10
    if(num<0)
    {
        throw new Error("Number is greater")
    }
    console.log("Valid Number")
}
catch(error)
{
    console.log(error.message)
}

console.log("*************")
try
{
    let pass="123"
    if(pass.length<6)
    {
        throw new Error("password must contain atleast 6 characters")
    }
    console.log("password is correct")
}
catch(error)
{
    console.log(error.message)
}
console.log("*********************")
try{
    let balance=20000
    let amount=10000
    if(amount>balance)
    {
        throw new Error("Insufficient Balance")
    }
    console.log("Withdrawed")
}
catch(error)
{
    console.log(error.message)
}
