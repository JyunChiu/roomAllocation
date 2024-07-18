import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { BORDER_RADIUS } from "src/stylesheet";
import { Opacity } from "@mui/icons-material";

interface Props {
  background: string;
  font: string;
}

export const StyledButton = styled(Button)<Props>(
  ({ background, font, theme }) => ({
    height: "100%",
    minWidth: "100px",
    boxShadow: "none",
    backgroundColor: background,
    color: font,
    border: `1px solid ${background}`,
    padding: "6px 14px",
    borderRadius: "0.375rem",
    "&.disabled": {
      opacity: 0.3,
    },
    "&.small": {
      padding: "2px 14px",
      fontSize: "14px",
      minWidth: "unset",
    },
    "&.round": {
      borderRadius: BORDER_RADIUS.LG,
    },
    "&.outlined": {
      backgroundColor: "transparent",
      color: background,
      "&:hover": {
        backgroundColor: "transparent",
        color: background,
        filter: "brightness(1.2)",
      },
      "&:disabled": {
        backgroundColor: "transparent",
        color: background,
      },
    },
    "&.noTextTransform": {
      textTransform: "none",
    },
    "& .loadingIcon": {
      marginRight: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: background,
      color: font,
      filter: "brightness(1.05)",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: background,
      color: font,
    },
  })
);
