// Discovery Prompts
const DISCOVERY_PROMPTS = [
  "What kind of touch makes you feel safest?",
  "When do you feel most desired?",
  "What's one small gesture that means alot to you?",
  "What's a way someone showed you love that you'll never forget?",
  "Where's a place on your body that loves gentle attention?",
  "What song makes you think about romance?",
  "What does comfort look like to you after a long day?",
  "What's something your partner does that always makes you smile?",
  "Describe your perfect slow morning together.",
  "What's a compliment you never get tired of hearing?",
  "When do you feel most emotionally connected to someone?",
  "What's a texture or sensation that relaxes you instantly?",
  "What does being truly seen by someone feel like?",
  "What's a date you've always dreamed about?",
  "When do you feel the most beautiful or handsome?",
  "What's a memory with your partner that makes you feel warm?",
  "How do you like to be held?",
  "What's a word that makes you melt when someone says it?",
  "What's the most romantic thing someone could do for you tomorrow?",
  "What kind of kiss do you like most?",
  "When do you feel most safe being vulnerable?",
  "What's a scent that makes you think of love?",
  "Describe your perfect evening together in three words.",
  "What's something you've never told your partner that you appreciate?",
  "What part of your morning routine would you love to share?",
  "What's a love language you wish you received more of?",
  "When do you feel most playful with your partner?",
  "What's a sound that makes you feel calm and loved?",
  "What's the sweetest thing someone ever whispered to you?",
  "What does the perfect hug feel like?",
];

let usedPrompts = [];
function getDiscoveryPrompt() {
  if (usedPrompts.length >= DISCOVERY_PROMPTS.length) usedPrompts = [];
  const available = DISCOVERY_PROMPTS.filter(p => !usedPrompts.includes(p));
  const pick = available[Math.floor(Math.random() * available.length)];
  usedPrompts.push(pick);
  return pick;
}

// Memory mode prompts (Wild Card🧠)
const MEMORY_PROMPTS = [
  "Recreate an early dating moment together.",
  "Act out something you used to do more often.",
  "Describe the first time you knew this was real.",
  "Reenact how you two first met — your version.",
  "Show your partner how they made you feel on your best date.",
  "What's a silly inside joke between you two? Act it out.",
  "Recreate a moment where your partner completely surprised you.",
  "Act out your partner's most lovable habit.",
  "Show how your partner comforts you without words.",
  "Reenact a moment when you laughed so hard together you couldn't stop.",
  "Describe the exact moment you fell in love — what were you doing?",
  "Act out the way your partner says goodbye when they don't want to leave.",
  "Recreate a quiet moment together that meant more than words.",
  "Show your partner the way they look at you that makes your heart skip.",
  "What's a trip or adventure you shared? Describe your favorite part.",
  "Act out a lazy Sunday morning together — the good kind.",
  "Recreate a moment when your partner stood up for you.",
  "Show the way your partner dances when they think nobody's watching.",
  "Describe a tough moment you got through together and what made it okay.",
  "Act out the exact way your partner orders their favorite food.",
  "Recreate the first time you held hands — who reached first?",
  "Show the way your partner wakes you up in the morning.",
  "Describe a smell, song, or place that instantly takes you back to an early memory together.",
  "Reenact the moment one of you said 'I love you' for the first time.",
  "Act out your partner's signature move when they're trying to make you laugh.",
  "Recreate a moment when everything felt perfectly simple between you.",
  "Show what your partner does when they're proud of you.",
  "Describe a meal you cooked together — what went right or hilariously wrong?",
  "Act out a road trip moment — the vibe, the music, the conversation.",
  "Recreate a moment where you two made up after a disagreement. What broke the ice?",
];

let usedMemoryPrompts = [];
function getMemoryPrompt() {
  if (usedPrompts.length >= MEMORY_PROMPTS.length) usedMemoryPrompts = [];
  const available = MEMORY_PROMPTS.filter(p => !usedMemoryPrompts.includes(p));
  const pick = available[Math.floor(Math.random() * available.length)];
  usedMemoryPrompts.push(pick);
  return pick;
}

const WILD_CARDS_PER_LEVEL = 3;
const VULN_CARDS_PER_LEVEL = 2;

