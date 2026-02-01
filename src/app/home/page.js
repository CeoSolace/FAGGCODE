'use client';

import { useSession } from 'next-auth/react';
import { Player } from '@remotion/player';
import { IntroVideo } from '../../../remotion/IntroVideo';

export default function Home() {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === 'loading') {
    return <p className="text-center text-lg">Loading...</p>;
  }

  // Handle unauthenticated state
  if (!session) {
    return <p className="text-center text-lg">You must be logged in to view this page.</p>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Welcome, {session.user?.name ?? 'User'}!
      </h1>

      <Player
        component={IntroVideo}
        durationInFrames={900}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        autoPlay
      />
    </div>
  );
}
