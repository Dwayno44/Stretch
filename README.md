# Stretchisms Chatbot

Standalone local-first prototype for a chatbot based on a family phrase library.

## What is included

- `index.html`: simple landing page linking to the chatbot and artwork gallery
- `chatbot.html`: the main Stretch chat experience
- `artworks.html`: image-first gallery for finished Stretch artwork
- `voice-trainer.html`: guided questionnaire for collecting Stretch voice examples
- `styles.css`: landing page and chatbot styling
- `artworks.css`: artwork gallery styling
- `app.js`: local chat logic, phrase matching, and voice composition
- `voice-trainer.js`: question-based trainer and JSON export scaffold for the voice pack
- `data/stretchisms.seed.json`: seeded phrase library taken from `Stretchisms.xlsx`
- `data/stretch-voice.json`: broader colloquial voice pack for Stretch's general speech patterns

## How to run

From the repo root, the most reliable option is:

- `python -m http.server 8000`

Then open:

- `http://localhost:8000/stretchisms-chatbot/`

That lands on the simple front page. From there you can open the chatbot, artwork gallery, or voice trainer.

You can also open `stretchisms-chatbot/index.html` directly. The app now includes embedded fallback data for both the phrase seed and the broader voice pack, although serving it over `http://` is still better for future expansion.

If you are already using the existing Python proxy server in this repo, the app is also available at:

- `http://127.0.0.1:8787/stretchisms-chatbot/`

## How to broaden Stretch's voice

- Add specific Stretchisms to `data/stretchisms.seed.json` when you want the chatbot anchored to real family lines.
- Add broader conversational patterns to `data/stretch-voice.json` when you want Stretch to sound more like himself between the famous lines.
- Use `voice-trainer.html` when you want a structured way to collect new examples and export a JSON scaffold to merge back into the voice pack.
- Keep the voice pack focused on real habits like greetings, work talk, footy opinions, weather chat, cheeky disagreement, and warm sign-offs.
- If you want stronger behaviour changes, update the intent handling and reply builder in `app.js`.

## Suggested next iteration

Once the voice pack and phrase library are larger, add a server-side prompt endpoint or local-model adapter that uses these same records as grounding context.
