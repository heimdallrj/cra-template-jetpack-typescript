import React from 'react';

import Input from '../Input';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

type FileProps = {
  accept?: string;
  capture?: 'user' | 'environment';
  multiple?: boolean;
};

type Props = InputProps & FileProps;

export default function File({
  accept,
  capture,
  multiple,
  ...restProps
}: Props) {
  return (
    <Input
      {...restProps}
      accept={accept}
      capture={capture}
      multiple={multiple}
      type='file'
    />
  );
}
