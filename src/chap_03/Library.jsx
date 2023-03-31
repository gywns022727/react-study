import React from "react";
import Book from "./Book";

export default function Libray() {
  return (
    <div>
      <Book name="처음 만난 파있썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리엑트" numOfPage={500} />
    </div>
  );
}
