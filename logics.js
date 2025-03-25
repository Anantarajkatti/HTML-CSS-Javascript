const array=[4,-4,-4,3,5,2,-1]
let minArray= array[0]



function mod(num){
    if(num<0)
        return num *-1
    else
    return num
}

 
for(i=1;i<array.length;i++)
{
    console.log("number is",array[i])
    let num1= mod(array[i])
    console.log("Mod number is", num1)
    console.log("min number is",minArray)
    if(num1<mod(minArray))
    {
       
        console.log("number is less than min")
        minArray=array[i]
        console.log("Min Array",minArray)
       

    }
    else(num1===mod(minArray))
       {
        console.log("same")
         if(array[i]>minArray)
            minArray = array[i]
         console.log("Min Array",minArray)
       }
    console.log("-----------------------------")    

}

console.log("number that is near to Zero is ",minArray)
    

