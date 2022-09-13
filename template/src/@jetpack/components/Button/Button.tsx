import React from 'react';

type Props = React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  autoFocus,
  children,
  disabled,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate,
  formTarget,
  name,
  type = 'button',
  ...restProps
}: Props) {
  return (
    <button
      {...restProps}
      autoFocus={autoFocus}
      disabled={disabled}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      name={name}
      type={type}
    >
      {children}
    </button>
  );
}
