import React from "react";
import styled from "styled-components";

export const App = () => {
  return (
    <WrapStyled>
      <TitleStyled>Twitterのような何か</TitleStyled>
      <InputAreaStyled>
        <InputTextStyled
          placeholder="つぶやく内容"
          name=""
          id=""
          cols="100%"
          rows=""
        ></InputTextStyled>
        <p className="count">140/150</p>
        <InputButtonStyle>つぶやく</InputButtonStyle>
      </InputAreaStyled>

      <div>
        <ul>
          <li>
            <img src="" alt="" />
            <div style={{ backgroundColor: "red" }}>×</div>
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
    </WrapStyled>
  );
};

const WrapStyled = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;
  padding: 100px 0;
`;

const TitleStyled = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const InputAreaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 500px;
  margin: 50px auto;
  background-color: #ffd146;
  border-radius: 10px;
`;

const InputTextStyled = styled.textarea`
  margin: 10px;
  border-radius: 10px;
  resize: none;
  width: 100%;
  height: 100px;
`;

const InputButtonStyle = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  background-color: #acbc65;
  border: none;
  :hover {
    background-color: #fbac33;
  }
`;
