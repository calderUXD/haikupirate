
import React, { Component } from 'react';
import ReactMomentCountDown from 'react-moment-countdown';
import ReactGA from 'react-ga';
import moment from 'moment';
import styled from 'styled-components';
import axios from "axios";
import {FormsConsumer} from "../Maps";

const Inputs = styled.div`
    position: relative;
    flex-wrap: wrap;
    display: flex;
    flex-direction: ${props => props.direction === "x" ? "row" : "column"};
    width: ${({direction}) => direction === "x" ? "198px" : "40px"};
    height: ${({direction}) => direction === "y" ? "218px" : "40px"};

    /* random */
    height: ${({direction}) => direction === "random" && "80px"};
    width: ${({direction}) => direction === "random" && "230px"};
    flex-direction: ${props => props.direction === "random" && "row"};
`;

const Input = styled.input`
    width: 30px;
    height: 34px;
    ${props => props.direction !== "y" && "margin-right: 7px"};
    ${props => props.direction === "y" && "margin-bottom: 7px"};
    background: #000;
    border: transparent;
    color: #fff;
    text-align: center;
    font-weight: 800;
    &:focus{
        outline: none;
    }
    ${props => props.direction === "random" && props.idx % 2 === 0 ? "align-self: flex-end" : ""}


`;

const HR = styled.div`
    display:inline-flex;
    margin-left: 0px;
    width: 10px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    font-size: 9px;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    height: 34px;

`;
const HRE = styled.div`
    display:inline-flex;
    margin-left: 0px;
    width: 10px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    font-size: 9px;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    height: 34px;
    position: absolute;
    left: 36px;

`;

const HB = styled.div`
    display:inline-flex;
    margin-top: 7px;
    width: 178px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    font-size: 9px;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    height: 10px;
    
`;

const HBE = styled.div`
    display:inline-flex;
    margin-top: 7px;
    width: 30px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    font-size: 9px;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    height: 10px;
    position: absolute;
    top: 32px;

`;

const HRV = styled.div`
    display:inline-flex;
    margin-left: 7px;
    width: 10px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    font-size: 9px;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    height: 198px;
    padding-left:5px;

`;

const HBV = styled.div`
    display:inline-flex;
    margin-top: 0px;
    width: 30px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    font-size: 9px;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    height: 10px;

`;

const Count = styled(ReactMomentCountDown)`
    font-size: 22px;
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
                            ReactGA.event({
                                category: 'Code Entry',
                                label: group,
                                action: 'Entered Valid Code'
                            });
                        } else {
                            ReactGA.event({
                                category: 'Code Entry',
                                label: group,
                                action: 'Entered Invalid Code'
                            });

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
        const solstice ='2019-12-21 20:00:00';
        const isSameorAfter = moment().isSameOrAfter('2019-12-19 20:00:00');
        const today = moment();
        const targetDate = moment('2019-12-21 20:00:00');
        const dif = today.diff(targetDate, 'minutes');

        console.log(isSameorAfter);
        
        console.log("numdays", dif)

        return (
            <FormsConsumer>
                {(ctx) =>
                <React.Fragment>
                    {
                        group !== "e" ? 
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
                        {group === "a" && <React.Fragment><HR>3"</HR><HB>11"</HB></React.Fragment>}
                        {group === "b" && <React.Fragment><HBV>9"</HBV><HRV>36"</HRV></React.Fragment>}
                        {group === "c" && <React.Fragment><HBV>4"</HBV><HRV>22"</HRV></React.Fragment>}
                        {group === "d" && <React.Fragment><HR>1"</HR><HB>3"</HB></React.Fragment>}
                        
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
                    :
                        <React.Fragment>
                           {dif >= 0 ?
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
                           {group === "e" && <React.Fragment><HRE>1"</HRE><HBE>1"</HBE></React.Fragment>}
                           {this.state.isValid !== null && 
                               <div>
                                   {this.state.isValid === false ? 
                                       <svg x="0px" y="0px" viewBox="0 0 95 118.75" enableBackground="new 0 0 95 95" style={{height:"50px", fill: "red"}}><path d="M73.3,19L73.3,19c3.2,3.2,3.2,8.4,0,11.5L30.9,73c-3.2,3.2-8.4,3.2-11.5,0l0,0c-3.2-3.2-3.2-8.4,0-11.5L61.8,19  C65,15.8,70.1,15.8,73.3,19z"/><path d="M73.3,73L73.3,73c-3.2,3.2-8.4,3.2-11.5,0L19.3,30.6c-3.2-3.2-3.2-8.4,0-11.5l0,0c3.2-3.2,8.4-3.2,11.5,0l42.4,42.4  C76.5,64.6,76.5,69.8,73.3,73z"/></svg> 
                                   : 
                                       <svg dataIcon="circle-check" viewBox="0 0 16 20" x="0px" y="0px" style={{height:"40px", fill: "green"}}><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3 4.594l1.406 1.406-5.406 5.406-3.406-3.406 1.406-1.406 2 2 4-4z"/></svg>
                                   }
                               </div>
                           }
                       </Inputs> : <Count toDate={solstice} sourceFormatMask='YYYY-MM-DD HH:mm:ss' targetFormatMask='DD:HH:mm:ss' />
                         }
                        </React.Fragment>
                    }
                    </React.Fragment>
                }
            </FormsConsumer>
        );
    }
}

InputGroup.propTypes = {

};

export default InputGroup;