import React, { Component, createContext} from 'react';
//import styled from 'styled-components';
import slides from './slides.js';
import Tile from './components/Tile';
import Winner from "./components/Winner";

const Forms = createContext({})

class Maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: {
                code: ""
            },
            b: {
                code: ""
            },
            c: {
                code: ""
            },
            d: {
                code: ""
            },
            e: {
                code: ""
            },

        }

    }
    render() {
        return (
            <Forms.Provider value={{...this.state, updateState: (group, value) => this.setState({[group]: {code: value}})}}>
            <React.Fragment>
            <a href="https://res.cloudinary.com/haikupirate/image/upload/v1576119892/haiku/Updated_Art_12_10_1_ddamez.pdf" target="_blank" style={{textAlign: "center", position: "absolute", right: "10px", top: "10px", zIndex: 999}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.059 248.059" height="16" width="16"><path d="M230.559 62.498h-27.785V17.133a7.5 7.5 0 00-7.5-7.5H52.785a7.5 7.5 0 00-7.5 7.5v45.365H17.5c-9.649 0-17.5 7.85-17.5 17.5v96.225c0 9.649 7.851 17.5 17.5 17.5h27.785v37.203a7.5 7.5 0 007.5 7.5h142.488a7.5 7.5 0 007.5-7.5v-37.203h27.785c9.649 0 17.5-7.851 17.5-17.5V79.998c.001-9.649-7.85-17.5-17.499-17.5zM60.285 24.633h127.488v37.865H60.285V24.633zm127.488 198.793H60.285v-74.404h127.488v74.404zm45.286-47.203c0 1.355-1.145 2.5-2.5 2.5h-27.785v-37.201a7.5 7.5 0 00-7.5-7.5H52.785a7.5 7.5 0 00-7.5 7.5v37.201H17.5c-1.355 0-2.5-1.145-2.5-2.5V79.998c0-1.356 1.145-2.5 2.5-2.5h213.058c1.355 0 2.5 1.144 2.5 2.5v96.225z"/><circle cx="195.273" cy="105.76" r="10.668"/><path d="M158.151 163.822H89.907a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5h68.244a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5zM158.151 193.623H89.907a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5h68.244a7.5 7.5 0 007.5-7.5c0-4.143-3.357-7.5-7.5-7.5z"/></svg>
            </a>
            <a href="https://twitter.com/haiku_pirate" target="_blank" style={{position: "absolute", top: "10px", right: "30px", zIndex: "999"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>    
                {slides.map((slide, idx) => <Tile slide={slide} key={idx} />)}
                <Winner context={this.state} />
            </React.Fragment>
        </Forms.Provider>
        );
    }
}

export default Maps;
export const FormsConsumer = Forms.Consumer;