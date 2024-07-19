import styled from "styled-components";
import { FONT_SIZE, COLOR, BORDER_RADIUS } from "src/stylesheet";
import { BlockContainer } from "src/app/page.style";

export const Container = styled(BlockContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  .reset-btn {
    position: absolute;
    bottom: 100%;
    height: 2.5rem;
    left: 0;
    margin: 0 0 0.8rem;
  }
  .sub-title {
    color: ${COLOR.GRAY_2};
    font-size: ${FONT_SIZE.SM};
  }
  .title-box {
    .label {
      font-size: ${FONT_SIZE.LG};
      color: ${COLOR.BLACK};
    }
    .value {
      font-weight: 600;
      color: ${COLOR.BLUE_1};
      font-size: ${FONT_SIZE.XL};
    }
    .sub-title {
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 0.5rem;
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
