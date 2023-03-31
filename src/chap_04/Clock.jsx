import React from "react";

export default function Clock() {
  return (
    <div>
      <h1>시계는 아침부터 똑딱똑딱</h1>
      <h2>현재 시간:{new Date().toLocaleString()}</h2>
    </div>
  );
}
