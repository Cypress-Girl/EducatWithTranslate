import React, {useContext} from 'react'
import DescriptBlock from "../DescriptBlock";
import {LangContext} from "../../data/translate";

const FullstackDescription = () => {
    let ctx = useContext(LangContext);

    let description = ctx.lang.HOME.descript_block;

    return (
        <section className="fullstack-description">
            <div className="price-and-date">
                <span>{ctx.lang.HOME.price}</span>
                <span>{ctx.lang.HOME.begin}</span>
                <span>{ctx.lang.HOME.format}</span>
                <span>{ctx.lang.HOME.duration}</span>
                <span>{ctx.lang.HOME.level}</span>
            </div>
            <div className="fullstack-3-in-1">
                {description.map((item, index) =>
                    <DescriptBlock key={index} img={null} caption={item.caption} text={item.text} />
                )}
            </div>

            <div className="video-container">
                <video src="./video/videoplayback.mp4" poster="./images/@_ DSC_8336.psd3x.png"
                       className="video-about" controls/>
            </div>
        </section>
    )
}

export default FullstackDescription;