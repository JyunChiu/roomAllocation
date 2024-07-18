import styled from "styled-components";
import { FONT_SIZE, COLOR, BORDER_RADIUS, ICON_SIZE } from "src/stylesheet";
import { BlockContainer } from "src/app/page.style";

export const Container = styled(BlockContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .title-box {
    .label {
      font-size: ${FONT_SIZE.LG};
    }
    .value {
      font-weight: 600;
      color: ${COLOR.BLUE_1};
      font-size: ${FONT_SIZE.XL};
    }
  }
  .unassigned-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${COLOR.GRAY_2};
    background: ${COLOR.BLUE_4};
    padding: 1.2rem 1rem;
    border-radius: ${BORDER_RADIUS.SM};
    border: 1px solid ${COLOR.BLUE_3};
    margin: 0.5rem 0 0;
    .value {
      font-weight: 600;
      color: ${COLOR.GRAY_1};
      font-size: ${FONT_SIZE.REGULAR};
    }
  }
  .rooms-box {
    gap: 0;
    padding: 0 1rem;
  }
`;
