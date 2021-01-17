import styled from "styled-components";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CopyToClipboard from "../../components/common/CopyToClipboard";
import gift from "../../assets/images/gift.svg";
import productlogo from "../../assets/images/d-company.svg";
import appstorebadge from "../../assets/images/appstorebadge.svg";
import playstorebadge from "../../assets/images/playstorebadge.svg";
import meerkat from "../../assets/images/meerkat.jpg";
import twitterMain from "../../assets/images/twittermain.svg";
import instagramMain from "../../assets/images/instagrammain.svg";
import youtubeMain from "../../assets/images/youtubemain.svg";

const OverviewPageWrapper = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  min-height: 30rem;
  padding: 0 4rem;
  border-bottom: 1px dashed rgba(73, 94, 75, 0.2);
`;

const SectionSpotlight = styled(Section)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const SectionSpotlightCarousel = styled.div`
  flex: 0 0 40%;
`;

const SectionSpotlightContent = styled.div`
  flex: 0 0 50%;
  display: flex;
`;

const SectionSpotlightContentLogoBox = styled.div`
  min-width: 9rem;
  height: 9rem;
  padding: 1rem;
  border-radius: 6px;
  background: #fff;
  margin-right: 3rem;
`;

const SectionSpotlightContentLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const SectionSpotlightContentText = styled.div`
  flex: 0 0 calc(100% - 9rem);
`;

const SectionSpotlightContentTextHeading = styled.h3`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const SectionSpotlightContentTextSecondary = styled.p`
  font-size: 1.5rem;
  line-height: 2.2rem;
`;

const SectionSpotlightContentTextTags = styled.div`
  margin-top: 1.5rem;
`;

const SectionSpotlightContentTextTagsItem = styled.span`
  display: inline-block;
  padding: 0.5rem;
  border: 1px solid #c4c4c4;
  font-size: 1.3rem;
  color: #77869e;

  &:not(:last-child) {
    margin-right: 0.7rem;
  }
`;

const InAppNavigation = styled(Link)`
  text-decoration: none;
  display: inline-block;
  font-size: 1.3rem;
  color: blue;
`;

const SectionSpotlightContentTextLink = styled(InAppNavigation)`
  margin-top: 1.5rem;
`;

const SectionEarnings = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionEarningsContent = styled.div`
  flex: 0 0 35%;
`;

const SectionEarningsHeading = styled.span`
  margin-bottom: 0.7rem;
  display: inline-block;
  font-size: 1.3rem;
`;

const SectionEarningsEarning = styled.h2`
  font-size: 4.5rem;
  color: #3d3d3d;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

const SectionEarningsLink = styled(InAppNavigation)`
  margin-bottom: 1.5rem;
`;

const SectionEarningsNote = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: #77869e;
`;

const ShareContainer = styled.div`
  flex: 0 0 55%;
`;

const ShareContainerHeading = styled.h3`
  margin-bottom: 1rem;
`;

const ShareContainerText = styled.p`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #77869e;
  margin-bottom: 3rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const ShareContainerTextSecondary = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.3px;
  color: #042c5c;
  margin-bottom: 0.5rem;
  display: inline-block;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    display: block;
    margin-bottom: 0.8rem;
  }
`;

const ShareContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-top: 2.5rem;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 10rem;
  margin-right: 2.5rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex: 0 0 6rem;
    margin-right: 1rem;
  }

  & > img {
    width: 100%;
  }
`;

const Share = styled.div`
  flex: 1;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex: 1;
    margin-bottom: 2rem;
  }
`;

const BadgeContainer = styled.div`
  margin-top: 2.5rem;
`;

const Badge = styled.img`
  width: 13rem;

  &:first-child {
    margin-right: 1rem;
  }
`;

const SectionPromotions = styled(Section)`
  padding-top: 3rem;
  height: 42rem;
`;

const SectionPromotionsContent = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: repeat(2, 15rem);
  grid-template-columns: repeat(2, 1fr);
`;

const SectionPromotionsItem = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const SectionPromotionsItemImage = styled.img`
  width: 4rem;
  display: block;
  margin-right: 2rem;
`;

const SectionPromotionsItemContent = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
`;

const SectionPromotionsItemContentHeading = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.7rem;
`;

const SectionPromotionsItemContentAbout = styled.p`
  margin-bottom: 1rem;
`;

const SectionPromotionsItemContentPromotion = styled.p``;

const SectionPromotionsItemContentLink = styled.a``;

const SectionPromotionsLink = styled(InAppNavigation)`
  margin-top: 2rem;
`;

const SectionBounties = styled(Section)`
  padding-top: 3rem;
  height: 38rem;
`;

const SectionBountiesContent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const SectionBountiesItem = styled.div`
  flex: 0 0 30%;
  height: 28rem;
  perspective: 1500px;
  -moz-perspective: 1500px;
  position: relative;

  &:hover .side--front {
    transform: rotateY(0);
  }

  &:hover .side--back {
    transform: rotateY(180deg);
  }
`;

