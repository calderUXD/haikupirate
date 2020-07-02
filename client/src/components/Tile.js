import React from 'react'
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import InputGroup from "./InputGroup";



const TileWrap = styled.div`
    border-bottom: 2px solid #969395;
    width: 100%;
    max-width: 1440px;
    text-align:center;
    background: transparent;
    position: relative;
    > img{
        max-width: 100%;
    }
`;

const InputWrap = styled.div`
    position: absolute;
    top: ${({position}) => position[0]};
    left: ${({position}) => position[1]};
    & span {
        font-size: 30px;
    }
`;

const Inst = styled.div`
    position: absolute;
    bottom: 1px;
    left: 0px;
    width: 100%;

    & .dot {
        background: #000!important;
    }

    & .dot .selected {
        background: red!important;
    }

    & .carousel .control-next.control-arrow:before {
        border-left: 16px solid #000;
    }

    & .carousel .control-prev.control-arrow:before {
        border-right: 16px solid #000;
    }
    & .carousel .slide {
        background: transparent;
    }
    & .carousel .control-dots {
        padding: 0;
    }
`;

const Text = styled.span`
    font-size: 22px;
    text-align:left;
    position: absolute;
    top: 1px;
    left: 10px;
`;

const Slide = styled.div`
    background: transparent;
    font-size: 16px;
    color: #000;
    height: 200px;
    text-align: left;
    padding: 0rem 1rem 0 2rem;
`;


const Tile = ({slide}) => {

    const inputs = slide.inputs ? slide.inputs.fields : null;
    const position = slide.inputs ? slide.inputs.position : null;
    const group = slide.inputs ? slide.inputs.group : null;
    const offset = slide.inputs ? slide.inputs.offset : null;

    return (
        <TileWrap bg={slide.image}>
            <img src={slide.image} alt={slide.group} />
            {inputs !== null ? 
                    <InputWrap position={position}>
                    <InputGroup 
                        direction={slide.inputs.direction}
                        inputs={inputs}
                        group={group}
                        offset={offset}
                    />
                </InputWrap>
                :
                <React.Fragment>
                    <Text style={{fontSize: '16px', paddingRight: '2rem'}}>This is a real treasure map that was solved on June 30th  2020 @ 22:04.</Text>
                    <Inst>
                        <Carousel showThumbs={false} showStatus={false}>
                            <Slide>
                                <p>Hidden in plain sight,<br />
                                    the codes to unlock this map.<br />
                                    5 codes, 5 places.</p>
                                <p style={{textDecoration: 'line-through'}}>
                                    $3,000 less 1<br />
                                    awaits the first to unlock;<br />
                                    sent via Venmo.

                                </p>
                            </Slide>
                            <Slide>
                                <p>
                                    Each Haiga tells you,<br />
                                    where to bring your feet. Exact!<br />
                                    Go there. Find the code.
                                </p>
                                <p>
                                    Mind each boundary.<br />
                                    Each Haiga reveals enough.<br />
                                    There are <a href="/hints" target="_blank" style={{color:"red", textDecoration: "underline"}}>hints</a> for some.
                                </p>
                            </Slide>
                            <Slide>
                                <p>
                                Many will find 4.<br />
                                Some are easy. Most are hard.<br />
                                First to find all wins.<br />

                                </p>
                                <p>
                                    No rules. No signups.<br />
                                    Use google. Explore. Trade.<br />
                                    Free play. No Gimmicks. <br />
                                </p>
                            </Slide>
                            <Slide>
                                <p>
                                    Tamper with a hide?<br />
                                   It becomes revealed to all.<br />
                                    Codes don't change or move.
                                </p>
                                <p>
                                    Think outside, not in.<br />
                                    Think Goonies...Banksy...but safe!<br />
                                    Go! Search for my mark! <br />
                                </p>
                            </Slide>
                            <Slide>
                                <p>
                                    the Venmo is gone<br />
                                    yet the codes remain alive<br />
                                    those who find will know<br />
                                </p>
                            </Slide>
                        </Carousel>
                    </Inst>
                </React.Fragment>
                }
        </TileWrap>
    );
};

export default Tile;