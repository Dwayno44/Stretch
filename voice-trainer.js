const VOICE_TRAINER_STORAGE_KEY = "stretchisms-voice-trainer-v1";

const voiceTrainerFields = [
  {
    id: "address_terms",
    path: "addressTerms",
    question: "What does Stretch call people?",
    hint: "Add the nicknames and forms of address he naturally reaches for in conversation. Put each answer on its own line.",
    placeholder: "mate\nold mate\nchief\ncobber",
  },
  {
    id: "greeting_openers",
    path: "openers.greeting",
    question: "How does Stretch greet people?",
    hint: "Use exact lines he would say when he first starts talking. Put each answer on its own line.",
    placeholder: "G'day, mate.\nHow ya goin'?\nRighto, what's the story?",
  },
  {
    id: "status_openers",
    path: "openers.status",
    question: "How does Stretch answer when asked how he's going?",
    hint: "Capture his default status lines, not just the iconic ones. Put each answer on its own line.",
    placeholder: "About 60/50, all told.\nCan't grumble too much.\nStill on the right side of the grass.",
  },
  {
    id: "work_talk",
    path: "openers.work",
    question: "How does Stretch talk about work?",
    hint: "Short lines about jobs, shifts, mines, production, bludging, or mock importance. Put each answer on its own line.",
    placeholder: "Been keepin' the wheels turnin'.\nThey'd be lost without me, naturally.",
  },
  {
    id: "footy_talk",
    path: "observations.footy",
    question: "What sort of things does Stretch say about footy?",
    hint: "Opinions, frustrations, commentary, or over-the-top takes. Put each answer on its own line.",
    placeholder: "Too many blokes want to look clever instead of doin' the simple thing.",
  },
  {
    id: "weather_talk",
    path: "observations.weather",
    question: "How does Stretch talk about the weather?",
    hint: "Use everyday lines about heat, cold, rain, wind, and impossible exaggerations. Put each answer on its own line.",
    placeholder: "Cold enough to wake the dead this mornin'.",
  },
  {
    id: "food_talk",
    path: "observations.food",
    question: "How does Stretch talk about food, tea, pies, or the pub?",
    hint: "The sort of remarks he makes around a meal or cuppa. Put each answer on its own line.",
    placeholder: "A good pie fixes more problems than most experts do.",
  },
  {
    id: "school_old_days",
    path: "observations.school",
    question: "What does Stretch say when talking about the old days or how kids have it now?",
    hint: "This is where the tall-tale, back-in-my-day tone belongs. Put each answer on its own line.",
    placeholder: "Kids today reckon they've seen hardship if the Wi-Fi drops out.",
  },
  {
    id: "disagreements",
    path: "disagreements",
    question: "How does Stretch say something is rubbish, untrue, or overblown?",
    hint: "Short, punchy contradiction lines. Put each answer on its own line.",
    placeholder: "True bullshit.\nPull the other one.\nNah, not havin' that.",
  },
  {
    id: "warm_lines",
    path: "warmLines",
    question: "What warm or reassuring lines does Stretch use?",
    hint: "Friendly, low-stakes lines that soften the cheekiness. Put each answer on its own line.",
    placeholder: "Good on ya for askin'.\nCould be worse, mate.",
  },
  {
    id: "story_leads",
    path: "storyLeads",
    question: "How does Stretch start a yarn?",
    hint: "Openers he uses before a tall tale or a long-winded anecdote. Put each answer on its own line.",
    placeholder: "Back in the day,\nYou won't believe this, but\nNo word of a lie,",
  },
  {
    id: "sign_offs",
    path: "closers.leaving",
    question: "How does Stretch end a conversation or head off?",
    hint: "Casual departures and sign-offs. Put each answer on its own line.",
    placeholder: "Mind how ya go.\nCatch ya round.\nDon't do anythin' I wouldn't do.",
  },
  {
    id: "question_backs",
    path: "questionBacks",
    question: "What does Stretch say to throw the conversation back to the other person?",
    hint: "Simple follow-up questions that keep the yarn moving. Put each answer on its own line.",
    placeholder: "What's been happenin' your way?\nWhat've you been up to?",
  },
  {
    id: "soft_yes",
    path: "softYes",
    question: "How does Stretch say yes, agree, or give approval?",
    hint: "Short affirmative lines. Put each answer on its own line.",
    placeholder: "Too right.\nBloody oath.\nReckon so.",
  },
  {
    id: "soft_no",
    path: "softNo",
    question: "How does Stretch say no, or that something is a bad idea?",
    hint: "Short refusal or caution lines. Put each answer on its own line.",
    placeholder: "Not likely.\nI'd leave that alone.\nI wouldn't bank on it.",
  },
  {
    id: "not_stretch",
    path: "notStretch",
    question: "What kinds of words, tone, or phrases are just not Stretch at all?",
    hint: "Use this for things that feel too polished, too corporate, too online, too young, or just plain wrong for him. Put each answer on its own line.",
    placeholder: "He wouldn't say 'absolutely' in a polished way.\nHe wouldn't sound corporate.\nHe wouldn't use therapy-speak.",
  },
];

