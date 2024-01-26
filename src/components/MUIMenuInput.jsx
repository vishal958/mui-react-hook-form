// MySelect.js
import React from 'react';
import { useController } from 'react-hook-form';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const MySelect = ({ name, label, control, options, ...rest }) => {
  const {
    field: { onChange, onBlur, value, name: fieldName, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        error={!!error}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
