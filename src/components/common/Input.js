import React from "react";
import styled from "styled-components";

import errorIcon from "../../assets/images/caretRight.svg";
import successIcon from "../../assets/images/caretRight.svg";

const StyledLabel = styled.label`
  width: max-content;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 16px;
  letter-spacing: -0.3px;
  color: ${({ error }) => (error ? "#ED4777" : "#0303d6")};
  margin-bottom: 7px;
  position: absolute;
  top: -0.8rem;
  padding: 0 0.1rem;
  background-color: #fff;
  left: 1.6rem;
  transition: 0.2s all;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${({ error }) => (error ? "#efe1e1" : "#CFD7DC")};
  box-sizing: border-box;
  height: 3.8rem;
  background: #ffffff;
  border: 1px solid rgba(119, 134, 158, 0.3);
  /* line-height: ${({ label }) => (label ? "5rem" : "4.8rem")}; */
  /* padding: ${({ label }) =>
    label ? "1rem 1.5rem 0 1.5rem" : "0 1.5rem 0 1.5rem"}; */
  border-radius: 4px;
  font-size: 1.4rem;
  border-radius: 4px;
  padding: 0 1.6rem;

  &:disabled {
    background: #f2f4f2;
  }

  &:placeholder-shown {
    padding: 0 1.5rem;
  }

  &:placeholder-shown + label {
    z-index: -3;
    top: 1.4rem;
    opacity: 0;
  }

  @media screen and (max-width: 87.85em) {
    /* height: 46px; */
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    /* height: 4rem; */
  }

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: #77869e;

    @media screen and (max-width: 87.85em) {
      font-size: 1.4rem;
    }
  }
`;

const Error = styled.p``;

const ErrorIcon = styled.img``;

const Success = styled.p``;

const SuccessIcon = styled.img``;

const Input = ({
  type,
  label,
  handleOnChange,
  placeholder,
  readOnly,
  name,
  value,
  pattern,
  onInvalid,
  required,
  min,
  max,
  maxLength,
  disabled,
  minLength,
  error,
  autoComplete,
  success,
}) => {
  return (
    <>
      <StyledInput
        disabled={disabled}
        name={name}
        value={value}
        onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        readonly={readOnly}
        onInvalid={onInvalid}
        required={required}
        min={min}
        max={max}
        maxLength={maxLength}
        minLength={minLength}
        label={label}
        autoComplete={autoComplete}
      />
      {label && (
        <StyledLabel error={error} htmlFor={name} label={label}>
          {label}
        </StyledLabel>
      )}
      {error && (
        <Error>
          <ErrorIcon src={errorIcon} alt=""></ErrorIcon>
          {error}
        </Error>
      )}
      {success && (
        <Success>
          <SuccessIcon src={successIcon} alt=""></SuccessIcon>
          {error}
        </Success>
      )}
    </>
  );
};

export default Input;
