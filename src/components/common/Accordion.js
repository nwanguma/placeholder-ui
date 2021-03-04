import React, { useState } from "react";
import styled from "styled-components";

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState("");

  return <AccordionWrapper>{children}</AccordionWrapper>;
};

export default Accordion;

const AccordionWrapper = styled.div``;

//we have two children - the card and the content
//the card with have a data id corresponding to some unique value
//the key here is to setisopen to that value
//conditionally render the content if the first child's is set to isopen
