export default function Socials() {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Socials</h1>
      <a href={process.env.PUBLIC_DISCORD_INVITE_URL} className="text-blue-600 hover:underline">Discord</a>
    </div>
  );
}
