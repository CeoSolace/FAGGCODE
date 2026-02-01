export default async function FreeAgentsPlayers() {
  const games = ["CS:GO", "League of Legends", "Valorant", "Fortnite", "Call of Duty", "Apex Legends", "Rainbow Six Siege", "Overwatch", "Rocket League"];
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Free Agent Players</h1>
      <select className="mb-4 p-2 border rounded">
        <option>Filter by Game</option>
        {games.map((game) => (
          <option key={game}>{game}</option>
        ))}
      </select>
    </div>
  );
}
