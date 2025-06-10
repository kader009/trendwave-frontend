'use client';

import Container from '@/components/ui/Container';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import {
  SetEmail,
  SetPassword,
} from '@/redux/features/authentication/loginSlice';
import { useLoginMutation } from '@/redux/api/endApi';
import { toast } from 'sonner';
import { setUser } from '@/redux/features/authentication/userSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const error = useAppSelector((state: RootState) => state.user.error);
  const [login] = useLoginMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const { email, password } = data;
      const userData = await login({ email, password });

      if (userData?.data?.user && userData?.data?.token) {
        dispatch(setUser(userData.data));
        toast.success('Welcome to TrendWave');
        dispatch(SetEmail(''));
        dispatch(SetPassword(''));
        router.replace('/');
      } else {
        throw new Error('Invalid login response write again');
      }
    } catch (error) {
      console.error(error);
      const message =
        (error as { message?: string; error?: string })?.message ||
        (error as { message?: string; error?: string })?.error ||
        'Invalid email or password';
      toast.error(message);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8">
          <div className="w-full max-w-md">
            <Image
              src="/login.svg"
              width={500}
              height={500}
              alt="Login Illustration"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md space-y-5"
          >
            <h1 className="text-3xl font-bold text-center">Login</h1>

            {/* Email Field */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                  },
                })}
                className="w-full px-4 py-2 border rounded"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => dispatch(SetEmail(e.target.value))}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="w-full px-4 py-2 border rounded"
                placeholder="********"
                value={password}
                onChange={(e) => dispatch(SetPassword(e.target.value))}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-700 transition"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center text-sm">
              New to here?{' '}
              <Link
                href="/register"
                className="text-blue-600 hover:underline font-medium"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}
