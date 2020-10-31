import React, { Component, createContext} from 'react';
//import styled from 'styled-components';
import slides from './slides.js';
import Tile from './components/Slide2';
import Winner from "./components/Winner";

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
            <React.Fragment>
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/one_zivcwd.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/two_vm76y4.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/three_qi2dss.png" />
                <Tile img="https://res.cloudinary.com/haikupirate/image/upload/v1604124119/chaptertwo/october30_xonmpp.png" />
                <Tile date="2020-12-21T05:30:00" timer={true} img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/five_yp9v5b.png" />
                <Tile date="2021-02-09T02:33:00" timer={true} img="https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/six_thznsb.png" />
            </React.Fragment>
        );
    }
}

export default Maps;