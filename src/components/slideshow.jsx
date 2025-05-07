import { useState } from "react";
import "../styles/global.css";

export function Slideshow(){

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
                        <div className="message w-3/4 mx-auto flex-col text-center justify-center items-center">
                            <h2 className="text-white text-[25px] font-normal mb-5">" {testimony.ClientMessage} "</h2>
                            <h1 className="text-white text-3xl font-light mb-5">{testimony.Platform}</h1>
                            <img className="stars inline" src="data:image/svg+xml,%3Csvg width='203' height='33' viewBox='0 0 203 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.9712 0L20.9775 12.3303H33.9423L23.4536 19.9508L27.4599 32.2811L16.9712 24.6605L6.48241 32.2811L10.4888 19.9508L0 12.3303H12.9648L16.9712 0ZM185.424 0L189.43 12.3303H202.395L191.906 19.9508L195.913 32.2811L185.424 24.6605L174.935 32.2811L178.941 19.9508L168.453 12.3303H181.417L185.424 0ZM63.0907 12.3303L59.0843 0L55.078 12.3303H42.1132L52.6019 19.9508L48.5956 32.2811L59.0843 24.6605L69.5731 32.2811L65.5667 19.9508L76.0555 12.3303H63.0907ZM143.311 0L147.317 12.3303H160.282L149.793 19.9508L153.799 32.2811L143.311 24.6605L132.822 32.2811L136.828 19.9508L126.34 12.3303H139.304L143.311 0ZM105.204 12.3303L101.198 0L97.1912 12.3303H84.2263L94.7151 19.9508L90.7088 32.2811L101.198 24.6605L111.686 32.2811L107.68 19.9508L118.169 12.3303H105.204Z' fill='white'/%3E%3C/svg%3E%0A" alt="img"></img>
                        </div>
                    </div>
                ))};
            </div> 
            <div className="w-full h-full absolute flex justify-between items-center px-5">
                <button className="nxt-btn text-white bg-transparent opacity-100 rounded-full w-[4rem] h-[4rem] ease-in-out duration-300 hover:opacity-60 flex justify-center items-center border-2 border-white" onClick={nextReview}>
                    <svg className="transform rotate-180" width="40" height="20" viewBox="0 0 65 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.7678 20.7678C64.7441 19.7915 64.7441 18.2085 63.7678 17.2322L47.8579 1.32233C46.8816 0.34602 45.2986 0.34602 44.3223 1.32233C43.346 2.29864 43.346 3.88155 44.3223 4.85786L58.4645 19L44.3223 33.1421C43.346 34.1184 43.346 35.7014 44.3223 36.6777C45.2986 37.654 46.8816 37.654 47.8579 36.6777L63.7678 20.7678ZM0 21.5L62 21.5V16.5L0 16.5L0 21.5Z" fill="white"/>
                    </svg>
                </button>
                <button className="prev-btn text-white bg-transparent opacity-100 rounded-full w-[4rem] h-[4rem] ease-in-out duration-300 hover:opacity-60 flex justify-center items-center border-2 border-white" onClick={prevReview}>
                    <svg width="40" height="20" viewBox="0 0 65 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.7678 20.7678C64.7441 19.7915 64.7441 18.2085 63.7678 17.2322L47.8579 1.32233C46.8816 0.34602 45.2986 0.34602 44.3223 1.32233C43.346 2.29864 43.346 3.88155 44.3223 4.85786L58.4645 19L44.3223 33.1421C43.346 34.1184 43.346 35.7014 44.3223 36.6777C45.2986 37.654 46.8816 37.654 47.8579 36.6777L63.7678 20.7678ZM0 21.5L62 21.5V16.5L0 16.5L0 21.5Z" fill="white"/>
                    </svg>
                </button>
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