// 随机填充数组，1-100
// 找到缺失项
// 1~100共一百个自然数，放入一个99个元素的数组a[99], 找出没有放入的那个元素

// 随机生成长度是10的数组
const start = new Date().getTime();
const MAX = 100; // 10

const init = max => {
  const source = [];
  for (let i = 0; i < max; i++) {
    source.push(i + 1);
  }
  return source;
};
const source = init(MAX);

console.log('原始数组内容：', source);

const localSource = [...source];
let loopNum = MAX;
while (loopNum > 1) {
  const targetIndex = Math.floor(Math.random() * loopNum);
  localSource.splice(targetIndex, 1);
  loopNum--;
}
console.log('循环处理后，剩余元素为：', localSource);
const end = new Date().getTime();
console.log(`随机填充数组： ${end - start}ms`);

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

