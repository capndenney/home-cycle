import Card from "./Card"
import Input from "./Input"
import Button from "./Button"
import { DayPicker } from "react-day-picker"
import { useState } from "react"
import sampleTasks from "../../sampleData/sampleTasks"

const EditTask = ( task ) => {

  const newTaskId = sampleTasks.reduce((max, t) => { //TODO: Use newTaskId for new task, load taskId for existing tasks
    return t.taskId > max ? t.taskId : max;
  }, 0) + 1; 

  const initialFeedback = { name: "", email: "", feedback: "" }; 
  const [inputData, setInputData] = useState(initialFeedback);
  const [titleData, setTitleData] = useState(null)

  const titleChange = (e) => {
    setTitleData(e.target.value)
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputData((oldData) => ({ ...oldData, [id]: value }));
  };

  // const {formData, setFormData} = useState()
  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value})
  // }

  const handleSave = (e) => {
    e.preventDefault();
  }

    return (
        <Card viewType="edit add-blur">
          <h3>{titleData}</h3>
          <p>{task.id ? task.id : newTaskId}</p>
          <Input label={task.title} id={`input-title-${task.id}`} handleChange={titleChange}/>
          <Input label={task.description} handleChange={handleChange}/>
          <Input type="checkbox" label={task.completed}/>
          <DayPicker mode="single">TODO: Load Saved Date</DayPicker>
          <Button label="Save">TODO: Save Changes</Button>
          <Button label="Cancel">TODO: Cancel Changes</Button>
        </Card>
    )
}

export default EditTask