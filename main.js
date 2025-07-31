const levels = [
  {
    letters: ['C', 'A', 'T'],
    words: ['cat', 'act', 'at']
  },
  {
    letters: ['D', 'O', 'G'],
    words: ['dog', 'god', 'go', 'do']
  },
  {
    letters: ['H', 'A', 'N', 'D'],
    words: ['hand', 'and', 'had', 'dan', 'dna', 'an', 'ad', 'ha']
  }
];

let levelIndex = 0;
let currentWord = '';
let found = new Set();

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function renderLevel() {
  const level = levels[levelIndex];
  found.clear();
  currentWord = '';
  const board = document.getElementById('word-board');
  board.innerHTML = '';
  level.words.forEach(w => {
    const wordDiv = document.createElement('div');
    wordDiv.className = 'word';
    for (let i = 0; i < w.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'letter-slot';
      slot.textContent = '\u00A0';
      wordDiv.appendChild(slot);
    }
    board.appendChild(wordDiv);
  });

  const wheel = document.getElementById('letter-wheel');
  wheel.innerHTML = '';
  level.letters.forEach((letter, idx) => {
    const btn = document.createElement('div');
    btn.className = 'letter-button';
    btn.textContent = letter;
    btn.addEventListener('click', () => {
      currentWord += letter.toLowerCase();
      document.getElementById('current-word').textContent = currentWord;
    });
    wheel.appendChild(btn);
  });
  document.getElementById('current-word').textContent = '';
}

function submitWord() {
  const level = levels[levelIndex];
  if (level.words.includes(currentWord) && !found.has(currentWord)) {
    found.add(currentWord);
    revealWord(currentWord);
    if (found.size === level.words.length) {
      levelIndex = (levelIndex + 1) % levels.length;
      alert('Great job! Moving to next level.');
      renderLevel();
    }
  }
  currentWord = '';
  document.getElementById('current-word').textContent = '';
}

function revealWord(word) {
  const board = document.getElementById('word-board');
  for (const wordDiv of board.children) {
    if (wordDiv.children.length === word.length) {
      const guess = Array.from(wordDiv.children).map(c => c.textContent.toLowerCase()).join('');
      if (!guess.trim()) {
        for (let i = 0; i < word.length; i++) {
          wordDiv.children[i].textContent = word[i];
          wordDiv.children[i].classList.add('found');
        }
        return;
      }
    }
  }
}

function shuffleLetters() {
  const level = levels[levelIndex];
  shuffleArray(level.letters);
  renderLevel();
}

document.getElementById('submit').addEventListener('click', submitWord);
document.getElementById('shuffle').addEventListener('click', shuffleLetters);

renderLevel();
