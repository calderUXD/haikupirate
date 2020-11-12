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
    overflow-y:hidden;
    > img {
        max-width: 414px;
        min-width: 414px;
    }
    > a {
        border:1px solid transparent;
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


const Home = ({state, handelChange}) => {
    return (
        <React.Fragment>
            <TileWrap>
                <img src="https://res.cloudinary.com/haikupirate/image/upload/v1605161461/chaptertwo/home_page_ixxxml.png" alt="bg" />
                <a href="/chapterone" style={{display:"block", textAlign:"center", position: 'absolute', top: "82px", left: "0px", right: "0px", padding: "10px 0", height: "30px"}} />
                <a href="/chaptertwo" style={{display:"block", textAlign:"center", position: 'absolute', top: "126px", left: "0px", right: "0px", padding: "10px 0", height: "30px"}} />
                <a href="https://twitter.com/haiku_pirate" target="_blank" style={{display:"block", textAlign:"center", position: 'absolute', top: "165px", left: "0px", right: "0px", padding: "10px 0", height: "60px"}} />
            </TileWrap>
        </React.Fragment>


    );
};

export default Home;