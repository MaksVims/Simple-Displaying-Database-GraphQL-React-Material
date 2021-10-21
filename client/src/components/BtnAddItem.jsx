import React from 'react';
import {Button} from "@mui/material";

const style = {
  position: 'absolute',
  right: '20px',
  bottom: '20px',
  borderRadius: '50%',
  width: {lg: '80px', md: '50px'},
  minWidth: 'auto',
  height: {lg: '80px', md: '50px'},
  minHeight: 'auto',
  fontSize: '24px'
}

const BtnAddItem = ({children, ...props}) => {
  return (
    <Button
      size={"small"} {...props}
      sx={{...style}}
      color={'secondary'}
      variant='contained'
    >
      {children}
    </Button>
  );
};

export default BtnAddItem;