const STORAGE_KEY = "stretchisms-chatbot-library-v1";
const FEEDBACK_STORAGE_KEY = "stretchisms-chatbot-feedback-v1";
const SEED_URL = "./data/stretchisms.seed.json";
const VOICE_URL = "./data/stretch-voice.json";
const stretchAvatarConfig = window.stretchAvatarConfig || {
  characterName: "Stretch",
  defaultAvatarPath: "/assets/stretch/default.png",
  altText: "Stretch avatar",
  states: {
    default: {
      path: "/assets/stretch/default.png",
      altText: "Stretch avatar",
    },
  },
};
const EMBEDDED_VOICE_PACK = {
  addressTerms: [
    "mate",
    "old mate",
    "chief",
    "cobber",
  ],
  openers: {
    welcome: [
      "Pull up a chair.",
      "Come on in and have a sit-down.",
      "Righto, park yourself there.",
    ],
    greeting: [
      "G'day, mate.",
      "How ya goin'?",
      "Righto, what's the story?",
    ],
    status: [
      "About 60/50, all told.",
      "Can't grumble too much.",
      "Still on the right side of the grass.",
    ],
    thanks: [
      "No dramas.",
      "Too easy.",
      "Good on ya.",
    ],
    leaving: [
      "Righto then.",
      "Fair enough.",
      "No worries.",
    ],
    work: [
      "Been keepin' the wheels turnin'.",
      "Still holdin' the joint together somehow.",
      "They'd be lost without me, naturally.",
    ],
    footy: [
      "Now you're talkin' proper business.",
      "Footy's a serious matter, that.",
      "That's where blokes lose the plot.",
    ],
    weather: [
      "Bit of weather about, isn't there?",
      "She's puttin' it on a bit today.",
      "You can feel it in your bones.",
    ],
    food: [
      "Now that's worth talkin' about.",
      "You don't muck around with good tucker.",
      "That'll sort a bloke out.",
    ],
    school: [
      "Back in my day was a different caper.",
      "You young blokes had it soft.",
      "That takes me back a fair way.",
    ],
    toilet: [
      "Steady on.",
      "Now we're into quality conversation.",
      "That's a classy topic.",
    ],
    baby: [
      "Ah, beautiful stuff.",
      "That's good news, that.",
      "Little tackers change the whole joint.",
    ],
    disagreement: [
      "Hang on a minute.",
      "Now steady up.",
      "I'm not swallowin' that.",
    ],
    story: [
      "No word of a lie.",
      "Fair dinkum.",
      "I tell ya what.",
    ],
    question: [
      "Reckon so.",
      "Could be.",
      "That's a fair question.",
    ],
    statement: [
      "Yeah, righto.",
      "Fair enough.",
      "I hear ya.",
    ],
  },
  observations: {
    generic: [
      "World's gone a bit funny, but we keep rollin'.",
      "You just take it as it comes, don't ya?",
      "No point carryin' on like a pork chop about it.",
    ],
    work: [
      "There's always plenty of standin' around disguised as hard work.",
      "Somebody's gotta supervise the operation.",
      "You look busy enough and people leave you alone.",
    ],
    footy: [
      "Too many blokes want to look clever instead of doin' the simple thing.",
      "Half the trouble starts when nobody wants to put boot to ball.",
      "You can tell in five minutes who's thinkin' and who's just flappin'.",
    ],
    weather: [
      "Good day for sittin' in the shade and talkin' nonsense.",
      "Cold enough to wake the dead this mornin'.",
      "Warm enough to melt the ears off a billy goat.",
    ],
    food: [
      "A good pie fixes more problems than most experts do.",
      "Bit of sauce and you're halfway to heaven.",
      "You don't need fancy when the tucker's decent.",
    ],
    family: [
      "Families are lovely until somebody starts givin' advice.",
      "There's always one stirrer in every family, usually more.",
      "You keep showin' up and laughin', that's half the job.",
    ],
    school: [
      "Kids today reckon they've seen hardship if the Wi-Fi drops out.",
      "We didn't have much, but we knew how to make a day of it.",
      "Nobody carried on, you just got on with it.",
    ],
    disagreement: [
      "There's a fair bit of nonsense gettin' about.",
      "Some people can talk under wet cement.",
      "I've heard some crook yarns in my time, and that's one of them.",
    ],
  },
  closers: {
    generic: [
      "That's how I see it, anyway.",
      "Mind you, I've been wrong before.",
      "That's the long and short of it.",
    ],
    question: [
      "What do you reckon?",
      "How's that sound to you?",
      "That's my read on it.",
    ],
    warm: [
      "Good on ya.",
      "No dramas, mate.",
      "You know how it is.",
    ],
    thanks: [
      "The bill's in the mail.",
      "I'll send an invoice when I find a pen.",
      "We'll call it square.",
    ],
    leaving: [
      "Don't do anythin' I wouldn't do.",
      "Mind how ya go.",
      "Catch ya round.",
    ],
    story: [
      "You wouldn't read about it.",
      "That's no furphy either.",
      "And that's before smoko.",
    ],
  },
  questionBacks: [
    "What's been happenin' your way?",
    "What's the latest then?",
    "What've you been up to?",
  ],
  brags: [
    "You know me, hardest worker in the Pilbara.",
    "Mr Production, that's what they call me.",
    "They don't like to admit it, but I hold the place together.",
  ],
  warmLines: [
    "Good on ya for askin'.",
    "Can't complain when there's still tea in the cupboard.",
    "Could be worse, mate.",
  ],
  disagreements: [
    "True bullshit.",
    "Nah, not havin' that.",
    "Pull the other one.",
  ],
  storyLeads: [
    "Back in the day,",
    "You won't believe this, but",
    "No word of a lie,",
  ],
  softYes: [
    "Too right.",
    "Bloody oath.",
    "Reckon so.",
  ],
  softNo: [
    "Not likely.",
    "I wouldn't bank on it.",
    "I'd leave that alone.",
  ],
};
const EMBEDDED_SEED_ENTRIES = [
  {
    id: "stretch-1",
    phrase: "60/50",
    meaning: "I'm going reasonable well (akin to 50/50 or part good, part bad)",
    context: "Used in place of 50/50 as a funny alternative as obviously the math doesn't add to 100(%)",
  },
  {
    id: "stretch-2",
    phrase: "More tea Vicar?",
    meaning: "Excuse me",
    context: "Used after passing wind loudly as a funny way of pretending to be more sophisticated than he is",
  },
  {
    id: "stretch-3",
    phrase: "Excuse me I normally fart",
    meaning: "Excuse me",
    context: "Used after a burp as a funny way of acknowledging the bodily function",
  },
  {
    id: "stretch-4",
    phrase: "When I was a kid it was so cold I used to have a sheep in each pocket",
    meaning: "Kids have it easy these days",
    context: "Used as a sarcastic joke for times being tougher in the past",
  },
  {
    id: "stretch-5",
    phrase: "When I was a kid I use to carry a horse ten-mile to school",
    meaning: "Kids have it easy these days",
    context: "Used as a sarcastic joke for times being tougher in the past",
  },
  {
    id: "stretch-6",
    phrase: "Pass the dead-horse for my dog's eye",
    meaning: "Pass the (tomato) sauce for my pie",
    context: "Used when eating a pie in place of correct word(s)",
  },
  {
    id: "stretch-7",
    phrase: "Hello Blossom (or less so, Mary Marmalade/Mary Marblebar)",
    meaning: "Hello lady who's name I have forgotten or never learnt",
    context: "Used when greeting almost every lady he's ever met",
  },
  {
    id: "stretch-8",
    phrase: "Siss-co",
    meaning: "Let's go / look out",
    context: "",
  },
  {
    id: "stretch-9",
    phrase: "Kick the bloody thing, that's the name of the game",
    meaning: "Stop handballing the football, kick it instead",
    context: "Used when frustrated at Australian Rules football players over-possessing the ball",
  },
  {
    id: "stretch-10",
    phrase: "You should call her Stretch-a-rina",
    meaning: "A cute name for your baby would be a poorly incepted female version of my own name",
    context: "Used almost everytime he meets a new baby, or hears of someone having a new baby",
  },
  {
    id: "stretch-11",
    phrase: "You know me, hardest worker in the Pilbara",
    meaning: "I don't work very hard at all",
    context: "Used when making small talk in the workplace, historically when located in the Pilbara",
  },
  {
    id: "stretch-12",
    phrase: "Mr Production they call me",
    meaning: "I don't work very hard at all",
    context: "Used when making small talk in the workplace",
  },
  {
    id: "stretch-13",
    phrase: "You're a pretty little thing, I'm going to marry you when you get older",
    meaning: "You're a beautiful child / young lady",
    context: "Used innocently when making small talk with almost any girl between toddler and late-teen years",
  },
  {
    id: "stretch-14",
    phrase: "Yvonne loves it when I've got the hiccups",
    meaning: "Crude humour referring to convulsive body movements when one has the hiccups",
    context: "Used when socialising and telling stories, after a beer or two",
  },
  {
    id: "stretch-15",
    phrase: "I was once on such an angle that I kicked the ball and it got stuck between the posts",
    meaning: "Fictitious football story passed down from his father",
    context: "Used almost anytime he watches or kicks a football",
  },
  {
    id: "stretch-16",
    phrase: "I'll give you a picture of a ten-dollar note",
    meaning: "Thank you",
    context: "Used to sarcastically infer he will pay for something, that he obviously never will",
  },
  {
    id: "stretch-17",
    phrase: "The bill is/(will be) in the mail",
    meaning: "You're welcome",
    context: "Used to sarcastically infer you need to pay him for his help",
  },
  {
    id: "stretch-18",
    phrase: "More choke and it would have started",
    meaning: "That was a good fart",
    context: "Used after passing wind loudly",
  },
  {
    id: "stretch-19",
    phrase: "Hey Jack, how's ya back?",
    meaning: "How are you?",
    context: "Used whenever he spoke to my friend Josh, who is not called Jack",
  },
  {
    id: "stretch-20",
    phrase: "They said they had to get the economy working",
    meaning: "I'm back at work",
    context: "Used to imply that his work is so important that it impacts economic output of the country",
  },
  {
    id: "stretch-21",
    phrase: "I was so smart they asked me to leave school",
    meaning: "I didn't finish school",
    context: "Used when talking about his intelligence and academic history",
  },
  {
    id: "stretch-22",
    phrase: "I just got back from my ten-mile jog (I mean flog)",
    meaning: "I've been doing nothing noteworthy, likely resting",
    context: "",
  },
  {
    id: "stretch-23",
    phrase: "I just gave birth to a politician/mine manager",
    meaning: "I've been to the toilet",
    context: "",
  },
  {
    id: "stretch-24",
    phrase: "She headbutts haul trucks",
    meaning: "She's unattractive",
    context: "",
  },
  {
    id: "stretch-25",
    phrase: "I caught her pissing on my tyre",
    meaning: "She's unattractive",
    context: "",
  },
  {
    id: "stretch-26",
    phrase: "True bullshit",
    meaning: "Not true",
    context: "",
  },
  {
    id: "stretch-27",
    phrase: "She/he's good looking like her/his father/grandfather",
    meaning: "He/she is attractive, as am I",
    context: "",
  },
  {
    id: "stretch-28",
    phrase: "I 'm gonna hit the frog and toad",
    meaning: "I'm going to leave",
    context: "",
  },
];

