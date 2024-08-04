import React from 'react';

const Filter = ({ filters, updateFilter, categories }) => {
  return (
    <div className="filters">
      {/* Example filter inputs */}
      <input
        type="text"
        value={filters.search}
        onChange={(e) => updateFilter('search', e.target.value)}
        placeholder="Search tasks"
      />
      {/* Add other filter inputs here */}
    </div>
  );
};

export default Filter;
