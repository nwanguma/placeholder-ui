import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import { LIST_JOBS } from "../../utils/constants";

import Accordion from "../../components/common/Accordion";
import AccordionItem from "../../components/common/AccordionItem";
import Card from "../../components/common/Card";

import share from "../../assets/images/share.svg";
import logo from "../../assets/images/d-company.svg";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled;

    (async function fetchJobs() {
      try {
        const res = await axios.get(LIST_JOBS);
        const jobs = res.data.data;

        setJobs(jobs);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <Wrapper>
      <Heading>Jobs</Heading>
      <Content>
        <Accordion>
          {jobs.map((job) => {
            return (
              <AccordionItem>
                <Card id={job._id}>
                  <CardImageContainer>
                    <CardImage src={logo} alt=""></CardImage>
                  </CardImageContainer>
                  <CardText>
                    <CardDesignation>{job.title}</CardDesignation>
                    <CardCompany>{job.company}</CardCompany>
                    <CardLocation>Lagos</CardLocation>
                  </CardText>
                  <CardActions>
                    <CardAction>Share</CardAction>
                    <CardActionApply
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </CardActionApply>
                  </CardActions>
                  {/* <SharePosting>
                    <ShareIcon src={share} alt=""></ShareIcon>
                    <ShareText>Share</ShareText>
                  </SharePosting> */}
                </Card>
                <ContentItemMain>{job.description}</ContentItemMain>
              </AccordionItem>
            );
          })}
        </Accordion>
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

const ContentItemMain = styled.div`
  height: 9rem;
  background: orange;
  width: 100%;
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

const CardDesignation = styled.h3``;

const CardCompany = styled.p`
  margin: 1rem 0;
`;

const CardLocation = styled.p``;

const CardActions = styled.div`
  flex: 0 0 18rem;
  display: flex;
  justify-content: space-between;
`;

const CardAction = styled.a`
  border: 1px solid #c4c4c4;
  width: 8rem;
  height: 2.7rem;
  line-height: 2.6rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.4rem;
  text-decoration: none;
  color: #3d3d3d;
`;

const CardActionApply = styled(CardAction)``;

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

export default Jobs;
