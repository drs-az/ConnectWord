const levels = [
  {
    groups: [
      {category: 'Fruits', words: ["apple", "banana", "cherry"]},
      {category: 'Vegetables', words: ["carrot", "broccoli", "spinach"]},
      {category: 'Ocean Animals', words: ["dolphin", "whale", "octopus"]},
      {category: 'Insects', words: ["butterfly", "ant", "beetle"]}
    ]
  },
  {
    groups: [
      {category: 'Birds of Prey', words: ["hawk", "eagle", "falcon"]},
      {category: 'African Countries', words: ["nigeria", "kenya", "ghana"]},
      {category: 'European Capitals', words: ["paris", "rome", "berlin"]},
      {category: 'Human Bones', words: ["femur", "tibia", "ulna"]}
    ]
  },
  {
    groups: [
      {category: 'String Instruments', words: ["violin", "cello", "harp"]},
      {category: 'Board Games', words: ["monopoly", "risk", "clue"]},
      {category: 'Greek Gods', words: ["zeus", "apollo", "ares"]},
      {category: 'Famous Mountains', words: ["everest", "denali", "fuji"]}
    ]
  },
  {
    groups: [
      {category: 'Common Allergies', words: ["pollen", "dust", "peanuts"]},
      {category: 'US Presidents', words: ["lincoln", "roosevelt", "jefferson"]},
      {category: 'Fantasy Creatures', words: ["dragon", "griffin", "phoenix"]},
      {category: 'Tree Species', words: ["oak", "maple", "pine"]}
    ]
  },
  {
    groups: [
      {category: 'Units of Length', words: ["inch", "foot", "meter"]},
      {category: 'Types of Rock', words: ["igneous", "sedimentary", "metamorphic"]},
      {category: 'Classical Composers', words: ["mozart", "bach", "beethoven"]},
      {category: 'Nobel Laureates', words: ["camus", "morrison", "hemingway"]}
    ]
  },
  {
    groups: [
      {category: 'Dog Breeds', words: ["beagle", "dalmatian", "boxer"]},
      {category: 'Cat Breeds', words: ["siamese", "persian", "ragdoll"]},
      {category: 'Famous Painters', words: ["picasso", "monet", "dali"]},
      {category: 'Gemstones', words: ["ruby", "sapphire", "emerald"]}
    ]
  },
  {
    groups: [
      {category: 'Chemical Elements', words: ["oxygen", "hydrogen", "carbon"]},
      {category: 'Desserts', words: ["cake", "cookie", "brownie"]},
      {category: 'Cereals', words: ["oats", "wheat", "barley"]},
      {category: 'Programming Languages', words: ["python", "java", "ruby"]}
    ]
  },
  {
    groups: [
      {category: 'Search Engines', words: ["google", "bing", "duckduckgo"]},
      {category: 'Currencies', words: ["euro", "yen", "dollar"]},
      {category: 'Shapes', words: ["circle", "triangle", "square"]},
      {category: 'Colors', words: ["red", "blue", "green"]}
    ]
  },
  {
    groups: [
      {category: 'Poetic Forms', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Branches of Government', words: ["executive", "judicial", "legislative"]},
      {category: 'Famous Wars', words: ["wwi", "wwii", "vietnam"]},
      {category: 'Dance Styles', words: ["ballet", "tango", "salsa"]}
    ]
  },
  {
    groups: [
      {category: 'Internet Browsers', words: ["chrome", "safari", "firefox"]},
      {category: 'School Subjects', words: ["math", "science", "history"]},
      {category: 'Music Genres', words: ["jazz", "rock", "classical"]},
      {category: 'Kitchen Tools', words: ["whisk", "spatula", "grater"]}
    ]
  },
  {
    groups: [
      {category: 'Car Brands', words: ["toyota", "honda", "ford"]},
      {category: 'Planets', words: ["mars", "venus", "jupiter"]},
      {category: 'Famous Rivers', words: ["nile", "amazon", "yangtze"]},
      {category: 'Birds', words: ["sparrow", "owl", "robin"]}
    ]
  },
  {
    groups: [
      {category: 'Flowers', words: ["rose", "tulip", "lily"]},
      {category: 'Programming Concepts', words: ["loop", "array", "function"]},
      {category: 'Mobile OS', words: ["android", "ios", "windows"]},
      {category: 'Types of Pasta', words: ["spaghetti", "penne", "fusilli"]}
    ]
  },
  {
    groups: [
      {category: 'Historical Empires', words: ["roman", "ottoman", "mongol"]},
      {category: 'Astronomy Terms', words: ["nebula", "galaxy", "quasar"]},
      {category: 'Fiction Genres', words: ["fantasy", "thriller", "romance"]},
      {category: 'Languages', words: ["french", "spanish", "german"]}
    ]
  },
  {
    groups: [
      {category: 'SaaS Tools', words: ["slack", "notion", "asana"]},
      {category: 'Moons', words: ["io", "europa", "titan"]},
      {category: 'Sarah J. Maas - Courts', words: ["nightcourt", "daycourt", "autumncourt"]},
      {category: 'Sarah J. Maas - Sisters', words: ["feyre", "nesta", "elain"]}
    ]
  },
  {
    groups: [
      {category: 'Sarah J. Maas - Allies', words: ["rhysand", "cassian", "azriel"]},
      {category: 'Rebecca Yarros - Riders', words: ["violet", "xaden", "liam"]},
      {category: 'Rebecca Yarros - Creatures', words: ["tairn", "andarna", "venin"]},
      {category: 'Olympic Sports', words: ["gymnastics", "fencing", "archery"]}
    ]
  },
  {
    groups: [
      {category: 'Body Organs', words: ["liver", "kidney", "heart"]},
      {category: 'File Formats', words: ["pdf", "docx", "xlsx"]},
      {category: 'Photography Terms', words: ["aperture", "shutter", "iso"]},
      {category: 'Ballet Moves', words: ["pli\u00e9", "jet\u00e9", "arabesque"]}
    ]
  },
  {
    groups: [
      {category: 'Coffee Types', words: ["latte", "espresso", "cappuccino"]},
      {category: 'Countries Starting with B', words: ["brazil", "belgium", "bangladesh"]},
      {category: 'Islands', words: ["madagascar", "iceland", "sri lanka"]},
      {category: 'Fashion Designers', words: ["chanel", "versace", "dior"]}
    ]
  },
  {
    groups: [
      {category: 'Cars with Animals', words: ["mustang", "impala", "cougar"]},
      {category: 'Video Game Consoles', words: ["switch", "xbox", "playstation"]},
      {category: 'Constitutional Rights', words: ["speech", "press", "assembly"]},
      {category: 'Religions', words: ["christianity", "islam", "judaism"]}
    ]
  },
  {
    groups: [
      {category: 'Instruments', words: ["guitar", "piano", "drums"]},
      {category: 'Marvel Heroes', words: ["ironman", "thor", "spiderman"]},
      {category: 'Star Wars Planets', words: ["tatooine", "naboo", "hoth"]},
      {category: 'Fast Food Chains', words: ["mcdonalds", "wendys", "burgerking"]}
    ]
  },
  {
    groups: [
      {category: 'Literary Devices', words: ["metaphor", "simile", "alliteration"]},
      {category: 'Kinds of Weather', words: ["rain", "snow", "fog"]},
      {category: 'Airlines', words: ["delta", "united", "emirates"]},
      {category: 'Holidays', words: ["christmas", "easter", "hanukkah"]}
    ]
  },
  {
    groups: [
      {category: 'Occupations', words: ["teacher", "lawyer", "engineer"]},
      {category: 'Jewelry Items', words: ["ring", "bracelet", "necklace"]},
      {category: 'Emotions', words: ["anger", "joy", "fear"]},
      {category: 'TV Genres', words: ["drama", "comedy", "documentary"]}
    ]
  },
  {
    groups: [
      {category: 'Mountains in US', words: ["whitney", "rainier", "mckinley"]},
      {category: 'Game of Thrones Houses', words: ["stark", "lannister", "targaryen"]},
      {category: 'Pirate Terms', words: ["plank", "booty", "cutlass"]},
      {category: 'Star Constellations', words: ["orion", "ursa", "cassiopeia"]}
    ]
  },
  {
    groups: [
      {category: 'Programming Tools', words: ["git", "docker", "vscode"]},
      {category: 'Dinosaurs', words: ["t-rex", "triceratops", "stegosaurus"]},
      {category: 'Sodas', words: ["coke", "sprite", "fanta"]},
      {category: 'Camping Gear', words: ["tent", "sleeping bag", "lantern"]}
    ]
  },
  {
    groups: [
      {category: 'Winter Sports', words: ["skiing", "snowboarding", "hockey"]},
      {category: 'Social Media', words: ["twitter", "tiktok", "instagram"]},
      {category: 'Sci-Fi Authors', words: ["asimov", "clarke", "heinlein"]},
      {category: 'Fantasy Series', words: ["mistborn", "wheel of time", "stormlight"]}
    ]
  },
  {
    groups: [
      {category: 'Legal Terms', words: ["contract", "negligence", "liability"]},
      {category: 'States of Matter', words: ["solid", "liquid", "gas"]},
      {category: 'Art Supplies', words: ["canvas", "easel", "palette"]},
      {category: 'Camping Food', words: ["beans", "jerky", "granola"]}
    ]
  }
];

let selected = [];
let allGroups = [];
let visibleGroups = [];
let currentGroupIndex = 0;
let score = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderBoard() {
  selected = [];
  const grid = document.getElementById('word-grid');
  grid.innerHTML = '';

  const words = visibleGroups.flatMap(g => g.words);
  shuffle(words);

  for (const word of words) {
    const btn = document.createElement('button');
    btn.className = 'word-btn';
    btn.textContent = word;
    btn.addEventListener('click', () => selectWord(btn));
    grid.appendChild(btn);
  }
  document.getElementById('message').textContent = '';
  document.getElementById('next-level').style.display = 'none';
}

function selectWord(btn) {
  const word = btn.textContent;

  if (btn.classList.contains('selected')) {
    btn.classList.remove('selected');
    selected = selected.filter(w => w !== word);
  } else {
    btn.classList.add('selected');
    selected.push(word);
    checkSelection();
  }
}

function checkSelection() {
  if (visibleGroups.length === 0) return;
  const groupSize = visibleGroups[0].words.length;
  if (selected.length !== groupSize) return;

  const selectionSet = new Set(selected);
  for (let i = 0; i < visibleGroups.length; i++) {
    const group = visibleGroups[i];
    if (group.words.every(w => selectionSet.has(w))) {
      score++;
      updateScore();
      visibleGroups.splice(i, 1);
      if (currentGroupIndex < allGroups.length) {
        visibleGroups.push(allGroups[currentGroupIndex++]);
      }
      clearSelection();
      renderBoard();
      showMessage(`Correct, ${group.category}`);
      return;
    }
  }
  // incorrect selection
  clearSelection();
}

function clearSelection() {
  const grid = document.getElementById('word-grid');
  for (const btn of grid.querySelectorAll('.selected')) {
    btn.classList.remove('selected');
  }
  selected = [];
}

function updateScore() {
  document.getElementById('score').textContent = `Score: ${score}`;
}

function showMessage(msg) {
  document.getElementById('message').textContent = msg;
}

function init() {
  allGroups = levels.flatMap(l => l.groups);
  shuffle(allGroups);
  visibleGroups = allGroups.slice(0, 4);
  currentGroupIndex = 4;
  document.getElementById('next-level').style.display = 'none';
  score = 0;
  updateScore();
  showMessage('');
  renderBoard();
}

window.addEventListener('DOMContentLoaded', init);
