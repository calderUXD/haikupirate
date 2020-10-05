import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import styled from 'styled-components';
//import Nav from "./components/Navigation";
import Maps from './Maps';
import Maps2 from './Maps2';
import Two from './Two';
import Clues from './Clues';

ReactGA.initialize('UA-153423409-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Body = styled.div`
    width: 100%;
    max-width: 420px;
    padding-top: 5px;
    height: 100%;
    background: #fdf8e3;
`;

export default class App extends Component {
    render() {
        return (
            <Router>
                <Body>
                    {/* <Nav /> */}
                    <Route exact path="/" component={Maps} />
                    <Route exact path="/hints" component={Clues} />
                    <Route exact path="/chaptertwo" component={Two} />
                    <Route exact path="/mondrian" component={Maps2} />
                </Body>
            </Router>
            
        )
    }
}
