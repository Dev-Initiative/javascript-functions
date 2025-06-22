//Reversing a String

//  Using split(), reverse(), and join()
function reverseString1(str) {
  return str.split("").reverse().join("");
}

//  Using the spread operator
function reverseString2(str) {
  return [...str].reverse().join("");
}

//  Using a for loop
function reverseString3(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//  Using reduce()
function reverseString4(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

const userInput = "Hello World!";
console.log(reverseString1(userInput));
console.log(reverseString2(userInput));
console.log(reverseString3(userInput));
console.log(reverseString4(userInput));

// Capitlaizing the first letter of each word

const input = "What is yOuR NamE";

const handleCapitalize = (string) => {
  const words = string.split(" ");

  const capitalizedWords = words.map((word) => {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
  });

  const result = capitalizedWords.join(" ");
  console.log(result); // "What Is Your Name"
  return result;
};

handleCapitalize(input);

const string = "WHaT IS YouR nAME";

const handleCapital = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

console.log(handleCapital(input));
