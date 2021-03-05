import React, { Children, useState } from "react";
import styled from "styled-components";

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState("");

  const handleToggle = (id) => {
    isOpen === id ? setIsOpen("") : setIsOpen(id);
  };

  return (
    <AccordionWrapper>
      {Children.map(children, (child) => {
        const id = child.props.children[0].props.id;

        const card = React.cloneElement(child.props.children[0], {
          handleToggle,
        });

        const main = child.props.children[1];

        return (
          <AccordionChildWrapper>
            {card}
            {id === isOpen && main}
          </AccordionChildWrapper>
        );
      })}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div``;

const AccordionChildWrapper = styled.div``;
