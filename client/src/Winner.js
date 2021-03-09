import React from "react";
import axios from "axios";
import styled from 'styled-components';
import {
    useParams
  } from "react-router-dom";

  const TileWrap = styled.div`
    border-bottom: 2px solid #fff;
    position: relative;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 897px;
    min-height: 897px;
    text-align:center;
    background: transparent;
    font-family: Arial, Helvetica, sans-serif;
    > img {
        max-width: 414px;
        min-width: 414px;
    }
`;

const Winner = () => {
    const [win, set] = React.useState({
        sent: false,
        email: "",
        message: "YOU FAILED!"
    });
    let {winner} = useParams();
    //console.log("winner", winner);

    React.useEffect(() => {
        if(!win.sent){
            axios.get(`/api/v2winner/${winner}`)
            
            .then(res => {
                const data = res.data
                if(data.code === winner){
                    set({...win, email: data.email, message: data.message, sent: true})
                } else {
                    set({...win, sent: true})
                    return null
                }
                
                //console.log("winner", data.message)
            })
            .catch(error => {
                //console.log("oops", error)
            });
        }
        
    });

    return (
        <React.Fragment>
            <TileWrap>
                <h1>{win.message}</h1>
                {win.email && <h3><a href={`mailto:${win.email}`}>{win.email}</a></h3>}
            </TileWrap>
        </React.Fragment>
        
    );
};

export default Winner;