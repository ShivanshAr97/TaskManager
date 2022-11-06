import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from "react-icons/bs";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <AiOutlineEdit color='black' size="22px" />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <BsTrash color='red' size="20px" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