// Vulnerability Prompts (❤️‍🩹 Card)
const VULNERABILITY_PROMPTS = [
  "Say one thing you appreciate about your partner's growth.",
  "Share a memory you haven't talked about in a while.",
  "What's something your partner does that you've never properly thanked them for?",
  "Share a fear you don't usually talk about.",
  "What's something you wish your partner knew about how you feel?",
  "Describe a moment when your partner made you feel truly understood.",
  "What's one thing you'd change about how you communicate together?",
  "Share something you admire about your partner that you rarely say out loud.",
  "When was the last time you felt really proud of your partner?",
  "What's a part of yourself you're still learning to accept?",
  "What's a dream you haven't shared yet?",
  "Describe a moment you realized you were falling deeper in love.",
  "What's something hard you went through that made your relationship stronger?",
  "What's one way your partner has changed you for the better?",
  "Share a moment when you felt most protected by your partner.",
  "What's something you want more of in your relationship?",
  "What's a small thing your partner does that makes an ordinary day special?",
  "Tell your partner something you've been holding back — something kind.",
  "What's a quality in your partner that you hope your children inherit?",
  "Share a time your partner surprised you with their strength.",
  "What's a part of your story together that you never want to forget?",
  "What does forgiveness look like between you two?",
  "Name one way you've grown since being with your partner.",
  "What's something you want your partner to know about your love for them?",
  "Describe a moment of silence between you that felt like a conversation.",
  "What's one promise you want to make to each other right now?",
  "Share something about your childhood that shapes how you love today.",
  "What makes you feel most grateful about this relationship?",
  "What's a boundary you're learning to set, and how can your partner support you?",
  "Tell your partner the thing you find most beautiful about who they are — not what they look like.",
];

let usedVulnPrompts = [];
function getVulnPrompt() {
  if (usedPrompts.length >= VULNERABILITY_PROMPTS.length) usedVulnPrompts = [];
  const available = VULNERABILITY_PROMPTS.filter(p => !usedVulnPrompts.includes(p));
  const pick = available[Math.floor(Math.random() * available.length)];
  usedVulnPrompts.push(pick);
  return pick;
}

// Connection Check in Questions
const CHECKIN_PRE_QUESTIONS = [
  "How connected do you feel to each other right now?",
  "How open are you feeling in this moment?",
  "How comfortable are you being vulnerable right now?",
  "How playful do you feel together tonight?",
  "How present are you in this moment with your partner?",
  "How safe do you feel to be yourself right now?",
  "How excited are you to discover something new about each other?",
  "How relaxed do you feel with each other right now?",
  "How much trust do you feel between you in this moment?",
  "How much joy are you carrying into this moment together?",
];

const CHECKIN_POST_QUESTIONS = [
  "How connected do you feel after playing together?",
  "Did you learn something new about your partner?",
  "How much closer do you feel right now?",
  "How seen and appreciated do you feel after this?",
  "Did this bring out a side of your partner you don't see enough?",
  "How warm do you feel toward each other right now?",
  "Did anything surprise you about your partner tonight?",
  "How much fun did you have together?",
  "Do you feel more in sync with your partner now?",
  "How loved do you feel in this moment?",
];

let usedPreQs = [], usedPostQs = [];
function getCheckinQ(pool,used) {
  if (used.length >= pool.length) used.length = 0;
  const avail = pool.filter(q => !used.includes(q));
  const pick = avail[Math.floor(Math.random() * avail.length)];
  used.push(pick);
  return pick;
}

function buildCheckinScale(containerId, btnId) {
  const container = document.querySelector('#containerId');
  const btn = document.querySelector('#btnId');
  container.innerHTML = '';
  const hearts = ['🤍', '🤍', '🤍', '🩵', '💙', '💛', '💛', '🧡', '❤️', '❤️‍🔥'];
  hearts.forEach((h, i) => {
    const b = document.createElement('button'); 
      b.className= "checkin-btn";
      b.textContent=h;b.dataset.val= i+1;
      b. addEventListener('click',() => {
      container.querySelectorAll('.checkin-btn').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected'); 
      btn.disabled=false;
    });
    container.appendChild(b);
  });
}

