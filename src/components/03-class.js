//这是父类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//子类继承父类（extends）

//子类
class American extends Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
}

const a1 = new American("JACK", 20);
console.log(a1);

//子类
class Chinese extends Person {
  // constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  // }
}
const c1 = new Chinese("张三", 26);
console.log(c1);
