import React from 'react';
import styled from 'styled-components';
import slides from './slides.js';

import Tile from './components/Tile';


const Maps = () => {
    return (
        <React.Fragment>
        {slides.map(slide => <Tile slide={slide} />)}
        </React.Fragment>
    );
};

export default Maps;