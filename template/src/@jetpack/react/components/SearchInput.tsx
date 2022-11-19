import { prefix } from '../config';

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput(props: SearchInputProps) {
  return (
    <input {...props} className={`${prefix}-search-input`} type='search' />
  );
}
