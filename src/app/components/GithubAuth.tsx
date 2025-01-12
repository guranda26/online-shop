import React from "react";
import { signinWithGithub } from "../actions";

export default function GithubAuth() {
  return (
    <form className="flex flex-col items-center gap-4">
      <button
        className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 active:bg-gray-700 focus:ring-2 focus:ring-gray-400"
        formAction={signinWithGithub}
      >
        Sign in with Github
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="github"
          width={20}
          height={20}
        />
      </button>
    </form>
  );
}
