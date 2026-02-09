/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will 
describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing 
options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  let cases = Array.isArray(caze) ? caze : [caze];
  const precedence = [
    ["camel", "pascal", "snake", "kebab", "title"],
    ["vowel", "consonant"],
    ["upper", "lower"]
  ];
  const applyCaze = (str, style) => {
    const words = str.split(" ");
    switch (style) {

      case "camel":
        return words.map((w, i) => i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()).join("");

      case "pascal":
        return words
          .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join("");

      case "snake":
        return words.join("_");

      case "kebab":
        return words.join("-");

      case "title":
        return words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ");

      case "vowel":
        return str.split("").map(ch => "aeiou".includes(ch.toLowerCase()) ? ch.toUpperCase() : ch.toLowerCase()).join("");

      case "consonant":
        return str.split("").map(ch => !"aeiou".includes(ch.toLowerCase()) ? ch.toUpperCase() : ch.toLowerCase()).join("");

      case "upper":
        return str.toUpperCase();

      case "lower":
        return str.toLowerCase();

      default:
        return str;
    }
  };
  let result = input;

  for (const group of precedence) {
    for (const style of group) {
      if (cases.includes(style)) {
       result = applyCaze(result, style);
      }
    }
  }
  return result;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
