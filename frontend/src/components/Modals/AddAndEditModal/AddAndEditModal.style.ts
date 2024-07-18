import { styled } from '@mui/material/styles';
import { Modal } from '../Modal';

export const StyledModal = styled(Modal)(({ theme }) => ({
  '& .modalContainer': {
    minWidth: 800,
  },
  '& .modalBody': {
    padding: `${theme.spacing(4)} 0 0`,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2),
    '& .textarea-container, & .long, & .input-container.long': {
      gridColumn: 'span 2',
    },
  },
}));
