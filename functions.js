function sample()
{
    console.log("Hello")
}
sample()

//SUM AND SUB USING FUCNTION

let a=6
let b=5
function sum()
{
    console.log(a+b)

}
sum()

function sub()
{
    console.log(a-b)
}
sub()
//ODD OR EVEN USING FUCNTION

function num()
{
    let c=10
    if(c%2==0)
    {
        console.log("EVEN")
    }
    else
    {
        console.log("ODD")
    }
}
num()

//LARGER OF 2 NUM USING FUNCTION
function large()
{
    let n=10
    let m=20
    if(n>m)
    {
        console.log(n+ "IS LARGER")
    }
    else
        {
            console.log(m+"IS LARGER")
    }

}
large()

//PRINT NUM 1-10
function ten(){
    let z=1
    while(z<=10)
    {
        console.log(z)
        z++
    }
}
ten()

//PARAMETERIZED

function message(yourmessage)
{
console.log(yourmessage)
}
message("Thank You")

//SUM OF two num using parameterized
function sums(i,j)
{
    console.log(i+j)
}
sums(20,30)

//FIND IF A NUM IS POSITIVE OR NEGATIVE

function num(p)
{
if(p<0)
{
    console.log(p+"IS NEGATIVE")
}
else
{
    console.log(p+"IS POSITIVE")
}
}
num(1)

//FUNCTION WITH RETURN TYPE

function prob(q,r)
{
    return q+r

}
console.log(prob(10,30))

//FIND LARGER NUM USING RETURN TYPE

function large(a,b)
{
    if(a>b)
    {
        return a
    }
    else
    {
        return b
    }

}
console.log(large(5,10)+" IS LARGER")


//ARROW FUNCTION- NONPARAMETERIZED

const samplemessage=()=>
{
    console.log("Hello")
}
samplemessage()

//ARROW-PARAMETERIZED ADDITION

let add=(a,b)=>
{
console.log(a+b)
}
add(30,40)

//ARROW-RETURN TYPE Sub
let sub=(c,d)=>
{
return c-d
}
console.log(sub(80,50))

//DEFAULT PARAMETER

function defaultparameterexample(name="Josan")
{
console.log(name)
}
defaultparameterexample("Abhishek")
defaultparameterexample()