/** @jsxImportSource @emotion/react */
import { Board, Container, Button } from "./styles";

import React, { useState, useEffect } from 'react';
import { Note } from './Note';
import { NoteForm } from './NoteForm';

function App() {
  const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem('Notes')) || 
    [ {title:"Welcome!", text:"", id:1},
      {title:"Click 'New Note'", text:"in the upperleft corner to start writing a new note.", id:1},
      {title:"Click the pin", text:"to delete it (there's no getting it back!)", id:1},
      {title:"", text:"Your notes will be saved in LocalStorage", id:1}]);

  const [isOpen, setIsOpen] = useState(false); //for the NoteForm-modal
  
  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(dataArray));
  }, [dataArray])

  const addNote = (title,text) => {
    const newNote= { title:title , text:text, id: Date.now()};
    setDataArray((prev)=>{
      return ([...prev, newNote]);
    });
  };

  const removeNote = (id) => {
    setDataArray((prev)=> prev.filter((data)=>(data.id !== id)));
  };  

  return (
    <Board >
      <Button onClick={() => setIsOpen(true)}
              title="click to write a new note">
        New Note
      </Button>

      {isOpen && <NoteForm 
                    setIsOpen={setIsOpen} 
                    addNote={addNote} 
                  />}

      <Container>
        {dataArray.map((data,index) =>{
          return (
          <Note
              key={index}
              data={data}
              removeNote={removeNote}  
            />
          )
        })}
      </Container>
    </Board>
  );
}

export default App;
