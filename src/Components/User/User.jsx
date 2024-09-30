import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import UserPhotoPost from "./UserPhotoPost";
import Feed from "../Feed/Feed";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="statistics" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
