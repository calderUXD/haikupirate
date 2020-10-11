import React, { Component, createContext} from 'react';
//import styled from 'styled-components';
//import slides from './slides.js';
import axios from "axios";
import Intro from './components/Intro';
import ReactGA from 'react-ga';

const Forms = createContext({})

class Maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            1: "",
            2: "",
            3: "",
            4: "",
            pass: "",
            isValid: false,
            info: null

        }

        this.handelChange = this.handelChange.bind(this);

    }
    handelChange(e, id, group, ref) {
        this.setState({[id]: e.target.value});
        this.setState({pass: this.state.pass.concat(e.target.value.toLowerCase())}, function () {
            if(this.state.pass.length === 4){
                axios.post(`/api/validate2/${group}`, {code: this.state.pass})
                    .then(res => {
                        if(res.data === true){
                            this.setState({isValid: true});
                            window.location = "/mondrian";
                            
                            ReactGA.event({
                                category: 'Code Entry',
                                label: "chapter Two Entry",
                                action: 'Entered Valid Code'
                            });
                        } else {
                            ReactGA.event({
                                category: 'Code Entry',
                                label: "chapter Two Entry",
                                action: 'Entered Invalid Code'
                            });

                            this.setState({
                                1: "",
                                2: "",
                                3: "",
                                4: "",
                                pass: "",
                                isValid: false
                            })
                        }
                    })
            }
        });
        if(id === "4") {
            document.querySelector(
                `input[name=${ref}]`
              ).blur();
        } else {
            document.querySelector(
                `input[name=${ref}]`
              ).nextSibling.focus();
        }
    }
    componentDidMount = () => {
        let self = this;
        axios.get('/api/info')
            .then(function (response) {
                self.setState({info: response.data})
            })
            .catch(function (error) {
                console.log(error);
        });
    }
    render() {
        const info = this.state.info;

        return (
                <React.Fragment>
                    <Intro state={this.state} handelChange={this.handelChange}  intro={info ? info.intro : []}/>
                </React.Fragment>
        );
    }
}

export default Maps;
export const FormsConsumer = Forms.Consumer;