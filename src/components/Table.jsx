import React from 'react';
import { sortedValues } from '../config/config';

const Table = ({ items, config, handleSort }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((el) => {
            return (
              <th
                onClick={sortedValues.includes(el.key) ? () => handleSort(el.key) : null}
                key={el.key}
              >
                {el.head_title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {items.map((el) => {
          return (
            <tr>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.description}</td>
              <td>{el.dttmCreated}</td>
              <td>{el.reactLevel}</td>
              <td>{el.enabled !== null && (el.enabled ? 'Да' : 'Нет')}</td>
              <td>{el.tags}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
