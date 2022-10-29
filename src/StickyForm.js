import React, { useState} from "react";
import { Note } from "./styles";

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
        <Note>
            <form onSubmit={handleSubmit}>
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
        </Note>
    )
};