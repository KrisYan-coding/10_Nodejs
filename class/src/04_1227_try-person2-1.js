const Person2 = require("./Person2"); // 檔名前要加./，附檔名可省略
// --匯入object
// --Person2.js 會先執行

const p1 = new Person2.Person("David", 25);

console.log(p1.toString());
console.log(Person2.f2(5));
// console.log(Person2.f3(5)); // 在 Person2.js 沒有匯出f3，所以不能用
