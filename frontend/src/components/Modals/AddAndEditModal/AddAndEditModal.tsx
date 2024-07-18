import React, { FC, ReactNode } from 'react';
import { StyledModal } from './AddAndEditModal.style';

interface Props {
  children: ReactNode;
  confirmTextId: string;
  height?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onModalClose: () => void;
  submitting: boolean;
  title: string;
  width?: string;
  disableConfirm?: boolean;
  maxHeight?: number;
}

const AddAndEditModal: FC<Props> = ({
  children,
  confirmTextId,
  height = 'auto',
  isOpen,
  onConfirm,
  onModalClose,
  submitting,
  title,
  width = '55%',
  disableConfirm,
  maxHeight,
}) => {
  return (
    <StyledModal
      className="add-modal"
      open={isOpen}
      onModalClose={onModalClose}
      width={width}
      height={height}
      confirmTextId={confirmTextId}
      title={title}
      onConfirm={onConfirm}
      submitting={submitting}
      disableConfirm={disableConfirm}
      maxHeight={maxHeight}
    >
      {children}
    </StyledModal>
  );
};

export default AddAndEditModal;
