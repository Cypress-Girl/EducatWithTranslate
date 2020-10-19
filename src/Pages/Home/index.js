import React from 'react'
import FullstackInfo from "../../components/FullstackInfo";
import FullstackDescription from "../../components/FullstackDescription";
import FullstackFor from "../../components/FullstackFor";

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