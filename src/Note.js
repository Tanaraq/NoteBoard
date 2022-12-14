import React from "react";
import { PaperNote, Title, Text, Pin } from "./styles";

export const Note =({data, removeNote}) =>{
    
    const randomTop= () => {
        return (Math.floor(Math.random() * 31) -15)+"px" ; //need a random number between -15 and +15, with 'px' attached
    } 
    
    const randomAngle= () => {
        return (Math.floor(Math.random() * 9) -4)+"deg" ; //need a random number between -4 and +4, with 'deg' attached
    }
    
    const randomColor = () =>{
        const colorArray = [ '#ffc', '#ffc', '#cfc', '#fcf', '#cff']; // 4colors, but I want more yellow, so #ffc is in the array twice
        let random=(Math.floor(Math.random()*5));
        return colorArray[random];
    }
        
    return (
        <PaperNote   
            angle={randomAngle()}
            top={randomTop()}
            color={randomColor()}
        >
            <Title>{data.title}</Title>
            <Text>{data.text}</Text>
            <Pin 
                onClick={() => removeNote(data.id)}
                title="delete this note"
                >&#128392;
            </Pin>
        </PaperNote>
    );
};
