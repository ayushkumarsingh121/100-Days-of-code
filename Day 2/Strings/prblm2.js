// 2. **Given a string `str = "OpenAI"`, write a program to print every second character of the string starting from the first character.**  
//    **Output:**  
//    `OeA`

let str = "OpenAI";

let nStr = "";
for(let i=0; i<str.length; i++){
  if(i % 2 == 0){
    nStr = nStr + str[i]
  }
}
console.log(nStr)
