import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  InstapaperShareButton,
} from "react-share";

import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";

import { LIST_JOBS } from "../../utils/constants";

import Accordion from "../../components/common/Accordion";
import AccordionItem from "../../components/common/AccordionItem";
import Card from "../../components/common/Card";

import share from "../../assets/images/share.svg";
import logo from "../../assets/images/d-company.svg";

const url = "https://kukuSend.com";
const iconFillColor = "white";
const fillColor = "#495E4B";
const size = 25;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shareOpen, setShareOpen] = useState("");

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

  const handleToggleShare = (id) => {
    shareOpen === id ? setShareOpen("") : setShareOpen(id);
  };

  return (
    <Wrapper>
      <Heading>Jobs</Heading>
      <Content>
        <ContentContainer>
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
                    <CardDivider>
                      <CardLocation>{job.location}</CardLocation>
                      {job.tags.length > 0 && (
                        <CardTags>
                          {job.tags.map((job, index) => {
                            return <CardTag>{job}</CardTag>;
                          })}
                        </CardTags>
                      )}
                    </CardDivider>
                  </CardText>
                  <CardActions>
                    <CardAction onClick={() => handleToggleShare(job._id)}>
                      Share
                    </CardAction>
                    <CardActionApply
                      href={job.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </CardActionApply>
                    {shareOpen === job._id && (
                      <SharePosting>
                        <ShareText>Share this posting</ShareText>
                        <ShareContainer>
                          <TwitterShareButton
                            url={url}
                            hashtags={["send money", "gifts", "transfer"]}
                            title="Send vouchers, buy airtime, pay bills, send money with kukuSend"
                          >
                            <img src={twitter} alt="" />
                          </TwitterShareButton>
                          <FacebookShareButton
                            url={url}
                            title="Send vouchers, buy airtime, pay bills, send money with kukuSend"
                          >
                            <img src={facebook} alt="" />
                          </FacebookShareButton>
                          <LinkedinShareButton
                            url={url}
                            title="Send vouchers, buy airtime, pay bills, send money with kukuSend"
                            summary="Send vouchers, buy airtime, pay bills, send money with kukuSend"
                          >
                            <img src={linkedin} alt="" />
                          </LinkedinShareButton>
                          <WhatsappShareButton
                            url={url}
                            title="Send vouchers, buy airtime, pay bills, send money with kukuSend"
                          >
                            <WhatsappIcon
                              size={size}
                              borderRadius={10}
                              iconFillColor={iconFillColor}
                              bgStyle={{ fill: fillColor }}
                            />
                          </WhatsappShareButton>
                        </ShareContainer>
                      </SharePosting>
                    )}
                  </CardActions>
                </Card>
              </AccordionItem>
            );
          })}
        </ContentContainer>
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

const ContentContainer = styled.div``;

const CardImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  margin-right: 2.5rem;
`;

const CardImage = styled.img`
  width: 100;
  height: 100;
`;

const CardText = styled.div`
  flex: 1;
`;

const CardDesignation = styled.h3`
  font-weight: 600;
`;

const CardCompany = styled.p`
  margin: 0.5rem 0;
  margin-top: 1.5rem;
`;

const CardDivider = styled.div`
  display: flex;
  align-items: center;
`;

const CardLocation = styled.p``;

const CardTags = styled.div`
  margin-left: 10rem;
`;

const CardTag = styled.span`
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  border: 1px solid #e5e5e5;
  padding: 0 1.2rem;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

const CardActions = styled.div`
  flex: 0 0 18rem;
  display: flex;
  justify-content: space-between;
  position: relative;
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

const SharePosting = styled.div`
  width: 18rem;
  height: 8rem;
  position: absolute;
  top: 3rem;
  right: 33%;
  cursor: pointer;
  padding: 1rem;
  background: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  z-index: 2;
`;

const ShareText = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ShareContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Jobs;
