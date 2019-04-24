function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.info = "aaa";

const p1 = new Person("王多多", 18);
//通过new出来的实例，访问到的属性，叫做实例属性
console.log(p1);
//console.log(p1.name);
//console.log(p1.age);
//静态属性：通过构造函数，直接访问到的属性
console.log(Person.info);
//----------分隔线------
console.log("---------------");
class Animal {
  //在class内部，通过static修饰的属性，就是静态属性
  static info = "eee";
  //这是类中构造器 作用：每当new这个类的时候，必须会优先执行构造中的代码
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const a1 = new Animal("大黄", 3);
console.log(a1);
//console.log(a1.name);
//console.log(a1.age);
console.log(Animal.info);
