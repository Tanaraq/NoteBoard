import './App.css';
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
    <div id="board" className="App">
      <div className='container'>
        <StickyForm 
          addSticky={addSticky}
        />
        {dataArray.map((data,index) =>{
          return (
          <Sticky 
              key={index}
              data={data}
              removeSticky={removeSticky}  
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
