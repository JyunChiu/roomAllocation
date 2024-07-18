import { styled } from "@mui/material/styles";
import { TextField, TextFieldProps } from "@mui/material";
import { BORDER_RADIUS } from "src/stylesheet";

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    "&.hasIcon": {
      "& .MuiInputBase-input": {
        paddingLeft: 0,
      },
    },
    "& .MuiInputBase-root": {
      borderRadius: BORDER_RADIUS.MD,
    },
    "& .MuiInputBase-input": {
      paddingRight: theme.spacing(0.5),
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
  })
);
