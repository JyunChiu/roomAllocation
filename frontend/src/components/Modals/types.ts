import { ReactNode } from 'react';

interface BaseModalProps {
  open: boolean;
  onConfirm?: () => void;
  onModalClose: () => void;
  children: ReactNode;
  className?: string;
  hasConfirmButton?: boolean;
  confirmTextId?: string;
  cancelTextId?: string;
  bodyClass?: string;
  height?: string;
  title?: string | ReactNode;
  width?: string | number;
  maxHeight?: string | number;
  submitting?: boolean;
  disableBackdropClick?: boolean;
  disableConfirm?: boolean;
}

export type { BaseModalProps };
