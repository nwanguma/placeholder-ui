import styled from "styled-components";

import Nav from "../../components/layout/LandingPageNavigation";
import Footer from "../../components/layout/LandingPageFooter";

const PageWrapper = styled.div``;

const Main = styled.main``;

const Home = () => {
  return (
    <PageWrapper>
      <Nav />
      <Main>this is the main section</Main>
      <Footer />
    </PageWrapper>
  );
};

export default Home;
