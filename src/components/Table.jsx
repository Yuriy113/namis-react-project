import React from 'react';
import json from '../store/apiData';
import { config } from '../store/tableConfig';

const items = json.data.items;

const Table = () => {
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
              <td>{el.enabled}</td>
              <td>{el.tags}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
