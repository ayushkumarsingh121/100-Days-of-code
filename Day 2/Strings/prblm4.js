// 4. **Given a string `str = "aabbbccdde"`, write a program to count and print the number of distinct characters in the string.**  
//    **Output:**  
//    `5`

let countDistinctCharacters = (str) => {
  // Convert string to a Set to remove duplicates
  let distinctChars = new Set(str);
  
  // The size of the Set gives the number of distinct characters
  console.log(distinctChars.size);
};

countDistinctCharacters("aabbbccdde"); // Output: 5
