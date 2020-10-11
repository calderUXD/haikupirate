import React, { useState } from 'react'
import styled from 'styled-components';
//import { Link } from "react-router-dom";
import print from "../print2.png";
import Countdown from 'react-countdown';

const Puzzle = ({img}) => <React.Fragment>
    <img src={img} />
    {boxes.map((bg, i) => <Input key={i} id={bg} i={`${33 +(i * 47)}px`} />)}
</React.Fragment>;


const boxes = new Array(5);

const TileWrap = styled.div`
    border-bottom: 2px solid #fff;
    position: relative;
    width: 414px;
    min-width: 414px;
    max-width: 414px;
    height: 897px;
    min-height: 897px;
    text-align:center;
    background: transparent;
    position: relative;
    > img {
        max-width: 414px;
        min-width: 414px;
    }
`;

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

const Count = styled.div`
    position: absolute;
    left:0px;
    right: 0px;
    font-size: 16px;
    top: 560px;
    text-align: center;
    
`;


const Tile = ({img, timer, date}) => {
    console.log("oiipo", date)
    const [complete, setComplete] = useState(false);

    return (
        <TileWrap>
            {timer ? (
                <React.Fragment>
                    {!complete && <Count><Countdown
                        date={date}
                        onComplete={() => setComplete(true)}
                    /></Count>}
                    <Puzzle img={img} />
                </React.Fragment>
            ):(
                <Puzzle img={img} />
            )}
            
        </TileWrap>
    );
};

export default Tile;