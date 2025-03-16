// Date snd its methods



const today= new Date()
console.log(today) //Sun Mar 16 2025 09:42:57 GMT+0530 (India Standard Time)
 console.log(today.getDate()) // 16 -number
 console.log(typeof(today.toString()))
 const dateArray= today.toString().split(' ')
 console.log(dateArray)

 const d1 = new Date("2022-03-25");
console.log(d1)


const d2 = new Date("October 13, 2014 11:13:00");
console.log(d2)



//JavaScript counts months from 0 to 11:
// and sunday to saturday-- 0-6
//new Date(year,month,day,hours,minutes,seconds,ms)
const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d3) //Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)

// JavaScript stores dates as number of milliseconds since January 01, 1970.
const d4 = new Date(100000000000);// Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)
console.log(d4)

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

 const array=[]
 for(let i=0;i<7;i++)
 {
    let nextDate= new Date()
    nextDate.setDate(today.getDate()+i)
    console.log(typeof(nextDate))
  
    array.push(nextDate)
    
 }
 console.log(array)

console.log( array[1].getDay())

//  const nextDate= new Date()
//  nextDate.setDate(today.getDate()+3)
//   console.log(nextDate.getDay())// Wed Mar 19 2025 09:46:07 GMT+0530 (India Standard Time)

let para= document.getElementById("date")
para.innerHTML= today

// Hours

let todayDate= new Date(today.getDate()+1)
console.log(todayDate.getTime()); //1742105453618 in ms
console.log(todayDate.getHours())
console.log(todayDate.getMinutes())











