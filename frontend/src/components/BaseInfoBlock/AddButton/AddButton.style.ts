import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(2)}`,
  gap: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .fields-box": {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(2),
  },
  "& .footer": {
    display: "flex",
    gap: theme.spacing(2),
  },
}));
