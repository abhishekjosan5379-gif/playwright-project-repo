class Atm
{
withdraw(amount)
{
    let balance=10000
    if(balance>=amount)
    {
        console.log("Withdraw sucessfull")
    }
    else
        {
    console.log("Insufficient funds")
    }
}
}
let obj2= new Atm()
obj2.withdraw(20000)

class Car
{
start()
{
    console.log("CAR STARTED")
    this.checkengine()
}
checkengine()
{
    console.log("Checked engine")
}
}
let obj= new Car()
obj.start()


class Tele
{
    on()
    {
        console.log("TV is on")
        this.screenon()
    }
    screenon()
    {
        console.log("Screen Turned on")
    }
}
let obj3= new Tele()
obj3.on()


class Loginsample
{
    login(username,password)
        {
this.validateuser(username,password)
        }
    
    validateuser(username,password)
    {
        if(username==="Admin"&&password===123)
        {
            console.log("Sucessfully Logged In")
        }
        else
        {
            console.log("Login Failed")
        }


    }
}
let obj4= new Loginsample()
obj4.login("Admin",123)


class Washingmachine
{
    start()
    {
     this.fillwater()
     this.washclothes()
     console.log("Washing Complete")
    }
    fillwater()
    {
     console.log("Water filled")
    }
    washclothes()
    {
     console.log("Washing Clothes")
    }
}
let obj5= new Washingmachine()
obj5.start()