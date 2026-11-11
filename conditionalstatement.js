let age=21
if(age>=18)
    {
    console.log("Eligible To Vote")
    }


    //IF ELSE STATEMENT

    let candidateage=21
    if(candidateage>=18)
    {
        console.log("ADULT")
    }
    else
        {
            console.log("MINOR")
    }

    //TO FIND IF NUMBER IS POSITIVE

    let num=5
    if (num>=0)
    {
        console.log("POSITIVE")
    }
    else
    {
        console.log("NEGATIVE")
    }

    //TO FIND IF NUMBER IS EVEN OR ODD
    let x=3
    if(x%2===0)
        {
            console.log("EVEN")
            }
            else
                {
                    console.log("ODD")
                           }

//TO FIND LARGER NUMBER

let y=30,z=20
if(y>z)
{
    console.log( y+ "IS GREATER")
} else
{
    console.log(z+"IS GREATER")
}

//SWITCH

let day=6
switch(day)
{
    case 1:
        console.log("MONDAY")
        break
    case 2:
        console.log("TUESDAY")
        break
    case 3:
        console.log("WEDNESDAY")
        break
    case 4:
        console.log("THURSDAY")
        break
    case 5:
        console.log("FIRDAY")
        break
    default:
        console.log("INVALID DAY")
}

let vow="a"
switch(vow)
{
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(vow+ "IS A VOWVEL")
        break
    default: 
    console.log(vow+"IS NOT A VOWVEL")   
}