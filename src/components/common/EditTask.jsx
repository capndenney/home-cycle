import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import sampleTasks from "../../sampleData/sampleTasks";
import { useParams, useNavigate } from "react-router";

const EditTask = () => {
  const {id} = useParams()
  const taskNum = Number(id)
  const loadTask = sampleTasks.find(t => t.taskId === taskNum)

  const newTaskId =
    sampleTasks.reduce((max, t) => {
      return t.taskId > max ? t.taskId : max;
    }, 0) + 1;

  const getInitialTaskData = () => {
    if (loadTask) {
      return {
        title: loadTask.title || "",
        taskId: loadTask.taskId,
        description: loadTask.description || "",
        completed: loadTask.completed || false,
        dueDate: loadTask.dueDate || "",
      };
    } else {
      return {
        title: "",
        taskId: newTaskId,
        description: "",
        completed: false,
        dueDate: "",
      };
    }
  };

  const initialTaskData = getInitialTaskData()

  const [loadedTaskData] = useState(initialTaskData);
  const [descData, setDescData] = useState(initialTaskData.description);
  const [compData, setCompData] = useState(initialTaskData.completed);
  const [titleData, setTitleData] = useState(initialTaskData.title);
  const [dueData, setDueData] = useState(initialTaskData.dueDate);

  const titleChange = (e) => {
    setTitleData(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescData(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueData(e.target.date);
  };

  const handleCheck = (e) => {
    setCompData(e.target.checked);
  };

  const navigate = useNavigate()
  const handleSave = (e) => {
    e.preventDefault();
    //TODO: Save Logic
    //TODO: Link to view task page for that taskId
    navigate(`/task/${taskNum}`)
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setDescData(loadedTaskData.description);
    setCompData(loadedTaskData.completed);
    setTitleData(loadedTaskData.title);
    setDueData(loadedTaskData.dueDate);
  };

  return (
    <Card viewType="edit add-blur">
      <h3>{titleData}</h3>
      <p>{loadedTaskData.taskId}</p>
      <Input
        label="Title"
        id={`input-title-${loadedTaskData.taskId}`}
        value={titleData}
        handleChange={titleChange}
        required={true}
      />
      <Input
        label="Description"
        value={descData}
        handleChange={handleDescChange}
      />
      <Input
        type="checkbox"
        checked={compData}
        label="Completed:"
        handleChange={handleCheck}
      />
      <h4>Due Date:</h4>
      <DayPicker mode="single" value={dueData} handleChange={handleDateChange}>
        TODO: Load Saved Date
      </DayPicker>
      <Button label="Save" handleClick={handleSave}>
        TODO: Save Changes
      </Button>
      <Button label="Cancel" handleClick={handleCancel}>
        TODO: Cancel Changes
      </Button>
    </Card>
  );
};

export default EditTask;