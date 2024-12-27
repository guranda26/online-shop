import { signUpAction } from '../../../actions';
import { FormMessage, Message } from '../../../components/form-message';
import { SubmitButton } from '../../../components/submit-button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import Link from 'next/link';
import { SmtpMessage } from '../smtp-message';

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ('message' in searchParams) {
    return (
      <div className='w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4'>
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className='w-full pt-6 px-4'>
      <div className='bg-[#5d5d8f] md:p-6 p-4 max-w-[440px] mx-auto rounded-2xl pb-8'>
        <form className='flex flex-col min-w-64  mx-auto'>
          <h1 className='text-2xl font-medium'>Sign up</h1>
          <p className='text-sm text text-foreground'>
            Already have an account?{' '}
            <Link
              className='text-primary font-medium underline'
              href='/sign-in'
            >
              Sign in
            </Link>
          </p>
          <div className='flex flex-col gap-2 [&>input]:mb-3 mt-8'>
            <Label htmlFor='email'>Email</Label>
            <Input
              name='email'
              placeholder='you@example.com'
              required
              className={`w-full bg-[#35355c] p-2 border rounded border-transparent  focus:ring-gray-300 `}
            />
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              name='password'
              placeholder='Your password'
              minLength={6}
              required
              className={`w-full bg-[#35355c] p-2 border rounded border-transparent  focus:ring-gray-300 `}
            />
            <SubmitButton
              formAction={signUpAction}
              pendingText='Signing up...'
              className=' px-4 py-2 self-center bg-blue-500 text-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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
