import React, { useState } from "react";

const Input = () => {
  const onClickButton = () => {
    setNum(10000);
  };
  const [num, setNum] = useState(0);
  return (
    <div>
      <input type="text" placeholder="TODO入力" />
      <button onClick={onClickButton}>追加</button>
      <p>{num}</p>
    </div>
  );
};

export default Input;
