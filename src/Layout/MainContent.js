// MainContent.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../Components/Users";
import Profiles from "../Components/Profiles";
import Editusers from "../Components/Editusers";
import Addusers from "../Components/Addusers";
import Editprofiles from "../Components/Editprofiles";


const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
      <Route path="/addusers" element={<Addusers/>} />
      <Route path="/editusers" element={<Editusers/>} />
      <Route path="/profile" element={<Profiles />} />
      <Route path="/editprofile" element={<Editprofiles />} />
    </Routes>
  );
};

export default MainContent;
