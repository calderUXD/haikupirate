import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Nav from "./components/Navigation";
import Maps from './Maps';
import Clues from './Clues';

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
                </Body>
            </Router>
            
        )
    }
}
