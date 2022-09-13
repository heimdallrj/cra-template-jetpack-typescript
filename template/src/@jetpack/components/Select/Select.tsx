import React from 'react';

type DefaultProps = React.ComponentPropsWithoutRef<'select'>;

interface IOption {
  label: string;
  value: string;
}

type SelectProps = {
  options: IOption[];
};

type Props = DefaultProps & SelectProps;

export default function Select({ options = [], name, ...restProps }: Props) {
  return (
    <select {...restProps} name={name}>
      {options.map(({ value, label }) => (
        <option key={`${name}-${label}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
