import React from "react";
import { Note, Title, Text, Bin } from "./styles";

export const Sticky =({data, removeSticky}) =>{
    
    const randomTop= () => {
        return (Math.floor(Math.random() * 21) -10)+"px" ; //need a random number between -5 and +5, with px attached
    } 
    console.log(randomTop()); //works!

    const randomAngle= () => {
        return (Math.floor(Math.random() * 9) -4)+"deg" ; //need a random number between -4 and +4, with deg attached
    }
    
    const randomColor = () =>{
        const colorArray = [ '#ffc', '#ffc', '#cfc', '#fcf', '#cff']; // 4colors, but I want more yellow, so #ffc is in the array twice
        let random=(Math.floor(Math.random()*5));
        return colorArray[random];
    }
        
    return (
        <Note   
            angle={randomAngle()}
            top={randomTop()}
            color={randomColor()}
        >
            <Title>{data.title}</Title>
            <Text>{data.text}</Text>
            <Bin onClick={() => removeSticky(data.id)}
                >x
            </Bin>
        </Note>
    );
};