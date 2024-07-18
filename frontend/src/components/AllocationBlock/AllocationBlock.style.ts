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

export const RoomCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${COLOR.GRAY_3};
  }
  .room-title {
    display: flex;
    align-items: center;
    color: ${COLOR.BLACK};
    .label {
      font-weight: 600;
      color: ${COLOR.BLUE_1};
      font-size: ${FONT_SIZE.LG};
    }
    .icon-box {
      display: flex;
      align-items: center;
      margin: 0 0.2rem 0 0.5rem;
      .MuiSvgIcon-root {
        font-size: ${ICON_SIZE.LG};
      }
    }
    .number-of-guest {
      align-self: flex-end;
    }
  }
  .guests-info-box {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .guest-box {
      display: flex;
      .title-zone {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        font-weight: 600;
        .title {
        }
        .sub-title {
          color: ${COLOR.GRAY_2};
          font-size: ${FONT_SIZE.SM};
        }
      }
      .input-zone {
      }
    }
  }
`;
