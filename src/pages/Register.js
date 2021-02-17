import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import axios from "axios";

import { REGISTER_USER } from "../utils/constants";
import { loginUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken.js";

import {
  PageWrapper,
  FormWrapper,
  FormDetails,
  // FormDetailsLogo,
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

// import logo from "../assets/images/logo.svg";
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

const RegisterPage = ({ loginUser }) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const registerUser = () => {
    setLoading(true);

    (async function startUserRegistration() {
      try {
        const res = await axios.post(REGISTER_USER, formState);
        const data = res.data.data.user;
        const token = res.data.data.token;

        setAuthToken(token);
        loginUser(data);
      } catch (e) {
        console.log(e.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
  };
  return (
    <PageWrapper>
      <FormWrapper>
        <FormDetails>
          {/* <FormDetailsLogo src={logo} alt="" /> */}
          <FormDetailsTitle>Register for your free account</FormDetailsTitle>
        </FormDetails>
        <LoginAlt href="#">
          <LoginAltLogo src={google} alt="" />
          <LoginAltText>Sign up with Google</LoginAltText>
        </LoginAlt>
        <RegisterForm
          onSubmit={(e) => {
            e.preventDefault();

            registerUser();
          }}
        >
          <FormGroup>
            <Label>Username</Label>
            <Input
              name="username"
              value={formState.username}
              type="text"
              autoComplete="new-password"
              onChange={handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              value={formState.email}
              type="text"
              autoComplete="new-password"
              onChange={handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              name="password"
              value={formState.password}
              type="password"
              autoComplete="new-password"
              onChange={handleOnChange}
            />
          </FormGroup>
          <Submit>{loading ? "Loading..." : "Submit"}</Submit>
          <LoginLink to="/login">Already registered? Login</LoginLink>
        </RegisterForm>
      </FormWrapper>
    </PageWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (payload) => dispatch(loginUser(payload)),
  };
};

export default connect(undefined, mapDispatchToProps)(RegisterPage);
