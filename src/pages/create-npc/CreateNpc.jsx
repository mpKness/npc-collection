import { useState } from 'react'
import Select from '../../components/Select'
import TextField from '../../components/TextField'
import { alignmentOptions, genderOptions } from './constants'

const CreateNpc = () => {
  const [name, setName] = useState('') // required
  const [age, setAge] = useState(30)
  const [gender, setGender] = useState(genderOptions[0]) // required
  const [race, setRace] = useState('') // required
  const [alignment, setAlignment] = useState(alignmentOptions[0])

  const changeState = (setter) => (value) => {
    setter(value)
  }

  return (
    <form>
      <TextField id="name" label="Name" value={name} handleChange={changeState(setName)} />
      <TextField id="race" label="Race" value={race} handleChange={changeState(setRace)} />
      <TextField id="age" label="Age" value={age} handleChange={changeState(setAge)} />
      <Select id="gender" label="Gender" items={genderOptions} value={gender} handleChange={changeState(setGender)} />
      <Select id="alignment" label="Alignment" items={alignmentOptions} value={alignment} handleChange={changeState(setAlignment)} />
    </form>
  )
}

export default CreateNpc
