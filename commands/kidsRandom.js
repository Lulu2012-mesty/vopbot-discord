const { SlashCommandBuilder } = require('discord.js');
const { generateKidsLink } = require('../utils/linkGenerator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kidsrandom')
    .setDescription('Generate a random YouTube Kids link.'),
  async execute(interaction) {
    const link = generateKidsLink();
    await interaction.reply(`YouTube Kids random link: ${link}`);
  }
};