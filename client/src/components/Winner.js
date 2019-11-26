import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styled from "styled-components";
//import {FormsConsumer} from "../Maps";

const Overlay = styled.div`
    background: black;
    position: fixed;
    z-index: 999;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 4rem;
    text-align:center;
`;

const Text = styled.span`
    font-size: 3rem;
    color: lightgreen;
    font-weight: bold;
`;

class Winner extends Component {
    
    componentDidUpdate(prevProps, prevState) {
        console.log("update");
        console.log("ctxmount", this.props.context);
    }

    render() {
        const val = this.props.context;
        const value = val.a.code + val.b.code + val.c.code + val.d.code + val.e.code;
        
        return (
                    <React.Fragment>
                        {value.length === 25 && <Overlay>
                            <Text>Congrats you did it!</Text>
                        </Overlay>}
                    </React.Fragment>
        );
    }
}

Winner.propTypes = {

};

export default Winner;