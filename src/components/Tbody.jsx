import React from 'react';
import { formatDate } from '../utils/formatDate';
const Tbody = ({ items }) => {
  return (
    <tbody>
      {items.map((el) => {
        return (
          <tr key={el.id}>
            <td key={el.id + 'id'}>{el.id}</td>
            <td key={el.id + 'title'}>{el.title}</td>
            <td key={el.id + 'desc'}>{el.description}</td>
            <td key={el.id + 'date'}>{formatDate(el.dttmCreated)}</td>
            <td key={el.id + 'level'}>{el.reactLevel}</td>
            <td key={el.id + 'enabled'}>{el.enabled !== null && (el.enabled ? 'Да' : 'Нет')}</td>
            <td key={el.id + 'tags'}>{el.tags.join(' /')}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
