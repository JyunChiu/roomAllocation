import { styled } from "@mui/material/styles";
import {
  BORDER_RADIUS,
  FONT_SIZE,
  SCROLL_BAR_SIZE,
  COLOR,
} from "src/stylesheet";
import { Modal, ModalProps } from "@mui/material";

interface Props extends ModalProps {
  width?: string | number;
  height?: string | number;
  $maxHeight?: string | number;
}

export const StyledModal = styled(Modal, {
  shouldForwardProp: (propName: string): boolean => !propName.startsWith("$"),
})<Props>(({ width, height, $maxHeight }) => ({
  "& .modalContainer": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: COLOR.WHITE,
    borderRadius: BORDER_RADIUS.SM,
    display: "flex",
    flexDirection: "column",
    width,
    height,
    maxHeight: $maxHeight,
    padding: "1.5rem 3rem",
  },
  "& .modalHeader": {
    fontSize: FONT_SIZE.LG,
    fontWeight: "bold",
    textAlign: "center",
  },
  "& .modalBody": {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
      width: SCROLL_BAR_SIZE.XS,
    },
  },
  "& .modalFooter": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.5rem 0 0",
    gap: "2rem",
  },
}));
