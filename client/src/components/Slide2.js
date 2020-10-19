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



const Puzzle = ({img, link, group, form, state, handelChange, offset, twitter}) => {
    return(<React.Fragment>
    {twitter && <a href="https://twitter.com/haiku_pirate" target="_blank" style={{position: "absolute", top: "0px", right: "10px", zIndex: "999"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
    </a> }
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


const Tile = ({img, timer, date, link, group, form, offset, twitter}) => {
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
                offset={offset}
                twitter={twitter} />
            )}
            
        </TileWrap>
    );
};

export default Tile;