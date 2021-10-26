import React from "react";
import styled from "styled-components";

export const Timeline = (props) => {
  const { post, onClick, tweetTime } = props;

  return (
    <TimelineStyled>
      <TimelineListStyled>
        {post.map((text, index) => {
          return (
            <TimelineRowStyled key={text + index}>
              <TimelineDeleteStyled
                onClick={() => {
                  onClick(index, post);
                }}
              >
                ×
              </TimelineDeleteStyled>
              <TimelineTextStyled>
                {text}
              </TimelineTextStyled>
              <TimelinePostTimeStyled>
                {tweetTime[index]}
              </TimelinePostTimeStyled>
            </TimelineRowStyled>
          );
        })}
      </TimelineListStyled>
    </TimelineStyled>
  );
};

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
