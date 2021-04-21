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

const TileWrap2 = styled.div`
    position: relative;
    width: 414px;
    min-width: 414px;
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
    top: 314px;
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
        <React.Fragment>
            <TileWrap>
                <img src="https://res.cloudinary.com/haikupirate/image/upload/v1618981438/chaptertwo/solved_pdjxc4.png" alt="SOLVED" />
            </TileWrap>
            {/* <TileWrap>
                <img src="https://res.cloudinary.com/haikupirate/image/upload/v1605163024/chaptertwo/november3rd__chaptertwo-1_dmdgbs.png" alt="bg" />
                {boxes.map((bg, i) => {
                    const id = [i + 1].toString();
                    return <Input 
                                maxlength="1"
                                key={i} 
                                id={`intro${id}`}
                                name={bg}
                                i={`${82 +(i * 38)}px`} 
                                value={state[id]}
                                tabIndex={i + 1}
                                onChange={(e) => handelChange(e, id, "intro", bg)}
                                ref={input => this[`intro${id}`] = input} />
                })}
                <Print href="https://gofile.io/d/f13Uyb" target="_blank"><img src={print} /></Print>
            </TileWrap>
            <TileWrap>
                <img src="https://res.cloudinary.com/haikupirate/image/upload/v1606710428/chaptertwo/mapblue_fu4pzs.png" alt="bg" />
                <a href="https://twitter.com/haiku_pirate" target="_blank" style={{display:"block", textAlign:"center", position: 'absolute', bottom: "10px", left: "0px", right: "0px", padding: "10px 0", height: "50px"}}>
                   
                </a>  
            </TileWrap>
            <TileWrap2>
                <img src="https://res.cloudinary.com/haikupirate/image/upload/v1606099014/chaptertwo/explicatorymap_t_lmsxfz.png" alt="bg" /> 
            </TileWrap2>
            <TileWrap2>
                <img src="https://res.cloudinary.com/haikupirate/image/upload/v1606099014/chaptertwo/explicatorymap_b_r9m1oe.png" alt="bg" /> 
            </TileWrap2> */}

        </React.Fragment>


    );
};

export default Tile;