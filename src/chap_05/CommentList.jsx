import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김효준",
    comment: "안녕하세요, 효준입니다.",
  },
  {
    name: "김으앙",
    comment: "안녕하세요, 으앙입니다.",
  },
  {
    name: "김꿀벌",
    comment: "안녕하세요, 꿀벌입니다.",
  },
];

export default function commentList() {
  return (
    <div>
      {comments.map((comments) => {
        return <Comment name={comments.name} comment={comments.comment} />;
      })}
    </div>
  );
}
