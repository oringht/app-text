//这是父类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    //console.log("大家好");
    console.log(this.name);
  }
}

//子类继承父类（extends）

//子类
class American extends Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  constructor(name, age) {
    //调用了super()之后，a1实例的name和age都变成undefined
    super(name, age);
  }
}

const a1 = new American("JACK", 20);
console.log(a1);
a1.sayHello();

//子类
class Chinese extends Person {
  // constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  // }
  constructor(name, age, IDNumber) {
    //调用了super()之后，a1实例的name和age都变成undefined
    super(name, age);
    this.IDNumber = IDNumber;
  }
}
const c1 = new Chinese("张三", 26, "4127**************");
console.log(c1);
c1.sayHello();
