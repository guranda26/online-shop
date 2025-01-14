import React from "react";
import { signInAction } from "../../../actions";
import { FormMessage, Message } from "../../../components/form-message";
import { SubmitButton } from "../../../components/submit-button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import Link from "next/link";
import GithubAuth from "@/src/app/components/GithubAuth";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="pt-6 px-4">
      <div className="bg-[#5d5d8f] md:p-6 p-4 max-w-[440px] mx-auto rounded-2xl pb-8">
        <form className="flex-1  flex flex-col min-w-64 ">
          <h1 className="text-2xl font-medium  text-white">Sign in</h1>
          <p className="text-xs text-wrap sm:text-sm flex flex-wrap justify-center md:textmd text-white text-foreground text-center sm:text-left">
            <span>Don&apos;t have an account? </span>
            <Link
              className="text-foreground font-medium underline"
              href="/sign-up"
              data-cy="sign-up"
            >
              <span>Sign up</span>
            </Link>
          </p>

          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 items-center">
            <Label htmlFor="email" className="text-white mx-auto">
              Email
            </Label>
            <Input
              name="email"
              id="email"
              data-cy="email-input"
              placeholder="you@example.com"
              required
              className={`sm:w-full w-[80%] mx-auto max-w-[100%] bg-[#35355c] p-3 border rounded border-gray-500 focus:ring-2 focus:ring-blue-500 sm:text-sm md:text-base`}
            />
            <Label htmlFor="password" className="text-white">
              Password
            </Label>

            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              data-cy="password-input"
              required
              className={`sm:w-full w-[80%] mx-auto max-w-[100%] bg-[#35355c] p-3 border rounded border-gray-500 focus:ring-2 focus:ring-blue-500 sm:text-sm md:text-base`}
            />
            <SubmitButton
              className="mt-6 px-8 py-2 self-center bg-blue-500 text-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              pendingText="Signing In..."
              formAction={signInAction}
              data-cy="sign-in-btn"
            >
              Sign in
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
        <GithubAuth />
      </div>
    </div>
  );
}
