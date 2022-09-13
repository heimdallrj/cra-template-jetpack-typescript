import React from 'react';

type Props = React.ComponentPropsWithoutRef<'img'>;

export default function Image({ src, alt, ...restProps }: Props) {
  return <img {...restProps} src={src} alt={alt} />;
}
