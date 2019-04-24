import React from "react";
export default function Swiper(props) {
  return (
    <div>
      <p>图片1</p>
      <p>图片2</p>
      <p>
        图片3--{props.city}--{props.age}
      </p>
    </div>
  );
}
