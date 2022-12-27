
const Person2 = require("./Person2"); // 檔名前要加./，附檔名可省略
const { Person, f2 } = require("./Person2"); // 檔名前要加./，附檔名可省略
// --Person2.js 不會執行 2 次，第二次以後會直接把 require("./Person2") ，指定給新的變數

const p1 = new Person("David", 25);

console.log(p1.toString());
console.log(f2(5));

