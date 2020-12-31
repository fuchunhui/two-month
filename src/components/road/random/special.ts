// 随机填充数组，1-100
// 找到缺失项
// 1~100共一百个自然数，放入一个99个元素的数组a[99], 找出没有放入的那个元素

// 随机生成长度是10的数组
const start = new Date().getTime();
const MAX = 100; // 10

const total = [];
for (let i = 0; i < MAX; i++) {
    total.push(i + 1);
}
console.log(total);
let loopNum = MAX;
while (loopNum > 1) {
    const targetIndex = Math.floor(Math.random() * loopNum);
    total.splice(targetIndex, 1);
    loopNum--;
}
console.log(total);
const end = new Date().getTime();
console.log(`随机填充数组： ${end - start}ms`);

// 有人说是使用求和的方式，然后用100个数的和减去99个数的和，差值就是未存储的那个
// 这个思路有意思，但是不能够解决，有多个元素未放入数组中的场景
const findNum = () => {
    // TODO
    return 0;
};

const n1 = findNum();
console.log('方法1：', n1);

