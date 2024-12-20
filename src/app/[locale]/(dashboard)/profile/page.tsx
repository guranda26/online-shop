"use client";
import React from "react";
import LoadingSpinner from "../../../components/Loader";

import "../../../../styles/ProfilePage.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import NotFoundPage from "../../not-found";

type UserType = {
  given_name?: string;
  name?: string;
  email?: string;
  picture?: string;
};

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

  const { name, picture, email } = user as UserType;

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
