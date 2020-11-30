import React from 'react';
import Tile from './components/Slide2';

const Slides = [
    {
        img: "https://res.cloudinary.com/haikupirate/image/upload/v1606707328/chaptertwo/fullmoon_iavn7g.png",
        date: "2021-02-09T02:33:00",
        timer: false,
        link: null,
        group: "a",
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
                twitter={false}
                offset={slide.offset}
            /> )}
        </React.Fragment>
        
    );
};

export default ChapterTwo;