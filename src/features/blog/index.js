import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 4rem;
`;

const Heading = styled.h2`
  margin-bottom: 4rem;
`;

const Card = styled.div`
  margin-bottom: 3rem;
  height: 13rem;
  border-radius: 0.5rem;
  /* box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%); */
  border: 1px solid #e0dede;
`;

const Content = styled.div``;

const Jobs = () => {
  return (
    <Wrapper>
      <Heading>Jobs</Heading>
      <Content>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Content>
    </Wrapper>
  );
};

export default Jobs;
