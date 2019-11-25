const slides = [
    {
        image: "https://res.cloudinary.com/haikupirate/image/upload/v1574665100/haiku/maps_qm0rkn.png",
    },
    {
        image: "https://res.cloudinary.com/haikupirate/image/upload/v1574657183/haiku/one_pcooux.png",
        inputs: {
            position: ["42px", "20px"],
            group: "a",
            offset: 0,
            direction: "x",
            fields: [1,2,3,4,5]
        }
    },
    {
        image: "https://res.cloudinary.com/haikupirate/image/upload/v1574658766/haiku/two_u1jdgg.png",
        inputs: {
            position: ["22px", "33px"],
            group: "b",
            offset: 5,
            direction: "y",
            fields: [1,2,3,4,5]
        }
    },{
        image: "https://res.cloudinary.com/haikupirate/image/upload/v1574660980/haiku/three_ofjwnx.png",
        inputs: {
            position: ["22px", "33px"],
            group: "c",
            offset: 10,
            direction: "y",
            fields: [1,2,3,4,5]
        }
    },{
        image: "https://res.cloudinary.com/haikupirate/image/upload/v1574660650/haiku/four_pgtkog.png",
        inputs: {
            position: ["42px", "20px"],
            group: "d",
            offset: 15,
            direction: "x",
            fields: [1,2,3,4,5]
        }
    },{
        image: "https://res.cloudinary.com/haikupirate/image/upload/v1574660649/haiku/five_qlp603.png",
        inputs: {
            position: ["42px", "33px"],
            group: "e",
            offset: 20,
            direction: "random",
            fields: [1,2,3,4,5]
        }
    }
];

export default slides;