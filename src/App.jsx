import React from "react";

export const App = () => {
  const wrapStyle = {
    backgroundColor: "#c1ffff",
    minHeight: "100vh",
    padding: "100px 0"
  };

  const titleStyle = {
    margin: "0",
    padding: "0",
    textAlign: "center"
  };

  return (
    <div style={wrapStyle}>
      <h1 style={titleStyle}>Twitterのような何か</h1>

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
