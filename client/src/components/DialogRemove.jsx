import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const DialogRemove = ({open, onClose, title, content, confirmHandler}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="contained" onClick={onClose}>Cancel</Button>
        <Button onClick={confirmHandler} variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRemove;