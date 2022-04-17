type Props = {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  error?: string;
}

export default function Input({ id, label, value, placeholder, onChange, error }: Props) {
  return (
    <label className="form-item" htmlFor={id}>
      <span className="form-item-label">{label}</span>
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error
        ? <span className="form-item-error">{error}</span>
        : null}
    </label>
  )
}