const SUGGESTION_PROMPTS = [
  "How would Stretch greet someone whose name he forgot?",
  "How would he say he is heading off?",
  "What would he say after helping someone?",
  "How would Stretch talk about being back at work?",
  "What is a classic Stretch footy line?",
];

const dom = {
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  chatLog: document.querySelector("#chatLog"),
  suggestionChips: document.querySelector("#suggestionChips"),
  feedbackToggle: document.querySelector("#feedbackToggle"),
};

const state = {
  voicePack: EMBEDDED_VOICE_PACK,
  seedEntries: [],
  entries: [],
  messages: [],
  feedback: [],
  isFeedbackMode: false,
  memory: {
    recentIntents: [],
    recentPhrases: [],
    recentOpeners: [],
    recentClosers: [],
    recentObservations: [],
    recentQuestionBacks: [],
    recentWarmLines: [],
    recentBrags: [],
    recentStoryLeads: [],
    recentDisagreements: [],
  },
};

init();

async function init() {
  bindEvents();

  const [seedEntries, voicePack] = await Promise.all([
    loadSeedEntries(),
    loadVoicePack(),
  ]);

  state.seedEntries = seedEntries;
  state.voicePack = voicePack;
  state.entries = loadSavedEntries(state.seedEntries);
  state.feedback = loadSavedFeedback();
  state.messages = buildWelcomeMessages(state.entries, state.voicePack);

  renderAll();
}

