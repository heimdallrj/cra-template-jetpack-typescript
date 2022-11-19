import clsx from 'clsx';
import { CSSProperties } from 'react';
import { prefix } from '../config';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  name?: string;
  style?: CSSProperties;
  value?: string;
}

export default function Radio({
  checked = false,
  className,
  disabled = false,
  inputStyle,
  label,
  name,
  style,
  value,
  ...restProps
}: Props) {
  return (
    <div
      className={clsx(
        `${prefix}-radio`,
        checked && `${prefix}-radio--checked`,
        disabled && `${prefix}-radio--disabled`,
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        checked={checked}
        className={`${prefix}-radio__input`}
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='radio'
        value={value}
      />
      {label && (
        <label className={`${prefix}-radio__label`} htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
}
