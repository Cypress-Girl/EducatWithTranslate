import React, {useContext} from 'react';
import "../../App.css";
import DescriptBlock from "../DescriptBlock";
import {LangContext} from "../../data/translate";

const FullstackFor = () => {

    const ctx = useContext(LangContext);
    let description = ctx.lang.HOME.for_whom;

    return (
        <section className="fullstack-for">
            <p className="for-caption">{ctx.lang.HOME.for_caption}</p>

            <div className="for-3-in-1">

                {description.map((item, index) =>
                    <DescriptBlock key={index} img={item.img} className={`img${index}`} caption={item.caption} text={item.text} />
                )}

            </div>
        </section>
    )
}

export default FullstackFor;