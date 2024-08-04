import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = ({ onAddTask, refreshTasks }) => {
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [receiveDate, setReceiveDate] = useState(new Date());
  const [priority, setPriority] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productType, setProductType] = useState('');
  const [problemFound, setProblemFound] = useState('');

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Simple 10-digit phone number validation
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!validateEmail(customerEmail)) formErrors.email = 'Invalid email address';
    if (!validatePhone(customerPhone)) formErrors.phone = 'Invalid phone number';
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const newTask = {
      description,
      customerName,
      customerEmail,
      customerPhone,
      receiveDate,
      priority,
      productColor,
      productBrand,
      productType,
      problemFound,
    };

    try {
      console.log('Adding task:', newTask);
      await onAddTask(newTask);
      refreshTasks();
      setDescription('');
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setReceiveDate(new Date());
      setPriority('');
      setProductColor('');
      setProductBrand('');
      setProductType('');
      setProblemFound('');
      setErrors({});
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Customer Email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="text"
        placeholder="Customer Phone"
        value={customerPhone}
        onChange={(e) => setCustomerPhone(e.target.value)}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}
      <DatePicker
        selected={receiveDate}
        onChange={(date) => setReceiveDate(date)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="text"
        placeholder="Product Color"
        value={productColor}
        onChange={(e) => setProductColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Brand"
        value={productBrand}
        onChange={(e) => setProductBrand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Type"
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Problem Found"
        value={problemFound}
        onChange={(e) => setProblemFound(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
