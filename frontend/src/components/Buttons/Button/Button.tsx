import React, { memo, FC, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonProps } from "@mui/material";
import { COLOR } from "src/stylesheet";
import { StyledButton } from "./Button.style";

interface ButtonElementProps extends ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  outlined?: boolean;
  small?: boolean;
  round?: boolean;
  error?: boolean;
  noTextTransform?: boolean;
  startIcon?: ReactElement;
}

interface CustomButtonProps extends ButtonElementProps {
  tooltip?: string;
}

const ButtonElement: FC<ButtonElementProps> = ({
  disabled = false,
  loading = false,
  className,
  children,
  outlined,
  small,
  round,
  error,
  noTextTransform,
  onClick,
  startIcon,
  ...restProps
}) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      className={clsx("muiButton", className, {
        outlined,
        small,
        round,
        noTextTransform,
      })}
      onClick={onClick}
      startIcon={startIcon}
      background={COLOR.BLUE_2}
      font={COLOR.WHITE}
      {...restProps}
    >
      {loading ? (
        <>
          <CircularProgress color="inherit" size={12} className="loadingIcon" />
          {children}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

const Button: FC<CustomButtonProps> = (props) => {
  const { tooltip, ...restProps } = props;
  return <ButtonElement {...restProps} />;
};

export default memo(Button);
