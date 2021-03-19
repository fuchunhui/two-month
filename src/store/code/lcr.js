/**
 * LRU，Least Recently Used
 * 保证缓存的读写效率，比如读写复杂度都是O(1)
 * 当一条缓存中的数据被读取，将它最近使用的时间更新
 * 当插入一条新数据的时候，弹出更新时间最远的数据
 * 
 * 约定：越靠近链表头部的数据越旧，越靠近链表尾部的数据越新。
 * 
 * 使用HashMap 和 双向链表解决这个问题。
 */

// 定义双向链表

// eslint-disable-next-line
const {LinkedList} = require('./linkedlist-double.js');

class LRU {
  capacity = 0;
  cache = null;
  linked_list = null;
  constructor(capacity = 1000) {
    this.capacity = capacity;
    this.cache = new Map(); // 是否Map切换为Object
    this.linked_list = new LinkedList();
  }

  // 获取cache中的key，相当于使用使用
  get(key) {
    if (!this.cache.has(key)) {
      return null;
    }
    // 更新链表中元素的位置
    this.put_recently(key);
    return this.cache.get(key);
  }

  put_recently(key) {
    const node = this.cache.get(key);
    this.linked_list.remove(node);
    // this.linked_list.insert(node);
  }
}

const lru = new LRU();
console.log('当前初始化内容为：', lru);







console.log('-------------------------------------');
// const fruits = new LinkedList();
// fruits.insert('apple', 'head');
// fruits.insert('group', 'apple');
// fruits.insert('strawberry', 'group');
// fruits.insert('litchi', 'apple');
// fruits.display();
// fruits.remove('orange');
// fruits.remove('apple');
// fruits.display();