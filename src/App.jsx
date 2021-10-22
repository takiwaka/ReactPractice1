import React from "react";

export const App = () => {
  const wrapStyle = {
    backgroundColor: "#c1ffff",
    minHeight: "100vh"
  };

  const titleStyle = {
    margin: "0",
    padding: "50px",
    textAlign: "center"
  };

  return (
    <div style={wrapStyle}>
      <h1 style={titleStyle}>T</h1>

      <div>↑</div>

      <div className="input-area">
        <textarea
          placeholder="つぶ"
          name=""
          id=""
          cols="40"
          rows="5"
        ></textarea>
        <button>つぶ〇く</button>
        <p className="count">140/150</p>
      </div>

      <div>
        <ul>
          <li>
            <img src="" alt="" />
            <div className="delete">×</div>
            <p>tubuyaitanaiyou</p>
            <p>10:30</p>
          </li>
          <li>
            <div className="delete">×</div>
            <p>tubuyaitanaiyou</p>
            <p>10:30</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
