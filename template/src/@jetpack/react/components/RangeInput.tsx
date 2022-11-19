import { prefix } from '../config';

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number;
  max: number;
  step?: number;
}

export default function RangeInput({
  max,
  min = 0,
  step = 0,
  ...restProps
}: RangeInputProps) {
  return (
    <input
      {...restProps}
      className={`${prefix}-range-input`}
      type='range'
      min={min}
      max={max}
      step={step}
    />
  );
}
