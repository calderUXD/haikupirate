import React, { Component, createContext} from 'react';
//import styled from 'styled-components';
//import slides from './slides.js';
import axios from "axios";
import Intro from './components/Intro';

const Forms = createContext({})

class Maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: {
                code: ""
            },
            info: null

        }

    }
    componentDidMount = () => {
        let self = this;
        axios.get('/api/info')
            .then(function (response) {
                console.log("response", response.data);
                self.setState({info: response.data})
            })
            .catch(function (error) {
                console.log(error);
        });
    }
    render() {
        console.log("state", this.state)
        const info = this.state.info;

        return (
            <Forms.Provider value={{...this.state, updateState: (group, value) => this.setState({[group]: {code: value}})}}>
                <React.Fragment>
                    <Intro intro={info ? info.intro : []}/>
                </React.Fragment>
            </Forms.Provider>
        );
    }
}

export default Maps;
export const FormsConsumer = Forms.Consumer;