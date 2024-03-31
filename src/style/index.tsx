// Import Styled Component
import { InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Main = styled("main")(() => ({
  backgroundColor: "transparent",
  width: "100%",
  height: "90vh",
  display: "flex",
  overflowY: "auto",
  justifyContent: "center",
}));

export const Section = styled("section")(() => ({}));

export const Image = styled("img")(() => ({}));

export const Title = styled("h1")(() => ({
  fontSize: "1.4993rem",
  fontWeight: 600,
  letterSpacing: "0.18px",
}));

export const Description = styled("p")(() => ({
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: 1.429,
  letterSpacing: "0.15px",
}));

export const Form = styled("form")(() => ({}));

export const MyInput = styled(InputBase)(({ theme }) => ({
  marginTop: theme.spacing(3),
  border: "1px solid",
  borderColor: "#EBEBEB",
  borderRadius: 6,
  overflow: "hidden",
  width: "100%",
  "&:focus-within": {
    borderColor: "#6200EE",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 16,
    padding: "14px 16px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    lineHeight: "19.2",
  },
}));

export const MyInputLabel = styled(InputLabel)(() => ({
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: 3,
}));
