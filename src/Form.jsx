import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import TextInput from './components/MUIInput';
import Button from './components/MUIButton';

export default function App() {
  const {
    handleSubmit,
    control,
    register,
    setError,
    clearErrors,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      firstName: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  // console.log(formState);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        control={control}
        name="firstName"
        label="First Name"
        rules={{
          required: 'This field is required',
          minLength: { value: 3, message: 'Min length is 3' },
          pattern: '',
        }}
      />
      <Button disabled={!isValid} type="submit">
        Submit
      </Button>
    </form>
  );
}
