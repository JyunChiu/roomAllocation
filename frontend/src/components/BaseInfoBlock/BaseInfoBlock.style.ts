import styled from "styled-components";
import { SCROLL_BAR_SIZE, COLOR, BORDER_RADIUS } from "src/stylesheet";
import { BlockContainer } from "src/app/page.style";

export const Container = styled(BlockContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40%;
  flex: unset;
  .label {
    font-weight: 600;
    color: ${COLOR.BLUE_1};
  }
`;

export const GuestArea = styled.div`
  display: flex;
  gap: 2rem;
  .field-box {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const RoomArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const PriceBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1rem 1rem;
  box-shadow: 0 0 6px 0 #57575740;
  border-radius: ${BORDER_RADIUS.SM};
  background: ${COLOR.BLUE_4};
`;
