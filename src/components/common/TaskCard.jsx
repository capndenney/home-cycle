import Card from "./Card";
import Button from "./Button";
import { useState } from "react";

const TaskCard = ( task ) => {

  const [completeStatus,setCompleteStatus] = useState(task.completed)

    return (
      <Card viewType="view" key={`task-${task.taskId}`}>
        <h3>{task.title}</h3>
        <p>{task.taskId}</p>
        <p>{task.description}</p>
        <p>Completed:({completeStatus ? `\u2705` : `\u274C` })</p>
        <p>Due Date: {task.dueDate}</p>
        <p>TODO: Learning Content?</p>
        <Button id={`edit-task-${task.taskId}`} label="Edit" />
        {!completeStatus && <Button id={`complete-task-${task.taskId}`} label="Complete" handleClick={() => setCompleteStatus(true)} />}
      </Card>
    );
};

export default TaskCard;
