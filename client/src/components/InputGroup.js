
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
            pass: "",
            isValid: null
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

    handelChange(e, id, group, ctx) {
        this.setState({[id]: e.target.value});
        this.setState({pass: this.state.pass.concat(e.target.value)}, function () {
            if(this.state.pass.length === 5){
                axios.post(`/api/validate/${group}`, {code: this.state.pass})
                    .then(res => {
                        if(res.data === true){
                            this.setState({isValid: true});
                            ctx.updateState(group, this.state.pass);
                            //ctx[group].code = this.state.pass;
                            console.log(ctx.updateState);
                        } else {
                            this.setState({
                                1: "",
                                2: "",
                                3: "",
                                4: "",
                                5: "",
                                pass: "",
                                isValid: false
                            })
                        }
                    })
            }
        });
        if(id === "5") {
            this[`${group + id}`].blur();
        } else {
            this[`${group + id}`].nextSibling.focus();
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
                                    onChange={(e) => this.handelChange(e, id, group, ctx)}
                                    ref={input => this[group + id] = input}

                                />
                                
                            )}
                        )}
                           {this.state.isValid !== null && 
                                <div>
                                    {this.state.isValid === false ? 
                                        <svg x="0px" y="0px" viewBox="0 0 95 118.75" enableBackground="new 0 0 95 95" style={{height:"50px", fill: "red"}}><path d="M73.3,19L73.3,19c3.2,3.2,3.2,8.4,0,11.5L30.9,73c-3.2,3.2-8.4,3.2-11.5,0l0,0c-3.2-3.2-3.2-8.4,0-11.5L61.8,19  C65,15.8,70.1,15.8,73.3,19z"/><path d="M73.3,73L73.3,73c-3.2,3.2-8.4,3.2-11.5,0L19.3,30.6c-3.2-3.2-3.2-8.4,0-11.5l0,0c3.2-3.2,8.4-3.2,11.5,0l42.4,42.4  C76.5,64.6,76.5,69.8,73.3,73z"/></svg> 
                                    : 
                                        <svg dataIcon="circle-check" viewBox="0 0 16 20" x="0px" y="0px" style={{height:"40px", fill: "green"}}><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3 4.594l1.406 1.406-5.406 5.406-3.406-3.406 1.406-1.406 2 2 4-4z"/></svg>
                                    }
                                </div>
                            }
                    </Inputs>
                }
            </FormsConsumer>
        );
    }
}

InputGroup.propTypes = {

};

export default InputGroup;