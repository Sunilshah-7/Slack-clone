import React from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
function Chat() {
  return (
    <Container>
      <ChatHeader>
        <ChatChannelInfo>
          <p>#clever</p>
          <StarBorderIcon />
        </ChatChannelInfo>

        <ChatDetails>
          <Details>Details</Details>
          <InfoIcon />
        </ChatDetails>
      </ChatHeader>
      <ChatChannelExp>
        Company-wide announcements and work-based matters
      </ChatChannelExp>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  z-index: 10;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ChatChannelInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: bold;
  }
`;

const ChatDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
`;

const Details = styled.div``;

const ChatChannelExp = styled.div`
  font-size: 16px;
  margin-left: 8px;
`;
