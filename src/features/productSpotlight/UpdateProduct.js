import React, { useState } from "react";
import styled from "styled-components";

import {
  FormGroupContainer,
  FormGroup,
  Submit,
} from "../../components/styled/form";
import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";

const Wrapper = styled.div``;

const Content = styled.div`
  margin-bottom: 5rem;
`;

const Heading = styled.h2``;

const FormContainer = styled.div``;

const Form = styled.form``;

const UpdateProduct = () => {
  const [formState, setFormState] = useState({
    product: "",
    productUrl: "",
    description: "",
    makers: [
      {
        name: "",
        email: "",
        twitterUrl: "",
        linkedinUrl: "",
      },
    ],
    poster: {
      name: "",
      email: "",
      twitterUrl: "",
      linkedinUrl: "",
    },
  });

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Heading>Update Product</Heading>
      </Content>
      <FormContainer>
        <Form>
          <FormGroupContainer>
            <FormGroup>
              <Input
                name="product"
                value={formState.product}
                type="text"
                placeholder="Product name"
                label="Product name"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="productUrl"
                value={formState.productUrl}
                type="text"
                placeholder="https://example.com"
                label="Product website"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="name"
                value={formState.makers[0].name}
                type="text"
                placeholder="Name"
                label="Maker's name"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="email"
                value={formState.makers[0].email}
                type="text"
                placeholder="https://example.com"
                label="Maker's email"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="twitterUrl"
                value={formState.makers[0].twitterUrl}
                type="text"
                placeholder="https://example.com"
                label="Maker's Twitter"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="linkedinUrl"
                value={formState.makers[0].linkedinUrl}
                type="text"
                placeholder="https://example.com"
                label="Maker's LinkedIn"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="name"
                value={formState.poster.name}
                type="text"
                placeholder="Name"
                label="Poster's name"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="email"
                value={formState.poster.email}
                type="text"
                placeholder="https://example.com"
                label="Poster's email"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="twitterUrl"
                value={formState.poster.twitterUrl}
                type="text"
                placeholder="https://example.com"
                label="Poster's Twitter"
                handleOnChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="linkedinUrl"
                value={formState.poster.linkedinUrl}
                type="text"
                placeholder="https://example.com"
                label="Poster's LinkedIn"
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

export default UpdateProduct;
