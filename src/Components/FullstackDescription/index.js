import React, {useContext} from 'react'
import DescriptBlock from "../DescriptBlock";
import {LangContext} from "../../data/translate";

function playVideo() {
    refVideo.current.controls = true;
    refVideo.current.play();
}

function clickPlay() {
    let infoContainer = document.getElementById("play-info-container");
    if (infoContainer)
        infoContainer.style.display = "none";

    playVideo();
}

let refVideo = React.createRef();

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
                    <DescriptBlock key={index} img={null} caption={item.caption} text={item.text}/>
                )}
            </div>

            <div className="video-container">
                <video ref={refVideo} poster="./images/@_ DSC_8336.psd3x.png" className="video-about">
                    <source src="/video/videoplayback.mp4"/>
                </video>

                <figure id="play-info-container">
                    <figure id="play-container" onClick={clickPlay}>
                        <div id="button-play">
                            <img src="/images/Group 3.png" alt="button play"/>
                        </div>
                        <span>{ctx.lang.HOME.play}</span>
                    </figure>

                    <figure id="info-container">
                        <p>{ctx.lang.HOME.video_info}</p>
                    </figure>
                </figure>

            </div>
        </section>
    )
}

export default FullstackDescription;