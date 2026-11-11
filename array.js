//ARRAY LITERAL

let course=["MBA","BBA","MSC","PHD"]
console.log(course)

//EMPTY ARRAY

let number=[]
number[0]=10
number[1]=20
number[2]=30
number[3]=40
console.log(number)

//ARRAY CONSTRUCTOR

let color=new Array("red","blue","green","yellow")
console.log(color)

//ARRAY CREATION WITH A SPECIFIC SIZE

let newarray=new Array(5)
console.log(newarray)

//FINDING LENGTH OF ARRAY

console.log(number.length)

//USING ARRAY OF FUNCTION

let num=Array.of(1,2,3,4)
console.log(num)

//PUSH FUNCTION
let pusharray=[]
pusharray.push(10)
pusharray.push(20)
pusharray.push(30)
pusharray.push(40)
console.log(pusharray)

//ITERATION IN ARRAY

let furits=["Apple","Orange","Grape","Mango"]
for(let i=0;i<=3;i++)
{
    console.log(furits[i])
}

//FOR OF

let furits1=["Apple","Orange","Grape","Mango"]
for(let furit of furits1)
    {
        console.log(furit)
}

//FOR EACH
let furits2=["Apple","Orange","Grape","Mango"]
furits2.forEach(function(furit)
{
console.log(furit)
})

//USING FOR IN

let furits3=["Apple","Orange","Grape","Mango"]
for(let index in furits3)
    {
        console.log(index,furits3[index])
    }

//map function

let numbers1=[1,2,3]
let double=numbers1.map(num=>num*2)
console.log(double)

//filter function

let unfilteredarray=[10,20,30,40]
let filteredarray=unfilteredarray.filter(num=>num>15)
console.log(filteredarray)

//find function

let findarray=[10,20,30,40]
console.log(findarray.find(num=>num>15))

//POP FUNCTION
let languages=["MALAYALAM","ENGLISH","JAPANESE","TAMIL"]
languages.pop()
console.log(languages)

//unshift function

languages.unshift("GERMAN")
console.log(languages)

//SHIFT FUNCTION

languages.shift()
console.log(languages)

//SPLICE FUCNTION

let noarray=[1,2,3,4]
noarray.splice(2,0,6)
console.log(noarray)

//SPLICE DELETION

let splicedltarray=[1,2,3,4,5]
splicedltarray.splice(2,1)
console.log(splicedltarray)

//includes function

console.log(splicedltarray.includes(5))

//index of funct

console.log(splicedltarray.indexOf(2))

//reverse function

newarray2=[1,2,3,4,5]
newarray2.reverse()
console.log(newarray2)