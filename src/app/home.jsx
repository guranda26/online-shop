"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from "./components/Loader";

const Homepage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      console.warn("No access token found. User not authenticated.");
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error("Error fetching user data");
          localStorage.removeItem("accessToken");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <p>
        <LoadingSpinner />
      </p>
    );
  }
  return (
    <div
      id="home"
      className="min-h-[85vh] bg-[#f4d4ecad] flex items-center justify-center overflow-hidden"
    >
      <div className="text-gray-700 font-semibold">
        <h1 className="font-poppins mb-5 text-5xl">Welcome to the Home Page</h1>
        {user ? (
          <p className="home-txt text-2xl">
            Hello, <strong className="highlight">{user.firstName}</strong>!
            Explore the app and manage your products and blog posts.
          </p>
        ) : (
          <p className="text-2xl">You are not logged in.</p>
        )}
        <p className="mt-2 text-2xl">
          We are dedicated to providing the best services for our customers.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
