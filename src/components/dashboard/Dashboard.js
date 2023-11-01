// pages/dashboard.js
import ChatWindow from '../components/ChatWindow';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const tasks = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <ChatWindow />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
