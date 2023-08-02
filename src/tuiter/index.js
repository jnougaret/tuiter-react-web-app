import React from "react";
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeScreen from "./navigation-sidebar/home-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import ExploreScreen from "./explore-screen";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer}});

function Tuiter() {
  return (
   <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="d-block col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <NavigationSidebar />
          </div>
          <div className="d-block col-8 col-sm-9 col-md-9 col-lg-6 col-xl-7 col-xxl-7">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xl-3 col-xxl-3">
            <WhoToFollowList />
          </div>
        </div>
      </div>
   </Provider>
 );
}
export default Tuiter;