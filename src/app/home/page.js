import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { Player } from '@remotion/player';
import { IntroVideo } from '../../../remotion/IntroVideo';

export default async function Home() {
  // Get the user session on the server
  const session = await getServerSession(authOptions);

  // Unauthenticated view
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600">
          You must be logged in to view this page.
        </p>
      </div>
    );
  }

  // Authenticated view
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome, {session.user?.name ?? "User"}!
      </h1>

      <Player
        component={IntroVideo}
        durationInFrames={900}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        autoPlay
      />
    </div>
  );
}
