import styled from "@emotion/styled";
import Cork from './cork_background.jpg';

export const Board = styled.div`
    width: 98vw;
    height: 98vh;
    margin: 0 auto;
    background-image: url(${Cork});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border: 10px ridge grey;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

export const PaperNote = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 9em;
    min-height: 9em;
    max-width: 20vw;
    max-height: 70vh;
    position: relative;
    top: ${(props) => props.top}; 
    background-color: ${(props) => props.color}; 
    margin: 0.5em;
    padding: 1em;
    font-family: 'Caveat', cursive;
    box-shadow: 5px 5px 7px rgba(33, 33, 33, .7);
    transform: rotate(${(props) => props.angle});
`;

export const Title = styled.h2`
    font-size: 30px;
    padding: 3px;
`;
  
export const Text = styled.p`
    font-size: 20px;
`;
  
export const Pin = styled.button`
    position: absolute;
    top: 3px;
    right: 42%; 
    border: none;
    background: none;
    cursor: pointer;
    font-size: 40px;    
    font-weight: 500;
    &:hover{ 
        font-weight: 400;
        top: -2px;
    }
`;

export const Button = styled.button`    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: #ffd 4px 4px;
    background-color: #ffc;
    margin: 10px;
    padding:5px;
    font-size: 16px;
    font-weight: 600;
    z-index:2;  
    cursor: pointer;
    &:hover{
        border: 2px solid black;
        box-shadow: #ffd 3px 3px;
    }
`;

export const Modal = styled.div`
    position: fixed;    
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0,0,0,0.6); 
    z-index: 5; 
`;
export const Form = styled(PaperNote)`
    margin: 20% auto;
    background-color: #ffc;
    border-radius:3px;
`;

export const Input = styled.input`
    margin: 0.5em;
`;