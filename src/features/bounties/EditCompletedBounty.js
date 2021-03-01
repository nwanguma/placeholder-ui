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

const EditCompletedBounty = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    title: "",
    domain: "",
    subdomain: "",
    contactInfo: "",
    description: "",
    stepsToReproduce: "",
    impact: "",
  });

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Heading>Edit Completed Bounty</Heading>
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
                name="title"
                value={formState.title}
                type="text"
                placeholder="Title"
                label="Title"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="contactInfo"
                value={formState.contactInfo}
                type="text"
                placeholder="Contact information"
                label="Contact information"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="domain"
                value={formState.domain}
                type="text"
                placeholder="https://example.com"
                label="Domain"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="subdomain"
                value={formState.subdomain}
                type="text"
                placeholder="https://subdomain.example.com"
                label="Subdomain"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Textarea
                name="description"
                value={formState.description}
                type="text"
                placeholder="Description"
                label="Description"
                handleOnChange={handleOnChange}
              ></Textarea>
            </FormGroup>
            <FormGroup>
              <Textarea
                name="steps to reproduce"
                value={formState.stepsToReproduce}
                type="text"
                placeholder="Steps to reproduce this bug"
                label="Steps to reproduce"
                handleOnChange={handleOnChange}
              ></Textarea>
            </FormGroup>
          </FormGroupContainer>
          <Submit type="submit">Submit</Submit>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default EditCompletedBounty;
