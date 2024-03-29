import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  width: max-content;
  font-style: normal;
  display: inline-block;
  font-size: 1.4rem;
  line-height: 16px;
  letter-spacing: -0.3px;
  /* color: ${({ error }) => (error ? "#ED4777" : "#0303d6")}; */
  font-weight: 600;
  color: #707070;
  margin-bottom: 1.5rem;
  /* position: absolute;
  top: -0.8rem; */
  padding: 0 0.1rem;
  background-color: #fff;
  left: 1.6rem;
  transition: 0.2s all;
`;

const StyledSelect = styled.select`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(119, 134, 158, 0.3);
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTUuNzUxIDU1Ljc1MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUuNzUxIDU1Ljc1MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTMxLjgzNiw0My4wMDZjMC4yODItMC4yODEsMC41MTgtMC41OSwwLjcyNS0wLjkxMkw1NC4xNywyMC40ODVjMi4xMDctMi4xMDksMi4xMDktNS41MjgsMC03LjYzOA0KCQljLTIuMTA5LTIuMTA3LTUuNTI3LTIuMTA5LTcuNjM4LDBsLTE4LjYwOCwxOC42MUw5LjIxNywxMi43NTNjLTIuMTA5LTIuMTA4LTUuNTI3LTIuMTA5LTcuNjM3LDANCgkJQzAuNTI3LDEzLjgwOS0wLjAwMiwxNS4xOSwwLDE2LjU3MWMtMC4wMDIsMS4zODIsMC41MjcsMi43NjQsMS41ODIsMy44MTZsMjEuNzAzLDIxLjcwNmMwLjIwNywwLjMyMywwLjQ0NSwwLjYzMSwwLjcyOSwwLjkxMw0KCQljMS4wNzgsMS4wNzgsMi40OTYsMS41OTcsMy45MSwxLjU3MkMyOS4zMzYsNDQuNjA0LDMwLjc1OCw0NC4wODQsMzEuODM2LDQzLjAwNnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  background-position: right 2rem top 50%;
  background-repeat: no-repeat;
  background-size: 1.3rem;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 1.5rem;
  line-height: 1.5rem;
  height: 48px;
  border-radius: 4px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:invalid > span {
    display: block !important;
  }

  @media screen and (max-width: 87.85em) {
    height: 44px;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 4rem;
  }

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: #77869e;

    @media screen and (max-width: 87.85em) {
      font-size: 14px;
    }
  }
`;

const Select = ({
  children,
  type,
  label,
  handleOnChange,
  placeholder,
  name,
  value,
  pattern,
  onInvalid,
  required,
  min,
  max,
  maxLength,
  minLength,
}) => {
  return (
    <>
      <StyledLabel htmlFor={name} label={label}>
        {label}
      </StyledLabel>
      <StyledSelect
        name={name}
        value={value}
        onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        onInvalid={onInvalid}
        required={required}
        min={min}
        max={max}
        maxLength={maxLength}
        minLength={minLength}
      >
        {children}
      </StyledSelect>
    </>
  );
};

export default Select;
