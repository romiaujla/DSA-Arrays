class Memory{
  constructor(size){
    // Initializing the memory array
    this.memory = new Array(size);
  }

  allocate(size){
    // set size for the array in memory and increase size once
    // the array is full
    if(size > this.memory.length){
      const newMemory = new Array(size);
      for(let i = 0; i < this.memory.length; i++)
        newMemory[i] = this.memory[i]

      this.memory = newMemory;
    }

    return 0;
  }

  get(ptr){
    // return the value in memory at a given pointer
    this._checkIndexOutOfBounds(ptr)
    return this.memory[ptr];
  }

  set(ptr, value){
    // set the value in memory at a given pointer
    this._checkIndexOutOfBounds(ptr);
    this.memory[ptr] = value;
  }

  copy(fromIdx, toIdx, size){
    // copy the array and shift it as required 
    if(fromIdx === toIdx){
      return;
    }

    if(fromIdx > toIdx){
      // Iterate forward to insert a value
      for(let i = 0; i < size; i++){
        this.set(toIdx+i, this.get(fromIdx+i));
      }
    }else {
      // Iterate backward to delete a value
      for (let i = size-1; i >=0; i--){
        this.set(toIdx+i, this.get(fromIdx+i))
      }
    }
  }

  clear(){
    // clear data from the memory
    this.memory = new Array(0);
    return 0;
  }

  // checks for pointer to be in boundaries
  // else throw an error
  _checkIndexOutOfBounds(ptr){
    if(ptr < 0 || ptr > this.memory.length)
      throw new Error `Index out of bounds`;
  }
}

module.exports = Memory;
