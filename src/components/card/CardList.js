import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px 100px;
  margin: auto;
`;
const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;