const LEVELS = [
  { name: 'Dating',
    cssClass:'dating', 
    icon:'💕', 
    desc:'Sweet and flirty - just gettingwarmed up', 
    maxMoves: 35,
    turnTime: 20,
    pairs: [
      ["🫱", "🫲", "Hold my hand?"],
      ["🚘", "🧭", "Go on an adventure?"],
      ["🎼", "🎸", "Music concert?"],
      ["🫖", "📚", "Tea & Bookstore?"],
      ["🍔", "🎮", "Burgers & Gaming"]
      ["🍽️", "🎬", "Dinner & Movie?"],
      ["☕️", "🥯", "Coffee & Bagel?"],
      ["🌶️", "🍹", "Grab a Drink?"],
      ["🎨", "🍷", "Paint & Sip?"],
      ["🍕", "🎳", "Pizza & Bowling?"]]},

  { name: 'Honeymoon Phase',
    cssClass:'honeymoon', 
    icon:'❤️‍🔥', 
    desc:'Things have heated up', 
    maxMoves: 30,
    turnTime: 18,
    pairs: [
      ["🫳", "👣", " Rub my feet"],
      ["🫵", "💆‍♀️", "Massage Me Slowly"],
      ["👃", "👤", "Lets bump noses"],
      ["🇫🇷", "💋", "French Kiss"],
      ["🎥", "❄️", "Netflix & Chill"],
      ["💋", "👂", "Kiss my ears"],
      ["💋", "🔙", "Kiss the arch of my back, slow and deliberate"],
      ["👆", "🦵", "Slowly run your finger up my legs"],
      ["🤗", "⁐", "Hold me close"]
      ["🕺", "🎵", "Dance with me"]]},

 { name: 'Committed',
    cssClass:'committed', 
    icon:'💞', 
    desc:'Deep Connection', 
    maxMoves: 28,
    turnTime: 16,
    pairs: [
      ["💋", "🐌", "Kiss me long and Slow"],
      ["👅", "🍯", "Taste my honeypot"],
      ["✊", "🍆", "Hand Job"],
      ["🎭", "🛏️", "Roleplay"],
      ["💋", "🔙", "Kiss the arch of my back, slow and deliberate"],
      ["🤤", "🚿", "Have me drooling in the shower"],
      ["💨", "🍆", "Blow my mind"],
      ["🧥", "💃", "Dance for me naked"],
      ["🚫🫣", "😮", "No peeking, surprise me"],
      ["🫳", "🐈", "Rub my cat"]]},

 { name: 'Married',
    cssClass:'married', 
    icon:'💍', 
    desc:'We are one!', 
    maxMoves: 25,
    turnTime: 14,
    pairs: [
      ["✊", "🍆", "Hand Job"],
      ["🧥", "🫠", "Show me some skin"],
      ["🖖", "🌮", "Rub my taco"],
      ["🍑","👏", "Clap that ass!"],
      ["💋", "🐌", "Kiss me long and slow"],
      ["💦", "😝", "Sit on my face"],
      ["🤯", "🚘", "Blow my mind in the car"],
      ["🎭", "🛏️", "Roleplay"],
      ["👅", "🍯", "Taste my honeypot"],
      ["🤼", "🌙", "Lets wrestle under the moonlight"]]},

   { name: 'Child at Heart',
    cssClass:'childatheart', 
    icon:'🦄', 
    desc:'Silly playful - no pressure', 
    maxMoves: 35,
    turnTime: 22,
    pairs: [
      ['🧸', '🤗', 'Bear Hug'],
      ['❤️', '✉️', 'Love Letter'],
      ['🗣️', '👂', 'Whisper sweet nothings in my ear'],
      ['🫧', '🪮', 'Wash my hair'],
      ['🍳', '🧑‍🍳', 'Cook with me'],
      ['🪶', '🥊', 'Pillow Fight'],
      ['🤗', '😊', 'Cuddlefest'],
      ['🧦', '🏃', 'Sock slide race'],
      ['🙂', '🎨', 'Paint my face'],
      ['👀', '😂', 'Staring Contest']]}
  ];

let state = {
  numPlayers: 0,
  currentLevel: 0,
  scores: [],
  currentPlayer: 0,
  firstCard: null,
  secondCard: null,
  checking: false, 
  matchedPairs: 0,
  movesTaken: 0,
  timeLeft: 0,
  timerInterval: null,
  timerStarted: false,
  gameOver: false,
  deck: [],
  foundPairs: new Set(),
  paused: false,
  dateChecklist:[],
};

// Age Gate
const AGE_TIME_LIMIT = 20;
let ageTimer = AGE_TIME_LIMIT,
    ageInterval = null,
    ageExpired = false;

