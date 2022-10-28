import React, { useState} from "react";

export const StickyForm= ({addSticky}) => {
    const [ title, setTitle ] = useState('');
    const [text, setText] = useState('');

    const handleSubmit=(e) =>{
        console.log('');
        e.preventDefault();
        addSticky(title,text);
        setTitle('');
        setText('');
    };

    return(
        <form 
            onSubmit={handleSubmit}
            className="note"
        >
            <input
                type="text"
                name="title"
                value={title}                
                onChange = {((e)=>setTitle(e.target.value))}
                placeholder= {"write whatever you like!"}
                />   
            <input
                type="text"
                name="text"
                value={text}                
                onChange = {((e)=>setText(e.target.value))}
                placeholder= {"add some details!"}
                />                
            <input type="submit" value="Stick it!"/>
        </form>
    )
};