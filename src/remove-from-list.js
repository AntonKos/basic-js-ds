const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  function removeAt(position) {
   
    let current = head;

    if (position === 0) {
      head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }
  }

  function remove(k) {
    const array = indexesOf(k).sort((a, b) => b - a);
    array.forEach((el)=>{
      removeAt(el);
    })
    return head;
  }

  function indexesOf(element) {
    let current = head;
    let index = 0;
    const arrayOfIndexes = [];

    while (current) {
      if (current.value === element) {
        arrayOfIndexes.push(index);
      }

      current = current.next;
      index++;
    }
    
    if (arrayOfIndexes.length) {
      return arrayOfIndexes;
    }
    else {
      return -1;
    }
  }

  return remove(k);
}

module.exports = {
  removeKFromList
};




//exp

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
// }
// }

// function convertArrayToList(arr) {
// return arr.reverse().reduce((acc, cur) => {
//   if (acc) {
//     const node = new ListNode(cur);
//     node.next = acc;
//     return node;
//   }

//   return new ListNode(cur);
// }, null);
// }



// function removeKFromList(l, k) {
// let head = l;

// function removeAt(position) {
 
//   let current = head;

//   if (position === 0) {
//     head = current.next;
//   } else {
//     let prev = null;
//     let index = 0;

//     while (index < position) {
//       prev = current;
//       current = current.next;
//       index++;
//     }

//     prev.next = current.next;
//   }
// }

// function remove(k) {
//   const array = indexesOf(k).sort((a, b) => b - a);
//   array.forEach((el)=>{
//     removeAt(el);
//   })
//   return head;
// }

// function indexesOf(element) {
//   let current = head;
//   let index = 0;
//   const arrayOfIndexes = [];

//   while (current) {
//     if (current.value === element) {
//       arrayOfIndexes.push(index);
//     }

//     current = current.next;
//     index++;
//   }
  
//   if (arrayOfIndexes.length) {
//     return arrayOfIndexes;
//   }
//   else {
//     return -1;
//   }
// }

// return remove(k);
// }

// const list = convertArrayToList([3, 1, 2, 3, 4, 5]);
// removeKFromList(list, 3)