const dobMonth = document.querySelector('#dob-month'), 
      dobDay = document.querySelector('#dob-day'),
      dobYear = document.querySelector('#dob-year'),
      ageError = document.querySelector('#age-error'),
      btnVerify = document.querySelector('#btn-verify-age');
      
// Populate Selects
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      months.forEach ((m, i) => {const o= document.createElement('option');o.value= i + 1; o.textContent= m; dobMonth.appendChild(o);});
      for(let d = 1; d <= 31; d++) {const o= document.createElement('option');o.value = d; o.textContent= d; dobDay.appendChild(o);} 

const curYear = new Date().getFullYear();
for(let y=curYear; y >= curYear - 100; y--) {const o= document.createElement('option');o.value = y; o.textContent = y; dobYear.appendChild(o);}

function startAgeTimer() {
  ageTimer = AGE_TIME_LIMIT;
  ageExpired = false;
  ageInterval = setInterval(() => {
    ageTimer--;
    if (ageTimer <= 0) {
      clearInterval(ageInterval);
      ageExpired = true;
      ageError.textContent = "⏰ Time's up! If you know your birthday, that shoud not take that long.";
      btnVerify.diabled = true;
      dobMonth.disabled = true;
      dobDay.disabled = true;
      dobYear.disabled = true;
      setTimeout(() => {
        document.querySelector('#age-gate').classList.remove('visible');
        document.querySelector('#blocked-screen').classList.add('visible');
      }, 2500);
    }
  }, 1000);
}

function checkDobComplete() {
  if (ageExpired) return;
  const m = dobMonth.value,
        d = dobDay.value,
        y = dobYear.value;
        btnVerify.disabled = !(m && d && y);
        if(m && d && y) clearInterval(ageInterval);
}

[dobMonth, dobDay, dob].forEach(s => s.addEventListener('change', checkDobComplete));

// Start timer when first select is touched
let ageTimerStarted = false;
[dobMonth, dobDay, dobYear].forEach(s => s.addEventListener('focus', () => { if(!ageTimerStarted){ageTimerStarted = true; startAgeTimer();}
}, {once:false}));

btnVerify.addEventListener('click', () => {
  const m = parseInt(dobMonth.value),
        d = parseInt(dobDay.value),
        y = parseInt(dobYear.value);
  if (!m || !d || !y) return;
  const dob = new Date(y, m-1, d);
  const today = new Date();
  let age = today.getFullYear() -dob.getFullYear();
  const monthDiff = today.getMonth() -dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) age--;
  
  if (age < 18) {
    ageError.textContent = "You must be 18 or older to play.";
    clearInterval(ageInterval);
    setTimeout(() => {
      document.querySelector('#age-gate').classList.remove('visible');
      document.querySelector('#blocked-screen').classList.add('visible');
    }, 1500);
  } else if (age > 120 || dob > today) {
    ageError.textContent = " Please enter a valid date of birth.";
  } else {
    clearInterval(ageInterval);
      document.querySelector('#age-gate').classList.remove('visible');
      document.querySelector('#setup-rules').classList.add('visible');
  }
});

document.querySelector('#btn-age-no').addEventListener('click',() => {
  clearInterval(ageInterval);
  document.querySelector('#age-gate').classList.remove('visible');
  document.querySelector('#blocked-screen').classList.add('visible');
});

// Ground rules
const consentCb = document.querySelector('#consent-checkbox'),
      btnRulesNext = document.querySelector('#btn-rules-next');
      consentCb.addEventListener('change', () => {
        btnRulesNext.disabled = !consentCb.checked;});
        btnRulesNext.addEventListener('click', () => {
          if (!consentCb.checked) return;
          document.querySelector('#setup-rules').classList.remove('visible');
          document.querySelector('#setup-players').classList.add('visible');
        });

// Player Count
let selectedCount = 0,
    selectedLevel = -1,
    popupOpen = false;

const btnToLevel = document.querySelector('#btn-to-level');
      document.querySelectorAll('#player-count-options .setup-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('#player-count-options .setup-btn').forEach(b => b.classList.remove('selected'));
          btn.classListadd('selected');
          selectedCount = parseInt(btn.dataset.count);
          btnToLevel.disabled = false;
        });
      });

      btnToLevel.addEventListener('click', () => {
        if(!selectedCount) return;
        document.querySelector('#setup_players').classList.remove('visible');
        buildLevelSelect();
        document.querySelector('#setup-level').classList.add('visible');
      });

