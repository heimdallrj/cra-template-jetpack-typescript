import React from 'react';

type DefaultProps = React.ComponentPropsWithoutRef<'textarea'>;

type TextareaProps = {
  text: string;
};

type Props = DefaultProps & TextareaProps;

export default function Textarea({
  cols,
  name,
  rows,
  text,
  ...restProps
}: Props) {
  return <textarea {...restProps}>{text}</textarea>;
}
