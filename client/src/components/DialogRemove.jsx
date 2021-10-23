import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import PropTypes from 'prop-types'

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

DialogRemove.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  confirmHandler: PropTypes.func
}