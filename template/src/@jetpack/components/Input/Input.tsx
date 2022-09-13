type Props = React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  type = 'text',
  name,
  minLength,
  maxLength,
  size,
  ...restProps
}: Props) {
  return (
    <input
      {...restProps}
      type={type}
      id={name}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      size={size}
    />
  );
}
