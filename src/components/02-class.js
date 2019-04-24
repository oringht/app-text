function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.info = "aaa";

Person.prototype.say = function() {
  console.log("这是Person的实例方法");
};

Person.show = function() {
  console.log("这是Person的静态show方法");
};

const p1 = new Person("王多多", 18);
//通过new出来的实例，访问到的属性，叫做实例属性
console.log(p1);
//console.log(p1.name);
//console.log(p1.age);
//静态属性：通过构造函数，直接访问到的属性
console.log(Person.info);
p1.say();
Person.show();
//----------分隔线------
console.log("---------------");
//注意：在class的{}区间内，只能写构造函数，静态方法和静态属性，实例方法
//注意：class关键字内部，还是用原来的配方实现的
class Animal {
  //这是类中构造器 作用：每当new这个类的时候，必须会优先执行构造中的代码
  constructor(name, age) {
    //实例属性
    this.name = name;
    this.age = age;
  }

  //在class内部，通过static修饰的属性，就是静态属性
  static info = "eee";

  //实例方法
  jiao() {
    console.log("动物的实例方法");
  }

  //类的静态方法
  static show() {
    console.log("这是Animal的静态方法");
  }
}
const a1 = new Animal("大黄", 3);
console.log(a1);
//console.log(a1.name);
//console.log(a1.age);
console.log(Animal.info);
a1.jiao();
Animal.show();
