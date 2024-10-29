"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../../components/Loader";

import "../../../styles/ProfilePage.css";
// import { usersData } from "../../../utils/usersData";

// const user = usersData();

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    async function fetchUser() {
      try {
        const res = await fetch("https://dummyjson.com/user/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch profile data");
          return;
        }

        const data = await res.json();

        // Update the user state
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, [router]);

  // Render loading state if user is null
  if (!user) {
    return <LoadingSpinner />;
  }
  return (
    <section className="profile-page">
      <h1 className="profile-title">About User</h1>
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={user.image || "../../assets/person.svg"}
            alt={user.firstName || "User"}
            className="profile-image"
          />
        </div>
      </div>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={user.firstName}
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
        <div className="form-group">
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
        </div>
      </form>
    </section>
  );
};

export default Profile;
