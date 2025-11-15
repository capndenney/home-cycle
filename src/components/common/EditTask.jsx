import Card from "./Card"
import Input from "./Input"
import Button from "./Button"
import { DayPicker } from "react-day-picker"

const EditTask = ( task ) => {
    return (
        <Card viewType="edit add-blur">
          <h3>{task.title}</h3>
          <p>{task.id}</p>
          <Input label={task.title}/>
          <Input label={task.description}/>
          <Input label={task.completed}/>
          <DayPicker mode="single">TODO: Load Saved Date</DayPicker>
          <Button label="Save">TODO: Save Changes</Button>
          <Button label="Cancel">TODO: Cancel Changes</Button>
        </Card>
    )
}

export default EditTask