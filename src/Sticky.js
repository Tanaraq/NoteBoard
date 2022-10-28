import React from "react";

export const Sticky =({text, title, removeSticky}) =>{
    return (
        <div className="note">
            <h2>{title}</h2>
            <p>{text}</p>
            <button 
                onClick={removeSticky}
                className="bin">x</button>
        </div>
    );
};