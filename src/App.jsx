import React, { useState } from "react";
import styled from "styled-components";

export const App = () => {
  const [tweetText, setTweetText] = useState("");
  const [posetedText, setPostedText] = useState(["sample"]);
  const [tweetTime, setTweetTime] = useState(["10:30"]);

  const onClickAdd = () => {
    if (tweetText === "") return;
    const date = new Date();
    const currentTime =
      date.getFullYear() +
      "年" +
      (date.getMonth() + 1) +
      "月" +
      date.getDate() +
      "日" +
      date.getHours() +
      "時" +
      date.getMinutes() +
      "分" +
      date.getSeconds() +
      "秒";

    const newTweet = [...posetedText, tweetText];
    const newTime = [...tweetTime, currentTime];
    console.log(newTime);
    setTweetTime(newTime);

    setPostedText(newTweet);
    setTweetText("");
  };

  const onChangeInputText = (event) => {
    setTweetText(event.target.value);
  };

  const onClickRemove = (index) => {
    const newTimeline = [...posetedText];
    const newTimeStamp = [...tweetTime];
    newTimeline.splice(index, 1);
    newTimeStamp.splice(index, 1);
    setPostedText(newTimeline);
    setTweetTime(newTimeStamp);
  };

  return (
    <WrapStyled>
      <TitleStyled>Twitterのような何か</TitleStyled>
      <InputAreaStyled>
        <InputTextStyled
          placeholder="つぶやく内容"
          value={tweetText}
          onChange={onChangeInputText}
        ></InputTextStyled>
        <p>{tweetText.length}/150</p>
        <InputButtonStyle onClick={onClickAdd}>
          つぶやく
        </InputButtonStyle>
      </InputAreaStyled>

      <TimelineStyled>
        <TimelineListStyled>
          {posetedText.map((text, index) => {
            return (
              <TimelineRowStyled key={text + index}>
                <TimelineDeleteStyled
                  onClick={() => {
                    onClickRemove(index, posetedText);
                  }}
                >
                  ×
                </TimelineDeleteStyled>
                <TimelineTextStyled>
                  {text}
                </TimelineTextStyled>
                <TimelinePostTimeStyled>
                  {tweetTime}
                </TimelinePostTimeStyled>
              </TimelineRowStyled>
            );
          })}
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
  top: 5px;
  right: 5px;
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

const TimelineTextStyled = styled.p`
  padding-top: 15px;
  font-weight: bold;
`;

const TimelinePostTimeStyled = styled.p`
  font-size: 0.7rem;
`;
