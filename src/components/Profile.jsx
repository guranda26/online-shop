import React, { useState } from "react";
import "../styles/ProfilePage.css";
import { usersData } from "../utils/usersData";

const user = usersData();

const Profile = () => {
  return (
    <section className="profile-page">
      <h1 className="profile-title">About User</h1>
    </section>
  );
};

export default Profile;
