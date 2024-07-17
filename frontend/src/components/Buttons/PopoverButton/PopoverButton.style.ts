import { styled } from "@mui/material/styles";
import { Popover, PopoverProps } from "@mui/material";
import { COLOR } from "src/stylesheet";

export const StyledPopover = styled(Popover)<PopoverProps>(() => ({
  boxShadow: "0px 2px 8px 0px #585757b3",
  color: COLOR.BLACK,
}));
