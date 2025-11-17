import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router";

const TaskCard = ( task ) => {

  console.log(task)

  const [completeStatus,setCompleteStatus] = useState(task.completed)
  const navigate = useNavigate()
  const handleEditButton = () => navigate(`/task/${task.taskId}/edit`) // TODO: taskID is loading as undefined

    return (
      <Card viewType="view" key={`task-${task.taskId}`}> 
        <h3>{task.title}</h3>
        <p>{task.taskId}</p>
        <p>{task.description}</p>
        <p>Completed:({completeStatus ? `\u2705` : `\u274C` })</p>
        <p>Due Date: {task.dueDate}</p>
        <p>TODO: Learning Content?</p>
        <Button id={`edit-task-${task.taskId}`} label="Edit" handleClick={handleEditButton}/>
        {!completeStatus && <Button id={`complete-task-${task.taskId}`} label="Complete" handleClick={() => setCompleteStatus(true)} />}
      </Card>
    );
};

export default TaskCard;
