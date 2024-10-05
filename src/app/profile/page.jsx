import React from "react";
import "../../styles/ProfilePage.css";
import { usersData } from "../../utils/usersData";

const user = usersData();

const Profile = () => {
  return (
    <section className="profile-page">
      <h1 className="profile-title">About User</h1>
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={user.profileImage}
            alt={`${user.name}`}
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
          <label htmlFor="gender">Hobbies</label>
          {user.hobbies.map((hobby, index) => (
            <input
              type="text"
              id={`hobbies-${index}`}
              value={hobby}
              readOnly
              className="form-input"
              key={index}
            />
          ))}
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
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={user.address}
            readOnly
            className="form-input"
          />
        </div>
      </form>
    </section>
  );
};

export default Profile;
