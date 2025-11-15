import Card from "./Card"
import Input from "./Input"
import Button from "./Button"
import { DayPicker } from "react-day-picker"

const EditTask = ( ) => {
    return (
        <Card viewType="edit add-blur">
          <h3>TODO: Task Name</h3>
          <p>TODO: TaskID</p>
          <Input label="TODO: taskName"/>
          <Input label="TODO: taskDesc"/>
          <Input label="TODO: completed"/>
          <DayPicker mode="single">TODO: Load Saved Date</DayPicker>
          <Button label="Save">TODO: Save Changes</Button>
          <Button label="Cancel">TODO: Cancel Changes</Button>
        </Card>
    )
}

export default EditTask