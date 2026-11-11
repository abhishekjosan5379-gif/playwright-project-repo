let furits:string[]=["apple","grape","lemon","orange"]
console.log(furits[1])
console.log(furits.length)

console.log("***********************")
class Calculator
{
add(a:number,b:number)
{
    let c=a+b
    return c
}
multiplication(a:number,b:number)
{
    let c=a*b
    return c
}
division(a:number,b:number)
{
    let c=a/b 
    return c
}
}
const obj=new Calculator()
obj.add(5,10)
obj.multiplication(5,10)
obj.division(10,5)
console.log(obj.add(5,10))
console.log(obj.multiplication(5,10))

