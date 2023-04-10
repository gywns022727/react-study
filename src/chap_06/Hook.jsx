import React, { useState, useEffect, useRef } from "react";

export default function Hook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const input = useRef(null);
  const click = () => {
    input.current.focus();
  };

  return (
    <div>
      <p>Count {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>

      <input type="text" ref={input} />
      <button onClick={click}>Focus</button>
    </div>
  );
}

// const [변수명, 함수명] = useState(초깃값);

//   useEffect(함수); 값이 변경될 때 마다 실행
//   useEffect(함수, []); mount amount될때 마다 실행
//   useEffect(함수, [1, 2, 3]);[] 안에 값이 하나라도 변경되면 실행

// useMemo(() => 함수, 의존성 배열);
// useCallback(함수, 의존성 배열);

// const 함수명 =  useRef(초깃값);
