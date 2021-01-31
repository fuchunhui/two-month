// 题目：假设现在有一个数组，长度是99位，元素是1-100里的值，数组是无序的也是不重复的，怎么快速的去找到这个数组和1-100相比较缺失的那个元素？

// 随机生成数组，长度自定义。
// 找到缺失项
// 多种方法

const createArr = (max = 100) => {
  const source = [];
  for (let i = 0; i < max; i++) {
    source.push(i + 1);
  }
  return source;
};

const createRandomArr = (length, max) => {
  const source = createArr(max);
  const target = [];
  let loopNum = max;
  while (loopNum > max - length) {
    const targetIndex = Math.floor(Math.random() * loopNum);
    const delItem = source.splice(targetIndex, 1);
    target.push(delItem[0]);
    loopNum--;
  }
  return target;
};

console.time('生成初始数组');
const MAX = 100;
const source = createArr(MAX);
console.log(`生成长度为${MAX}的原始数组：`, source);
console.timeEnd('生成初始数组');

console.time('生成随机数组');
const target = createRandomArr(MAX - 1, MAX);
console.log(`生成长度为${MAX}的随机数组为：`, target);
console.timeEnd('生成随机数组');

// console.log('循环处理后，剩余元素为：', localSource);
// console.log(`随机填充数组： ${end - start}ms`);
// console.timeEnd('start');

// 有人说是使用求和的方式，然后用100个数的和减去99个数的和，差值就是未存储的那个
// 这个思路有意思，但是不能够解决，有多个元素未放入数组中的场景
const findNum = () => {
  let sum = 0;
  for (let i = 1; i <= MAX; i++) {
    sum = sum + i;
  }
  const randomTotal = source.reduce((a, b) => a + b, 0);
  console.log(sum, randomTotal);
  return sum - randomTotal;
};

const n1 = findNum();
console.log('方法1：', n1);


