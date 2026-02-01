'use client';

import { useSession } from 'next-auth/react';
import { Player } from '@remotion/player';
import { IntroVideo } from '../../../remotion/IntroVideo';

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Welcome, {session.user.name}!
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
