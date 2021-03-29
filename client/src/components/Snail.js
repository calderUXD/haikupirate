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
    height: 100vh;
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
            <TileWrap2>
                <img src="https://res.cloudinary.com/haikupirate/image/upload/v1616987184/chapterthree/thesnail_ye5xug.png" alt="bg" /> 
            </TileWrap2>
        </React.Fragment>


    );
};

export default Tile;