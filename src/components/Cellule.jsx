import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledCellule = styled.button`
  border: 1px solid #ccc;
  background-color: white;
  width: 40px;
  height: 40px;
`;

const Canevas = () => {
  const colorState = useSelector((state) => state);
  return (
    <StyledCellule
      onClick={(event) => {
        console.log(colorState.current);
        event.target.style.backgroundColor = colorState.current;
      }}
    ></StyledCellule>
  );
};

export default Canevas;
