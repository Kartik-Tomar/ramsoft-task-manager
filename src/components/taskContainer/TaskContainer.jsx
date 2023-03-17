import './task-container.css';
import Typography from '@mui/material/Typography';
import Task from '../task/Task';

const TaskContainer = ({ label, tableId, taskArray=[], changeStatus, dragData, setDragData }) => {
    const handleOnDrop = (event) => {
        const id = event.dataTransfer.getData('id')
        changeStatus({ id: id + '', status: tableId })
    };
    const handleOnDragStart = (event, id) => {
        event.dataTransfer.setData("id", id);
    };
    const handleOnDragOver = (event) => {
        event.preventDefault();
    };
    return (
        <div className="task-container">
            <div className='task-container-header'>
                <Typography variant="h5" component="h2" gutterBottom>
                    {label}
                </Typography>
            </div>
            <div className='task-container-body' onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
                {taskArray.map(item => (
                    <div  draggable onDragStart={(e) => handleOnDragStart(e, item.id)} onDragOver={handleOnDragOver}>
                        <Task data={item} key={item.id} changeStatus={changeStatus} dragData={dragData} setDragData={setDragData} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskContainer;