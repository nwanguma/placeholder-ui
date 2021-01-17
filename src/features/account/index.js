import React from "react";
import styled from "styled-components";

import camera from "../../assets/images/camera.svg";
import wheel from "../../assets/images/settings.svg";
import arrowright from "../../assets/images/caretRight.svg";
import privacy from "../../assets/images/shield.svg";
import faq from "../../assets/images/faq.svg";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: column;
  }
`;

const HomeContent = styled.div`
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-bottom: 4rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const ProfileImageBox = styled.div`
  flex: 0 0 66px;
  height: 66px;
  background: #409046;
  border-radius: 100%;
  margin-right: 2rem;
  line-height: 6.6rem;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex: 0 0 5.5rem;
    height: 5.5rem;
    line-height: 6rem;
  }

  & > img {
    height: 13.527027130126953px;
    width: 16.054054260253906px;
  }
`;

const ProfileContent = styled.div`
  & > h3 {
    font-size: 21.2px;
    line-height: 40px;
    color: #495e4b;
    margin-bottom: 0.5rem;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      font-size: 1.7rem;
      margin-bottom: 0;
    }
  }

  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 17px;
    letter-spacing: 0.106px;
    color: #77869e;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      line-height: 1.5rem;
    }
  }
`;

const AccountSettings = styled.div``;

const AccountSettingItem = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 56px;
  width: 100%;
  border-radius: 10px;
  background: #f8fcf9;
  background: #f8fcf9;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.0523656);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-bottom: 0.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.mobileM} {
    padding: 0 0.5rem;
  }

  & > img {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    right: 2rem;
    width: 1rem;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      width: 1rem;
    }

    @media ${({ theme }) => theme.mediaQueries.mobileM} {
      right: 0.5rem;
    }
  }
`;

const AccountSettingItemProfile = styled(AccountSettingItem)``;

const AccountSettingItemPrivacy = styled(AccountSettingItem)``;

const AccountSettingItemNotifications = styled(AccountSettingItem)``;

const AccountSettingItemImageBox = styled.div`
  flex: 0 0 2rem;
  margin-right: 2rem;
  text-align: center;

  & > img {
    width: 100%;
  }
`;

const AccountSettingItemContent = styled.div`
  flex: 0 0 95%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex: 0 0 98%;
  }

  & > h4 {
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.4px;
    color: #495e4b;
    margin-bottom: 4px;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      margin-bottom: 1px;
      font-size: 1.3rem;
    }
  }

  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 14px;
    letter-spacing: 0.270833px;
    color: #77869e;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      font-size: 10px;
    }

    & > span {
      color: #36b26c;
    }
  }
`;

const Account = () => {
  const profileData = {
    first_name: "Tochukwu",
    last_name: "Nwanguma",
    referral_code: "sksksks",
  };
  return (
    <HomeWrapper>
      <HomeContent>
        <ProfileContainer>
          <ProfileImageBox>
            <img src={camera} alt="" />
          </ProfileImageBox>
          <ProfileContent>
            <h3>
              {profileData.first_name} {profileData.last_name}
            </h3>
            <p>{profileData.email}</p>
          </ProfileContent>
        </ProfileContainer>
        <AccountSettings>
          <AccountSettingItemProfile>
            <AccountSettingItemImageBox>
              <img src={wheel} alt="" />
            </AccountSettingItemImageBox>
            <AccountSettingItemContent>
              <h4>Edit Profile</h4>
              <p>Update and modify your profile</p>
            </AccountSettingItemContent>
            <img src={arrowright} alt="right arrow" />
          </AccountSettingItemProfile>
          <AccountSettingItemPrivacy>
            <AccountSettingItemImageBox>
              <img src={privacy} alt="" />
            </AccountSettingItemImageBox>
            <AccountSettingItemContent>
              <h4>Privacy</h4>
              <p>Change your password</p>
            </AccountSettingItemContent>
            <img src={arrowright} alt="right arrow" />
          </AccountSettingItemPrivacy>
          <AccountSettingItemNotifications>
            <AccountSettingItemImageBox>
              <img src={faq} alt="" />
            </AccountSettingItemImageBox>
            <AccountSettingItemContent>
              <h4>FaQs</h4>
              <p>Frequently asked questions all in one place</p>
            </AccountSettingItemContent>
            <img src={arrowright} alt="right arrow" />
          </AccountSettingItemNotifications>
          {/* <AccountSettingItemDetails
            >
              <AccountSettingItemImageBox>
                <img src={person} alt="" />
              </AccountSettingItemImageBox>
              <AccountSettingItemContent>
                <h4>Registration Information</h4>
                <p>Complete or update registration details</p>
              </AccountSettingItemContent>
              <img src={arrowright} alt="right arrow" />
            </AccountSettingItemDetails> */}
        </AccountSettings>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Account;
