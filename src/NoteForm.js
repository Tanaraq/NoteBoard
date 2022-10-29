import React, { useState} from "react";
import { Modal, Form, Input, TextArea } from "./styles";

export const NoteForm= ({addNote,setIsOpen}) => {
    const [ title, setTitle ] = useState('');
    const [text, setText] = useState('');

    const handleSubmit=(e) =>{     
        e.preventDefault();
        if (title.length || text.length){
            addNote(title,text);
        } 
        setTitle('');
        setText('');
        setIsOpen(false);        
    };

    return(
        <Modal>
            <Form>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="title"
                        value={title}                
                        onChange = {((e)=>setTitle(e.target.value))}
                        placeholder= {"write whatever you like!"}
                        minLength={3}
                        maxLength={20}
                        />   
                    <TextArea
                        type="textarea"
                        name="text"
                        value={text}                
                        onChange = {((e)=>setText(e.target.value))}
                        placeholder= {"add some details!"}
                        rows={3} cols={20}
                        maxLength={50}
                        />                
                    <Input type="submit" value="Stick it!"/>
                </form>
            </Form>
        </Modal>
    )
};