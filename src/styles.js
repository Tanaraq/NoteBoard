import styled from "@emotion/styled";
import Cork from './cork_background.jpg';

const randomTop= Math.floor(Math.random() * 11) -5 ; //need a random number between -5 and +5
const randomAngle= Math.floor(Math.random() * 9) -4 ; //need a random number between -4 and +4
//const colorArray = [ #ffc, #ffc, #cfc, #fcf, #cff]; // 4colors, but i want more yellow, so #ffc is in the array twice

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

export const Note = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 9em;
    min-height: 9em;
    max-width: 20vw;
    max-height: 70vh;
    top: ${randomTop};
    background-color: #ffc;
    margin: 0.5em;
    padding: 1em;
    font-family: 'Caveat', cursive;
    box-shadow: 5px 5px 7px rgba(33, 33, 33, .7);
    transform: rotate(${randomAngle}deg);
`;

export const Title = styled.h2`
    font-size: 30px;
    padding: 3px;
`;
  
export const Text = styled.p`
    font-size: 20px;
`;
  
export const Bin = styled.button`
    position: absolute;
    top: 5px;
    right: 5px; 
`;