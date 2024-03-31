/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";

import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import { Box, Button, Card, useTheme } from "@mui/material";

import { tokens } from "../../db/theme";
import { Description, Title } from "../../style";

const Transition = forwardRef((props: any, ref: any) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert({ open, handleClose, title, description, handleSubmit }: any) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Dialog
      maxWidth="xl"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Card
        sx={{
          backgroundColor: colors.card[100],
          backgroundImage: "none",
          width: "30em",
          minHeight: "10vh",
          padding: "20px",
        }}
      >
        <Title>{title}</Title>
        <Description
          sx={{
            marginY: "20px",
          }}
        >
          {description}
        </Description>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "20px",
          }}
        >
          <Button size="small" color="error" onClick={handleClose}>
            Bekor qilish
          </Button>
          <Button
            size="small"
            color="info"
            variant="contained"
            onClick={handleSubmit}
          >
            Tasdiqlash
          </Button>
        </Box>
      </Card>
    </Dialog>
  );
}

export default Alert;
