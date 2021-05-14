import MUITextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const TextField = ({id, label, handleChange, value, type}) => {
  const onChange = (event) => {
    event.preventDefault()
    handleChange(event.target.value)
  }

  return (
    <FormControl>
      <MUITextField
        id={`${id}-text-field`}
        label={label}
        value={value}
        onChange={onChange}
        type={type}
      />
    </FormControl>
  )
}

TextField.defaultValues = {
  type: 'text'
}

export default TextField
