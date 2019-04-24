import React from "react";
import test from "@/styles/test.scss";
//console.log(test);
export default function Test(props) {
  return (
    <div className={test.itemStyle}>
      <h1 className={test.user}>评论人：{props.user}</h1>
      <p className={test.content}>评论内容：{props.content}</p>
    </div>
  );
}
