import styled from "styled-components";
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

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  height: 7rem;
  align-items: center;
`;

const ShareContainer = styled.div`
  flex: 0 0 25%;
`;

const ShareHeading = styled.h5`
  margin-bottom: 7px;
  text-align: center;
  color: #495e4b;
`;

const Share = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    display: none;
  }

  & > button {
    outline: 0 !important;
    width: 2.5rem;

    & > img {
      width: 100%;
    }
  }
`;

const CopyrightContainer = styled.div`
  font-size: 1.3rem;
`;

const url = "https://kukuSend.com";
const iconFillColor = "white";
const fillColor = "#495E4B";
const size = 25;

const LandingPageFooter = () => {
  return (
    <FooterWrapper>
      <ShareContainer>
        <ShareHeading>share on social media</ShareHeading>
        <Share>
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
          <InstapaperShareButton
            url={url}
            title="Send vouchers, buy airtime, pay bills, send money with kukuSend"
          >
            <img src={instagram} alt="" />
          </InstapaperShareButton>
        </Share>
      </ShareContainer>
      <CopyrightContainer>
        ©2020 realusers. All rights reserved.
      </CopyrightContainer>
    </FooterWrapper>
  );
};

export default LandingPageFooter;
