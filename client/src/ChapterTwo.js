import React from 'react';
import Tile from './components/Slide2';
import ReactGA from 'react-ga';
import axios from "axios";

const Slides = [
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1618981438/chaptertwo/solved_pdjxc4.png",
        date: "",
        timer: false,
        link: null,
        group: null,
        form: false
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/two_vm76y4.png",
        date: "",
        timer: false,
        link: "https://gofile.io/d/I9Azas",
        group: "a",
        form: true,
        offset: 0,
        check:{l: "191px", t:"288px"},
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/three_qi2dss.png",
        date: "",
        timer: false,
        link: "https://gofile.io/d/W8akZs",
        group: "b",
        form: [
            {l: "98", t:"106"},
            {l: "141", t:"85"},
            {l: "204", t:"116"},
            {l: "255", t:"116.5"},
            {l: "296", t:"145"}
        ],
        check:{l: "330px", t:"145px"},
        offset: 5
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1608518439/chaptertwo/blueone_cporw7.png",
        date: "",
        timer: false,
        link: "https://gofile.io/d/1WS9xP",
        group: "c",
        form: [
            {l: "142", t:"99"},
            {l: "169", t:"120"},
            {l: "193", t:"152"},
            {l: "219", t:"183"},
            {l: "252", t:"195"}
        ],
        check:{l: "285px", t:"188px"}
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1608513104/chaptertwo/solsticeartwork_hcsubn.png",
        date: "",
        timer: false,
        link: "https://gofile.io/d/9Gp1qM",
        group: "d",
        form: [
            {l: "148", t:"133"},
            {l: "172", t:"133"},
            {l: "196", t:"133"},
            {l: "220", t:"133"},
            {l: "244", t:"133"}
        ],
        check:{l: "285px", t:"130px"}
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1614395342/chaptertwo/last_zz4tpe.png",
        date: "",
        timer: false,
        link: "https://gofile.io/d/SmSP5A",
        group: "e",
        form: [
            {l: "148", t:"133"},
            {l: "172", t:"133"},
            {l: "196", t:"133"},
            {l: "220", t:"133"},
            {l: "244", t:"133"}
        ],
        check:{l: "285px", t:"130px"}
    }

]

const ChapterTwo = () => {
    const [winner, buildWinner] = React.useState({
        pass: "",
        a:"",
        b:"",
        c:"",
        d:"",
        e:"",
        complete: false
    })

    //buildWinner({...winner, pass: winner.a + winner.b + winner.c + winner.d + winner.e})

    React.useEffect(() => {

        let { a, b, c, d, e} = winner;
        let pass = "";

        if(pass.concat(a,b,c,d,e).length === 25){
            axios.post(`/api/validate2/final`, {code: pass.concat(a,b,c,d,e)})
                .then(res => {
                    if(res.data === true){
                        //console.log("done did it")
                        
                        ReactGA.event({
                            category: 'Code Entry Success',
                            label: `All Codes Entered`,
                            action: `Entered Valid Code All Codes`
                        });

                        window.location.href = `http://www.haikupirate.com/winner/${pass.concat(a,b,c,d,e)}`;
                    } else {
                        ReactGA.event({
                            category: 'Code Entry Invalid',
                            label: `All Coded Entered`,
                            action: `Entered Invalid Code All Codes`
                        });

                        //console.log("fail")

                        buildWinner({
                            pass: "",
                            a:"",
                            b:"",
                            c:"",
                            d:"",
                            e:"",
                            complete: false
                        })
                    }
                })
            //console.log("submit now")
        } else {
           console.log("lenght", pass.concat(a,b,c,d,e).length) 
        }

    });

    //console.log("winner", winner);
    return (
        <React.Fragment>
            {Slides.map((slide, i) => <Tile
                img={slide.img}
                date={slide.date}
                timer={slide.timer}
                link={slide.link}
                group={slide.group}
                form={slide.form}
                check={slide.check}
                key={i}
                twitter={i === 0 ? true : false}
                offset={slide.offset}
                winner={winner}
                buildWinner={buildWinner}
            /> )}
        </React.Fragment>
        
    );
};

export default ChapterTwo;