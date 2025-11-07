import Card from "./Card"
import Input from "./Input"
import Button from "./Button"
import { DayPicker } from "react-day-picker"

const EditTask = () => {
    return (
        <Card viewType="edit add-blur">
          <h3>TODO: Prop for Task Name</h3>
          <p>TODO: Load Task Number</p>
          <Input>TODO: Task Title</Input>
          <Input>TODO: Task Description</Input>
          <Input>TODO: Completed Checkbox</Input>
          <DayPicker>TODO: Load Saved Date</DayPicker>
          <Button>TODO: Save Changes</Button>
          <Button>TODO: Cancel Changes</Button>
        </Card>
    )
}

export default EditTask