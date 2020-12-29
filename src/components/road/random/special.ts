// 随机填充数组，1-100
// 找到缺失项
// 1~100共一百个自然数，放入一个99个元素的数组a[99], 找出没有放入的那个元素

// 随机生成长度是10的数组
const start = new Date().getTime();
const MAX = 100000; // 10

// 递归 填充
for (let i = 0; i < MAX; i++) {
    // console.log(Math.ceil(Math.random() * MAX));
}

// let target = [];
const total = [];
// 初始化
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
console.log(`${end - start}ms`);
