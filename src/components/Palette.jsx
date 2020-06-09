import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const StyledPalette = styled.div`
  margin: auto;
  margin-bottom: 100px;
  display: flex;

  ul {
    display: flex;

    li {
      margin: 30px;
      border: 3px solid lightgray;

      
      }
    }
  }
`;

const Palette = () => {
  const colorState = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  return (
    <StyledPalette>
      <p>Palette:</p>
      <ul>
        {colorState.available.map((color) => {
          return (
            <li
              onClick={() => {
                console.log(color);
                dispatch({ newColor: color, type: "CHANGE_COLOR" });
              }}
            >
              {color}
            </li>
          );
        })}
      </ul>
    </StyledPalette>
  );
};

export default Palette;
