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

const EditBounty = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    instructions: "",
    product: "",
    productUrl: "",
    expiry: "",
  });

  const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Heading>Edit Bounty</Heading>
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
                name="expiry"
                value={formState.expiry}
                type="date"
                // placeholder="https://subdomain.example.com"
                label="Expires"
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

export default EditBounty;
