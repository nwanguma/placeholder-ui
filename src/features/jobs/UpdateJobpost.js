import React, { useState } from "react";
import styled from "styled-components";

import {
  FormGroupContainer,
  FormGroup,
  FormGroupRadio,
  FormGroupRadioLabel,
  FormGroupRadioButtonContainer,
  Option,
  Success,
  SuccessImage,
  Error,
  ErrorImage,
  Submit,
} from "../../components/styled/form";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import Textarea from "../../components/common/Textarea";
import RadioButton from "../../components/common/RadioButton";

const Wrapper = styled.div``;

const Content = styled.div`
  margin-bottom: 5rem;
`;

const Heading = styled.h2``;

const FormContainer = styled.div``;

const Form = styled.form``;

const UpdateJobpost = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    responsibilities: [],
    tags: [],
    stack: "",
    qualifications: "",
    experienceLevel: "",
    benefits: "",
    company: "",
    companyUrl: "",
    applicationUrl: "",
  });

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Heading>Update Job</Heading>
      </Content>
      <FormContainer>
        <Form>
          <FormGroupContainer>
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
                name="company"
                value={formState.company}
                type="text"
                placeholder="Company name"
                label="Company name"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="companyUrl"
                value={formState.companyUrl}
                type="text"
                placeholder="https://example.com"
                label="Company website"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="applicationUrl"
                value={formState.applicationUrl}
                type="text"
                placeholder="https://example.com"
                label="Application link"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroupRadio>
              <FormGroupRadioLabel>Experience level?</FormGroupRadioLabel>
              <FormGroupRadioButtonContainer>
                <RadioButton
                  name="experienceLevel"
                  value={formState.experienceLevel}
                  type="radio"
                  id="0-1"
                  label="0 - 1year"
                  handleOnChange={handleOnChange}
                ></RadioButton>
                <RadioButton
                  name="experienceLevel"
                  value={formState.experienceLevel}
                  type="radio"
                  id="1-2"
                  label="1 - 2years"
                  handleOnChange={handleOnChange}
                ></RadioButton>
                <RadioButton
                  name="experienceLevel"
                  value={formState.experienceLevel}
                  type="radio"
                  id="2-4"
                  label="2 - 4years"
                  handleOnChange={handleOnChange}
                ></RadioButton>
              </FormGroupRadioButtonContainer>
            </FormGroupRadio>
            <FormGroup>
              <Select
                name="stack"
                value={formState.stack}
                handleOnChange={handleOnChange}
                label="Role"
              >
                <option value="">Select role</option>
                <option value="Backend">Backend Development</option>
                <option value="Frontend">Frontend Development</option>
                <option value="Fullstack">Fullstack Development</option>
              </Select>
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
                name="responsibilities"
                value={formState.responsibilities}
                type="text"
                placeholder="Responsibilities"
                label="Responsibilities"
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

export default UpdateJobpost;
