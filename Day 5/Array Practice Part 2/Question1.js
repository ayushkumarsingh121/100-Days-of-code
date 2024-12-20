let str = "We are learning javascript";

let obj = {};

for(let char of str){
  if(obj[char] == undefined){
    obj[char] = 1
  }
  else{
    obj[char]++
  }
}
console.log(obj)

//------------------------------------------------------------------


for(let i=0; i<str.length; i++){
  if(obj[str[i]] == undefined){
    obj[str[i]] = 1
  }
  else{
    obj[str[i]]++
  }
}


//---------------------------------------------------------


for(let char of str){
  if(obj[char] == undefined){
    obj[char] = obj[char] + 1 ||  1
  }
  
}
console.log(obj)