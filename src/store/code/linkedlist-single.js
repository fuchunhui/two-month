/**
 * 链表写法一，单向链表
 */

function Node(element) {
  this.element = element;
  this.next = null;
}

// 插入到item之后，如insert('newName', 'old')
function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currNode = this.find(item);
  newNode.next = currNode.next;
  currNode.next = newNode;
}

// 查找给定节点，会不会比较慢，有没有更佳快捷的方式？
function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function findPrev(item) {
  let currNode = this.head;
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  let prevNode = this.findPrev(item);
  prevNode.next = prevNode.next.next;
  prevNode = null;
}

// 显示链表元素
function display() {
  let currNode = this.head;
  while (currNode !== null) {
    if (currNode.element !== 'head') {
      console.log(currNode.element);
    }
    currNode = currNode.next;
  }
}

function LinkedList() {
  this.head = new Node('head');
  this.insert = insert;
  this.find = find;
  this.findPrev = findPrev;
  this.remove = remove;
  this.display = display;
}

const fruits = new LinkedList();
fruits.insert('apple', 'head');
fruits.insert('banana', 'apple');
fruits.insert('orange', 'banana');
fruits.insert('peach', 'banana');
fruits.insert('group', 'apple');
fruits.insert('strawberry', 'group');
fruits.insert('litchi', 'banana');
fruits.display();
const findElement = 'orange';
const prevNode = fruits.findPrev(findElement);
console.log('测试remove----------------------------');
fruits.remove(prevNode.element);
fruits.remove('apple');
fruits.display();
