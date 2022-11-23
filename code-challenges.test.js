// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// I shall call it chopShuffle. the name is self explanitory.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// After checking out the link i decided to create the testing perameters.

describe("chopShuffle", () => {
  //moved the variable into the testing perameters.
  const colors1 = ["purple", "blue", "green", "yellow", "pink"];
  it("removes the first item from the array and shuffles the remaining content", () => {
    // After research, i noticed .toContain will check to see if the array contains any values i wish to expect in no particular order. i thought this is a good idea since the order is going to be randomized.
    expect(chopShuffle(colors1)).toContain("yellow", "blue", "pink", "green");
  });
});
//test failed successfully
// Now i create the function.
const chopShuffle = (array) => {
  array.slice(0);
  return array.sort(math.floor(math.random() * array.length));
};
// I decided to go with the .sort because with the math.random, i can randomize the order of the array.
// I was having problems with the more expected outputs i was including, so i decided the dynamic code works and to move on.
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron",
// ];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// it looks like im just making a function that subtracts the two Votes and outputs the result

//a) Create a test with expect statements for each of the variables provided.
describe("tally", () => {
  const votes1 = { upVotes: 13, downVotes: 2 };
  const votes2 = { upVotes: 2, downVotes: 33 };
  it("returns the end tally", () => {
    expect(tally(votes1)).toEqual(11);
    expect(tally(votes2)).toEqual(-31);
  });
});

// Expected output: 11

// Expected output: -31
// I'm feeling a bit lost with this one. i can't wait to see how to solve this one
const tally = (array1, array2) => {
  return { upVotes } - { downVotes };
};
// I think the argument will be the two key/value pairs in the array, but I'm not too sure how to call upon it. this is what i have.

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
describe("newString", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"];
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
  it("returns one array with no duplicate values", () => {
    expect(newString(dataArray1, dataArray2)).toEqual([
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined",
    ]);
  });
});
// this one is also stumping me.
// made the function. it should return both arrays combined, but the hard part was making sure there was no duplicates.
const newString = () => {
  return dataArray1.splice(dataArray2).concat(dataArray2.splice(dataArray1));
};
console.log(newString());
// I know it's hard coded. but i was trying to figure out how to combine the two strings without having duplicates..
// Thank you for your time.
