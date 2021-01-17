import styled from "styled-components";

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

const RegisterForm = styled(Form)`
  height: 38.5rem;
`;

const LoginLink = styled(RegisterLink)`
  display: block;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: #312aaa;
  text-align: center;
`;

const RegisterPage = () => {
  return (
    <PageWrapper>
      <FormWrapper>
        <FormDetails>
          <FormDetailsLogo src={logo} alt="" />
          <FormDetailsTitle>Register to start earning</FormDetailsTitle>
        </FormDetails>
        <LoginAlt href="#">
          <LoginAltLogo src={google} alt="" />
          <LoginAltText>Sign up with Google</LoginAltText>
        </LoginAlt>
        <RegisterForm>
          <FormGroup>
            <Label>Email</Label>
            <Input type="text" autoComplete="new-password" />
          </FormGroup>
          <FormGroup>
            <Label>Date of birth</Label>
            <Input type="date" autoComplete="new-password" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" autoComplete="new-password" />
          </FormGroup>
          <Submit>Submit</Submit>
          <LoginLink to="/login">Already registered? Login</LoginLink>
        </RegisterForm>
      </FormWrapper>
    </PageWrapper>
  );
};

export default RegisterPage;
