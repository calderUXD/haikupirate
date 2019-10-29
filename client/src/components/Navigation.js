import React from 'react';
import styled from 'styled-components';

const Nlink = styled.div`
    flex: 1;
    align-content: center;
    text-align:center;
`;

const Wrap = styled.div`
    display: flex;
    background: #000;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    flex-grow: 1;
    align-content:stretch;
`;

const Navigation = () => {
    return (
        <Wrap>
            <Nlink>Map</Nlink>
            <Nlink>Clues</Nlink>
        </Wrap>
    );
};

export default Navigation;