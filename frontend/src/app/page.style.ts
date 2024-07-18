// @use client
import styled from "styled-components";
import { COLOR, BORDER_RADIUS } from "src/stylesheet";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 5% 5%;
`;

export const BlockContainer = styled.div`
  flex: 1;
  border: 1px solid ${COLOR.BLUE_2};
  border-radius: ${BORDER_RADIUS.SM};
  padding: 1rem;
`;
