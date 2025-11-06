import TaskCard from "../common/TaskCard";

const TasksSection = () => {
    
    const tasksJSX = [].map((task) => {
        return(
            <TaskCard id={task.id} />
        )
    });
    
    return (
        <main>
            <h2>Dashboard</h2>
        <div className="tasks-section">{tasksJSX}</div>
        </main>
    )
}

export default TasksSection