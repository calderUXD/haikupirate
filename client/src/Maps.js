import React, { Component, createContext} from 'react';
import styled from 'styled-components';
import slides from './slides.js';
import Tile from './components/Tile';
import Winner from "./components/Winner";

const Forms = createContext({})

class Maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: {
                code: ""
            },
            b: {
                code: ""
            },
            c: {
                code: ""
            },
            d: {
                code: ""
            },
            e: {
                code: ""
            },

        }

    }
    render() {
        return (
            <Forms.Provider value={{...this.state, updateState: (group, value) => this.setState({[group]: {code: value}})}}>
            <React.Fragment>
                {slides.map((slide, idx) => <Tile slide={slide} key={idx} />)}
                <Winner context={this.state} />
            </React.Fragment>
        </Forms.Provider>
        );
    }
}

export default Maps;
export const FormsConsumer = Forms.Consumer;