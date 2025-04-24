import React from 'react';

const FilterControls = ({
  category,
  maxPrice,
  onCategoryChange,
  onMaxPriceChange,
}) => {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-gray-700">Filter Controls</h3>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Category:</label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Electronic">Electronic</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Fruit">Fruit</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          onFocus={(e) => {
            if (e.target.value === '0') {
              e.target.value = '';
            }
          }}
          onBlur={(e) => {
            if (e.target.value === '') {
              onMaxPriceChange(0);
            }
          }}
          className="border border-gray-300 pl-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default FilterControls;
