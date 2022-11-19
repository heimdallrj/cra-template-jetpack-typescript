import { prefix } from '../config';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function FileInput(props: FileInputProps) {
  return <input {...props} className={`${prefix}-file-input`} type='file' />;
}
