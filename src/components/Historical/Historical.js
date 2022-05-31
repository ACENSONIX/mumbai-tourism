import { Link } from "react-router-dom";
const Historical = () => {
    return (
        <>
            <h1>This is Dummy Card In Historical</h1>
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/historical-gate-way-of-india'}>Gate Way Of India</Link>
            </div>
            <br />
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/historical-chhatrapati-shivaji-terminus'}>Chhatrapati Shivaji Terminus</Link>
            </div>
            <br />
            <div style={{ width: "500px", height: "500px", backgroundColor: "blue" }}>
                <Link to={'/historical-elephanta-caves'}>Elephanta Caves</Link>
            </div>
        </>
    );
};
export default Historical;