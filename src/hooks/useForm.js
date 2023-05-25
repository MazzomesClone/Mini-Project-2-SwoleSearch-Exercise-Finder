import { useState } from 'react';

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}

export function useFormPack() {
  const nameProps = useFormInput('')
  const typeProps = useFormInput('')
  const muscleProps = useFormInput('')
  const difficultyProps = useFormInput('')

  const formPack = {
    nameProps,
    typeProps,
    muscleProps,
    difficultyProps
  }

  return formPack
}