import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ReactGA from 'react-ga';
import styled from 'styled-components';
//import Nav from "./components/Navigation";
import Maps from './Maps';
import Maps2 from './ChapterTwo';
import Two from './Two';
import Clues from './Clues';

ReactGA.initialize('UA-153423409-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const COne = styled.div`
    width: 100%;
    max-width: 420px;
    padding-top: 5px;
    height: 100%;
    background: #fdf8e3;
`;

const CTwo = styled.div`
    width: 100%;
    max-width: 414px;
    padding-top: 5px;
    height: 100%;
    background: #F8F5ED;
`;


export default class App extends Component {
    render() {
        return (
            <Router>
                <COne>
                    <Switch>
                        <Redirect exact from='/chaptertwo' to='/' />
                        <Route exact path="/chapterone" component={Maps} />
                        <Route exact path="/hints" component={Clues} />
                    </Switch>
                </COne>
                <CTwo>
                    <Switch>
                        <Route exact path="/" component={Two} />
                        <Route exact path="/mondrian" component={Maps2} />
                    </Switch>
                </CTwo>
            </Router>
            
        )
    }
}
