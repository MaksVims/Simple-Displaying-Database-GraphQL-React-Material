import React from 'react';
import {Box, InputLabel} from "@mui/material";
import {Search} from "@mui/icons-material";
import PropTypes from 'prop-types';

const styleBox = {
  backgroundColor: '#b7b3b3',
  marginBottom: 3,
  padding: '10px',
  height: 'auto',
}

const styleInput = {
  backgroundColor: 'transparent',
  padding: '5px',
  width: '100%',
  outline: 'none',
  border: 'none'
}

const AppSearch = ({value, onChange}) => {
  return (
    <Box sx={styleBox}>
      <InputLabel sx={{display: 'flex', alignItems: 'center'}}>
        <Search sx={{width: 25, height: 25, cursor: 'pointer'}}/>
        <input
          placeholder="Enter value on search..."
          style={styleInput}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </InputLabel>
    </Box>
  );
};

export default AppSearch;

AppSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}