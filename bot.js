const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.once('ready', () => {
  console.log('Bot ready!');
});
client.on('messageCreate', (message) => {
  if (message.channel.id === process.env.DISCORD_APPEAL_CHANNEL_ID) {
  }
});
client.login(process.env.DISCORD_BOT_TOKEN);
