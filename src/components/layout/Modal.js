import React, { useState } from "react";
import styled from "styled-components";

import CreateChallenge from "../../features/challenges/CreateChallenge";
import EditChallenge from "../../features/challenges/EditChallenge";
import CompleteChallenge from "../../features/challenges/CompleteChallenge";
import EditCompletedChallenge from "../../features/challenges/EditCompletedChallenge";
import CreateBounty from "../../features/bounties/CreateBounty";
import EditBounty from "../../features/bounties/EditBounty";
import CompleteBounty from "../../features/bounties/CompleteBounty";
import EditCompletedBounty from "../../features/bounties/EditCompletedBounty";
import PostBlogpost from "../../features/blog/PostBlogpost";
import UpdateBlogpost from "../../features/blog/UpdateBlogpost";
import PostProduct from "../../features/productSpotlight/PostProduct";
import UpdateProduct from "../../features/productSpotlight/UpdateProduct";
import ViewProduct from "../../features/productSpotlight/ViewProduct";
import PostJob from "../../features/jobs/PostJob";
import UpdateJobpost from "../../features/jobs/UpdateJobpost";
import EditProfile from "../../features/profile/EditProfile";

const Wrapper = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  background: rgba(211, 209, 209, 0.5);
  position: absolute;
  top: 0px;
  width: 100%;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Modal = styled.div`
  width: 65%;
  min-height: 90vh;
  border-radius: 1rem;
  background: #fff;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 4rem;
`;

const ModalComponent = () => {
  const [component, setComponent] = useState("viewProduct");

  return (
    <Wrapper>
      <Overlay>
        <Modal>
          {
            {
              createChallenge: <CreateChallenge />,
              editChallenge: <EditChallenge />,
              completeChallenge: <CompleteChallenge />,
              editCompletedChallenge: <EditCompletedChallenge />,
              createBounty: <CreateBounty />,
              editBounty: <EditBounty />,
              completeBounty: <CompleteBounty />,
              editCompletedBounty: <EditCompletedBounty />,
              postBlogpost: <PostBlogpost />,
              updateBlogpost: <UpdateBlogpost />,
              postProduct: <PostProduct />,
              updateProduct: <UpdateProduct />,
              viewProduct: <ViewProduct />,
              postJob: <PostJob />,
              updateJobpost: <UpdateJobpost />,
              editProfile: <EditProfile />,
            }[component]
          }
        </Modal>
      </Overlay>
    </Wrapper>
  );
};

export default ModalComponent;
