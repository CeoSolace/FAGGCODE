'use client';
import { signIn } from 'next-auth/react';
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to FreeAgents</h1>
      <button
        onClick={() => signIn('discord', { callbackUrl: '/home' })}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
      >
        Sign in with Discord
      </button>
    </div>
  );
}
