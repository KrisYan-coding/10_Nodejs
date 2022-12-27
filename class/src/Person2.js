class Person {
	constructor(name = "naname", age = 0) {
		this.name = name;
		this.age = age;
	}

	toString() {
		const { name, age } = this;
		return JSON.stringify({ name, age });
	}
}

const f2 = a => a * a;
const f3 = a => a * a * a;

console.log(`這是在 Person2 裡面`);

module.exports = { Person, f2 };
// --匯出object

console.log(`這也是在 Person2 裡面`);
