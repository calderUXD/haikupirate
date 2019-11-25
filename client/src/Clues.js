import React from 'react';
import styled from 'styled-components';

import Tile from './components/Tile';

const Div = styled.div`
    & img {
        width: 100%;
    }
`;


const Maps = ({config}) => {
    return (
        <Div>
            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint1_vadgmy.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint2_r60bsn.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint3_xzuh5v.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671349/haiku/hint4_wh1clx.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint5_txmvkb.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint6_yshdhy.png" />

            <img src="https://res.cloudinary.com/haikupirate/image/upload/v1574671348/haiku/hint6_1_oyqk8i.png" />
        </Div>
    );
};

export default Maps;