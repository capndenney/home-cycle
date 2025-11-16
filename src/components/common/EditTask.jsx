import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import sampleTasks from "../../sampleData/sampleTasks";

const EditTask = (task) => {
  const newTaskId =
    sampleTasks.reduce((max, t) => {
      return t.taskId > max ? t.taskId : max;
    }, 0) + 1;

  const getInitialTaskData = () => {
    if (task) {
      return {
        title: task.title || "",
        id: task.taskId || newTaskId,
        description: task.description || "",
        completed: task.completed || false,
        dueDate: task.dueDate || "",
      };
    } else {
      return {
        title: "",
        id: newTaskId,
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

  const handleSave = (e) => {
    e.preventDefault();
    //TODO: Save Logic
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
      <p>{task.id ? task.id : newTaskId}</p>
      <Input
        label={titleData}
        id={`input-title-${task.id}`}
        value={titleData}
        handleChange={titleChange}
      />
      <Input
        label={task.description}
        value={descData}
        handleChange={handleDescChange}
      />
      <Input
        type="checkbox"
        checked={compData}
        label={task.completed}
        handleChange={handleCheck}
      />
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