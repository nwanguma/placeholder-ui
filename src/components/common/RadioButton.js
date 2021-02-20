import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  min-width: 6rem;
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  border: 1px solid grey;
  margin-right: 1rem;
  cursor: pointer;
`;

const StyledInput = styled.input`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 1rem;

  &:checked + label {
    border: 6px solid blue;
  }
`;

const StyledText = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const Input = ({ type, label, handleOnChange, name, value, checked, id }) => {
  return (
    <InputWrapper>
      <StyledInput
        name={name}
        value={value}
        checked={checked}
        onChange={handleOnChange}
        type={type}
        label={label}
        id={id}
      />
      <StyledLabel htmlFor={id} label={label}></StyledLabel>
      <StyledText>{label}</StyledText>
    </InputWrapper>
  );
};

export default Input;
