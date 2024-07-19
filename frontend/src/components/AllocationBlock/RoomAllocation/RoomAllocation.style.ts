import styled from "styled-components";
import { FONT_SIZE, COLOR, ICON_SIZE } from "src/stylesheet";

export const RoomCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
    .sub-title {
      margin-left: auto;
    }
  }
  .guests-info-box {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .guest-box {
      display: flex;
      justify-content: space-between;
      .title-zone {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        font-weight: 600;
        .title {
        }
      }
      .input-zone {
      }
    }
  }
`;
