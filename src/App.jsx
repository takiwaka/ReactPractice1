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

      <TimelineStyled>
        <TimelineListStyled>
          <TimelineRowStyled>
            <img src="" alt="" />
            <TimelineDeleteStyled>×</TimelineDeleteStyled>
            <TimelineTextStyled>
              ごごごごごごご
            </TimelineTextStyled>
            <TimelinePostTimeStyled>
              10:30
            </TimelinePostTimeStyled>
          </TimelineRowStyled>
        </TimelineListStyled>
      </TimelineStyled>
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

const TimelineStyled = styled.div`
  max-width: 500px;
  background-color: #98d5cb;
  border-radius: 10px;
  margin: 30px auto;
  padding: 10px;
  color: white;
`;

const TimelineListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

const TimelineRowStyled = styled.li`
  position: relative;
  background-color: teal;
`;

const TimelineDeleteStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
`;

const TimelineTextStyled = styled.p`
  font-weight: bold;
`;

const TimelinePostTimeStyled = styled.p`
  font-size: 0.7rem;
`;
