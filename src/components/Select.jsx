import MUISelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const Select = ({id, items, label, handleChange, value}) => {
  const onChange = (event) => {
    event.preventDefault()
    handleChange(event.target.value)
  }
  const buildItems = () => (
    items.map((item) => (
      <MenuItem value={item}>{item}</MenuItem>
    ))
  )
  return (
    <FormControl>
      <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
      <MUISelect
        labelId={`${id}-form-label`}
        id={`${id}-select`}
        value={value}
        onChange={onChange}
      >
        {buildItems()}
      </MUISelect>
    </FormControl>
  )
}

export default Select;
