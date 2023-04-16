const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    return this.root;
  }

  add(data) {
    const newNode= new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {

  }

  has(data) {
    return this.searchNode(this.root, data) !== null;
  }

  find(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {

  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  min() {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.left !== null) {
    current = current.left;
  }
  return current.data;
  }

  max() {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.right !== null) {
    current = current.right;
  }
  return current.data; 
  }
}

module.exports = {
  BinarySearchTree
};