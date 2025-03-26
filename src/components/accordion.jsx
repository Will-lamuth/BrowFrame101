/*
Accordion component for the Services section of homepage
*/
import "../styles/accordion.css";
import { useState } from "react";

function Accordion() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="wrapper">
            <div className="accordion">
                {services.map((item, i) => (
                    <div key={i} className="item animate">
                        <div className="service" onClick={() => toggle(i)}>
                            <h2 className="service-title">{item.service}</h2>
                            <span className="service-direction">{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <p className="service-descript">{item.description}</p>
                            <p className="service-descript">{item.price}</p>
                        </div>
                        <hr></hr>
                    </div>
                ))}
            </div>
        </div>
    );
}


const services = [
    {
        service: 'Fresh Set Powderbrow',
        description: 'Powderbrow is a machine shading technique that will give you a soft powdery everday makeup look.',
        price: '$500+ | 135 min'
    },
    {
        service: 'Microblading & Shading',
        description: 'Technique that combines microblading hairstrokes with powderbrow shading to create a realistic look.',
        price: '$550+ | 150 min'
    },
    {
        service: 'Microblading',
        description: 'Microblading is a hairstroke technique that blends with your natural hairs. Works best for those with dry skin, fine pores, under 35y/o, and some brow hair',
        price: '$500+ | 135 min'
    },
    {
        service: 'Powderbrow Touchup',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$500+ | 135 min'
    },
    {
        service: 'Brow Tattoo Removal',
        description: 'Technique that combines microblading hairstrokes with powderbrow shading to create a realistic look.',
        price: '$550+ | 150 min'
    }
];

export default Accordion;
