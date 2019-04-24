import React from "react";
import Test from "@/components/test";
import first from "@/styles/first.scss";

// 如果在引用某个包的时候，这个包被安装到了 node_modules 目录中，
// 则，可以省略 node_modules 这一层目录，直接以包名开始引入自己的 模块 或 样式表
// 自己规定： 第三方的 样式表，都是以 .css 结尾， 这样，我们不要为 普通的 .css 启用模块化
//           自己的样式表，都要以 .scss 或 .less 结尾， 只为 .scss 或 .less 文件启用模块化
//import bootcss from "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

export default class First extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "杭州",
      CommentList: [
        {
          id: 1,
          user: "张三",
          content: "哈哈，沙发"
        },

        {
          id: 2,
          user: "李四",
          content: "哈哈，板凳"
        },

        {
          id: 3,
          user: "王五",
          content: "哈哈，凉席"
        },

        {
          id: 4,
          user: "赵六",
          content: "哈哈，砖头"
        },

        {
          id: 5,
          user: "田七",
          content: "哈哈，楼下山炮"
        }
      ]
    };
  }

  //render函数的作用，是渲染当前组件所对应的虚拟DOM元素
  render() {
    return (
      <div>
        <h2 className="title">我是列表---{this.state.city}</h2>
        {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮</button> */}

        <button className="btn btn-primary" onClick={() => this.testFn()}>
          按钮
        </button>

        {/* <button className="btn btn-primary" onClick={this.testFn()}>
          按钮
        </button> */}
        {/* <button className="btn btn-primary" onClick={this.testFn}>
          按钮
        </button> */}

        {this.state.CommentList.map(item => (
          <Test {...item} key={item.id} />
        ))}
      </div>
    );
  }
  //箭头函数在定义的时候就确定了this指向
  testFn = () => {
    console.log(this);
    console.log(this.state.CommentList);
    //在React中，如果想要修改 state 中的数据，推荐使用 this.setState({ })
    this.setState(
      {
        city: "杭州你好"
      },
      function() {
        console.log(this.state.city); //杭州你好
      }
    );
    //console.log(this.state.city); //杭州
  };
}
