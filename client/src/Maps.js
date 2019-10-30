import React, {createContext} from 'react';
import styled from 'styled-components';
import slides from './slides.js';

import Tile from './components/Tile';

const Forms = createContext({})

const defaultState = {
    a: {
        pass: "a",
        func: (pass) => null
    },
    b: {
        pass: "b",
        func: (pass) => null
    },
    c: {
        pass: "c",
        func: (pass) => null
    },
    d: {
        pass: "d",
        func: (pass) => null
    },
    e: {
        pass: "e",
        func: (pass) => null
    }
}

const Maps = () => {
    return (
        <Forms.Provider value={defaultState}>
            <React.Fragment>
                {slides.map(slide => <Tile slide={slide} />)}
            </React.Fragment>
        </Forms.Provider>
        
    );
};

export default Maps;
export const FormsConsumer = Forms.Consumer;