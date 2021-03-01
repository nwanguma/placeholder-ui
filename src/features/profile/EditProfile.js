import React, { useState } from "react";
import styled from "styled-components";

import {
  FormGroupContainer,
  FormGroup,
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

const FormGroupTwitter = styled(FormGroup)`
  margin: 3.5rem 0;
`;

const FormGroupBio = styled.div``;

const EditProfile = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    role: "",
    age: "",
    bio: "",
    company: "",
    githubUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    website: "",
  });

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Heading>Edit Profile</Heading>
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
              <Select
                name="stack"
                value={formState.occupation}
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
              <Input
                name="age"
                value={formState.age}
                type="text"
                placeholder="Age"
                label="Age"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="company"
                value={formState.company}
                type="text"
                placeholder="https://example.com"
                label="Company's website"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="githubUrl"
                value={formState.githubUrl}
                type="text"
                placeholder="https://github.com/example"
                label="Github URL"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="website"
                value={formState.website}
                type="text"
                placeholder="https://example.com"
                label="Personal website"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="linkedinUrl"
                value={formState.linkedinUrl}
                type="text"
                placeholder="https://linkedin.com/example"
                label="Linkedin"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
          </FormGroupContainer>
          <FormGroupTwitter>
            <Input
              name="twitterUrl"
              value={formState.twitterUrl}
              type="text"
              placeholder="https://twitter.com/example"
              label="Twitter"
              handleOnChange={handleOnChange}
            />
          </FormGroupTwitter>
          <FormGroupBio>
            <Textarea
              name="bio"
              value={formState.bio}
              type="text"
              placeholder="Bio"
              label="Bio"
              handleOnChange={handleOnChange}
            ></Textarea>
          </FormGroupBio>
          <Submit type="submit">Submit</Submit>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default EditProfile;
