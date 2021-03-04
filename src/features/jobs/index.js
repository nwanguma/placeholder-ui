import React from "react";
import styled from "styled-components";

import share from "../../assets/images/share.svg";
import logo from "../../assets/images/d-company.svg";

const Jobs = () => {
  return (
    <Wrapper>
      <Heading>Jobs</Heading>
      <Content>
        <CardContainer>
          <ContentItem>
            <Card>
              <CardImageContainer>
                <CardImage src={logo} alt=""></CardImage>
              </CardImageContainer>
              <CardText>
                <CardTitle>Drilla Corp.</CardTitle>
                <CardDesignation>Frontend Developer</CardDesignation>
                <CardLocation>Lagos</CardLocation>
              </CardText>
              <CardActions>
                <CardAction>View</CardAction>
                <CardAction>Apply</CardAction>
              </CardActions>
              <SharePosting>
                <ShareIcon src={share} alt=""></ShareIcon>
                <ShareText>Share</ShareText>
              </SharePosting>
            </Card>
            <ContentItemMain>Lorem ipsum dolor si amet</ContentItemMain>
          </ContentItem>
        </CardContainer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 4rem;
`;

const Heading = styled.h2`
  margin-bottom: 4rem;
`;

const Content = styled.div``;

const CardContainer = styled.div`
  height: max-content;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background: #fff;
`;

const ContentItem = styled.div`
  height: max-content;
  transition: 0.5s all;
`;

const Card = styled.div`
  height: 11rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: relative;
`;

const CardImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  margin-right: 5rem;
`;

const CardImage = styled.img`
  width: 100;
  height: 100;
`;

const CardText = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3``;

const CardDesignation = styled.p`
  margin: 1rem 0;
`;

const CardLocation = styled.p``;

const CardActions = styled.div`
  flex: 0 0 18rem;
  display: flex;
  justify-content: space-between;
`;

const CardAction = styled.div`
  border: 1px solid #c4c4c4;
  width: 8rem;
  height: 2.7rem;
  line-height: 2.6rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.4rem;
`;

const SharePosting = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  &:hover > span {
    display: initial;
  }
`;

const ShareIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const ShareText = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  width: max-content;
  padding: 0.4rem 0.9rem;
  background: #868591;
  color: #fff;
  display: none;
  position: relative;
  bottom: 1.6rem;
  left: 2.9rem;
`;

const ContentItemMain = styled.div`
  height: 9rem;
  background: orange;
  width: 100%;
`;

export default Jobs;
