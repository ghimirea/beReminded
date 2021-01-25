import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
  };

  const willExpand = ()=>{
      setIsExpanded(true)
  }
  return (
    <div>
      <form className='create-note'>
      {isExpanded && <input
          name='title'
          placeholder='Title'
          value={note.title}
          onChange={handleChange}
        /> }
        
        <textarea
          name='content'
          onClick={willExpand}
          placeholder='Take a note...'
          rows={isExpanded ? "3" : "1"}
          value={note.content}
          onChange={handleChange}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
