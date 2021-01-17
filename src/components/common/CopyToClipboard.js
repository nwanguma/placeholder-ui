import React, { Component } from "react";
import styled from "styled-components";

import buttonshareicon from "../../assets/images/buttonshareicon.svg";

const Container = styled.div`
  flex: 1;
`;

const CopyToClipboardInput = styled.input`
  background: #f5faf6;
  border: 1px solid rgba(119, 134, 158, 0.3);
  border-radius: 4px;
  height: 48px;
  width: 81%;
  border-radius: 4px;
  padding: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #77869e;
  outline: 0;
  text-decoration: none;
  height: 3.8rem;

  &::selection {
    background-color: transparent;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 82%;
    height: 4.2rem;
  }

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #77869e;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      font-size: 1.4rem;
    }
  }
`;

const ButtonShare = styled.button`
  background-color: #312aaa;
  height: 3.8rem;
  width: 50px;
  border-radius: 4px;
  float: right;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-image: url(${buttonshareicon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2rem;

  &:active {
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwNS4yNzJweCIgaGVpZ2h0PSI0MDUuMjcycHgiIHZpZXdCb3g9IjAgMCA0MDUuMjcyIDQwNS4yNzIiIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwNS4yNzIgNDA1LjI3MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTM5My40MDEsMTI0LjQyNUwxNzkuNjAzLDMzOC4yMDhjLTE1LjgzMiwxNS44MzUtNDEuNTE0LDE1LjgzNS01Ny4zNjEsMEwxMS44NzgsMjI3LjgzNg0KCQljLTE1LjgzOC0xNS44MzUtMTUuODM4LTQxLjUyLDAtNTcuMzU4YzE1Ljg0MS0xNS44NDEsNDEuNTIxLTE1Ljg0MSw1Ny4zNTUtMC4wMDZsODEuNjk4LDgxLjY5OUwzMzYuMDM3LDY3LjA2NA0KCQljMTUuODQxLTE1Ljg0MSw0MS41MjMtMTUuODI5LDU3LjM1OCwwQzQwOS4yMyw4Mi45MDIsNDA5LjIzLDEwOC41NzgsMzkzLjQwMSwxMjQuNDI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 15%;
    max-width: 5rem;
    height: 4.2rem;
  }
`;

export default class CopyToClipboard extends Component {
  copyCodeToClipboard = () => {
    const el = this.input;
    el.select();
    document.execCommand("copy");
  };

  render() {
    const text = this.props.text;

    return (
      <Container>
        <CopyToClipboardInput
          ref={(input) => (this.input = input)}
          value={`https://www.realusers.com/${text.toLowerCase()}`}
          type="text"
          readOnly
        />
        <ButtonShare onClick={() => this.copyCodeToClipboard()}></ButtonShare>
      </Container>
    );
  }
}
