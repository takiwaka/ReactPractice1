import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  const { tweetText, onChange, onClick, judge } = props;

  return (
    <>
      <TitleStyled>Twitterのような何か</TitleStyled>
      <InputAreaStyled>
        <InputTextStyled
          placeholder="つぶやく内容"
          value={tweetText}
          onChange={onChange}
        ></InputTextStyled>
        <p>
          <span style={{ color: judge && "red" }}>
            {tweetText.length}
          </span>
          /150
        </p>
        <InputButtonStyle onClick={onClick}>
          つぶやく
        </InputButtonStyle>
      </InputAreaStyled>
    </>
  );
};

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
  margin: 50px auto 0;
  padding: 10px;
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
  border-bottom: 2px solid;
  :hover {
    background-color: #fbac33;
  }
  :active {
    transform: translateY(2px);
    border: none;
  }
`;
