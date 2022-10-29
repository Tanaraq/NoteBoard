import React from "react";
import { Note, Title, Text, Bin } from "./styles";

export const Sticky =({data, removeSticky}) =>{
    return (
        <Note>
            <Title>{data.title}</Title>
            <Text>{data.text}</Text>
            <Bin onClick={() => removeSticky(data.id)}
                >x
            </Bin>
        </Note>
    );
};