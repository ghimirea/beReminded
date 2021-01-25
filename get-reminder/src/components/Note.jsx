import React from 'react';
import '../styles.css';

const Note = ({id, title, content, onDelete}) => {

    const handleClick = ()=>{
        onDelete(id)

    }
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};

export default Note;
