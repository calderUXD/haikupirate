import React from 'react';
import Tile from './components/Slide2';

const Slides = [
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/one_zivcwd.png",
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
        offset: 0
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
        offset: 5
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1604124119/chaptertwo/october30_xonmpp.png",
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
        ]
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/five_yp9v5b.png",
        date: "2020-12-21T05:30:00",
        timer: true,
        link: null,
        group: "d",
        form: false
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/six_thznsb.png",
        date: "2021-02-09T02:33:00",
        timer: true,
        link: null,
        group: "e",
        form: false
    }

]

const ChapterTwo = () => {
    return (
        <React.Fragment>
            {Slides.map((slide, i) => <Tile
                img={slide.img}
                date={slide.date}
                timer={slide.timer}
                link={slide.link}
                group={slide.group}
                form={slide.form}
                key={i}
                twitter={i === 0 ? true : false}
                offset={slide.offset}
            /> )}
        </React.Fragment>
        
    );
};

export default ChapterTwo;