/*111 //main.js入口文件
//console.log("ok");
//这两个导入的时候，接收的成员名称 必须这么写
import React from "react"; //创建组件 虚拟DOM元素 生命周期
import ReactDOM from "react-dom"; //把创建好的组件和虚拟DOM元素 放到页面上展示的

// 这是 创建虚拟DOM元素的 API    <h1 title="啊，五环" id="myh1">你比四环多一环</h1>
//  第一个参数： 字符串类型的参数，表示要创建的标签的名称
//  第二个参数：对象类型的参数， 表示 创建的元素的属性节点
//  第三个参数： 子节点
const myh2 = React.createElement("h2", null, "这是一个大大的H2");
const myh1 = React.createElement("div", null, "你真好", myh2);

// 3. 渲染虚拟DOM元素
// 参数1： 表示要渲染的虚拟DOM对象
// 参数2： 指定容器,注意：这里不能直接放 容器元素的Id字符串，需要放一个容器的DOM对象
ReactDOM.render(myh1, document.getElementById("app"));
 */

/*222 //这两个导入的时候，接收的成员名称 必须这么写
import React from "react"; //创建组件 虚拟DOM元素 生命周期
import ReactDOM from "react-dom"; //把创建好的组件和虚拟DOM元素 放到页面上展示的

//创建虚拟DOM元素
//const mydiv= React.createElement('div',{id:'mydiv',title:'div aaa','这是一个div元素'})

//HTML最优秀的标记语言
//注意：在JS文件中，默认不能写这种类示于HTML的标记 否则打包会失败
//可以使用babel来转换这些JS中的标签
//大家注意：这种在JS中，混合写入类示与HTML的语法，叫做JSX语法；复合XML规范的JS
//注意：JSX语法的本质，还是在运行的时候，被转换成了React.createElement形式来执行
const mydiv = (
  <div id="mydiv" title="div aaa">
    这是一个div元素
  </div>
);
//调用 render函数渲染
ReactDOM.render(mydiv, document.getElementById("app"));
 */

//333333 //这两个导入的时候，接收的成员名称 必须这么写
// import React from "react"; //创建组件 虚拟DOM元素 生命周期
// import ReactDOM from "react-dom"; //把创建好的组件和虚拟DOM元素 放到页面上展示的
// let a = 10;
// let str = "你好，中国";
// let boo = false;
// let title = "999";
// const h1 = <h1>红红</h1>;
// const arr = [<h2>这是h2</h2>, <h3>这是h3</h3>];
// const arrStr = ["红", "黄", "路", "走"];
// const nameArr = [];
// arrStr.forEach(item => {
//   const temp = <h5>{item}</h5>;
//   nameArr.push(temp);
// });
// let arrLet = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <div>
//     {/* {a + 2}
//     <hr />
//     {str}
//     <hr />
//     {boo ? "条件为真" : "条件为假"}
//     <hr />
//     <p title={title}>这是P标签</p>
//     {h1}
//     <hr />
//     {arr}
//     <hr />
//     {nameArr}
//     <hr />
//     {arrStr.map((item, index) => {
//       return <h3 key={index}>{item}</h3>;
//     })}
//     <hr />
//     {arrLet.map((item, index) => (
//       <h5 key={index}>{item}</h5>
//     ))} */}
//     <div className="test">123</div>
//   </div>,
//   document.getElementById("app")
// );

//444444 //这两个导入的时候，接收的成员名称 必须这么写
// import React from "react"; //创建组件 虚拟DOM元素 生命周期
// import ReactDOM from "react-dom"; //把创建好的组件和虚拟DOM元素 放到页面上展示的
// //import Swiper from "./components/swipes.jsx";
// //import Swiper from "./components/swipes";
// import Swiper from "@/components/swipes";
// let info = {
//   city: "杭州",
//   age: 8
// };
// let divObj = (
//   <div>
//     {/* 第一种方法 */}
//     {/* <Swiper city={info.city} age={info.age} /> */}
//     {/* 第二种方法 */}
//     <Swiper {...info} />
//   </div>
// );
// ReactDOM.render(divObj, document.getElementById("app"));

//55555 //这两个导入的时候，接收的成员名称 必须这么写
// import React from "react"; //创建组件 虚拟DOM元素 生命周期
// import ReactDOM from "react-dom"; //把创建好的组件和虚拟DOM元素 放到页面上展示的
// //import "@/components/01-class";
// //import "@/components/02-class";
// //import "@/components/03-class";
// // import "@/components/04-class";
// import "@/components/05-class";

// let info = {
//   city: "杭州",
//   region: "下沙"
// };
// import First from "./components/05-class";
// let divObj = (
//   <div>
//     <First {...info} />
//   </div>
// );
// ReactDOM.render(divObj, document.getElementById("app"));

//这两个导入的时候，接收的成员名称 必须这么写
import React from "react"; //创建组件 虚拟DOM元素 生命周期
import ReactDOM from "react-dom";
import "@/components/first";

import First from "./components/first";
let divObj = (
  <div>
    <First />
  </div>
);
ReactDOM.render(divObj, document.getElementById("app"));
