import React from "react";
import styled from "styled-components";

import errorIcon from "../../assets/images/circle-cross.svg";
import successIcon from "../../assets/images/circle-check.svg";

const StyledLabel = styled.label`
  font-style: normal;
  display: inline-block;
  font-size: 1.4rem;
  line-height: 16px;
  letter-spacing: -0.3px;
  /* color: ${({ error }) => (error ? "#ED4777" : "#0303d6")}; */
  font-weight: 600;
  color: #707070;
  margin-bottom: 1.5rem;
  padding: 0 0.1rem;
  background-color: #fff;
  left: 1.6rem;
  transition: 0.2s all;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  /* border: 1px solid ${({ error }) => (error ? "#efe1e1" : "#CFD7DC")}; */
  background: #ffffff;
  border: 1px solid rgba(119, 134, 158, 0.3);
  border-radius: 4px;
  font-size: 1.4rem;
  border-radius: 4px;
  padding: 0 1.6rem;
  resize: none;
  height: 9rem;
  padding-top: 1.2rem;
  line-height: 1.8rem;

  /* @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 4rem;
  } */

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
      {label && (
        <StyledLabel error={error} htmlFor={name} label={label}>
          {label}
        </StyledLabel>
      )}
      <StyledTextarea
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
