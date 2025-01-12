"use client";
import React from "react";

import "../../../../styles/ProfilePage.css";

type UserType = {
  given_name?: string;
  name?: string;
  email?: string;
  picture?: string;
};

const Profile = () => {
  const user = {};

  const { name, picture, email } = {
    name: "Guranda",
    picture: "picture",
    email: "gurandalemonjava@gmail.com",
  } as UserType;

  return (
    user && (
      <section className="profile-page bg-profile">
        <h1 className="profile-title">About User</h1>
        <div className="profile-card">
          <div className="profile-image-container mx-auto">
            <img
              src={picture || "../../assets/person.svg"}
              alt={name || "User"}
              className="profile-image translate-x-[50%]"
            />
          </div>
        </div>
        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              readOnly
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              readOnly
              className="form-input"
            />
          </div>
        </form>
      </section>
    )
  );
};

export default Profile;
