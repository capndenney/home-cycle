import Card from "./Card"
import Input from "./Input"
import Button from "./Button"
import { DayPicker } from "react-day-picker"

const EditTask = () => {
    return (
        <Card viewType="edit add-blur">
          <h3>TODO: Prop for Task Name</h3>
          <p>TODO: Load Task Number</p>
          <Input label="TODO: Task Title"/>
          <Input label="TODO: Task Description"/>
          <Input label="TODO: Completed Checkbox"/>
          <DayPicker>TODO: Load Saved Date</DayPicker>
          <Button label="Save">TODO: Save Changes</Button>
          <Button label="Cancel">TODO: Cancel Changes</Button>
        </Card>
    )
}

export default EditTask