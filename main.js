const levels = [
  {
    groups: [
      {category: 'Animals', words: ['lion', 'tiger', 'bear']},
      {category: 'Colors', words: ['red', 'blue', 'green']},
      {category: 'Fruits', words: ['apple', 'banana', 'pear']},
      {category: 'Planets', words: ['mars', 'venus', 'saturn']}
    ]
  },
  {
    groups: [
      {category: 'Shapes', words: ['circle', 'square', 'triangle']},
      {category: 'Seasons', words: ['spring', 'summer', 'winter']},
      {category: 'Instruments', words: ['guitar', 'piano', 'drums']},
      {category: 'Sports', words: ['soccer', 'tennis', 'golf']}
    ]
  }
];

let levelIndex = 0;
let selected = [];
let solvedCategories = new Set();

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderLevel() {
  selected = [];
  solvedCategories.clear();
  const grid = document.getElementById('word-grid');
  grid.innerHTML = '';

  const level = levels[levelIndex];
  const words = level.groups.flatMap(g => g.words);
  shuffle(words);

  for (const word of words) {
    const btn = document.createElement('button');
    btn.className = 'word-btn';
    btn.textContent = word;
    btn.addEventListener('click', () => selectWord(btn));
    grid.appendChild(btn);
  }
  document.getElementById('next-level').style.display = 'none';
}

function selectWord(btn) {
  if (btn.classList.contains('solved')) return;
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
  const level = levels[levelIndex];
  const groupSize = level.groups[0].words.length;
  if (selected.length !== groupSize) return;

  const selectionSet = new Set(selected);
  for (const group of level.groups) {
    if (!solvedCategories.has(group.category) &&
        group.words.every(w => selectionSet.has(w))) {
      markSolved(group.words);
      solvedCategories.add(group.category);
      if (solvedCategories.size === level.groups.length) {
        document.getElementById('next-level').style.display = 'block';
      }
      clearSelection();
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

function markSolved(words) {
  const grid = document.getElementById('word-grid');
  for (const btn of grid.children) {
    if (words.includes(btn.textContent)) {
      btn.classList.remove('selected');
      btn.classList.add('solved');
      btn.disabled = true;
    }
  }
}

function init() {
  document.getElementById('next-level').addEventListener('click', () => {
    levelIndex = (levelIndex + 1) % levels.length;
    renderLevel();
  });
  renderLevel();
}

window.addEventListener('DOMContentLoaded', init);
