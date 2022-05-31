import { Link } from "react-router-dom";
import CardItem from "../Cards/CardItem";

const Historical = () => {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="Assets/Images/3.jpg"
                text="Gate Way Of India"
                label="Sightseeing"
                path="/historical-gate-way-of-india"
              />
              <CardItem
                src="Assets/Images/1.jpg"
                text="Chhatrapati Shivaji Terminus"
                label="Heritage"
                path="/historical-chhatrapati-shivaji-terminus"
              />
              <CardItem
                src="Assets/Images/7.jpg"
                text="Mumbai's fun theme park"
                label="Fun"
                path="/historical-elephanta-caves"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Historical;
