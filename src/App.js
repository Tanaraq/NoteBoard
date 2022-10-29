// import `css`and `ThemeProvider` from "@emotion/react" package
/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
//import './App.css';
import { Board, Container, Button } from "./styles";

import React, { useState, useEffect } from 'react';
import { Note } from './Note';
import { NoteForm } from './NoteForm';

function App() {
  const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem('stickyNotes')) || []);
  const [isOpen, setIsOpen] = useState(false); //for the NoteForm-modal
  
  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(dataArray));
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
      <Button onClick={() => setIsOpen(true)}>
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
