const { URLify } = require(`./URLify`);
const { filterArray } = require(`./Filter`);
const { maxSum } = require('./MaxSum');
const { mergeArrays } = require('./MergeArrays');
const { removeCharacters } = require('./RemoveCharacters');
const { products } = require('./Products');
const { twoDArray } = require('./2DArray');

function main() {

  console.log(`\n\nURLify SOLUTION`);
  console.log(`---------------------------------------------`);
  console.log(URLify(`tauhida parveen`));
  console.log(URLify(`www.thinkful.com /tauh ida parv een`));
  console.log(`---------------------------------------------\n\n`);

  console.log(`FILTERED ARRAY SOLUTION`)
  console.log(`---------------------------------------------`);
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(`Initial Array`, arr);
  console.log(`Filtered Array`, filterArray(arr));
  console.log(`---------------------------------------------\n\n`);

  console.log(`MAXSUM SOLUTION`)
  console.log(`---------------------------------------------`);
  arr = [4, 6, -3, 5, -2, 1];
  console.log(`Initial Array`, arr);
  console.log(`MaxSum: `, maxSum(arr));
  console.log(`---------------------------------------------\n\n`);

  console.log(`MERGE ARRAYS SOLUTION`)
  console.log(`---------------------------------------------`);
  const sortedArr1 = [1, 3, 6, 8, 11];
  const sortedArr2 = [2, 3, 5, 8, 9, 10];
  console.log(`First Sorted Array`, sortedArr1);
  console.log(`Second Sorted Array`, sortedArr2);
  const mergedArr = mergeArrays(sortedArr1, sortedArr2);
  console.log(`Merged Array`, mergedArr);
  console.log(`---------------------------------------------\n\n`);

  console.log(`REMOVE CHARACTERS`);
  console.log(`---------------------------------------------`);
  let str = 'Battle of the Vowels: Hawaii vs. Grozny'
  console.log(`Input: '${str}'`);
  console.log(`Output: '${removeCharacters(str, 'aeiou')}'`);
  console.log(`---------------------------------------------\n\n`);

  console.log(`PRODUCTS SOLUTION`);
  console.log(`---------------------------------------------`);
  arr = [1, 3, 9, 4];
  console.log(`Input: `, arr);
  console.log(`Output: `, products(arr));
  console.log(`---------------------------------------------\n\n`);

  console.log(`2DArray SOLUTION`);
  console.log(`---------------------------------------------`);
  arr = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];
  console.log(`Input:\n`, arr);
  console.log(`Output:\n`, twoDArray(arr));
}

main();
