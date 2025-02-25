import { useState } from "react";
import "../styles/global.css";

export function Slideshow(){
    console.log("slideshow is rendering");

    const [index, setIndex] = useState(0);
    const nextReview = () => {
        setIndex((next) => (next - 1 + testimony.length) % testimony.length)
    };

    const prevReview = () => {
        setIndex((prev) => (prev + 1 + testimony.length) % testimony.length)
    };

    return(
        <div className="testimony-wrapper h-full w-full overflow-hidden flex items-center relative">
            <div className="flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                {testimony.map((testimony, i) => (
                    <div key={i} className="review w-full flex-col justify-center items-center flex-shrink-0">
                        <div className="message flex-col text-center">
                            <h1 className="text-white text-4xl font-medium mb-5">{testimony.Platform}</h1>
                            <h2 className="text-white text-2xl font-normal mb-5">"{testimony.ClientMessage}"</h2>
                            <text className="text-white text-3xl font-normal"> -{testimony.ClientName}</text>
                        </div>
                    </div>
                ))};
            </div> 
            <div className="w-full h-full absolute flex justify-between items-center px-5">
                <button className="nxt-btn text-white bg-black opacity-30 rounded-full w-[3rem] h-[3rem] hover:scale-[107%] ease-in-out duration-300 hover:opacity-60" onClick={nextReview}>&lt;</button>
                <button className="prev-btn text-white bg-black opacity-30 rounded-full w-[3rem] h-[3rem] hover:scale-[107%] ease-in-out duration-300 hover:opacity-60" onClick={prevReview}>&gt;</button>
            </div>
            
        </div>
    );

}


const testimony = [
    {
        ClientName:"Carleta",
        Platform: "GlossGenius",
        ClientRating:"5",
        ClientMessage:"My whole experience was wonderful. She made me feel comfortable and confident about her work. I love the way she used my bone structure to line up my eyebrows. Definitely work the money and time. Thank you again and I will definitely be back."
    },
    {
        ClientName:"Andrea",
        Platform: "GlossGenius",
        ClientRating:"5",
        ClientMessage:"Today was my 1st ever powderbrow or anything that had to do with a needle to my skin. Tyda made the experience very easy and relaxing. Her place is clean and very professional. I would recommend her services to anyone who wants beautiful and lasting brows. Mine turned out great!"
    },
    {
        ClientName:"Amy",
        Platform: "GlossGenius",
        ClientRating:"5",
        ClientMessage:"Thyda is absolutely amazing! Her professionalism is top notch! She did an amazing job on my brows! I am so happy I booked with her! Thank you Thyda!"
    },
    {
        ClientName:"Lynne",
        Platform: "GlossGenius",
        ClientRating:"5",
        ClientMessage:"Thyda slayed my brows!!! Her chair side manner is stellar!!! She’s the real deal: extremely professional, excellent at her craft, and stands behind her work!!! She’s just awesome!!!"
    },
    {
        ClientName:"Paige",
        Platform: "GlossGenius",
        ClientRating:"5",
        ClientMessage:"Thyda was so welcoming and explained everything thoroughly the entire time. The powder brow was painless- I highly recommend her and will be sending some ladies her way! Thanks again Thyda!"
    }
];

export default Slideshow;