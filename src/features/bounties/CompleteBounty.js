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
import Select from "../../components/common/Select";
import Textarea from "../../components/common/Textarea";

const Wrapper = styled.div``;

const Content = styled.div`
  margin-bottom: 5rem;
`;

const Heading = styled.h2``;

const FormContainer = styled.div``;

const Form = styled.form``;

const PostProduct = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    instructions: "",
    tags: [],
    stack: "",
    challengeRepo: "",
    company: "",
    companyUrl: "",
  });

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Heading>Create Challenge</Heading>
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
                name="tags"
                value={formState.tags}
                type="text"
                placeholder="Tags"
                label="Tags"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Select
                name="stack"
                value={formState.stack}
                handleOnChange={handleOnChange}
              >
                <option value="">Select role</option>
                <option value="Backend">Backend Development</option>
                <option value="Frontend">Frontend Development</option>
                <option value="Fullstack">Fullstack Development</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Input
                name="challengeRepo"
                value={formState.challengeRepo}
                type="text"
                placeholder="Challenge repository"
                label="Challenge repository"
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
                placeholder="Company website"
                label="Company website"
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
                name="instructions"
                value={formState.instructions}
                type="text"
                placeholder="Instructions"
                label="Instructions"
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

export default PostProduct;
