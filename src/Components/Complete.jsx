import React from "react";

const Complete = () => {
  const onClickButton = () => alert();
  return (
    <div>
      <h2>完了したTODO</h2>
      <p>TODOその１</p>
      <button onClick={onClickButton}>戻す</button>
      <button>削除</button>
    </div>
  );
};

export default Complete;