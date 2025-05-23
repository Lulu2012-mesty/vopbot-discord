const { SlashCommandBuilder } = require('discord.js');
const { generateRandomLink } = require('../utils/linkGenerator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('randomlink')
    .setDescription('Generate a random link.'),
  async execute(interaction) {
    const link = generateRandomLink();
    await interaction.reply(`Random link: ${link}`);
  }
};