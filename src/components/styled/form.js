import styled from "styled-components";

export const Form = styled.form`
  display: grid;
`;

export const FormGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;

export const FormGroup = styled.div`
  width: 100%;

  //This ensures the input's label's absolute position works
  position: relative;
`;

export const FormGroupRadio = styled(FormGroup)``;

export const FormGroupRadioLabel = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #707070;
`;

export const FormGroupRadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Submit = styled.button`
  cursor: pointer;
  width: 100%;
  height: 4rem;
  background: #0303d6;
  color: #fff;
  font-size: 1.5rem;
  margin-top: 3.5rem;
  outline: 0;
  border: 0;
  border-radius: 5px;
`;
