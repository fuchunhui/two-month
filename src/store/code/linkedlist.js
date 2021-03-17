/**
 * 链表写法一
 */

function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrev = findPrev;
  this.display = display;
}

// 查找给定节点，会不会比较慢，有没有更佳快捷的方式？
function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

// 插入到item之后
function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currNode = this.find(item); // 如何解决插入到最后的问题，如何解决不指定节点，默认插入到最后的问题
  newNode.next = currNode.next;
  currNode.next = newNode;
}

// 显示链表元素
function display() {
  let currNode = this.head;
  while (currNode && currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
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
  console.log(`移除的item：${item}, 找到的prevNode为${prevNode.element}`);
  prevNode.next = prevNode.next.next;
  item.next = null; // 是否删除item，仅仅置空就可以吗？
}

const fruits = new LList();
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
console.log(`${findElement}的prevNode是：`, {...prevNode});
console.log('分界线----------', prevNode.element);
fruits.remove(prevNode.element);
fruits.remove('apple');
fruits.display();

