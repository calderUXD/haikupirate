import React from 'react';
import styled from 'styled-components';

//import Tile from './components/Tile';

const Div = styled.div`
position: relative;
    & img {
        width: 100%;
    }
`;


const Maps = ({config}) => {
    return (
        <Div>
            <a href="https://res.cloudinary.com/haikupirate/image/upload/v1574744311/haiku/hintspdfsmall_uzc0sy.pdf" target="_blank" style={{textAlign: "right", display: "block",  position: "absolute", right: "10px"}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.059 248.059" height="16" width="16"><path d="M230.559 62.498h-27.785V17.133a7.5 7.5 0 00-7.5-7.5H52.785a7.5 7.5 0 00-7.5 7.5v45.365H17.5c-9.649 0-17.5 7.85-17.5 17.5v96.225c0 9.649 7.851 17.5 17.5 17.5h27.785v37.203a7.5 7.5 0 007.5 7.5h142.488a7.5 7.5 0 007.5-7.5v-37.203h27.785c9.649 0 17.5-7.851 17.5-17.5V79.998c.001-9.649-7.85-17.5-17.499-17.5zM60.285 24.633h127.488v37.865H60.285V24.633zm127.488 198.793H60.285v-74.404h127.488v74.404zm45.286-47.203c0 1.355-1.145 2.5-2.5 2.5h-27.785v-37.201a7.5 7.5 0 00-7.5-7.5H52.785a7.5 7.5 0 00-7.5 7.5v37.201H17.5c-1.355 0-2.5-1.145-2.5-2.5V79.998c0-1.356 1.145-2.5 2.5-2.5h213.058c1.355 0 2.5 1.144 2.5 2.5v96.225z"/><circle cx="195.273" cy="105.76" r="10.668"/><path d="M158.151 163.822H89.907a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5h68.244a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5zM158.151 193.623H89.907a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5h68.244a7.5 7.5 0 007.5-7.5c0-4.143-3.357-7.5-7.5-7.5z"/></svg>
            </a>
            <img alt="0ne" src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint1_vadgmy.png" />

            <img alt="Two" src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint2_r60bsn.png" />

            <img alt="Three" src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint3_xzuh5v.png" />

            <img alt="Four" src="https://res.cloudinary.com/haikupirate/image/upload/v1574742972/haiku/hintpics_wnjesu.png" />

            {/* <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint5_txmvkb.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint6_yshdhy.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint6_1_oyqk8i.png" /> */}
        </Div>
    );
};

export default Maps;