// Level Select
const levelGrid = document.querySelector('#level-select-grid'),
      btnStartGame = document.querySelector('#btn-start-game');

function buildLevelSelect() {
  levelGrid.innerHTML = '';
  LEVELS.forEach((lv, idx) => {
    const card = document.createElement('div');
    card.className='level-card';
    card.setAttribute('data-level', idx);
    card.setAttribute('tabIndex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label',`${lv.name}: ${lv.desc}`);
    card.innerHTML=`<div class="lc-icon>${lv.icon}</div><div class="lc-name">${lv.name}</div><div class="lc-desc">${lv.desc}<?div>`;
    card.addEventListener('click', () => selectedLevel(idx));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') 
        {e.preventDefault();
          selectedLevel(idx);
     }});
     levelGrid.appendChild(card);
  });
} 

function selectLevel(idx) {
  document.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`.level-card[data-level="${idx}"]`).classList.add('selected');
    selectedLevel = idx;
    btnStartGame.disabled = false;
}

const checkinPre = document.querySelector('#checkin-pre'),
      checkinPost = document.querySelector('#checkin-post'),
      checkinPreQ = document.querySelector('#checkin-pre-q'),
      checkinPostQ = document.querySelector('#checkin-post-q'),
      btnCheckinPreNext = document.querySelector('#checkin-pre-next'),
      btnCheckinPostNext = document.querySelector('#checkin-post-next');
  btnStartGame.addEventListener('click', () => {
  if(selectedLevel < 0) return;
  state.numPlayers = selectedCount;
  state.scores = Array(selectedCount).fill(0);
  document.querySelector('setup-level').classList.remove('visible');

// Show Pre-game check in
  checkinPreQ.textContent = getCheckingQ(CHECKIN_PRE_QUESTIONS, usedPreQs);
  buildCheckinScale('checkin-pre-scale', 'btn-checkin-pre-next');
  btnCheckinPreNext.disabled = true;
  checkinPre.classList.add('visible');
});

btnCheckinPreNext.addEventListener('click', () => {
  const sel = document.querySelector('#checkin-pre-scale .checkin-btn-selected');
  state._preQ = checkinPreQ.textContent;
  state._preRating = sel?parseInt(sel.dataset.val): 0;
  checkinPre.classList.remove('visible');
  startLevel(selectedLevel);
});

// DOM refs
const gameArea = document.querySelector('#game-area'),
      gameBoard = document.querySelector('#board'),
      displayTimer = document.querySelector('#timer'),
      moveValue = document.querySelector('#moves'),
      maxMoves = document.querySelector('#max-moves'),
      matchedCount = document.querySelector('#matched-count'),
      totalPairs = document. querySelector('#total-pairs'),
      playerScores = document. querySelector('#player-scores'),
      phraseDisplay = document.querySelector('#phrase-display'),
      levelBadge = document.querySelector('#level-badge'),
      actModal = document.querySelector('#act-modal'),
      modalEmoji = document.querySelector('#modal-emoji'),
      modalName = document.querySelector('#modal-match-name'),
      modalPlayer = document.querySelector('#modal-player'),
      discoveryText = document.querySelector('#discovery-text'),
      btnActDone = document.querySelector('#btn-act-done'),
      btnActSkip = document.querySelector('#btn-act-skip'),
      pauseModal = document.querySelector('#pause-modal'),
      btnResume = document.querySelector('#btn-resume'),
      btnEndEarly = document.querySelector('#btn-end-early'),
      endScreen = document.querySelector('#end-screen'),
      endTitle = document.querySelector('#end-title'),
      endScores = document.querySelector('#end-scores'),
      matchesFab = document.querySelector('#matches-fab'),
      matchesPopup = document.querySelector('#matches-popup'),
      matchesBody = document.querySelector('#matches-popup-body'),
      matchesClose = document.querySelector('#matches-popup-close'),
      safewordFab = document.querySelector('#safe-word-fab'),
      gameFooter = document.querySelector('#game-footer');

const memoryModal = document.querySelector('#memory-modal'),
      memoryPromptText = document.querySelector('#memory-prompt-text'),
      memoryPlayer = document.querySelector('#memory-player'),
      btmMemoryDone = document.querySelector('#btn-memory-done'),
      btnMemorySkip = document.querySelector('#btn-memory-skip');

