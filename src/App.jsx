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

  const handleSort = () => {
    const nullableItems = items.filter((item) => !Object.values(item).includes(null));
    // console.log('nullable', nullableItems);
    let sortedItems;
    if (!sort || sort === 'id-asc') {
      sortedItems = [...items].sort((a, b) => b.id - a.id);
      setSort('id-desc');
    } else {
      sortedItems = [...items].sort((a, b) => a.id - b.id);
      setSort('id-asc');
    }

    setItems(sortedItems);
  };

  return (
    <>
      <h1>NAMIS test project</h1>
      <button onClick={handleSort}>Sort</button>
      <Table items={items} config={config} />
    </>
  );
};

export default App;
