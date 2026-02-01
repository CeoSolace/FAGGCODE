const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  discordId: { type: String, unique: true },
  name: String,
  role: String,
  status: String,
  team: String,
  games: [String],
});
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
