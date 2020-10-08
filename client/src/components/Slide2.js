import React from 'react'
import styled from 'styled-components';
//import { Link } from "react-router-dom";
import print from "../print2.png";



const TileWrap = styled.div`
    border-bottom: 2px solid #969395;
    position: relative;
    width: 414px;
    min-width: 414px;
    height: 896px;
    min-height: 896px;
    text-align:center;
    background: transparent;
    position: relative;
    > img {
        max-width: 414px;
        min-width: 414px;
    }
`;

const H2 = styled.h2`
    margin-bottom: 0;
    font-size: 18px;
`;

const H4 = styled.h4`
    margin-bottom: 0;
    font-size: 14px;
`;

const Bgroup = styled.div`
    position:abolute;
    display: flex;
    padding: 0 1.5rem 1.5rem 1.5rem;
    border: 1px solid red;
    top: 10px;
    left: 0px;
`;

const Box = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 1.5rem;
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
    top: 294px;
    left: ${({i}) => i};
    position: absolute;
    z-index: 9;
    outline: none;
    text-align:center;
    font-weight:bold;
    background-color: transparent;
`;

const Print = styled.a`
    position: absolute;
    top: 307px;
    right: 20px;
    padding: 1rem;
    >img{
        height:22px;
        width: 22px;
    }
`;


const Tile = ({img}) => {
    return (
        <TileWrap>
            <img src={img} />
            {boxes.map((bg, i) => <Input key={i} id={bg} i={`${33 +(i * 47)}px`} />)}
        </TileWrap>
    );
};

export default Tile;