"use client";
import "../../styles/LogoutButton.css";
// import { useUser } from "@auth0/nextjs-auth0/client";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout } = useAuth0();

  const logoutHandler = () => {
    logout({ logoutParams: { returnTo: "/sign-in" } });
  };

  return (
    <div className="logout-btn" onClick={logoutHandler}>
      <a href="/sign-in" className="h-[100%]">
        <IoLogOutOutline className="w-7 h-7" />
      </a>
    </div>
  );
}
