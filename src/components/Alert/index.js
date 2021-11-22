import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  notify,
  setNotify,
  vertical = "bottom",
  horizontal = "center",
}) {

  const handleClose = (reason) => {
    if (reason === 'clickaway') return;

    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={notify.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: `${vertical}`, horizontal: `${horizontal}` }}
      >
        <Alert onClose={handleClose} severity={notify.type} sx={{ width: "100%" }}>
          {notify.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
