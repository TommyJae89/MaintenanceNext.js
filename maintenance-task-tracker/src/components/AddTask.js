
import React, { useState } from 'react';


const AddTask = ({ onAddTask }) => {
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [receiveDate, setReceiveDate] = useState('');
  const [priority, setPriority] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productType, setProductType] = useState('');
  const [problemFound, setProblemFound] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!description || !customerName || !receiveDate || !priority) {
      alert('Please fill in all required fields.');
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
      isCompleted: false,
    };

    await onAddTask(newTask);

    // Reset form fields
    setDescription('');
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setReceiveDate('');
    setPriority('');
    setProductColor('');
    setProductBrand('');
    setProductType('');
    setProblemFound('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <div className="input-group">
        <input
          type="text"
          id="description"
          placeholder="Task Description *"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          id="customerName"
          placeholder="Customer Name *"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="email"
          id="customerEmail"
          placeholder="Customer Email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
        <input
          type="tel"
          id="customerPhone"
          placeholder="Customer Phone"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
        />
        <input
          type="date"
          id="receiveDate"
          value={receiveDate}
          onChange={(e) => setReceiveDate(e.target.value)}
          required
        />
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority *</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="text"
          id="productColor"
          placeholder="Product Color"
          value={productColor}
          onChange={(e) => setProductColor(e.target.value)}
        />
        <input
          type="text"
          id="productBrand"
          placeholder="Product Brand"
          value={productBrand}
          onChange={(e) => setProductBrand(e.target.value)}
        />
        <input
          type="text"
          id="productType"
          placeholder="Product Type"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        />
        <input
          type="text"
          id="problemFound"
          placeholder="Problem Found"
          value={problemFound}
          onChange={(e) => setProblemFound(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">Add Task</button>
    </form>
  );
};

export default AddTask;
