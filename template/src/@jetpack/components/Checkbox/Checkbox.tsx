import Input from '../Input';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

interface IInputProps {
  wrapperStyle?: {};
  labelStyle?: {};
}

type CheckboxProps = {
  inputProps?: IInputProps;
  label?: string;
};

type Props = InputProps & CheckboxProps;

export default function Checkbox({
  checked = false,
  inputProps = {},
  label,
  name,
  ...restProps
}: Props) {
  return (
    <div style={inputProps?.wrapperStyle}>
      <Input {...restProps} checked={checked} name={name} type='checkbox' />
      {label && (
        <label htmlFor={name} style={inputProps?.labelStyle}>
          {label}
        </label>
      )}
    </div>
  );
}
