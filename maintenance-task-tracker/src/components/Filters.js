import React from 'react';

const Filter = ({ filters, updateFilter, categories }) => {
  return (
    <div className="filters">
      <input
        type="text"
        value={filters.search}
        onChange={(e) => updateFilter('search', e.target.value)}
        placeholder="Search tasks"
      />
      <select
        value={filters.status}
        onChange={(e) => updateFilter('status', e.target.value)}
      >
        <option value="">All Statuses</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <select
        value={filters.priority}
        onChange={(e) => updateFilter('priority', e.target.value)}
      >
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select
        value={filters.category}
        onChange={(e) => updateFilter('category', e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
