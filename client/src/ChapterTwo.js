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
        form: true
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/three_qi2dss.png",
        date: "",
        timer: false,
        link: "https://gofile.io/d/W8akZs",
        group: "b",
        form: true
    },
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1602142509/chaptertwo/four_pmbzzh.png",
        date: "2020-10-31T07:49:00",
        timer: true,
        link: null,
        group: "c",
        form: false
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
            {Slides.map(slide => <Tile
                img={slide.img}
                date={slide.date}
                timer={slide.timer}
                link={slide.link}
                group={slide.group}
                form={slide.form}
            /> )}
        </React.Fragment>
        
    );
};

export default ChapterTwo;