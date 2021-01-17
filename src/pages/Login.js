import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  PageWrapper,
  FormWrapper,
  FormDetails,
  FormDetailsLogo,
  FormDetailsTitle,
  LoginAlt,
  LoginAltLogo,
  LoginAltText,
  Form,
  FormGroup,
  Label,
  Input,
  Submit,
  RegisterLink,
} from "../components/styled/onboarding";

import logo from "../assets/images/logo.png";
import google from "../assets/images/google.svg";

const ForgotPassword = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: #312aaa;
`;

const LoginPage = () => {
  return (
    <PageWrapper>
      <FormWrapper>
        <FormDetails>
          <FormDetailsLogo src={logo} alt="" />
          <FormDetailsTitle>Sign in to your account</FormDetailsTitle>
        </FormDetails>
        <LoginAlt href="#">
          <LoginAltLogo src={google} alt="" />
          <LoginAltText>Sign in with Google</LoginAltText>
        </LoginAlt>
        <Form>
          <FormGroup>
            <Label>Email or Username</Label>
            <Input type="text" autoComplete="new-password" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" autoComplete="new-password" />
          </FormGroup>
          <ForgotPassword to="forgot-password">Forgot password?</ForgotPassword>
          <Submit>Submit</Submit>
          <RegisterLink to="/register">Not registered? Register</RegisterLink>
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
};

export default LoginPage;
