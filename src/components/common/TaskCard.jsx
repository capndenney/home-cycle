import Card from "./Card"
import Button from "./Button"

const TaskCard = ({ title, id, description, dueDate }) => {

    return (
        <Card viewType="view">
          <h3>{title}</h3>
          <p>{id}</p>
          <p>{description}</p>
          <p>Due Date: {dueDate}</p>
          <p>TODO: Learning Content?</p>
          <Button id={`task-${id}`} label="Edit" />
        </Card>
    )
}

export default TaskCard