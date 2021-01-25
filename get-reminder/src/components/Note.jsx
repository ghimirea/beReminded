import React from 'react';
import '../styles.css';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({id, title, content, onDelete}) => {

    const handleClick = ()=>{
        onDelete(id)

    }
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
          <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
