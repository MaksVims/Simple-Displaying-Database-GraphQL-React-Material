import React from 'react';
import PropTypes from 'prop-types'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const AppSelect = ({options, title = '', value, onChange}) => {

  return (
    <FormControl fullWidth>
      <InputLabel id={title + 'label'}>{title}</InputLabel>
      <Select
        label={title}
        id={title + 'label'}
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;

AppSelect.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }))
}