console.log('****************PUBLIC***********')

class Student
{
    public name : string="Abhi"
    public display():void
    {
      console.log(this.name)
    }
}
let obj=new Student()
obj.display()
console.log(obj.name)


console.log("*********PRIVATE*********")

class Bank
{
    private balance: number=3000
    public bal():void
    {
        console.log(this.balance)

    }
}
let obj1=new Bank()
obj1.bal()
//console.log(obj1.balance)

console.log("************PROTECT*****")

class Animal
{
    protected name:string="Lion"
    show():void
    {
        console.log(this.name)

    }
}
class Bird extends Animal
{
    display():void
    {
        console.log(this.name)

    }
}
let obj2=new Bird()
obj2.show()
obj2.display()