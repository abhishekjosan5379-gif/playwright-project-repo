//FIND THE LARGER NUMBER USING TERNARY OPERATOR
let a=10,b=20
let larger= a>b? a+" Is larger" : b+ " Is Larger "
console.log(larger)

//IF ELSE TO CHECK PASS MARK
let mark=60
if(mark>=40)
{
    console.log("PASSED")
}
else
    {
        console.log("FAILED")
    }

    //CHECK CORRENT PASSWORD

    let username="admin"
    let password="1234"
    if(username==="admin" && password==="1234")
    {
        console.log("SUCESSFULLY LOGGED IN")
    }
    else
        {
            console.log("LOGIN FAILED")
    }


//CHECK IF NUMBER IS DIVISIBLE

let num=30
if(num%3==0 && num%5==0)
{
    console.log("DIVISIBLE BY 3 AND 5")
}
else
{
    console.log("NOT DIVISIBLE BY 3 ABD 5")
}

//TRAFFIC SIGNAL
let color="green"
switch(color)
{
    case "green":
        console.log("GO")
        break
    case "yellow":
        console.log("WAIT")
        break
    case "red":
        console.log("RED")
        break
    default:
        console.log("INVALID INPUT")
}

//BROWSER CHECK

let browser="firefox"
switch(browser)
{
    case "firefox":
        console.log("FIREFOX IS USED")
        break
    case "edge":
        console.log("EDGE IS USED")
        break
    case "chrome":
        console.log("CHROME IS USED")
        break
    default:
        console.log("INVALID BROWSER")
}