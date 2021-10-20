/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";

const Input = () => {
  const [num, setNum] = useState(0);
  const [faceShow, setFaceshow] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwich = () => {
    setFaceshow(!faceShow);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceshow(true);
      } else {
        faceShow && setFaceshow(false);
      }
    }
  }, [num]);

  return (
    <div>
      <input type="text" placeholder="TODO入力" />
      <button onClick={onClickButton}>追加</button>
      <button onClick={onClickSwich}>ON/OFF</button>
      <p>{num}</p>
      {faceShow && <p>( ^ω^ )</p>}
    </div>
  );
};

export default Input;
