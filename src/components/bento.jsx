import "../styles/global.css";

/*
Goal: component to create bento grids for image gallery using object list holding img URLs
*/
function BentoGallery(){
    return(
        <div>
            {images.map((images, i) => (
                <div key={i} className={images.direction}>
                    <div className="image-box" style={{ gridArea: "box1",  backgroundImage: `url(${images.img1})` }}></div>
                    <div className="image-box" style={{ gridArea: "box2",  backgroundImage: `url(${images.img2})` }}></div>
                    <div className="image-box" style={{ gridArea: "box3",  backgroundImage: `url(${images.img3})` }}></div>
                    <div className="image-box" style={{ gridArea: "box4",  backgroundImage: `url(${images.img4})` }}></div>
                    <div className="image-box" style={{ gridArea: "box5",  backgroundImage: `url(${images.img5})` }}></div>
                </div>
            ))};
        </div>
        
    );
}

const images = [
    {
        direction: "grid",

    },
    {
        direction: "grid flipped",

    },
    {
        direction: "grid",

    },
    {
        direction: "grid flipped",

    },
    {
        direction: "grid",

    },
    {
        direction: "grid flipped",

    }
];

export default BentoGallery;