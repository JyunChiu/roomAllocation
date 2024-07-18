import { styled } from "@mui/material/styles";
import { IconButton, IconButtonProps } from "@mui/material";
import { Colors, Sizes } from "types/common";
import { COLOR, ICON_SIZE } from "src/stylesheet";

interface Props extends IconButtonProps {
  $iconSize: string;
  $iconColor: string;
}

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (propName: string): boolean => !propName.startsWith("$"),
})<Props>(({ $iconColor, $iconSize }) => ({
  "&.MuiIconButton-root": {
    color: COLOR[$iconColor as keyof Colors],
    "&.Mui-disabled": {
      color: COLOR.GRAY_2,
    },
  },
  "& .MuiSvgIcon-root": {
    fontSize: ICON_SIZE[$iconSize as keyof Sizes],
  },
}));
