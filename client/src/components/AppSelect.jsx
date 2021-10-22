import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const AppSelect = ({options, title, value, onChange}) => {

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