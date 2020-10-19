import React from 'react'

const Description = (props) => {
    return(
        <React.Fragment>
            <p className="descript-caption height64">{props.caption}</p>
            <p className="descript-text">{props.text}</p>
        </React.Fragment>
    )
}

export default Description;