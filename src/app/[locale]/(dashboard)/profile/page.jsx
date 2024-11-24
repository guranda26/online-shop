"use client";
import React from "react";
import LoadingSpinner from "../../../components/Loader";

import "../../../../styles/ProfilePage.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import NotFoundPage from "../../not-found";

const Profile = () => {
  const { user, error, isLoading } = useUser();
  if (!user || isLoading) {
    return <LoadingSpinner />;
  }
  if (error)
    return (
      <div>
        <NotFoundPage />
      </div>
    );

  return (
    user && (
      <section className="profile-page bg-profile">
        <h1 className="profile-title">About User</h1>
        <div className="profile-card">
          <div className="profile-image-container mx-auto">
            <img
              src={user.picture || "../../assets/person.svg"}
              alt={user.name || "User"}
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
              value={user.name}
              readOnly
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={user.email}
              readOnly
              className="form-input"
            />
          </div>
          {/* <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={user.age}
            readOnly
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            value={user.gender}
            readOnly
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <p className="form-input">
            <span>{user.address.address}</span>
            <span>{user.address.city}</span>
            <span>{user.address.country}</span>
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={user.phone}
            readOnly
            className="form-input"
          />
        </div> */}
        </form>
      </section>
    )
  );
};

export default Profile;