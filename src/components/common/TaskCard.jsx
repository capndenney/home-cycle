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

    return (
      <Card viewType="view" key={`task-${task.taskId}`}>
        <h3>{task.title}</h3>
        <p>{task.taskId}</p>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>TODO: Learning Content?</p>
        <Button id={`task-${task.taskId}`} label="Edit" />
      </Card>
    );
};

export default TaskCard;
