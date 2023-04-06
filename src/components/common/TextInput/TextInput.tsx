import './TextInput.scss'

const TextInput = ({ placeholder, value, onChange }: any) => {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput
