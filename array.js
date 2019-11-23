const Memory = require('./memory');
const memory = new Memory;
class Array{

  constructor(size){
    // Initializing an empty Array
    this.ptr = memory.allocate(size);
    this.length = 0;
    this._capacity = size;
  }

  printMemory(){
    return this.printArray(memory.memory.length);
  }

  /*
    printArray()
      - Time Complexity --> 
        if the array is empty O(1)
        else O(N)
  */
  printArray(size=this.length){

    if(!size)
      return '[]';

    let arr = '[';
    for(let i = 0; i < size; i++){
      let value = memory.get(i) ? memory.get(i) : ""
      arr += "'" + value + "'"
      if(i !== size-1)
        arr += ',';
    }
    arr += ']';
    return arr;
  }

  /*
    push()
      - Time Complexity --> O(1)
  */
  push(value){
    // add an element to the end of the array
    this._checkCapacity();
    memory.set(this.length, value);
    this.length++;
  }

  /*
    _resize()
      - Time Complexity --> O(N) because allocation 
      copies elements to a new memory with more size and
      assigns it back to original memory
  */
  _resize(size){
    // increases the size of the array
    this.ptr = memory.allocate(size);
    this._capacity = size;
  }

  /*
    pop()
      - Time Complexity --> O(1)
  */
  pop(){
    // remove an element from the end of the array and return the value
    const value = this.get(this.length-1);
    memory.set(this.length-1, null);
    this.length--;
    return value;
  }

  /*
    get()
      - Time Complexity --> O(1)
  */
  get(index){
    // return the value of an element at given index
    return memory.get(index);
  }

  /*
    remove()
      - Time Complexity --> O(N)
  */
  remove(index){
    // remove an element from given index
    this._checkIndexOutOfBounds(index);
    memory.copy(index+1, index, this.length);
    this.length--;
  }

  /*
    insert()
      - Time Complexity --> O(N)
  */
  insert(index, value){
    this._checkIndexOutOfBounds(index);
    this._checkCapacity();
    memory.copy(index, index+1, this.length);
    memory.set(index, value);
    this.length++;  
  }

  _checkCapacity(){
    if(this.length >= this._capacity){
      this._resize((this.length+1)*Array.SIZE_RATIO)
    }
  }

  _checkIndexOutOfBounds(index){
    if(index < 0 || index > this.length-1)
      throw new Error `Index out of bounds`;
  }

  /*
    clear()
      - Time Complexity --> O(N)
  */
  clear(){
    // remove all items from the array
    this.ptr = memory.clear();
    this.length = 0;
    this._capacity = 0;
  }

}
Array.SIZE_RATIO = 3;

module.exports = Array;
