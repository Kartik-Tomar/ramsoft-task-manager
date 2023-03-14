import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './task.css'

const style = {
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    m: 1
};
const Task = ({ data, changeStatus }) => {
    const handleChange = (e) => changeStatus({ id: data.id, status: e.target.value})
    return (
        <Box sx={style} >
            <Typography variant="h6" component="p" gutterBottom>
                Name: {data.name}
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
                Description: {data.description}
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
                Deadline: {data.deadline}
            </Typography>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.status}
                label="Status"
                onChange={handleChange}
            >
                <MenuItem value='todo'>To Do</MenuItem>
                <MenuItem value='inProgress'>In Progress</MenuItem>
                <MenuItem value='done'>Done</MenuItem>
            </Select>
        </Box>
    )
}

export default Task