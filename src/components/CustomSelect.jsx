import React, { useState } from 'react';

const CustomSelect = ({ tags, visible, filterData }) => {
  const visibility = visible ? 'visible' : 'hidden';

  const [searchTags, setSearchTags] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    const updatedTags = searchTags.includes(val)
      ? searchTags.filter((el) => el !== val)
      : [...searchTags, val];
    setSearchTags(updatedTags);

    filterData(updatedTags, true, 'tags');
  };

  return (
    <div className={`custom-select ${visibility}`}>
      {tags.map((tag) => (
        <div key={tag}>
          <label>
            <input
              type="checkbox"
              value={tag}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {tag}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomSelect;
