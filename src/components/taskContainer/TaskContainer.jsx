import './task-container.css';
import Typography from '@mui/material/Typography';
import Task from '../task/Task';

const TaskContainer = ({ label, taskArray=[], changeStatus }) => {
    return (
        <div className="task-container">
            <div className='task-container-header'>
                <Typography variant="h5" component="h2" gutterBottom>
                    {label}
                </Typography>
            </div>
            <div className='task-container-body'>
                {taskArray.map(item => (
                    <Task data={item} key={item.id} changeStatus={changeStatus}/>
                ))}
            </div>
        </div>
    )
}

export default TaskContainer;