import Card from "./Card";
import Button from "./Button";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import sampleTasks from "../../sampleData/sampleTasks";

const TaskCard = ( ) => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const foundTask = sampleTasks.find((t) => t.taskId === Number(id));
    setTask(foundTask);
  }, [id]);

  if (task) {
    return (
      <Card viewType="view">
        <h3>{task.title}</h3>
        <p>{task.taskId}</p>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>TODO: Learning Content?</p>
        <Button id={`task-${task.taskId}`} label="Edit" />
      </Card>
    );
  } else {
    return <h3>Task not Found!</h3>;
    }
};

export default TaskCard;
