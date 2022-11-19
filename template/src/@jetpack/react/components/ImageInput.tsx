import { prefix } from '../config';

interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  alt?: string;
  name?: string;
  src: string;
}

export default function ImageInput({
  alt,
  name,
  src,
  ...restProps
}: ImageInputProps) {
  return (
    <input
      {...restProps}
      alt={alt || name || src}
      className={`${prefix}-image-input`}
      name={name}
      src={src}
      type='image'
    />
  );
}
