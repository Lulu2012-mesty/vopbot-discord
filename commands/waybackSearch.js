const { SlashCommandBuilder } = require('discord.js');
const { waybackSearch } = require('../services/waybackService');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('waybacksearch')
    .setDescription('Search for a URL in the Wayback Machine.')
    .addStringOption(option =>
      option.setName('url')
        .setDescription('URL to search')
        .setRequired(true)),
  async execute(interaction) {
    const url = interaction.options.getString('url');
    await interaction.reply('Searching Wayback Machine...');
    try {
      const archiveUrl = await waybackSearch(url);
      await interaction.editReply(`Archive URL: ${archiveUrl}`);
    } catch (err) {
      await interaction.editReply('Failed to search Wayback Machine.');
    }
  }
};