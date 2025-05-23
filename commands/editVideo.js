const { SlashCommandBuilder } = require('discord.js');
const { editVideo } = require('../services/videoEditor');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('editvideo')
    .setDescription('Edit a video with a YTP/Meme effect.')
    .addStringOption(option =>
      option.setName('url')
        .setDescription('YouTube video URL')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('effect')
        .setDescription('Effect to apply (ytp, fast, mirror, etc.)')
        .setRequired(true)),
  async execute(interaction) {
    const url = interaction.options.getString('url');
    const effect = interaction.options.getString('effect');
    await interaction.reply('Processing your video...');
    try {
      const result = await editVideo(url, effect);
      await interaction.editReply(`Here is your edited video: ${result.downloadUrl}`);
    } catch (err) {
      await interaction.editReply('Failed to edit video.');
    }
  }
};