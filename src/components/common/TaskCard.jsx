import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const TaskCard = ( task ) => {

  const { id } = useParams()
  const loadedId = (id ? id : task.taskId)
  const [completeStatus,setCompleteStatus] = useState(task.completed)
  const navigate = useNavigate()
  const handleEditButton = () => navigate(`/task/${loadedId}/edit`)

    return (
      <Card viewType="view" id={loadedId}> 
        <h3>{task.title}</h3>
        <p>{loadedId}</p>
        <p>{task.description}</p>
        <p>Completed:({completeStatus ? `\u2705` : `\u274C` })</p>
        <p>Due Date: {task.dueDate}</p>
        <p>TODO: Learning Content?</p>
        <Button id={`edit-task-${id}`} label="Edit" handleClick={handleEditButton}/>
        {!completeStatus && <Button id={`complete-task-${id}`} label="Complete" handleClick={() => setCompleteStatus(true)} />}
      </Card>
    );
};

export default TaskCard;
