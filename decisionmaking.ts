//IF
let age:number=20
if(age>=18)
{
    console.log("ELigible to vote")
}


console.log("********EVEN********")
let num:number=110
if(num%2==0)
{
    console.log("Number is even")
}
else
{
    console.log("Number is odd")
}

console.log("********ELSE IF**********")
let n:number=0
if(n>0)
{
    console.log("Positive")
}
else if(n<0)
{
    console.log("Negative")
}
else
{
    console.log("Number is zero")
}

console.log("********SWITCH*******")
let day:number=10
switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Ivalid Input")
}