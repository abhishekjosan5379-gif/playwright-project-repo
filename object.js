//object literal format
let student=
{
    name:"Abhishek",
    age:"21",
    great()
    {
        console.log("Hallo")
    }

}
console.log(student.name,student.age)
student.great()

//BY USING NEW OBJECT()
const employ=new Object()
employ.name="Abhi"
employ.salary= 50000
console.log(employ)

//JSON OBJECT CREATION
//DEF- it is a text format used to store and exchange data, it consists of key value pair
let students={
    "name":"Josan",
    "age": 21,
    "department":"Testing"
}
console.log(students)