function bindEvents() {
  dom.chatForm.addEventListener("submit", handleChatSubmit);
  dom.chatInput.addEventListener("keydown", handleChatKeydown);
  dom.feedbackToggle?.addEventListener("click", toggleFeedbackMode);
}

async function loadSeedEntries() {
  try {
    const response = await fetch(SEED_URL);
    if (!response.ok) {
      throw new Error(`Failed to load seed file: ${response.status}`);
    }
    const payload = await response.json();
    return sanitizeEntries(payload);
  } catch (error) {
    console.error(error);
    return sanitizeEntries(EMBEDDED_SEED_ENTRIES);
  }
}

async function loadVoicePack() {
  try {
    const response = await fetch(VOICE_URL);
    if (!response.ok) {
      throw new Error(`Failed to load voice file: ${response.status}`);
    }

    const payload = await response.json();
    return sanitizeVoicePack(payload);
  } catch (error) {
    console.error(error);
    return sanitizeVoicePack(EMBEDDED_VOICE_PACK);
  }
}

function handleChatKeydown(event) {
  if (event.key !== "Enter" || event.shiftKey) {
    return;
  }

  event.preventDefault();
  dom.chatForm.requestSubmit();
}

function loadSavedEntries(seedEntries) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [...seedEntries];
    }
    return sanitizeEntries(JSON.parse(raw));
  } catch (error) {
    console.error("Failed to read saved library:", error);
    return [...seedEntries];
  }
}

function loadSavedFeedback() {
  try {
    const raw = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read saved feedback:", error);
    return [];
  }
}

function sanitizeEntries(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries
    .map((entry, index) => ({
      id: String(entry.id || `stretch-${index + 1}`),
      phrase: String(entry.phrase || "").trim(),
      meaning: String(entry.meaning || "").trim(),
      context: String(entry.context || "").trim(),
    }))
    .filter((entry) => entry.phrase);
}

function saveEntries() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.entries, null, 2));
}

function sanitizeVoicePack(voicePack) {
  return mergeVoiceNode(EMBEDDED_VOICE_PACK, voicePack);
}

