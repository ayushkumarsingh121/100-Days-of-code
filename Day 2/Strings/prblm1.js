
// 1. **Write a program to reverse the string `str = "HelloWorld"` and print the result.**  
//    **Output:**  
//    `dlroWolleH`

let str = "HelloWorld"

let nStr = "";
for(let i=str.length-1; i>=0; i--){
   nStr = nStr + str[i]
}
console.log(nStr)