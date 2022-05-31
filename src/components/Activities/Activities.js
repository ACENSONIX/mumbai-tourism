import React from "react";
import { Link } from "react-router-dom";
const Activities = () => {
    return (
        <>
            <h1>This is Dummy Card In Activity</h1>
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/activities-mumbai-zoo'}>Read More About Mumbaizoo</Link>
            </div>
            <br />
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/activities-sanjay-gandhi-national-park'}>Read More Sanjay Gandhi National Park</Link>
            </div>
            <br />
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/activities-fashion-street'}>Read More About Fashion Street</Link>
            </div>
            <br />
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/activities-essel-world'}>Read More Essel World</Link>
            </div>
        </>
    );
};
export default Activities;