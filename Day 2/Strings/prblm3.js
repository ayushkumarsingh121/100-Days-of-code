// 3. **Check if two strings `str1 = "abc"` and `str2 = "bca"` are anagrams of each other. Print `true` if they are, otherwise print `false`.**  
//    **Output:**  
//    `true`


let anagramsChecker = (str1, str2) => {
  console.log(str1.split("").sort().join("") === str2.split("").sort().join(""));
}

anagramsChecker("abc", "bca"); // Output: true
