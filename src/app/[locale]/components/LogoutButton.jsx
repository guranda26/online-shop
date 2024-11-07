"use client";
import "../../../styles/LogoutButton.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { IoLogOutOutline } from "react-icons/io5";

export default function LogoutButton() {
  const { logout } = useUser;

  const logoutHandler = () => {
    logout({ returnTo: "/api/auth/login" });
  };

  return (
    <div className="logout-btn" onClick={logoutHandler}>
      <a href="/api/auth/logout" className="h-[100%]">
        <IoLogOutOutline className="w-7 h-7" />
      </a>
    </div>
  );
}
