import React from 'react';

import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

const TextInput = (props) => {
  const {
    field,
    fieldState,
    // formState: { touchedFields, dirtyFields, errors },
  } = useController(props);
  const { invalid, error, isDirty, isTouched } = fieldState;
  return (
    <>
      <TextField
        {...field}
        error={error}
        label={props?.label}
        type={props?.type}
        variant={props?.variant}
        inputRef={field?.ref}
        helperText={error ? error.message : ''}
      />
    </>
  );
};

export default TextInput;
