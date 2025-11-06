import Card from "./Card"
import Button from "./Button"
import Spacer from "./Spacer"

const TaskCard = ({ title, id, description, dueDate }) => {
    return (
        <Card viewType="view">
          <h3>{title}</h3>
          <p>{id}</p>
          <p>{description}</p>
          <p>{dueDate}</p>
          <p>TODO: Learning Content?</p>
          <Button>TODO: Edit Changes</Button>
          <Spacer marginY="10px" />
        </Card>
    )
}

export default TaskCard