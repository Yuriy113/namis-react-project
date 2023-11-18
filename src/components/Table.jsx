import React from 'react';

const Table = ({ items, config }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((el) => {
            return <th key={el.key}>{el.head_title}</th>;
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
