import styled from "styled-components";

const Card = ({ children, handleToggle, id }) => {
  return (
    <CardWrapper
      data-id={id}
      onClick={() => {
        handleToggle && handleToggle(id);
      }}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  height: 11.5rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: relative;
`;