const dom = {
  form: document.querySelector("#voiceTrainerForm"),
  input: document.querySelector("#voiceTrainerInput"),
  title: document.querySelector("#voiceTrainerQuestionTitle"),
  hint: document.querySelector("#voiceTrainerQuestionHint"),
  submit: document.querySelector("#voiceTrainerSubmit"),
};

const state = {
  draft: {},
  currentIndex: 0,
  completed: false,
  sessionAnswers: {},
};

initVoiceTrainer();

function initVoiceTrainer() {
  if (!dom.form || !dom.input) {
    return;
  }

  state.draft = loadTrainerDraft();
  state.currentIndex = getInitialQuestionIndex(state.draft);
  state.sessionAnswers = {};

  bindVoiceTrainerEvents();
  renderCurrentQuestion();
  updateVoiceTrainerOutputs();
}

function bindVoiceTrainerEvents() {
  dom.form.addEventListener("submit", handleTrainerSubmit);
  dom.input.addEventListener("input", handleTrainerInput);
}

function handleTrainerInput() {
  const field = voiceTrainerFields[state.currentIndex];
  state.sessionAnswers[field.id] = dom.input.value;
}

function handleTrainerSubmit(event) {
  event.preventDefault();

  if (state.completed) {
    return;
  }

  const field = voiceTrainerFields[state.currentIndex];
  state.draft[field.id] = dom.input.value;
  state.sessionAnswers[field.id] = "";
  saveTrainerDraft(state.draft);
  updateVoiceTrainerOutputs();

  if (state.currentIndex < voiceTrainerFields.length - 1) {
    state.currentIndex += 1;
    renderCurrentQuestion();
    return;
  }

  renderCompletionState();
}

function renderCurrentQuestion() {
  const field = voiceTrainerFields[state.currentIndex];
  state.completed = false;

  dom.title.textContent = field.question;
  dom.hint.textContent = field.hint;
  dom.input.placeholder = field.placeholder;
  dom.input.value = state.sessionAnswers[field.id] || "";
  dom.input.disabled = false;
  dom.input.focus();

  dom.submit.disabled = false;
  dom.submit.textContent = state.currentIndex === voiceTrainerFields.length - 1 ? "Finish" : "Send answer";
}

function renderCompletionState() {
  state.completed = true;
  dom.title.textContent = "That's the lot.";
  dom.hint.textContent = "Your answers have been saved locally and are now informing Stretch's voice behind the scenes.";
  dom.input.value = "";
  dom.input.placeholder = "All done.";
  dom.input.disabled = true;
  dom.submit.disabled = true;
  dom.submit.textContent = "Saved";
}

function getInitialQuestionIndex(draft) {
  const firstEmptyIndex = voiceTrainerFields.findIndex((field) => {
    return !String(draft[field.id] || "").trim();
  });

  return firstEmptyIndex >= 0 ? firstEmptyIndex : voiceTrainerFields.length - 1;
}

function updateVoiceTrainerOutputs() {
  window.stretchVoiceTrainerDraft = {
    interviewPrompt: buildInterviewPrompt(),
    exportJson: buildVoiceTrainerExport(state.draft),
  };
}

function buildVoiceTrainerExport(draft) {
  const output = {};

  for (const field of voiceTrainerFields) {
    const values = splitLines(draft[field.id]);
    if (!values.length) {
      continue;
    }

    setNestedValue(output, field.path, values);
  }

  return output;
}

function buildInterviewPrompt() {
  const numberedQuestions = voiceTrainerFields
    .map((field, index) => `${index + 1}. ${field.question} [${field.path}]`)
    .join("\n");

  return [
    "You are helping me collect voice data for a chatbot character named Stretch.",
    "Stretch is an older Western Australian rural man: very casual, colloquial, warm, cheeky, and a bit of a bullshit artist.",
    "Interview me one question at a time and keep pushing for authentic real-life examples of exactly what Stretch would say.",
    "Do not polish the language. Keep his rough edges, filler words, exaggerations, and odd turns of phrase.",
    "For each question, ask me for 3 to 10 exact example lines.",
    "After I answer, summarise the examples as plain string arrays mapped to the target path shown in brackets.",
    "",
    "Questions to work through:",
    numberedQuestions,
  ].join("\n");
}

function splitLines(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function setNestedValue(target, path, value) {
  const keys = path.split(".");
  let cursor = target;

  while (keys.length > 1) {
    const key = keys.shift();
    if (!cursor[key] || typeof cursor[key] !== "object" || Array.isArray(cursor[key])) {
      cursor[key] = {};
    }
    cursor = cursor[key];
  }

  cursor[keys[0]] = value;
}

function saveTrainerDraft(draft) {
  localStorage.setItem(VOICE_TRAINER_STORAGE_KEY, JSON.stringify(draft, null, 2));
}

function loadTrainerDraft() {
  try {
    const raw = localStorage.getItem(VOICE_TRAINER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error("Failed to load voice trainer draft:", error);
    return {};
  }
}
