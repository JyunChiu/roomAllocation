import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "src/stylesheet";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3rem);
  grid-auto-rows: 3rem;
  gap: 0.5rem;
  .guest-input {
    .MuiInputBase-root {
      border-radius: ${BORDER_RADIUS.SM};
      height: 100%;
      .MuiInputBase-input {
        padding: 0;
        text-align: center;
      }
    }
  }
  .button {
    min-width: unset;
    font-size: ${FONT_SIZE.LG};
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