const vulnModal = document.querySelector('#vuln-modal'),
      vulnPromptText = document.querySelector('#vuln-prompt-text'),
      vulnPlayer = document.querySelector('#vuln-player'),
      btnVulnDone = document.querySelector('#btn-vuln-done'),
      btnVulnSkip = document.querySelector('#btn-vuln-skip');      


function startLevel(li) {
  const lv = LEVELS[li];
  Object.assign(state, {currentLevel:li, currentPlayer: 0, firstCard: null, secondCard: null, checking: false,
    matchedPairs: 0, movesTaken: 0, timerStarted: false, gameOver: false, paused: false, foundPairs: new Set(), dateChecklist:[]});

  clearInterval(state.timerInterval);
      usedPrompts = [];
      usedMemoryPrompts = [];
      usedVulnPrompts = [];
      state.deck = [];

  for(const p of lv.pairs) {
    state.deck.push({emoji : p[0], pairName: p[2], isWild: false});
    state.deck.push({emoji: p[1], pairName: p[2], isWild: false});
}

  for(let w = 0; w < WILD_CARDS_PER_LEVEL; w++) {
      state.deck.push({emoji: '🧠', pairName: '__WILD__', isWild: true, isVuln: false});     
}
  for(let w = 0; v < VULN_CARDS_PER_LEVEL; v++) {
      state.deck.push({emoji: '❤️‍🩹', pairName: '__VULN__', isWild: false, isVuln: true});     
}

shuffle(state.deck);
endScreen.classList.remove('visible');
gameArea.style.display = flex;





  matchPairedEmojis.forEach((duo) => {
    const duoDiv = document.createElement('div');
    duoDiv.className = 'key-combo';
    duoDiv.innerHTML = `
        <span class="key-glyph">${duo[0]}</span>
        <span class="key-glyph">${duo[1]}</span>
        <span class="key-id">${duo[2]}</span>
        `;
    keyMateBin.appendChild(duoDiv);
  });
}
function init() {
  console.log('Pair it to win it", "Game Ready!');
  displayViewPlayMode();
  mateKey();
}

function displayViewPlayMode() {
 const vibeSwitchboard = document.querySelector('#vibe-switchboard');
 const brainBtn = document.querySelector('#mind-challenger');
 const bitsBytesBtn = document.querySelector('#bitsbytes-pc');

 vibeSwitchboard.classList.remove('hidden');

 brainBtn.addEventListener('click', () => {
    viewPlayMode = 'mind-challenger';
    vibeSwitchboard.classList.add('hidden');
    beginGame();
 })

 bitsBytesBtn.addEventListener('click', () => {
    viewPlayMode = 'pc';
    vibeSwitchboard.classList.add('hidden');
    beginGame();
 })
}



function beginGame() {
  console.log(
    `Play Mode: ${viewPlayMode === "gamer" ? "gamer vs gamer" : "gamer vs pc"}`
  );
  createGame();
  displayGamerMove();
}

function createGame() {
  gameBoard.innerHTML = '';

  for (let i = 0; i < totalDraw.length; i++) {
    const draw = document.createElement('div');
    draw.className = 'hidden-draw';
    draw.textContent = totalDraw[i];
    draw.setAttribute('pair', i);
    draw.addEventListener('click', flickEmoji);
    gameBoard.appendChild(draw);
  }
}

