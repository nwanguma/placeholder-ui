import React, { useState } from "react";
import styled from "styled-components";

import {
  FormGroupContainer,
  FormGroup,
  Option,
  Success,
  SuccessImage,
  Error,
  ErrorImage,
  Submit,
} from "../../components/styled/form";
import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";
import RadioButton from "../../components/common/RadioButton";

const Wrapper = styled.div``;

const Content = styled.div`
  margin-bottom: 5rem;
`;

const Heading = styled.h2``;

const FormContainer = styled.div``;

const Form = styled.form``;

const FormGroupRadio = styled(FormGroup)``;

const FormGroupRadioLabel = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #707070;
`;

const FormGroupRadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FormGroupComments = styled(FormGroup)`
  margin-top: 3.5rem;
`;

const PostProduct = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    comments: "",
    challengeRepo: "",
    website: "",
    githubUrl: "",
    employmentStatus: false,
  });

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Heading>Complete Challenge</Heading>
      </Content>
      <FormContainer>
        <Form>
          <FormGroupContainer>
            <FormGroup>
              <Input
                name="firstname"
                value={formState.firstname}
                type="text"
                placeholder="First name"
                label="First name"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="lastname"
                value={formState.lastname}
                type="text"
                placeholder="Last name"
                label="Last name"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="challengeRepo"
                value={formState.challengeRepo}
                type="text"
                placeholder="https://example.com"
                label="Challenge repository"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="website"
                value={formState.website}
                type="text"
                placeholder="https://example.com"
                label="Challenge website"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="githubUrl"
                value={formState.githubUrl}
                type="text"
                placeholder="https://example.com"
                label="Your Github URL"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroupRadio>
              <FormGroupRadioLabel>Are you employed?</FormGroupRadioLabel>
              <FormGroupRadioButtonContainer>
                <RadioButton
                  name="employmentStatus"
                  value={formState.employmentStatus}
                  type="radio"
                  id="yes"
                  label="Yes"
                  handleOnChange={handleOnChange}
                ></RadioButton>
                <RadioButton
                  name="employmentStatus"
                  value={formState.employmentStatus}
                  type="radio"
                  label="No"
                  id="no"
                  handleOnChange={handleOnChange}
                ></RadioButton>
              </FormGroupRadioButtonContainer>
            </FormGroupRadio>
          </FormGroupContainer>
          <FormGroupComments>
            <Textarea
              name="comments"
              value={formState.comments}
              type="text"
              placeholder="Comments"
              label="Comments"
              handleOnChange={handleOnChange}
            ></Textarea>
          </FormGroupComments>
          <Submit type="submit">Submit</Submit>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default PostProduct;
