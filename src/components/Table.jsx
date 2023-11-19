import React, { useState } from 'react';
import { sortableValues, filterableValues, checkValues } from '../config/config';
import { formatDate } from '../utils/formatDate';
import CustomSelect from './CustomSelect';
import Tbody from './Tbody';

const Table = ({ items, config, handleSort, handleInput, tags, levels, filterData }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible((state) => !state);
  };

  return (
    <table>
      <thead>
        <tr>
          {config.map((component) => {
            const key = component.key.trim();
            return (
              <th key={key} style={{ width: component.width }}>
                {component.head_title}
                <br />
                {sortableValues.includes(key) && (
                  <button onClick={() => handleSort(key)}>sort</button>
                )}
                {filterableValues.includes(key) && (
                  <input
                    onInput={(e) => handleInput(e, key === 'title' ? false : true, key)}
                    type="text"
                    placeholder="search"
                  />
                )}
                {checkValues.includes(key) && (
                  <>
                    {key === 'tags' ? (
                      <>
                        <input type="button" value="select tags" onClick={handleClick} />
                        <CustomSelect
                          visible={visible}
                          tags={tags}
                          handleInput={handleInput}
                          filterData={filterData}
                        />
                      </>
                    ) : (
                      <select
                        onChange={(e) => {
                          filterData(e.target.value, false, 'reactLevel');
                        }}
                      >
                        <>
                          <option value={''}>none</option>
                          {levels.map((level) => {
                            return <option key={level}>{level}</option>;
                          })}
                        </>
                      </select>
                    )}
                  </>
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <Tbody items={items} />
    </table>
  );
};

export default Table;