function getMate(emoji) {
  for (let duo of matchPairedEmojis) {
    if (duo[0] === emoji || duo[1] === emoji) {
      return duo[2];
    }
  }
  return null;
}
function flickEmoji(event) {
  const quickDraw = event.target;

  if (endGame || pcShot) {
    return;
  }

  if (inquiry || quickDraw === primeDraw || quickDraw === supplemntDraw) {
    return;
  }
  if (primeDraw === null) {
    beginTime();
  }

  quickDraw.classList.add('flicked');

  if (viewPlayMode === 'pc') {
    const pcDrawIdx = quickDraw.getAttribute('pair');
    pcMedulla[pcDrawIdx] = quickDraw.textContent;
  }

  if (primeDraw === null) {
    primeDraw = quickDraw;
  } else if (supplemntDraw === null) {
    supplemntDraw = quickDraw;
    diagnosis();
  }
}
function diagnosis() {
  inquiry = true;

if (!primeDraw || !supplemntDraw) {
    inquiry = false;
    return;
  }

const glyph1 = primeDraw.textContent;
const glyph2 = supplemntDraw.textContent;

const twin1 = getMate(glyph1);
const twin2 = getMate(glyph2)
  

const isMate = (twin1 === twin2 && twin1 !== null);
const combo = twin1

  if (isMate) {
    console.log('MATCH!', '🥳');
    phraseDisplay.textContent = `🥳 ${combo}! You got this! Keep Going!`;
    phraseDisplay.style.color = '#000000';

    matchedPairs.push(combo);
    gamerPoints[ogPlayerIdx]++;

    primeDraw.classList.add('mate');
    supplemntDraw.classList.add('mate');

    primeDraw = null;
    supplemntDraw = null;
    inquiry = false;
    halt();
    
    setTimeout(() => {
      phraseDisplay.textContent = '';
    }, 2000);

    confirmEnd();

    if (!endGame && viewPlayMode === 'pc' && ogPlayerIdx === 1) {
        pcShot = false;
        setTimeout(() => {
          pcShot = true;
          pcMove()
        }, 2500);
    } else if (pcShot) {
      pcShot = false;   
    }
  } else {
    console.log('Oops! Try Again🙁');
    phraseDisplay.textContent = 'Oops! Try Again 🙁';
    phraseDisplay.style.color = '#1f0404ff';

    const delayflick = pcShot ? 2000 : 1500;

    setTimeout(() => {

    if (primeDraw)  {
      primeDraw.classList.remove('flicked');
    }    
    if (supplemntDraw) {
      supplemntDraw.classList.remove('flicked');
    }

      primeDraw = null;
      supplemntDraw = null;
      inquiry = false;
      halt();
      usedMoves.push(1);

      phraseDisplay.textContent = '';

if (pcShot) {
    pcShot = false
}
      nxtPlayer();
      confirmEnd();
    }, delayflick);      
  }
}
function beginTime() {
  remainTime = maxTimePerTurn;
  displayTimer.textContent = remainTime;

  clearInterval(timeSpell);
  timeSpell = setInterval(() => {
    remainTime--;
    displayTimer.textContent = remainTime;

    if (remainTime <= 0) {
      halt();
      timeEnds();
    }
  }, 1000);
}

function timeEnds() {
  clearInterval(timeSpell);
  console.log('Too Slow! You gotta be faster Champ!');

  if (primeDraw) {
    primeDraw.classList.remove('flicked');
  }
  if (supplemntDraw) {
    supplemntDraw.classList.remove('flicked');
  }

  primeDraw = null;
  supplemntDraw = null;
  inquiry = false;
  usedMoves.push(1);
  nxtPlayer();
  confirmEnd();
}

function halt() {
  clearInterval(timeSpell);
}

function nxtPlayer() {
  ogPlayerIdx = (ogPlayerIdx + 1) % numOfPlayers;
  displayGamerMove();

  if (viewPlayMode === 'pc' && ogPlayerIdx === 1) {
    pcShot = true;
    setTimeout(pcMove, 1000);
  }
}
function displayGamerMove() {
  const gameStat = ogPlayerIdx + 1;
  console.log(`gamer ${gameStat}'s move!`);
  runInput.textContent = `gamer ${gameStat}'s move | Moves: ${usedMoves.length}/ ${totalAllowedTurns}`;
}

function confirmEnd() {
  const allPairs = matchPairedEmojis.length;

  if (
    matchedPairs.length === allPairs ||
    usedMoves.length >= totalAllowedTurns
  ) {
    endGameAction();
  }
}
function endGameAction() {
  endGame = true;
  halt();

  const prime1tally = gamerPoints[0];
  const supplemnt2Tally = gamerPoints[1];

  let victor;
  if (prime1tally > supplemnt2Tally) {
    victor = 'primeGamer';
  } else if (supplemnt2Tally > prime1tally) {
    victor = viewPlayMode === 'pc' ? 'pc' : 'supplemntGamer';
  } else {
    victor = 'Tie';
  }
  console.log('Game Done');
  console.log(
    `primeGamer ${prime1tally} points | ${
      viewPlayMode === 'pc' ? 'pc': 'supplemntGamer'
    }: ${supplemnt2Tally} points`
  );
  console.log(`${victor} Won!`);

  const challengerName = viewPlayMode === 'pc' ? 'pc' : 'supplemntGamer';
  runInput.textContent = `Game Done! ${victor}Won! (Mind: ${prime1tally}, ${challengerName}: ${supplemnt2Tally})`;
}

