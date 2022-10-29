// import `css`and `ThemeProvider` from "@emotion/react" package
/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
//import './App.css';
import { Board, Container } from "./styles";

import React, { useState, useEffect } from 'react';
import { Sticky } from './Sticky';
import { StickyForm } from './StickyForm';

function App() {
  const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem('stickyNotes')) || []);
  
  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(dataArray));
  }, [dataArray])

  const addSticky = (title,text) => {
    const newSticky= { title:title , text:text, id: Date.now()};
    setDataArray((prev)=>{
      return ([...prev, newSticky]);
    });
    console.log(dataArray);
  };

  const removeSticky = (id) => {
    console.log(id);
    setDataArray((prev)=> prev.filter((data)=>(data.id !== id)));
  };  

  return (
    <Board >
      <StickyForm 
          addSticky={addSticky}
        />
      <Container>
        {dataArray.map((data,index) =>{
          return (
          <Sticky 
              key={index}
              data={data}
              removeSticky={removeSticky}  
            />
          )
        })}
      </Container>
    </Board>
  );
}

export default App;
