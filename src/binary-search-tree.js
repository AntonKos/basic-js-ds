const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root_1 = null
    this.value = null
    this.isHave = false
}

  root() {
    return this.root_1
  }

  add(data) {
    const newNode = new Node(data)
    if (!this.root_1) {
        this.root_1 = newNode
        return
    }
    let currentNode = this.root_1

    while (currentNode) {
        if (newNode.data < currentNode.data) {
            if (!currentNode.left) {
                currentNode.left = newNode
                return
            }

            currentNode = currentNode.left
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode
                return
            }

            currentNode = currentNode.right
        }
    }
  }
  find(data) {

    this.data = data

    this.preOrder(this.root_1, (node) => {
        if (node.data === this.data) {
            this.isHave = true
            this.findedObj = node
        }
    })
    if (this.isHave) {
        this.isHave = false
        return this.findedObj
    } else {
        return null
    }

}
  

  // find( data ) {

  // }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};