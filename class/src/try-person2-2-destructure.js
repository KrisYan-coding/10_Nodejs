
const { Person, f2 } = require("./Person2"); // 檔名前要加./，附檔名可省略
// --匯入object
// --Person2.js 會先執行

const p1 = new Person("David", 25);

console.log(p1.toString());
console.log(f2(5));

