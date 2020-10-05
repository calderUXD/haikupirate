import React from 'react'
import styled from 'styled-components';
//import { Link } from "react-router-dom";



const TileWrap = styled.div`
    border-bottom: 2px solid #969395;
    width: 100%;
    max-width: 1440px;
    text-align:center;
    background: transparent;
    position: relative;
    & img {
        max-width: 100%;
        width:100%;
        margin-bottom: 1rem;
    }
`;

const TextWrap = styled.div `
    text-align: left;
    width: 100%;
    padding: 0 1rem 2rem 1rem;
`;

const H2 = styled.h2`
    margin-bottom: 0;
`;

const H4 = styled.h4`
    margin-bottom: 0;
`;

const Bgroup = styled.div`
    position:relative;
    display: flex;
    padding: 1.5rem;
`;

const Box = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 2rem;
    transform: rotate(45deg);
    border: 1px solid #000;
    background-color: #fff;
    background-color: ${({bg}) => bg};
`;

const renderText = (idx, text) => {
    console.log("text", text)
    if(idx === 0) {
        console.log("idx", idx)
       return text.map(block => <H2 key={block}>{block}</H2>)
    } else {
        return text.map(block => <H4 key={block}>{block}</H4>)
    }
};

const boxes = [
    "grey",
    "blue",
    "yellow",
    "red"
]

const Input = styled.input`
    border: none;
    height:30px;
    width: 30px;
    top: 34px;
    left: ${({i}) => i};
    position: absolute;
    z-index: 9;
    outline: none;
    text-align:center;
    font-weight:bold;
    background-color: transparent;
`;


const Tile = ({intro}) => {
    console.log("intro", intro)
    return (
        <TileWrap>
            {intro.map((text, idx) => 
                 <TextWrap key={idx}> {renderText(idx, text.text)} </TextWrap>
            )}
            <TextWrap>
                <H4>Input:</H4>

            </TextWrap>
            <Bgroup>
                {boxes.map(bg => <Box bg={bg} />)}
                {boxes.map((bg, i) => <Input key={i} id={bg} i={`${34 +(i * 82)}px`} />)}
            </Bgroup>
            <a href="" target="_blank"><img src="https://res.cloudinary.com/haikupirate/image/upload/v1601876654/chaptertwo/fold_no0udp.png" /></a>
            <p style={{fontSize: "10px"}}>Tableau No. IV, Lozenge Composition with Red, Gray, Blue, Yellow, and Black
<br />Piet Mondrian c. 1924/1925</p>
        </TileWrap>
    );
};

export default Tile;