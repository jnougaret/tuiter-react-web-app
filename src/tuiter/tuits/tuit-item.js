import React from "react";
import TuitStats from "./tuit-stats";
import {useSelector} from "react-redux";
const TuitItem = (
    {
   tuit = {
    "topic": "Space", "userName": "SpaceX",
    "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "2h",   "image": "../images/tesla_logo.jpeg", "liked": true, "replies": 123,
    "retuits": 432, "likes": 2345, "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
   }
 }
 
) => {
    const { tuits } = useSelector(state => state.tuits)
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={48} className="rounded-circle" src={`/images/${tuit.image}`} alt="logo" />
                </div>
                <div className="col-10">
                    <div><span className="fw-bolder">{tuit.userName}</span> {tuit.handle} {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
