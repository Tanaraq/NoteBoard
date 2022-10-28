import React from "react";

export const Sticky =({data, removeSticky}) =>{
    return (
        <div className="note">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <button 
                onClick={() => removeSticky(data.id)}
                className="bin">x</button>
        </div>
    );
};