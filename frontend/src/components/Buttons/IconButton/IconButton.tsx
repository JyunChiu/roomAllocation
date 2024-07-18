import React, { memo, FC, ReactNode } from "react";
import { IconButtonProps } from "@mui/material";
import { Colors, Sizes } from "types/common";
import { StyledIconButton } from "./IconButton.style";

interface StyledIconButtonProps extends IconButtonProps {
  children: ReactNode;
  tooltip?: string;
  $iconSize?: keyof Sizes;
  $iconColor?: keyof Colors;
  disabled?: boolean;
}

const IconButton: FC<StyledIconButtonProps> = (props) => {
  const {
    children,
    tooltip,
    $iconSize = "MD",
    $iconColor = "BLUE_2",
    onClick,
    disabled,
    ...restProps
  } = props;
  return (
    <StyledIconButton
      $iconSize={$iconSize}
      $iconColor={$iconColor}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </StyledIconButton>
  );
};

export default memo(IconButton);
