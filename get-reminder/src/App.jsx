import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

const App = () => {
  const [noteList, setNoteList] = useState([]);
  const addNote = (note) => {
    setNoteList((prevState) => [...prevState, note]);
  };

  const deleteNote = (id) => {
    console.log('deleted with an id of', id);
    setNoteList((prevState) => {
      return prevState.filter((item, index) => index !== id);
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {noteList && noteList.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
};

export default App;
