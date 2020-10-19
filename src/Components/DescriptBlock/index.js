import React from 'react'
import Description from "../Description";

const DescriptBlock = (props) => {

    let img = (props.img) ?
        (<div className="for-container">
            <img src={props.img} alt='img' className={props.className} />
        </div>) :
        null;

    return(
        <figure className="descript-block">
            {img}
            <Description caption={props.caption} text={props.text}/>
        </figure>
    )
}

export default DescriptBlock;