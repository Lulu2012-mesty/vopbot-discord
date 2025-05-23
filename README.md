# VopBot-Discord

**VopBot-Discord** is a multi-purpose Discord bot built with [discord.js](https://discord.js.org/) designed for YTP/YTPMV/Mashup/Remix/Meme video editing, YouTube Poop (YTP) automations, lost media research, random link generation, YouTube Kids link fun, and more. It provides a playful and creative workspace for communities interested in video remix culture and meme creation.

---

## Features

- **Video Editing & Meme Creation**  
  Apply effects (YTP, fast, mirror, mashup, etc.) to YouTube videos and return downloadable links.

- **YouTube Video Downloader**  
  Download links for YouTube videos.

- **Random Link Generator**  
  Generates random, fun, or fake download/YouTube Kids links.

- **Wayback Machine Search**  
  Search for URLs in the [Internet Archive Wayback Machine](https://archive.org/web/).

- **YouTube Poop Functions**  
  Initiate various YTP-related features like YTP Tennis, Mashup, Remix, and more.

---

## Project Structure

```plaintext
vopbot-discord/
├── commands/
│   ├── editVideo.js
│   ├── downloadVideo.js
│   ├── randomLink.js
│   ├── waybackSearch.js
│   ├── ytpFunctions.js
│   └── kidsRandom.js
├── services/
│   ├── videoEditor.js
│   ├── waybackService.js
│   └── youtubeService.js
├── utils/
│   ├── linkGenerator.js
│   └── helpers.js
├── index.js
└── config.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A Discord bot token ([How to create a bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html))

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/vopbot-discord.git
   cd vopbot-discord
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure the bot:**
   - Copy `config.json` and add your Discord bot token:
     ```json
     {
       "token": "YOUR_DISCORD_BOT_TOKEN"
     }
     ```

4. **Run the bot:**
   ```sh
   node index.js
   ```

---

## Usage

- Use `/editvideo` to apply video effects.
- Use `/downloadvideo` to get a download link for a YouTube video.
- Use `/randomlink` for a random download link.
- Use `/waybacksearch` to search a URL on the Wayback Machine.
- Use `/ytp` for YTP special functions.
- Use `/kidsrandom` for a random YouTube Kids link.

---

## Customization & Development

- Extend commands in the `commands/` folder.
- Implement new services in the `services/` directory.
- Utility functions belong in `utils/`.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for new features, bug fixes, or suggestions.

---

## License

MIT License

---

## Disclaimer

This bot is intended for creative, educational, and entertainment purposes. Downloaded and edited content is for personal use; respect copyright laws and YouTube's terms of service.

---

## Credits

- Built with [discord.js](https://discord.js.org/)
- Inspired by YTP/Mashup/Remix culture and the meme community.
