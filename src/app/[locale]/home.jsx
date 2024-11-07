"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/Loader";
import "../../index.css";
import { useUser } from "@auth0/nextjs-auth0/client";

const Homepage = () => {
  const { user, isLoading } = useUser();
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  // const accessToken = localStorage.getItem("accessToken");

  // if (!accessToken) {
  //   console.warn("No access token found. User not authenticated.");
  //   setLoading(false);
  //   return;
  // }

  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/auth/me", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const data = await response.json();
  //       if (response.ok) {
  //         setUser(data);
  //       } else {
  //         console.error("Error fetching user data");
  //         localStorage.removeItem("accessToken");
  //       }
  //     } catch (error) {
  //       console.error("An error occurred:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserProfile();
  // }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section id="home">
      <div className="min-h-[85vh] bg-background text-textColor flex items-center justify-center overflow-hidden w-screen">
        <div className="font-semibold">
          <h1 className="font-poppins mb-5 text-5xl text-textColor">
            Welcome to the Home Page
          </h1>
          {user ? (
            <>
              <p className="home-txt text-2xl text-textColor">
                Hello,{" "}
                <strong className="highlight">
                  {user.given_name.toUpperCase()}
                </strong>
                ! Explore the app and manage your products and blog posts.
              </p>
            </>
          ) : (
            <p className="text-2xl text-textColor">You are not logged in.</p>
          )}
          <p className="mt-2 text-2xl text-textColor">
            We are dedicated to providing the best services for our customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
