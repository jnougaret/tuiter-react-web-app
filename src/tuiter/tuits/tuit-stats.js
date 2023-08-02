import React from "react";
const TuitStats = (
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
 return(
     <li className="list-group-item">
        <div className="row">
            <div className="col-4">
                <div>{tuit.replies}</div>
            </div>
            <div className="col-4">
                <div>{tuit.retuits}</div>
            </div>
            <div className="col-4">
                <div>{tuit.likes}</div>
            </div>
        
        </div>
    </li>
 );
};
export default TuitStats;
