import React from "react";
export default class Double extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "你真好"
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <input
          type="text"
          style={{ width: "100%" }}
          value={this.state.message}
          onChange={e => this.msgFn(e)}
          ref="msg"
        />
      </div>
    );
  }
  msgFn = e => {
    this.setState({
      message: this.refs.msg.value
    });

    // console.log(e.target.valuye);
    // this.setState({
    //   message: e.target.valuye
    // });
  };
}
