import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Countdown from 'react-countdown';
import axios from "axios";
import ReactGA from 'react-ga';

const boxes = [
    "yellow",
    "grey",
    "blue",
    "red",
    "white"
]

const TileWrap = styled.div`
    border-bottom: 2px solid #fff;
    position: relative;
    width: 414px;
    min-width: 414px;
    max-width: 414px;
    height: 897px;
    min-height: 897px;
    text-align:center;
    background: transparent;
    position: relative;
    > img {
        max-width: 414px;
        min-width: 414px;
    }
`;

const DaInput = styled.input`
    border: none;
    height:21px;
    width: 21px;
    top: ${({i, t}) => i === null ? `${t}px` : i};
    left:${({i, l}) => i === null ? `${l}px` : "198px"};
    position: absolute;
    z-index: 9;
    outline: none;
    text-align:center;
    font-weight:bold;
    background-color: transparent;
`;

const Count = styled.div`
    position: absolute;
    left:0px;
    right: 0px;
    font-size: 16px;
    top: 560px;
    text-align: center;
    
`;
const Print = styled.a`
    position: absolute;
    padding: 1rem;
    top: 816px;
    right: 24px;
    z-index: 9;
`;



const Puzzle = ({img, link, group, form, state, handelChange, offset}) => {
    
    return(<React.Fragment>
    <img src={img} />
    {form && boxes.map((box, i) => {
        const id = [i + 1].toString();
        return (<DaInput 
        name={group + box}
        key={i} 
        idx={i + 1}
        id={group + id} 
        i={typeof form === "boolean" ? `${117 + (i * 31.5)}px` : null}
        t={typeof form !== "boolean" && form[i].t}
        l={typeof form !== "boolean" && form[i].l}
        value={state[id]}
        tabIndex={offset + (i + 1)}
        onChange={(e) => handelChange(e, id, group, box)}
        />)})}
    {link && <Print href={link} target="_blank" />}
</React.Fragment>)};


const Tile = ({img, timer, date, link, group, form, offset}) => {
    const [complete, setComplete] = useState(false);
    const [password, setInput] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
        6: "",
        pass: "",
        isValid: false
    })

    useEffect(() => {
        if(password.pass.length === 5 && password.isValid === false){
            console.log("sending");
            axios.post(`/api/validate2/${group}`, {code: password.pass})
                .then(res => {
                    if(res.data === true){
                        setInput({...password, isValid: true});
                        console.log("pass");
                        
                        ReactGA.event({
                            category: 'Code Entry Success',
                            label: `chapter Two ${group}`,
                            action: `Entered Valid Code ${group}`
                        });
                    } else {
                        ReactGA.event({
                            category: 'Code Entry Invalid',
                            label: `chapter Two ${group}`,
                            action: `Entered Invalid Code ${group}`
                        });

                        console.log("fail")

                        setInput({
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

    const handelChange = (e, id, group, box) => {
        //setInput({...password, );
        console.log("handelChange", e.target.value);
        setInput({
            ...password,
            [id]: e.target.value,
            pass: password.pass.concat(e.target.value)
        });

        if(id === "5") {
            document.querySelector(
                `input[name=${group + box}]`
              ).blur();
        } else {
            document.querySelector(
                `input[name=${group + box}]`
              ).nextSibling.focus();
        }
    }

    return (
        <TileWrap>
            {timer ? (
                <React.Fragment>
                    {!complete && <Count><Countdown
                        date={date}
                        onComplete={() => setComplete(true)}
                    /></Count>}
                    <Puzzle img={img}/>
                </React.Fragment>
            ):(
                <Puzzle img={img} 
                link={link}
                group={group}
                form={form}
                state={password}
                handelChange={handelChange}
                offset={offset} />
            )}
            
        </TileWrap>
    );
};

export default Tile;