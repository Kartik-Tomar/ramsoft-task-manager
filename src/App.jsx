import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TaskContainer from './components/taskContainer/TaskContainer';
import './App.css';
import CreateTask from './components/createTask/CreateTask';

const App = () => {

  const [taskData, setTaskData] = useState({});
  const [todoTask, setTodoTask] = useState([]);
  const [progressTask, setProgressTask] = useState([]);
  const [doneTask, setDoneTask] = useState([]);

  useEffect(() => {
    let task = window.localStorage.getItem('tasks');
    if (task) setTasks(task);
  }, []);

  useEffect(() => {
    let taskArray = Object.values(taskData);
    let todoArray = [];
    let progressArray = [];
    let doneArray = [];
    taskArray.forEach(item => {
      if (item.status == 'done') doneArray.push(item)
      else if (item.status == 'inProgress') progressArray.push(item)
      else todoArray.push(item)
    })
    setDoneTask(doneArray);
    setProgressTask(progressArray);
    setTodoTask(todoArray);
  }, [taskData]);

  const asyncStringify = (obj) => {
    return new Promise((resolve, reject) => {
      resolve(JSON.stringify(obj));
    });
  }

  const asyncParse = (str) => {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(str));
    });
  };

  const saveTaskLS = async (data) => {
    let newData = await asyncStringify(data);
    window.localStorage.setItem('tasks', newData);
  };

  const setTasks = async (task) => {
    let data = await asyncParse(task);
    setTaskData(data);
  };

  const saveNewTask = (data) => {
    let newData = { ...taskData, [data.id]: data };
    setTaskData(newData);
    saveTaskLS(newData);
  };

  const changeStatus = ({id, status}) => {
    let newData = { ...taskData };
    newData[id].status = status;
    setTaskData(newData);
    saveTaskLS(newData);
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Task Manager
      </Typography>
      <CreateTask saveNewTask={saveNewTask} />
      <div className='table-container'>
        <TaskContainer label={"Todo"} taskArray={todoTask} changeStatus={changeStatus} />
        <TaskContainer label={"In Progress"} taskArray={progressTask} changeStatus={changeStatus} />
        <TaskContainer label={"Done"} taskArray={doneTask} changeStatus={changeStatus} />
      </div>
    </Container>
  );
}

export default App;
