import React from 'react'
import styled from 'styled-components';
import InputGroup from "./InputGroup";



const TileWrap = styled.div`
    border: 6px solid #969395;
    width: 100%;
    max-width: 1440px;
    text-align:center;
    background: #969395;
    position: relative;
    > img{
        max-width: 100%;
    }
`;

const InputWrap = styled.div`
    position: absolute;
    top: ${({position}) => position[0]};
    left: ${({position}) => position[1]};
`;


const Tile = ({slide}) => {

    const inputs = slide.inputs ? slide.inputs.fields : null;
    const position = slide.inputs ? slide.inputs.position : null;
    const group = slide.inputs ? slide.inputs.group : null;
    const offset = slide.inputs ? slide.inputs.offset : null;

    return (
        <TileWrap bg={slide.image}>
            <img src={slide.image} />
            {inputs !== null && 
                    <InputWrap position={position}>
                    <InputGroup 
                        direction={slide.inputs.direction}
                        inputs={inputs}
                        group={group}
                        offset={offset}
                    />
                </InputWrap>
                }
        </TileWrap>
    );
};

export default Tile;