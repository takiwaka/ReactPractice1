import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Components/Input";
import { Timeline } from "./Components/Timeline";

export const App = () => {
  const [tweetText, setTweetText] = useState("");
  const [posetedText, setPostedText] = useState(["sample"]);
  const [tweetTime, setTweetTime] = useState([
    "2021年11月11日11時11分11秒"
  ]);

  const tweetCountJudge =
    tweetText.length === 0 || tweetText.length > 150;

  const onClickAdd = () => {
    if (tweetCountJudge) return;
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

    const newTweet = [tweetText, ...posetedText];
    const newTime = [currentTime, ...tweetTime];
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
      <Input
        tweetText={tweetText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
        judge={tweetCountJudge}
      />

      <Timeline
        post={posetedText}
        onClick={onClickRemove}
        tweetTime={tweetTime}
      />
    </WrapStyled>
  );
};

const WrapStyled = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;
  padding: 100px 0;
`;
