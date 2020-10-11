import React from 'react'
import styled from 'styled-components';
//import { Link } from "react-router-dom";
import print from "../print2.png";



const TileWrap = styled.div`
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


const Tile = ({state, handelChange}) => {
    return (
        <TileWrap>
            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1602140247/chaptertwo/ch2-hi_hjzazq.png" alt="bg" />
            {boxes.map((bg, i) => {
                const id = [i + 1].toString();
                return <Input 
                            maxlength="1"
                             key={i} 
                             id={`intro${id}`}
                             name={bg}
                             i={`${33 +(i * 47)}px`} 
                             value={state[id]}
                             tabIndex={i + 1}
                             onChange={(e) => handelChange(e, id, "intro", bg)}
                             ref={input => this[`intro${id}`] = input} />
            })}
            <Print href="https://gofile.io/d/f13Uyb" target="_blank"><img src={print} /></Print>
        </TileWrap>
    );
};

export default Tile;