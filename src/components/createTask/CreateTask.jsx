import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import "./create-task.css"

const defaultValues = {
    name: "",
    description: "",
    deadline: "",
    status: "todo"
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateTask = ({saveNewTask}) => {
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState(defaultValues);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formValues.id = Date.now();
        console.log(formValues);
        saveNewTask(formValues);
        setFormValues(defaultValues)
        handleClose();
    };

    return (
        <>
            <Button onClick={handleOpen} variant="contained">Create Task</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <form onSubmit={handleSubmit} className="create-task-form">
                        <TextField
                            id="name-input"
                            name="name"
                            label="name"
                            type="text"
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="description-input"
                            name="description"
                            label="description"
                            type="text"
                            value={formValues.description}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="deadline-input"
                            name="deadline"
                            label="deadline"
                            type="text"
                            value={formValues.deadline}
                            onChange={handleInputChange}
                        />
                        <Button variant="contained" type='submit'>Create</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default CreateTask