const SectionBountiesItemSide = styled.div`
  height: 28rem;
  padding: 1.5rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: 1s all;
  backface-visibility: hidden;
  border-radius: 1rem;
`;

const SectionBountiesItemSideFront = styled(SectionBountiesItemSide)`
  transform: rotateY(180deg);
`;

const SectionBountiesItemSideBack = styled(SectionBountiesItemSide)`
  transform: rotateY(0);
`;

const SectionBountiesItemHeader = styled.h3`
  margin-bottom: 1.5rem;
`;

const SectionBountiesItemImage = styled.img`
  width: 4rem;
  display: inline-block;
  margin-bottom: 1.5rem;
`;

const SectionBountiesItemText = styled.p`
  font-size: 1.3rem;
  line-height: 2rem;
`;

const SectionBountiesLink = styled(InAppNavigation)`
  margin-top: 2rem;
`;

const OverviewPage = () => {
  return (
    <OverviewPageWrapper>
      <SectionSpotlight>
        <SectionSpotlightContent>
          <SectionSpotlightContentLogoBox>
            <SectionSpotlightContentLogo src={productlogo} />
          </SectionSpotlightContentLogoBox>
          <SectionSpotlightContentText>
            <SectionSpotlightContentTextHeading>
              Drilla
            </SectionSpotlightContentTextHeading>
            <SectionSpotlightContentTextSecondary>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              quos, repellat, omnis voluptatum officiis dolorum ducimus.
            </SectionSpotlightContentTextSecondary>
            <SectionSpotlightContentTextTags>
              <SectionSpotlightContentTextTagsItem>
                crypto
              </SectionSpotlightContentTextTagsItem>
              <SectionSpotlightContentTextTagsItem>
                fintech
              </SectionSpotlightContentTextTagsItem>
              <SectionSpotlightContentTextTagsItem>
                tech
              </SectionSpotlightContentTextTagsItem>
            </SectionSpotlightContentTextTags>
            <SectionSpotlightContentTextLink to="/dashboard/product-of-the-week">
              learn more &#8594;
            </SectionSpotlightContentTextLink>
          </SectionSpotlightContentText>
        </SectionSpotlightContent>
        <SectionSpotlightCarousel>
          <Carousel>
            <div>
              <img src={meerkat} alt="" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src={meerkat} alt="" />
            </div>
            <div>
              <img src={meerkat} alt="" />
            </div>
          </Carousel>
        </SectionSpotlightCarousel>
      </SectionSpotlight>
      <SectionEarnings>
        <SectionEarningsContent>
          <SectionEarningsHeading>Your earnings:</SectionEarningsHeading>
          <SectionEarningsEarning>&#8358;3,000</SectionEarningsEarning>
          <SectionEarningsLink to="/dashboard/earnings">
            go to earnings &#8594;
          </SectionEarningsLink>
          <SectionEarningsNote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            dignissimos exercitationem cumque dolorum.
          </SectionEarningsNote>
        </SectionEarningsContent>
        <ShareContainer>
          <ShareContainerContent>
            <ImageContainer>
              <img src={gift} alt="" />
            </ImageContainer>
            <Share>
              <ShareContainerHeading>Share & Earn</ShareContainerHeading>
              <ShareContainerText>
                Refer friends and get $ for each referral
              </ShareContainerText>
              <ShareContainerTextSecondary>
                Copy shareable link
              </ShareContainerTextSecondary>
              <CopyToClipboard text="sksksksksks" />
              <BadgeContainer>
                <Badge src={appstorebadge} alt="" />
                <Badge src={playstorebadge} alt="" />
              </BadgeContainer>
            </Share>
          </ShareContainerContent>
        </ShareContainer>
      </SectionEarnings>
      <SectionPromotions>
        <SectionPromotionsContent>
          <SectionPromotionsItem>
            <SectionPromotionsItemImage
              src={productlogo}
            ></SectionPromotionsItemImage>
            <SectionPromotionsItemContent>
              <SectionPromotionsItemContentHeading>
                Drilla
              </SectionPromotionsItemContentHeading>
              <SectionPromotionsItemContentAbout>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionPromotionsItemContentAbout>
              <SectionPromotionsItemContentPromotion>
                Follow this account win $$
              </SectionPromotionsItemContentPromotion>
              <SectionPromotionsItemContentLink
                href="drilla.com"
                target="_blank"
                rel="noopener noreferrer"
              ></SectionPromotionsItemContentLink>
            </SectionPromotionsItemContent>
          </SectionPromotionsItem>
          <SectionPromotionsItem>
            <SectionPromotionsItemImage
              src={youtubeMain}
            ></SectionPromotionsItemImage>
            <SectionPromotionsItemContent>
              <SectionPromotionsItemContentHeading>
                @tochistry
              </SectionPromotionsItemContentHeading>
              <SectionPromotionsItemContentAbout>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionPromotionsItemContentAbout>
              <SectionPromotionsItemContentPromotion>
                Follow this account win $$
              </SectionPromotionsItemContentPromotion>
              <SectionPromotionsItemContentLink
                href="drilla.com"
                target="_blank"
                rel="noopener noreferrer"
              ></SectionPromotionsItemContentLink>
            </SectionPromotionsItemContent>
          </SectionPromotionsItem>
          <SectionPromotionsItem>
            <SectionPromotionsItemImage
              src={instagramMain}
            ></SectionPromotionsItemImage>
            <SectionPromotionsItemContent>
              <SectionPromotionsItemContentHeading>
                @theblackesper
              </SectionPromotionsItemContentHeading>
              <SectionPromotionsItemContentAbout>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionPromotionsItemContentAbout>
              <SectionPromotionsItemContentPromotion>
                Follow this account win $$
              </SectionPromotionsItemContentPromotion>
              <SectionPromotionsItemContentLink
                href="drilla.com"
                target="_blank"
                rel="noopener noreferrer"
              ></SectionPromotionsItemContentLink>
            </SectionPromotionsItemContent>
          </SectionPromotionsItem>
          <SectionPromotionsItem>
            <SectionPromotionsItemImage
              src={twitterMain}
            ></SectionPromotionsItemImage>
            <SectionPromotionsItemContent>
              <SectionPromotionsItemContentHeading>
                @tochistry
              </SectionPromotionsItemContentHeading>
              <SectionPromotionsItemContentAbout>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionPromotionsItemContentAbout>
              <SectionPromotionsItemContentPromotion>
                Follow this account win $$
              </SectionPromotionsItemContentPromotion>
              <SectionPromotionsItemContentLink
                href="drilla.com"
                target="_blank"
                rel="noopener noreferrer"
              ></SectionPromotionsItemContentLink>
            </SectionPromotionsItemContent>
          </SectionPromotionsItem>
        </SectionPromotionsContent>
        <SectionPromotionsLink to="/dashboard/promotions">
          go to promotions &#8594;
        </SectionPromotionsLink>
      </SectionPromotions>
      <SectionBounties>
        <SectionBountiesContent>
          <SectionBountiesItem>
            <SectionBountiesItemSideFront className="side--front">
              <SectionBountiesItemHeader>Drilla</SectionBountiesItemHeader>
              <SectionBountiesItemImage
                src={productlogo}
              ></SectionBountiesItemImage>
              <SectionBountiesItemText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionBountiesItemText>
            </SectionBountiesItemSideFront>
            <SectionBountiesItemSideBack className="side--back">
              <SectionBountiesItemHeader>Drilla</SectionBountiesItemHeader>
              <SectionBountiesItemImage
                src={productlogo}
              ></SectionBountiesItemImage>
              <SectionBountiesItemText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionBountiesItemText>
            </SectionBountiesItemSideBack>
          </SectionBountiesItem>
          <SectionBountiesItem>
            <SectionBountiesItemSideFront className="side--front">
              <SectionBountiesItemHeader>Drilla</SectionBountiesItemHeader>
              <SectionBountiesItemImage
                src={productlogo}
              ></SectionBountiesItemImage>
              <SectionBountiesItemText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionBountiesItemText>
            </SectionBountiesItemSideFront>
            <SectionBountiesItemSideBack className="side--back">
              <SectionBountiesItemHeader>Drilla</SectionBountiesItemHeader>
              <SectionBountiesItemImage
                src={productlogo}
              ></SectionBountiesItemImage>
              <SectionBountiesItemText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionBountiesItemText>
            </SectionBountiesItemSideBack>
          </SectionBountiesItem>
          <SectionBountiesItem>
            <SectionBountiesItemSideFront className="side--front">
              <SectionBountiesItemHeader>Drilla</SectionBountiesItemHeader>
              <SectionBountiesItemImage
                src={productlogo}
              ></SectionBountiesItemImage>
              <SectionBountiesItemText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionBountiesItemText>
            </SectionBountiesItemSideFront>
            <SectionBountiesItemSideBack className="side--back">
              <SectionBountiesItemHeader>Drilla</SectionBountiesItemHeader>
              <SectionBountiesItemImage
                src={productlogo}
              ></SectionBountiesItemImage>
              <SectionBountiesItemText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quos, repellat, omnis voluptatum officiis dolorum
                ducimus.
              </SectionBountiesItemText>
            </SectionBountiesItemSideBack>
          </SectionBountiesItem>
        </SectionBountiesContent>
        <SectionBountiesLink to="/dashboard/bounties">
          go to bounties &#8594;
        </SectionBountiesLink>
      </SectionBounties>
    </OverviewPageWrapper>
  );
};

export default OverviewPage;
