const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anonme')
        .setDescription('Sends a message to the anonymous channel.')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message to send anonymously')
                .setRequired(true)
        ),
    async execute(interaction) {
        const message = interaction.options.getString('message');
        // Set your target channel ID here
        const channelId = '1389393690795180042'; 
        const channel = interaction.client.channels.cache.get(channelId);

        if (!channel) {
            return interaction.reply({ content: 'Error: Channel not found.', ephemeral: true });
        }

        try {
            await channel.send(message);
            await interaction.reply({ content: 'Your anonymous message has been sent.', ephemeral: true });
        } catch (error) {
            console.error('Error sending message:', error);
            await interaction.reply({ content: 'Failed to send the message.', ephemeral: true });
        }
    },
};
