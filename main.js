const Array = require('./array');

function main(){

  const arr = new Array(0);
  // printing array just after initialization
  console.log(`Array after initialization:\n${arr.printArray()}`);
  console.log(`\nArray in memory:\n${arr.printMemory()}`);
  console.log(arr);
  console.log(`-------------------------------------------------------------`);

  // adding 4 elements
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(4);

  console.log(`\nArray after pushing 4 elements:\n${arr.printArray()}`);
  console.log(`\nArray in memory:\n${arr.printMemory()}`);
  console.log(arr);
  console.log(`-------------------------------------------------------------`);

  let valuePopped = arr.pop();
  console.log(`\nArray after poping 1 element:\n${arr.printArray()}`);
  console.log(`\nArray in memory:\n${arr.printMemory()}`);
  console.log(`\nValue Popped = ${valuePopped}`);
  console.log(arr);
  console.log(`-------------------------------------------------------------`);

  arr.remove(1);
  console.log(`\nArray after removing an element from index 1:\n${arr.printArray()}`);
  console.log(`\nArray in memory:\n${arr.printMemory()}`);
  console.log(arr);
  console.log(`-------------------------------------------------------------`);

  arr.insert(1, 11);
  console.log(`\nArray after inserting an element at index 1:\n${arr.printArray()}`);
  console.log(`\nArray in memory:\n${arr.printMemory()}`);
  console.log(arr);
  console.log(`-------------------------------------------------------------`);

  arr.clear();
  console.log(`\nArray after clearing out all the elements:\n${arr.printArray()}`);
  console.log(`\nArray in memory:\n${arr.printMemory()}`);
  console.log(arr);
  console.log(`-------------------------------------------------------------`);

  arr.push("tauhida");
  console.log(`\nArray after inserting an element at index 1:\n${arr.printArray()}`);
  console.log(`\nArray in memory:\n${arr.printMemory()}`);
  console.log(arr);

}

main();
