import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [action, setAction] = useState('');

  const handleDialogOpen = (task, actionType) => {
    setSelectedTask(task);
    setAction(actionType);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedTask(null);
    setAction('');
  };

  const handleConfirmAction = () => {
    if (action === 'complete') {
      completeTask(selectedTask.id);
    } else if (action === 'delete') {
      deleteTask(selectedTask.id);
    }
    handleDialogClose();
  };

  return (
    <div className="task-list">
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <ListItemText
              primary={task.title}
              secondary={`Due: ${task.dueDate.toLocaleDateString()} | Priority: ${task.priority} | Category: ${task.category}`}
            />
            <Button
              variant="outlined"
              color="success"
              className="complete-btn"
              onClick={() => handleDialogOpen(task, 'complete')}
            >
              Complete
            </Button>
            <Button
              variant="outlined"
              color="error"
              className="delete-btn"
              onClick={() => handleDialogOpen(task, 'delete')}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>{`Confirm ${action.charAt(0).toUpperCase() + action.slice(1)} Task`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to {action} the task "{selectedTask?.title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAction} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskList;