function pcMove() {
  const gamePiece = document.querySelectorAll('.hidden-draw:not(.mate)');
  const reversePiece = Array.from(gamePiece).filter(
    (draw) => !draw.classList.contains('flicked')
  );

  if (reversePiece.length < 2) {
    pcShot = false;
    nxtPlayer();
    return;
  
  }
let draw1 = null;
let draw2 = null;
let mateFound = false

const mindCode = Object.keys(pcMedulla);
for (let i = 0; i < mindCode.length && !mateFound; i++){
  for (let j = i + 1; j < mindCode.length; j++) {
    const draw1Comp = pcMedulla[mindCode[i]];
    const draw2Comp = pcMedulla[mindCode[j]];

    const mate1 = getMate(draw1Comp);
    const mate2 = getMate(draw2Comp);

  if (mate1 === mate2 && mate1 !== null) {
    const draw1Element = document.querySelector(`.hidden-draw[pair="${mindCode[i]}"]:not(.mate):not(.flicked)`);
    const draw2Element = document.querySelector(`.hidden-draw[pair="${mindCode[j]}"]:not(.mate):not(.flicked)`);
    
    if (draw1Element && draw2Element) {
      draw1 = draw1Element;
      draw2 = draw2Element;
      mateFound = true;
      console.log('MATCH! Keep Going!');
      break;
      }
    }
  }
}

if (!mateFound) {
  if (Math.random() < 0.3 && mindCode.length> 0) {
    const minIdx = mindCode[Math.floor(Math.random() * mindCode.length)];
    const minDrw = document.querySelector(`.hidden-draw[pair="${minIdx}"]:not(.mate):not(.flicked)`);
    if (minDrw) {
      draw1 = minDrw
      const exTra = reversePiece.filter(d => d !== draw1);
      if (exTra.length > 0) {
        draw2 = exTra[Math.floor(Math.random() * exTra.length)];
      }
    }
  }

  if (!draw1 || !draw2) {
  const shuffleBasedIdx = Math.floor(Math.random() * reversePiece.length);
   draw1 = reversePiece[shuffleBasedIdx];

  const leftOver = reversePiece.filter((_, idx) => idx !== shuffleBasedIdx);
  if (leftOver.length === 0) {
    pcShot =false;
    nxtPlayer();
    return;
  }
  const shuffleBasedIdx2 = Math.floor(Math.random() * leftOver.length);
  draw2 = leftOver[shuffleBasedIdx2];
  }
}

  draw1.classList.add('flicked');
    primeDraw = draw1;

  const drw1Idx = draw1.getAttribute('pair');
  pcMedulla[drw1Idx] = draw1.textContent;

    beginTime();

  setTimeout(() => {
    draw2.classList.add('flicked');
    supplemntDraw= draw2;

  const drw2Idx = draw2.getAttribute('pair');
  pcMedulla[drw2Idx] = draw2.textContent;
    
  
  setTimeout(() => {
    diagnosis();

    }, 1500);  
  }, 1500); 
}

function reboot() {
  matchedPairs = [];
  usedMoves = [];
  gamerPoints = [0, 0];
  primeDraw = null;
  supplemntDraw = null;
  inquiry = false;
  allowedTime = 0;
  ogPlayerIdx = 0;
  endGame = false;
  pcShot = false;
  pcMedulla = {};
  viewPlayMode = null

  clearInterval(timeSpell);
  timeSpell = null;

  totalDraw = [];
  for (let match of matchPairedEmojis) {
    totalDraw.push(match[0]);
    totalDraw.push(match[1]);
  }
    totalDraw.sort(() => Math.random() - 0.5);


    displayTimer.textContent = '0';
    phraseDisplay.textContent = '';
    phraseDisplay.style.color = '';
    runInput.textContent = '';
    matches.textContent = 'Matches: 0';
    
    createGame();
    displayViewPlayMode();

    console.log('Match Reboot');
}
const rebootBtn = document.querySelector('#rebootBtn')
if(rebootBtn) {  
  rebootBtn.addEventListener('click', reboot);
}

init();
