import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import json from './store/apiData';
import { config } from './store/tableConfig';

const apiData = json.data.items;

const App = () => {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    setItems(apiData);
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

  return (
    <>
      <h1>NAMIS test project</h1>
      {/* <button onClick={() => handleSort('dttmCreated')}>Sort</button> */}
      <Table handleSort={handleSort} items={items} config={config} />
    </>
  );
};

export default App;
