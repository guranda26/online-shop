import { signUpAction } from "../../../actions";
import { FormMessage, Message } from "../../../components/form-message";
import { SubmitButton } from "../../../components/submit-button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="w-full pt-6 px-4">
      <div className="bg-[#5d5d8f] md:p-6 p-4 max-w-[440px] mx-auto rounded-2xl pb-8">
        <form className="flex flex-col min-w-64  mx-auto">
          <h1 className="text-2xl font-medium text-white">Sign up</h1>
          <p className="text-xs text-wrap sm:text-sm flex flex-wrap justify-center md:textmd text-white text-foreground text-center sm:text-left">
            <span> Already have an account? </span>
            <Link
              className="text-foreground font-medium underline"
              href="/sign-in"
            >
              <span data-cy="sign-in">Sign in</span>
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              name="email"
              placeholder="you@example.com"
              required
              className={`sm:w-full w-[80%] mx-auto max-w-[100%] bg-[#35355c] p-2 border rounded border-transparent  focus:ring-gray-300 `}
            />
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={6}
              required
              className={`sm:w-full w-[80%] mx-auto max-w-[100%] bg-[#35355c] p-2 border rounded border-transparent  focus:ring-gray-300 `}
            />
            <SubmitButton
              formAction={signUpAction}
              pendingText="Signing up..."
              className=" px-8 py-2 self-center bg-blue-500 text-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign up
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
        <SmtpMessage />
      </div>
    </div>
  );
}
