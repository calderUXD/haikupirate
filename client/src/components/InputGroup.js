
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from "axios";
import {FormsConsumer} from "../Maps";

const Inputs = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.direction === "x" ? "row" : "column"};
`;

const Input = styled.input`
    width: 30px;
    height: 30px;
    ${props => props.direction !== "y" && "margin-right: 7px"};
    ${props => props.direction === "y" && "margin-bottom: 7px"};
    background: transparent;
    border: transparent;
    color: #fff;
    text-align: center;
    font-weight: 800;
    &:focus{
        outline: none;
    }

`;

class InputGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            pass: ""
        }

    }

    componentDidMount() {
        console.log("mounted");
    }

    componentDidUpdate() {

    }
    
    handelFocus(e, group){
        if(this[`${group}1`].value === ""){
            this[`${group}1`].focus();
        }
    }

    handelChange(e, id, group) {
        this.setState({[id]: e.target.value});
        this.setState({pass: this.state.pass.concat(e.target.value)}, function () {
            if(this.state.pass.length === 5){
                axios.post(`/api/checknum/${group}`, {pass: this.state.pass})
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
            }
        });
        if(id !== "5") {
            this[`${group+ id}`].nextSibling.focus();
        }
    }

    render() {
        const {inputs, direction, group, offset} = this.props;
        return (
            <FormsConsumer>
                {(ctx) =>
                    <Inputs direction={direction}>
                        {inputs.map((input, index) => {
                            const id = [index + 1].toString();
                            return(
                                <Input 
                                    key={index}
                                    direction={direction}
                                    idx={index + 1}
                                    id={group + id} 
                                    type="text"
                                    tabIndex={offset + (index + 1)}
                                    value={this.state[id]}
                                    onFocus={(e) => this.handelFocus(e, group)}
                                    onChange={(e) => this.handelChange(e, id, group)}
                                    ref={input => this[group + id] = input}

                                />
                            )}
                        )}
                           
                    </Inputs>
                }
            </FormsConsumer>
        );
    }
}

InputGroup.propTypes = {

};

export default InputGroup;