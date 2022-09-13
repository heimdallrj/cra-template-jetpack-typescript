import React from 'react';

import Input from '../Input';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

interface IInputProps {
  wrapperStyle?: {};
  labelStyle?: {};
}

type RadioProps = {
  inputProps?: IInputProps;
  label?: string;
};

type Props = InputProps & RadioProps;

export default function Radio({
  inputProps = {},
  name,
  checked,
  label,
  ...restProps
}: Props) {
  return (
    <div style={inputProps?.wrapperStyle}>
      <Input {...restProps} type='radio' name={name} checked={checked} />
      <label style={inputProps?.labelStyle} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