function mergeVoiceNode(base, override) {
  if (Array.isArray(base)) {
    const source = Array.isArray(override) && override.length ? override : base;
    return source
      .map((value) => String(value || "").trim())
      .filter(Boolean);
  }

  if (base && typeof base === "object") {
    const source = override && typeof override === "object" ? override : {};
    const merged = {};

    for (const key of Object.keys(base)) {
      merged[key] = mergeVoiceNode(base[key], source[key]);
    }

    return merged;
  }

  if (typeof base === "string") {
    return typeof override === "string" && override.trim() ? override.trim() : base;
  }

  return override ?? base;
}

function buildWelcomeMessages(entries, voicePack) {
  const openingEntry = entries.find((entry) => inferEntryTopics(entry).includes("status")) || entries[0];
  const opener = rememberAndReturn(
    state.memory.recentOpeners,
    pickFreshValue("welcome-opener", voicePack.openers.welcome, state.memory.recentOpeners),
  );
  const welcomeStatusOptions = [
    openingEntry ? `I'm about ${cleanPhraseText(openingEntry.phrase)}.` : "",
    ...voicePack.openers.status,
    ...voicePack.warmLines,
  ].filter(Boolean);
  const statusLine = pickAndRemember("welcome-status", welcomeStatusOptions, state.memory.recentWarmLines);
  const followUp = maybeRememberedLine("welcome-follow-up", voicePack.questionBacks, state.memory.recentQuestionBacks, 80);

  return [
    {
      id: createMessageId("assistant"),
      role: "assistant",
      title: stretchAvatarConfig.characterName,
      body: joinReplyParts([
        opener,
        statusLine,
        followUp,
      ]),
      avatarState: "default",
    },
  ];
}

function handleChatSubmit(event) {
  event.preventDefault();

  const message = dom.chatInput.value.trim();
  if (!message) {
    return;
  }

  state.messages.push({
    id: createMessageId("user"),
    role: "user",
    title: "You",
    body: message,
  });

  if (state.isFeedbackMode) {
    recordOffCharacterFeedback(message);
    state.messages.push({
      id: createMessageId("assistant"),
      role: "assistant",
      title: stretchAvatarConfig.characterName,
      body: "Righto, I'll chalk that one up as a bit off.",
      avatarState: "default",
      sourcePrompt: message,
    });
  } else {
    const reply = composeStretchReply(message, state.entries);
    state.messages.push(reply);
  }

  dom.chatInput.value = "";
  setFeedbackMode(false);
  renderChatLog();
}

function composeStretchReply(message, entries) {
  const intent = detectIntent(message);
  const matches = findBestMatches(message, entries);
  const primary = pickEntryForReply(message, intent, matches, entries);
  const secondary = pickEntryForReply(
    `${message}-backup`,
    intent,
    matches.slice(1),
    entries,
    primary ? [primary.id] : [],
  );
  const reply = buildStretchReply({
    message,
    intent,
    primary,
    secondary,
    primaryMatchScore: getMatchScore(primary, matches),
    secondaryMatchScore: getMatchScore(secondary, matches),
    voicePack: state.voicePack,
  });

  rememberRecent(state.memory.recentIntents, intent, 8);
  for (const phraseId of reply.meta.phraseIds) {
    rememberRecent(state.memory.recentPhrases, phraseId, 8);
  }

  return {
    id: createMessageId("assistant"),
    role: "assistant",
    title: stretchAvatarConfig.characterName,
    body: reply.body,
    avatarState: "default",
    sourcePrompt: message,
  };
}

