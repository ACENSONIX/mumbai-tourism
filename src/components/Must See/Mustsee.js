import React from "react";
import { Link } from "react-router-dom";
const Mustsee = () => {
    return (
        <>
            <h1>This is Dummy Card In Must see</h1>
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/mustsee-worli-sea-link'}>Read More About Worli Sea Link</Link>
            </div>
            <br />
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/mustsee-marine-drive'}>Read More about Marine Drive</Link>
            </div>
            <br />
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/mustsee-film-city'}>Read More About Film City</Link>
            </div>
        </>
    );
};
export default Mustsee;