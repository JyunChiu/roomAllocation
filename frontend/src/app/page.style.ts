// @use client
import styled from "styled-components";
import { COLOR, BORDER_RADIUS, SCROLL_BAR_SIZE } from "src/stylesheet";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 5% 5% 3%;
`;

export const BlockContainer = styled.div`
  flex: 1;
  border-radius: ${BORDER_RADIUS.SM};
  padding: 1.5rem;
  box-shadow: 6px 6px 10px #d5d6d7, -8px -8px 20px #f6fcfdb0,
    inset 5px 3px 6px #f6fcfdbf, inset 0px 0px 6px #d5d6d7;
  .title-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .rooms-box {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    height: 100%;
    overflow: auto;
    padding: 0.5rem;
    &::-webkit-scrollbar {
      width: ${SCROLL_BAR_SIZE.XS};
    }
  }
`;
