let s1 = '2';
let s2 = 'z';
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  }
};

console.log(s1++);
console.log(s2++);
console.log(b++);
console.log(f--, f);
console.log(o--, o);
