import { signInAction } from '../../../actions';
import { FormMessage, Message } from '../../../components/form-message';
import { SubmitButton } from '../../../components/submit-button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import Link from 'next/link';
import GithubAuth from '@/src/app/components/GithubAuth';

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className='w-full pt-6 px-4'>
      <div className='bg-[#5d5d8f] md:p-6 p-4 max-w-[440px] mx-auto rounded-2xl pb-8'>
        <form className='flex-1  flex flex-col min-w-64 '>
          <h1 className='text-2xl font-medium'>Sign in</h1>
          <p className='text-sm text-foreground'>
            Don&apos;t have an account?{' '}
            <Link
              className='text-foreground font-medium underline'
              href='/sign-up'
            >
              Sign up
            </Link>
          </p>
          <div className='flex flex-col gap-2 [&>input]:mb-3 mt-8 items-start'>
            <Label htmlFor='email'>Email</Label>
            <Input
              name='email'
              id='email'
              placeholder='you@example.com'
              required
              className={`w-full bg-[#35355c] p-2 border rounded border-transparent  focus:ring-gray-300 `}
            />
            <div className='flex justify-between items-center'>
              <Label htmlFor='password'>Password</Label>
            </div>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Your password'
              required
              className={`w-full bg-[#35355c] p-2 border rounded border-transparent  focus:ring-gray-300 `}
            />
            <SubmitButton
              className='mt-6 px-4 py-2 self-center bg-blue-500 text-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              pendingText='Signing In...'
              formAction={signInAction}
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
