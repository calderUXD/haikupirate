import React, { Component, createContext} from 'react';
//import styled from 'styled-components';
import slides from './slides.js';
import Tile from './components/Slide2';
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
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/one_zivcwd.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/two_vm76y4.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/three_qi2dss.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/four_pmbzzh.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/five_yp9v5b.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/six_thznsb.png" />
            </React.Fragment>
        </Forms.Provider>
        );
    }
}

export default Maps;
export const FormsConsumer = Forms.Consumer;