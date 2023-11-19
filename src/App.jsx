import React, { useState, useEffect, useRef } from 'react';
import Table from './components/Table';
import json from './store/apiData';
import { config } from './store/tableConfig';
import { getPersist } from './utils/getPersist';

import './App.css';

const apiData = json.data.items;

const App = () => {
  const [originalData, setOriginalData] = useState([]);
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState(null);
  const tags = useRef(getPersist(apiData, 'tags'));
  const levels = useRef(getPersist(apiData, 'reactLevel'));

  useEffect(() => {
    const initialData = apiData.slice();
    setItems(initialData);
    setOriginalData(initialData);
  }, []);

  const handleSort = (sortValue) => {
    const sortedItems = [...items].sort((a, b) => {
      if (b[sortValue] === null) return -1;

      if (typeof a[sortValue] === 'string') {
        return sort === 'asc'
          ? a[sortValue].localeCompare(b[sortValue])
          : b[sortValue].localeCompare(a[sortValue]);
      } else {
        return sort === 'asc' ? a[sortValue] - b[sortValue] : b[sortValue] - a[sortValue];
      }
    });
    setSort(sort === 'asc' ? 'desc' : 'asc');
    setItems(sortedItems);
  };

  const handleInput = (e, caseSensitive, name) => {
    const inputValue = e.target.value;

    filterData(inputValue, caseSensitive, name);
  };

  const filterData = (value, caseSensitive, name) => {
    setItems(originalData);
    if (value) {
      setItems((prevItems) =>
        prevItems.filter((item) => {
          const itemValue = item[name];
          if (Array.isArray(itemValue)) {
            return value.length ? value.some((elem) => itemValue.includes(elem)) : originalData;
          } else if (typeof itemValue === 'string') {
            return (
              itemValue &&
              (caseSensitive
                ? itemValue.replace(/\s+/g, ' ').includes(value)
                : itemValue.replace(/\s+/g, ' ').toLowerCase().includes(value.toLowerCase()))
            );
          }
        }),
      );
    } else {
      setItems(originalData);
    }
  };

  return (
    <>
      <h1>NAMIS test project</h1>
      <Table
        levels={levels.current}
        tags={tags.current}
        handleInput={handleInput}
        handleSort={handleSort}
        filterData={filterData}
        items={items}
        config={config}
      />
    </>
  );
};

export default App;
