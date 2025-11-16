import Card from "./Card"
import Input from "./Input"
import Button from "./Button"
import { DayPicker } from "react-day-picker"
import { useState } from "react"

const EditTask = ( task ) => {

  const {formData, setFormData} = useState()
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSave = (e) => {
    e.preventDefault();

  }

    return (
        <Card viewType="edit add-blur">
          <h3>{task.title}</h3>
          <p>{task.id}</p>`
          <Input label={task.title} id={`input-title-${task.id}`}/>
          <Input label={task.description}/>
          <Input label={task.completed}/>
          <DayPicker mode="single">TODO: Load Saved Date</DayPicker>
          <Button label="Save">TODO: Save Changes</Button>
          <Button label="Cancel">TODO: Cancel Changes</Button>
        </Card>
    )
}

export default EditTask