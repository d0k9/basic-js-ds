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
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.searchNode(this.root, data) !== null;
  }

  find(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    } 
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data){
      node.left = this.removeNode (node.left, data);
      return node;
    } else if (data > node.data){
      node.right = this.removeNode (node.right, data);
      return node;
    } else if (node.left === null) {
        return node.right;
    } else if (node.right === null) {
      return node.left;
    }
    const minValue = this.findMinValue(node.right);
    node.data = minValue;
    node.right = this.removeNode(node.right, minValue);
    return node;
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