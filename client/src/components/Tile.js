import React, { Component } from 'react'
import styled from 'styled-components';



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

const InputGroup = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.direction === "x" ? "row" : "column"};
`;

const Input = styled.input`
    width: 30px;
    height: 30px;
    ${props => props.direction !== "y" && "margin-right: 7px"};
    ${props => props.direction === "y" && "margin-bottom: 7px"};
    background: transparent;
    border: transparent;
    color: #fff;
    text-align: center;
    font-weight: 800;
    &:focus{
        outline: none;
    }

`;


const Tile = ({slide}) => {

    const inputs = slide.inputs ? slide.inputs.fields : null;
    const position = slide.inputs ? slide.inputs.position : null;
    const group = slide.inputs ? slide.inputs.group : null;
    const id = slide.inputs ? slide.index + 1 : null;

    return (
        <TileWrap bg={slide.image}>
            <img src={slide.image} />
            {inputs !== null && 
                <InputWrap position={position}>
                    <InputGroup direction={slide.inputs.direction}>
                        {inputs.map((input, index) => <Input direction={slide.inputs.direction} key={index} id={group + id} type="text" value="A" />)}
                    </InputGroup>
                </InputWrap>
            }
        </TileWrap>
    );
};

export default Tile;