/**
 * 链表写法二，双向链表
 */

 // https://www.jianshu.com/p/f254ec665e57
function Node(element) {
  this.element = element;
  this.previous = null;
  this.next = null;
}

// 插入到item之后
function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currNode = this.find(item);
  newNode.next = currNode.next;
  newNode.previous = currNode;
  currNode.next = newNode;
}

// 同样存在问题，当链表数据很多的时候，这样的查找效率太慢了，如何优化，是否有更好的数据结构，解决效率问题？
// TODO
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



// 显示链表元素
function display() {
  let currNode = this.head;
  while (currNode && currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}



function remove(item) {
  let prevNode = this.findPrev(item);
  console.log(`移除的item：${item}, 找到的prevNode为${prevNode.element}`);
  prevNode.next = prevNode.next.next;
  item.next = null; // 是否删除item，仅仅置空就可以吗？
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
console.log(`${findElement}的prevNode是：`, {...prevNode});
console.log('分界线----------', prevNode.element);
fruits.remove(prevNode.element);
fruits.remove('apple');
fruits.display();
