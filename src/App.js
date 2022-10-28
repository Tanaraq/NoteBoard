import './App.css';
import React, { useState, useEffect } from 'react';
import { Sticky } from './Sticky';
import { StickyForm } from './StickyForm';

function App() {
  const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem('stickyNotes')) || [
    { title: "Don't mind me", text:'i\'m just a dummy', id:1}
  ]);
  
  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(dataArray));
  }, [dataArray])

  const addSticky = (title,text) => {
    console.log(title,text);
    const newSticky= { title:title , text:text, id: Date.now()};
    console.log(newSticky);
    setDataArray((prev)=>{
      return ([...prev, newSticky]);
    });
    console.log(dataArray);
  };

  const removeSticky = (id) => {
    setDataArray((prev) => prev.filter((data)=>(data.id !== id)));
  };

  return (
    <div id="board" className="App">
      <div className='container'>
        <StickyForm 
          addSticky={addSticky}
        />
        {dataArray.map((data,index) =>{
          return (
          <Sticky 
              key={index}
              title={data.title}
              text={data.text}
              removeSticky={removeSticky}  
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
