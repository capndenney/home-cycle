import TaskCard from "../common/TaskCard";
import Spacer from "../common/Spacer";
import sampleTasks from "../../sampleData/sampleTasks";

const TasksSection = () => {
  const tasksJSX = [...sampleTasks].map((task) => {
    return (
      <>
        <TaskCard
          key={`task-${task.id}`}
          id={task.id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
        />
        <Spacer marginY="10px" />
      </>
    );
  });

  return (
    <main className="dashboard">
      <h2>Dashboard</h2>
      <div className="tasks-section">{tasksJSX}</div>
    </main>
  );
};

export default TasksSection;
