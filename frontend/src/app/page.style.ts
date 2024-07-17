// @use client
import styled from "styled-components";
import { COLOR, BORDER_RADIUS } from "src/stylesheet";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 3rem;
  padding: 5% 5%;
`;

export const BlockContainer = styled.div`
  width: 50%;
  border: 1px solid ${COLOR.GRAY_1};
  border-radius: ${BORDER_RADIUS.SM};
  padding: 1rem;
`;
