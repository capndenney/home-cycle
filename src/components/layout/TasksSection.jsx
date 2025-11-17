import TaskCard from "../common/TaskCard.JSX";
import sampleTasks from "../../sampleData/sampleTasks.js";

const TasksSection = () => {
  const tasksJSX = [...sampleTasks].map((task) => { //TODO: Each card needs a unique key, which is currently not present?
    return (
        <TaskCard
          key={task.taskId}
          taskId={task.taskId}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          completed={task.completed}
        />
    );
  });

  return (
    <main className="dashboard">
      <h2 id="dashboard-heading">Dashboard</h2>
      <div className="tasks-section">{tasksJSX}</div>
    </main>
  );
};

export default TasksSection;
