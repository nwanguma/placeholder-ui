import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { LOGIN_USER } from "../utils/constants";
import { loginUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";
import persistAuthData from "../utils/persistAuthData";

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

import logo from "../assets/images/logo-alt.svg";
import google from "../assets/images/google.svg";

const ForgotPassword = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: #312aaa;
`;

const LoginPage = ({ loginUser }) => {
  const [formState, setFormState] = useState({
    id: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const startUserLogin = () => {
    setLoading(true);

    (async function login() {
      try {
        const res = await axios.post(LOGIN_USER, formState);
        const data = res.data.data;
        const token = res.data.data.token;
        const user = res.data.data.user;

        persistAuthData(data);
        setAuthToken(token);
        loginUser(user);
      } catch (e) {
        // console.log(e.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
  };

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
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            startUserLogin();
          }}
        >
          <FormGroup>
            <Label>Email or Username</Label>
            <Input
              type="text"
              autoComplete="new-password"
              name="id"
              value={formState.id}
              onChange={handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleOnChange}
              autoComplete="new-password"
            />
          </FormGroup>
          <ForgotPassword to="forgot-password">Forgot password?</ForgotPassword>
          <Submit>{loading ? "Loading..." : "Submit"}</Submit>
          <RegisterLink to="/register">Not registered? Register</RegisterLink>
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (payload) => dispatch(loginUser(payload)),
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
