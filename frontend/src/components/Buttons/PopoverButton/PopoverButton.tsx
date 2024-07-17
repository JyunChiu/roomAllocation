import React, { FC, memo, useState, ReactNode, ReactElement, MouseEvent, useEffect } from 'react';
import { PopoverOrigin } from '@mui/material';
import { IconButton, Button } from 'components/Buttons';
import { StyledPopover } from './PopoverButton.style';

interface Props {
  open: boolean;
  onClick: () => void;
  onClose: () => void;
  disabled?: boolean;
  button?: {
    icon?: ReactElement;
    tooltip?: string;
    text?: string;
  };
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  children: ReactNode;
  className?: string;
}

const PopoverButton: FC<Props> = ({
  open,
  onClick,
  onClose,
  disabled,
  button: { icon, tooltip, text, ...restBtnProps } = {},
  anchorOrigin: { vertical: anchorVertical, horizontal: anchorHorizontal } = {},
  transformOrigin: { vertical: transformVertical, horizontal: transformHorizontal } = {},
  children,
  className,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (!open) setAnchorEl(null);
  }, [open]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
    onClick();
  };

  const id = open ? 'cwa-popover' : undefined;
  const AnchorButton = icon ? IconButton : Button;

  return (
    <>
      <AnchorButton
        className={className}
        tooltip={tooltip}
        aria-describedby={id}
        onClick={handleClick}
        disabled={disabled}
        {...restBtnProps}
      >
        {icon ?? text}
      </AnchorButton>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: anchorVertical ?? 'bottom',
          horizontal: anchorHorizontal ?? 'left',
        }}
        transformOrigin={{
          vertical: transformVertical ?? 'top',
          horizontal: transformHorizontal ?? 'left',
        }}
      >
        {children}
      </StyledPopover>
    </>
  );
};

export default memo(PopoverButton);
