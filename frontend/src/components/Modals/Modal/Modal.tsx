import React, { FC, useCallback } from 'react';
import clsx from 'clsx';
import { Fade } from '@mui/material';
import { Button } from 'components/Buttons';
import { useIntl } from 'react-intl';
import { BaseModalProps } from 'components/Modals/types';
import { StyledModal } from './Modal.style';

const Modal: FC<BaseModalProps> = ({
  children,
  className = '',
  confirmTextId = 'common.add',
  cancelTextId = 'common.cancel',
  bodyClass,
  height = '75%',
  maxHeight = '90%',
  onConfirm,
  hasConfirmButton = true,
  onModalClose,
  open,
  submitting,
  title,
  disableBackdropClick = true,
  width = 'auto',
  disableConfirm = false,
}) => {
  const handleModalClose = useCallback(
    (_: object, reason: string) => {
      // DisableBackdropClick
      if (reason && reason === 'backdropClick' && disableBackdropClick) return;
      onModalClose();
    },
    [disableBackdropClick, onModalClose]
  );
  const { formatMessage } = useIntl();
  return (
    <StyledModal
      className={clsx('muiModal', className)}
      closeAfterTransition
      onClose={handleModalClose}
      open={open}
      width={width}
      height={height}
      $maxHeight={maxHeight}
    >
      <Fade in={open}>
        <div className="modalContainer">
          <div className="modalHeader">{title}</div>
          <div className={clsx('modalBody', bodyClass)}>{children}</div>
          <div className="modalFooter">
            <Button disabled={submitting} onClick={onModalClose} outlined loading={submitting}>
              {formatMessage({ id: cancelTextId })}
            </Button>
            {hasConfirmButton && (
              <Button
                disabled={disableConfirm || submitting}
                onClick={onConfirm}
                loading={submitting}
              >
                {formatMessage({ id: confirmTextId })}
              </Button>
            )}
          </div>
        </div>
      </Fade>
    </StyledModal>
  );
};

export default Modal;
