import React from 'react'
import FullstackInfo from "../../Components/FullstackInfo";
import FullstackDescription from "../../Components/FullstackDescription";
import FullstackFor from "../../Components/FullstackFor";

const Home = () => {
    return (
        <div className="main-container">
            <FullstackInfo/>
            <FullstackDescription/>
            <FullstackFor/>
        </div>
    )
}

export default Home;