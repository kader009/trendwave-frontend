'use client';

import Container from '@/components/ui/Container';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type FormData = {
  name: string;
  email: string;
  password: string;
  image: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <Container>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <Image
            src="/login.svg"
            width={500}
            height={500}
            alt="login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-4"
          >
            <h1 className="text-3xl font-bold text-center">Login</h1>

            {/* Email */}
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
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
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
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
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
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}
