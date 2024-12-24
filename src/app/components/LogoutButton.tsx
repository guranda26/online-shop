"use client";
import "../../styles/LogoutButton.css";
import { signOutAction } from "../actions";
import { IoLogOutOutline } from "react-icons/io5";

export default function LogoutButton() {
  return (
    <div className="logout-btn">
      <form action={signOutAction}>
        <button type="submit" className="h-[100%]">
          <IoLogOutOutline className="w-7 h-7" />
        </button>
      </form>
    </div>
  );
}