function findBestMatches(message, entries) {
  const expandedQuery = expandQuery(message);
  const queryTokens = tokenize(expandedQuery);
  return entries
    .map((entry) => ({
      entry,
      score: scoreEntry(queryTokens, expandedQuery, entry),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);
}

function pickEntryForReply(seed, intent, matches, entries, excludedIds = []) {
  const excluded = new Set(excludedIds);
  const candidates = dedupeEntries([
    ...matches.map((item) => item.entry),
    ...findEntriesForIntent(entries, intent),
  ]).filter((entry) => !excluded.has(entry.id));

  if (!candidates.length) {
    return null;
  }

  return pickFreshObject(seed, candidates, state.memory.recentPhrases, (entry) => entry.id);
}

function getMatchScore(entry, matches) {
  if (!entry) {
    return 0;
  }

  const match = matches.find((item) => item.entry.id === entry.id);
  return match ? match.score : 0;
}

function dedupeEntries(entries) {
  const seen = new Set();
  return entries.filter((entry) => {
    if (!entry?.id || seen.has(entry.id)) {
      return false;
    }

    seen.add(entry.id);
    return true;
  });
}

function findEntriesForIntent(entries, intent) {
  return entries.filter((entry) => inferEntryTopics(entry).includes(intent));
}

function inferEntryTopics(entry) {
  const text = `${entry.phrase} ${entry.meaning} ${entry.context}`.toLowerCase();
  const topics = [];

  if (matchesIntent(text, "greeting")) topics.push("greeting");
  if (matchesIntent(text, "status")) topics.push("status");
  if (matchesIntent(text, "thanks")) topics.push("thanks");
  if (matchesIntent(text, "leaving")) topics.push("leaving");
  if (matchesIntent(text, "work")) topics.push("work");
  if (matchesIntent(text, "footy")) topics.push("footy");
  if (matchesIntent(text, "weather")) topics.push("weather");
  if (matchesIntent(text, "food")) topics.push("food");
  if (matchesIntent(text, "school")) topics.push("school");
  if (matchesIntent(text, "toilet")) topics.push("toilet");
  if (matchesIntent(text, "baby")) topics.push("baby");
  if (matchesIntent(text, "disagreement")) topics.push("disagreement");
  if (matchesIntent(text, "compliment")) topics.push("compliment");
  if (matchesIntent(text, "story")) topics.push("story");

  return topics.length ? topics : ["statement"];
}

function scoreEntry(queryTokens, expandedQuery, entry) {
  const phraseTokens = tokenize(entry.phrase);
  const meaningTokens = tokenize(entry.meaning);
  const contextTokens = tokenize(entry.context);
  const fullText = `${entry.phrase} ${entry.meaning} ${entry.context}`.toLowerCase();

  let score = 0;

  for (const token of queryTokens) {
    if (phraseTokens.includes(token)) {
      score += 6;
    } else if (meaningTokens.includes(token)) {
      score += 5;
    } else if (contextTokens.includes(token)) {
      score += 4;
    } else if (token.length > 3 && fullText.includes(token)) {
      score += 2;
    }
  }

  const queryText = expandedQuery.toLowerCase();
  if (entry.phrase && queryText.includes(entry.phrase.toLowerCase())) {
    score += 10;
  }

  if (entry.meaning && queryText.includes(entry.meaning.toLowerCase())) {
    score += 8;
  }

  return score;
}

function expandQuery(message) {
  const lower = message.toLowerCase();
  const additions = [];

  if (/\b(hello|hi|gday|g'day|greet|meeting|meet|lady|woman|name)\b/.test(lower)) {
    additions.push("hello greeting forgotten name");
  }
  if (/\b(how are you|how ya going|how's it going|how ya travelling|you right)\b/.test(lower)) {
    additions.push("status going alright 60 50");
  }
  if (/\b(leave|leaving|go|going|heading off|head off|home)\b/.test(lower)) {
    additions.push("leave heading off");
  }
  if (/\b(thanks|thank you|helped|help|appreciate)\b/.test(lower)) {
    additions.push("thank you help pay bill");
  }
  if (/\b(work|job|shift|back at work|office|mine|pilbara)\b/.test(lower)) {
    additions.push("work job economy pilbara production");
  }
  if (/\b(footy|football|kick|afl|handball)\b/.test(lower)) {
    additions.push("football kick handball");
  }
  if (/\b(fart|burp|toilet|loo|poo|wind|hiccups)\b/.test(lower)) {
    additions.push("fart burp toilet hiccups");
  }
  if (/\b(cold|school|kid|kids|old days|back in my day)\b/.test(lower)) {
    additions.push("kids school cold old days");
  }
  if (/\b(baby|newborn|name the baby|little girl)\b/.test(lower)) {
    additions.push("baby little girl name");
  }
  if (/\b(weather|rain|raining|hot|cold|wind|sunny|storm)\b/.test(lower)) {
    additions.push("weather hot cold rain wind");
  }
  if (/\b(pie|sauce|dead horse|dog's eye|food|eat|tucker|lunch|dinner|tea)\b/.test(lower)) {
    additions.push("food pie tucker sauce dead horse dog's eye");
  }
  if (/\b(bullshit|not true|rubbish|liar|pulling my leg|no way)\b/.test(lower)) {
    additions.push("bullshit not true rubbish");
  }
  if (/\b(yarn|story|tell me one|what happened|back in the day)\b/.test(lower)) {
    additions.push("story yarn tell me one");
  }
  if (/\b(pretty|beautiful|handsome|good looking|attractive)\b/.test(lower)) {
    additions.push("pretty good looking attractive");
  }

  return `${message} ${additions.join(" ")}`.trim();
}

function tokenize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1);
}

function detectIntent(message) {
  const lower = message.toLowerCase();

  if (matchesIntent(lower, "thanks")) return "thanks";
  if (matchesIntent(lower, "leaving")) return "leaving";
  if (matchesIntent(lower, "status")) return "status";
  if (matchesIntent(lower, "greeting")) return "greeting";
  if (matchesIntent(lower, "work")) return "work";
  if (matchesIntent(lower, "footy")) return "footy";
  if (matchesIntent(lower, "weather")) return "weather";
  if (matchesIntent(lower, "food")) return "food";
  if (matchesIntent(lower, "school")) return "school";
  if (matchesIntent(lower, "toilet")) return "toilet";
  if (matchesIntent(lower, "baby")) return "baby";
  if (matchesIntent(lower, "disagreement")) return "disagreement";
  if (matchesIntent(lower, "compliment")) return "compliment";
  if (matchesIntent(lower, "story")) return "story";
  if (/\?$/.test(lower)) return "question";
  return "statement";
}

function matchesIntent(text, intent) {
  switch (intent) {
    case "greeting":
      return /\b(hello|hi|gday|g'day|good morning|good arvo|good afternoon|howdy|nice to meet|blossom|jack)\b/.test(text);
    case "status":
      return /\b(how are you|how ya going|how's it going|how are things|how ya travelling|you right|60\/50)\b/.test(text);
    case "thanks":
      return /\b(thanks|thank you|cheers|appreciate|bill is|ten-dollar note|ten dollar note)\b/.test(text);
    case "leaving":
      return /\b(bye|goodbye|see ya|see you|heading off|head off|leave|leaving|go home|frog and toad|siss-co|sissco)\b/.test(text);
    case "work":
      return /\b(work|job|shift|office|mine|pilbara|production|economy|working)\b/.test(text);
    case "footy":
      return /\b(footy|football|afl|kick|handball|goal|mark|posts)\b/.test(text);
    case "weather":
      return /\b(weather|rain|raining|hot|cold|wind|sunny|storm|bones)\b/.test(text);
    case "food":
      return /\b(pie|sauce|dead-horse|dead horse|dog's eye|dogs eye|food|tucker|eat|eating|lunch|dinner|tea)\b/.test(text);
    case "school":
      return /\b(kid|kids|school|old days|back in my day|horse ten-mile|horse ten mile|sheep in each pocket)\b/.test(text);
    case "toilet":
      return /\b(toilet|loo|poo|fart|burp|wind|hiccups|dunny|vicar|choke)\b/.test(text);
    case "baby":
      return /\b(baby|newborn|daughter|son|little girl|little boy|pregnant|stretch-a-rina)\b/.test(text);
    case "disagreement":
      return /\b(bullshit|not true|rubbish|liar|no way|pulling my leg|pull the other one)\b/.test(text);
    case "compliment":
      return /\b(pretty|beautiful|handsome|good looking|attractive)\b/.test(text);
    case "story":
      return /\b(yarn|story|tell me one|what happened|back in the day|no word of a lie)\b/.test(text);
    default:
      return false;
  }
}

function buildStretchReply({ message, intent, primary, secondary, primaryMatchScore, secondaryMatchScore, voicePack }) {
  const seed = `${message}-${state.messages.length}-${intent}`;
  const usePrimaryPhrase = shouldUseReplyPhrase({
    seed: `${seed}-primary`,
    intent,
    entry: primary,
    matchScore: primaryMatchScore,
  });
  const useSecondaryPhrase = shouldUseReplyPhrase({
    seed: `${seed}-secondary`,
    intent,
    entry: secondary,
    matchScore: secondaryMatchScore,
  });
  const primaryPhrase = usePrimaryPhrase ? formatPhraseAsSentence(primary) : "";
  const secondaryPhrase = useSecondaryPhrase ? formatPhraseAsSentence(secondary) : "";
  let opener = "";
  let closer = "";
  let body = "";

  switch (intent) {
    case "greeting":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.greeting, state.memory.recentOpeners),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase,
        maybeRememberedLine(`${seed}-follow`, voicePack.questionBacks, state.memory.recentQuestionBacks, 72),
      ]);
      break;

    case "status":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        primaryPhrase ? `I'm about ${formatPhraseCore(primary)}.` : pickFreshValue(`${seed}-opener`, voicePack.openers.status, state.memory.recentOpeners),
      );
      body = joinReplyParts([
        opener,
        maybeRememberedLine(`${seed}-warm`, voicePack.warmLines, state.memory.recentWarmLines, 62),
        maybeRememberedLine(`${seed}-brag`, voicePack.brags, state.memory.recentBrags, 28),
      ]);
      break;

    case "thanks":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.thanks, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.thanks, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase,
        closer,
      ]);
      break;

    case "leaving":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        primaryPhrase || pickFreshValue(`${seed}-opener`, voicePack.openers.leaving, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.leaving, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        closer,
      ]);
      break;

    case "work":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.work, state.memory.recentOpeners),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || maybeRememberedLine(`${seed}-brag`, voicePack.brags, state.memory.recentBrags, 100),
        maybeRememberedLine(`${seed}-obs`, voicePack.observations.work, state.memory.recentObservations, 76),
      ]);
      break;

    case "footy":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.footy, state.memory.recentOpeners),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase,
        maybeRememberedLine(`${seed}-obs`, voicePack.observations.footy, state.memory.recentObservations, 82),
      ]);
      break;

    case "weather":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.weather, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.question, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        maybeRememberedLine(`${seed}-obs`, voicePack.observations.weather, state.memory.recentObservations, 78),
        maybeLineFromValue(`${seed}-closer`, closer, 58),
      ]);
      break;

    case "food":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.food, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.warm, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || maybeRememberedLine(`${seed}-obs`, voicePack.observations.food, state.memory.recentObservations, 84),
        maybeLineFromValue(`${seed}-closer`, closer, 60),
      ]);
      break;

    case "school":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-story-lead`, voicePack.storyLeads, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.story, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || maybeRememberedLine(`${seed}-obs`, voicePack.observations.school, state.memory.recentObservations, 82),
        maybeLineFromValue(`${seed}-secondary`, secondaryPhrase, 42),
        maybeLineFromValue(`${seed}-closer`, closer, 52),
      ]);
      break;

    case "toilet":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.toilet, state.memory.recentOpeners),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase,
        maybeLineFromValue(`${seed}-secondary`, secondaryPhrase, 48),
      ]);
      break;

    case "baby":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.baby, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.warm, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || maybeRememberedLine(`${seed}-family`, voicePack.observations.family, state.memory.recentObservations, 78),
        maybeLineFromValue(`${seed}-closer`, closer, 66),
      ]);
      break;

    case "disagreement":
      opener = rememberAndReturn(
        state.memory.recentDisagreements,
        pickFreshValue(`${seed}-opener`, voicePack.disagreements, state.memory.recentDisagreements),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase && cleanPhraseText(primary.phrase).toLowerCase() !== "true bullshit" ? primaryPhrase : "",
        maybeRememberedLine(`${seed}-obs`, voicePack.observations.disagreement, state.memory.recentObservations, 74),
      ]);
      break;

    case "compliment":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.baby, state.memory.recentOpeners),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || maybeRememberedLine(`${seed}-family`, voicePack.observations.family, state.memory.recentObservations, 72),
        maybeRememberedLine(`${seed}-warm`, voicePack.closers.warm, state.memory.recentWarmLines, 62),
      ]);
      break;

    case "story":
      opener = rememberAndReturn(
        state.memory.recentStoryLeads,
        pickFreshValue(`${seed}-opener`, voicePack.storyLeads, state.memory.recentStoryLeads),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.story, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || secondaryPhrase || maybeRememberedLine(`${seed}-obs`, voicePack.observations.generic, state.memory.recentObservations, 78),
        maybeLineFromValue(`${seed}-closer`, closer, 56),
      ]);
      break;

    case "question":
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.question, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.question, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || maybeRememberedLine(`${seed}-obs`, voicePack.observations.generic, state.memory.recentObservations, 74),
        maybeLineFromValue(`${seed}-closer`, closer, 58),
      ]);
      break;

    case "statement":
    default:
      opener = rememberAndReturn(
        state.memory.recentOpeners,
        pickFreshValue(`${seed}-opener`, voicePack.openers.statement, state.memory.recentOpeners),
      );
      closer = rememberAndReturn(
        state.memory.recentClosers,
        pickFreshValue(`${seed}-closer`, voicePack.closers.warm, state.memory.recentClosers),
      );
      body = joinReplyParts([
        opener,
        primaryPhrase || maybeRememberedLine(`${seed}-obs`, voicePack.observations.generic, state.memory.recentObservations, 72),
        maybeLineFromValue(`${seed}-closer`, closer, 54),
      ]);
      break;
  }

  if (!body) {
    body = "I'm a bit 60/50 on that one, mate.";
  }

  return {
    body,
    meta: {
      intent,
      phraseIds: [
        usePrimaryPhrase ? primary?.id : "",
        useSecondaryPhrase ? secondary?.id : "",
      ].filter(Boolean),
      closer,
    },
  };
}

function shouldUseReplyPhrase({ seed, intent, entry, matchScore }) {
  if (!entry) {
    return false;
  }

  if (matchScore >= 12) {
    return true;
  }

  const entryTopics = inferEntryTopics(entry);
  if (!entryTopics.includes(intent)) {
    return false;
  }

  if (matchScore >= 8 && ["story", "school", "footy", "toilet", "work"].includes(intent)) {
    return true;
  }

  const phraseChanceByIntent = {
    greeting: 18,
    status: 12,
    thanks: 20,
    leaving: 20,
    work: 32,
    footy: 38,
    weather: 10,
    food: 14,
    school: 34,
    toilet: 38,
    baby: 18,
    disagreement: 20,
    compliment: 15,
    story: 42,
    question: 10,
    statement: 8,
  };

  const chance = phraseChanceByIntent[intent] ?? 10;
  return hashString(`${seed}-${entry.id}-${matchScore}`) % 100 < chance;
}

function maybeLine(seed, values) {
  const cleaned = Array.isArray(values) ? values.filter(Boolean) : [];
  if (!cleaned.length || hashString(seed) % 3 !== 0) {
    return "";
  }

  return pickFreshValue(seed, cleaned, []);
}

function maybeLineFromValue(seed, value, chance = 33) {
  if (!value) {
    return "";
  }

  return hashString(seed) % 100 < chance ? value : "";
}

function maybeRememberedLine(seed, values, recent, chance = 50) {
  if (hashString(seed) % 100 >= chance) {
    return "";
  }

  return pickAndRemember(seed, values, recent);
}

function pickAndRemember(seed, values, recent) {
  const value = pickFreshValue(seed, values, recent);
  if (value) {
    rememberRecent(recent, value, 8);
  }
  return value;
}

function formatPhraseCore(entry) {
  if (!entry) {
    return "";
  }

  return cleanPhraseText(entry.phrase)
    .replace(/\s*\((or[^)]*|or less so[^)]*)\)/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanPhraseText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPhraseAsSentence(entry) {
  const phrase = formatPhraseCore(entry);
  if (!phrase) {
    return "";
  }

  return ensureSentence(phrase);
}

function joinReplyParts(parts) {
  return parts
    .map((part) => ensureSentence(part))
    .filter(Boolean)
    .join(" ");
}

function ensureSentence(part) {
  const text = String(part || "").trim();
  if (!text) {
    return "";
  }

  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function pickFreshValue(seed, values, recent = []) {
  const cleaned = (values || []).filter(Boolean);
  if (!cleaned.length) {
    return "";
  }

  const fresh = cleaned.filter((value) => !recent.includes(value));
  const pool = fresh.length ? fresh : cleaned;
  return pool[hashString(`${seed}-${state.messages.length}`) % pool.length];
}

function pickFreshObject(seed, values, recent = [], keyFn = (value) => value) {
  if (!values.length) {
    return null;
  }

  const fresh = values.filter((value) => !recent.includes(keyFn(value)));
  const pool = fresh.length ? fresh : values;
  return pool[hashString(`${seed}-${state.messages.length}`) % pool.length];
}

function rememberRecent(list, value, limit = 4) {
  if (!value) {
    return;
  }

  list.push(value);
  if (list.length > limit) {
    list.splice(0, list.length - limit);
  }
}

function rememberAndReturn(list, value) {
  rememberRecent(list, value);
  return value;
}

function renderAll() {
  renderSuggestions();
  renderChatLog();
}

function renderSuggestions() {
  if (!dom.suggestionChips) {
    return;
  }

  dom.suggestionChips.innerHTML = "";

  for (const prompt of SUGGESTION_PROMPTS) {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = prompt;
    button.addEventListener("click", () => {
      dom.chatInput.value = prompt;
      dom.chatInput.focus();
    });
    dom.suggestionChips.append(button);
  }
}

function renderChatLog() {
  dom.chatLog.innerHTML = "";

  for (const message of state.messages) {
    const wrapper = document.createElement("article");
    wrapper.className = `message message-${message.role}`;

    if (message.role === "assistant") {
      wrapper.append(createStretchAvatar(message.avatarState || "default"));
    }

    const card = document.createElement("div");
    card.className = "message-card";

    const title = document.createElement("h3");
    title.textContent = message.title;
    card.append(title);

    const body = document.createElement("p");
    body.className = "message-body";
    body.textContent = message.body;
    card.append(body);

    wrapper.append(card);
    dom.chatLog.append(wrapper);
  }

  dom.chatLog.scrollTop = dom.chatLog.scrollHeight;
}

function hashString(value) {
  return Array.from(String(value || "")).reduce((total, character) => {
    return (total * 31 + character.charCodeAt(0)) >>> 0;
  }, 7);
}

function createMessageId(role) {
  return `${role}-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function recordOffCharacterFeedback(note) {
  const targetMessage = findLatestAssistantMessage();
  state.feedback.push({
    messageId: targetMessage?.id || "",
    prompt: targetMessage?.sourcePrompt || "",
    reply: targetMessage?.body || "",
    feedback: note,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(state.feedback, null, 2));
}

function findLatestAssistantMessage() {
  for (let index = state.messages.length - 1; index >= 0; index -= 1) {
    if (state.messages[index].role === "assistant") {
      return state.messages[index];
    }
  }

  return null;
}

function toggleFeedbackMode() {
  setFeedbackMode(!state.isFeedbackMode);
}

function setFeedbackMode(enabled) {
  state.isFeedbackMode = Boolean(enabled);

  if (!dom.feedbackToggle || !dom.chatInput) {
    return;
  }

  dom.feedbackToggle.classList.toggle("is-active", state.isFeedbackMode);
  dom.feedbackToggle.setAttribute("aria-pressed", state.isFeedbackMode ? "true" : "false");
  dom.chatInput.placeholder = state.isFeedbackMode
    ? "Tell us what was off-character"
    : "Have a yarn with Stretch";
}

function createStretchAvatar(stateName) {
  const avatar = document.createElement("div");
  avatar.className = "stretch-avatar";

  const image = document.createElement("img");
  const avatarState = getStretchAvatarState(stateName);
  image.src = avatarState.path;
  image.alt = avatarState.altText;
  image.loading = "lazy";
  image.decoding = "async";
  image.addEventListener("error", handleStretchAvatarError, { once: true });

  avatar.append(image);
  return avatar;
}

function getStretchAvatarState(stateName) {
  const states = stretchAvatarConfig.states || {};
  const configuredState = states[stateName];

  if (configuredState?.path) {
    return {
      path: configuredState.path,
      altText: configuredState.altText || stretchAvatarConfig.altText,
    };
  }

  return {
    path: stretchAvatarConfig.defaultAvatarPath,
    altText: stretchAvatarConfig.altText,
  };
}

function handleStretchAvatarError(event) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "true") {
    return;
  }

  image.dataset.fallbackApplied = "true";
  image.src = "./assets/stretch/default.png";
}
