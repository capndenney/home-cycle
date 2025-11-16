import Card from "./Card";
import Button from "./Button";

const TaskCard = ( task ) => {

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
