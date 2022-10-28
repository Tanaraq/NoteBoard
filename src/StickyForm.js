import React, { useState} from "react";

export const StickyForm= (addSticky) => {
    const [ title, setTitle ] = useState('');
    const [text, setText] = useState('');

    const handleSubmit=(e) =>{
        e.preventDevault();
        addSticky(text,title);
        setTitle("");
        setText("");
    }

    return(
        <form 
            onSubmit={handleSubmit}
            className="note"
        >
            <input
                type="title"
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
            <input type="submit" name="submit" value="Stick it!"/>
        </form>
    )
};