import TaskCard from "../common/TaskCard.JSX";
import { useParams } from "react-router";
import sampleTasks from "../../sampleData/sampleTasks";
// import { useState, useEffect } from "react";

const ViewTask = () => {
  const { id } = useParams();
  const foundTask = sampleTasks.find((t) => t.taskId === Number(id));

//TODO: Allow navigation to different tasks from task detail page
//   const [task, setTask] = useState(null);
//   useEffect(() => {
    // setTask(foundTask);
//   }, [id]);

  return (
    <TaskCard
      key={foundTask.taskId}
      id={`task-${foundTask.taskId}`}
      title={foundTask.title}
      description={foundTask.description}
      dueDate={foundTask.dueDate}
      completed={foundTask.completed}
    />
  );
};

export default ViewTask;
