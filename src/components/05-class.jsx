import React from "react";
export default class First extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "胖"
    };
  }
  //render函数的作用，是渲染当前组件所对应的虚拟DOM元素
  render() {
    this.state.name = "厦门";
    return (
      <div>
        <h2>这是First组件</h2>
        <p>{this.props.city}</p>
        <p>{this.props.region}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
