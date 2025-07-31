const levels = [
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]}
    ]
  },
  {
    groups: [
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]}
    ]
  },
  {
    groups: [
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]},
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Poetry', words: ["haiku", "sonnet", "limerick"]},
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]}
    ]
  },
  {
    groups: [
      {category: 'Elements on the Periodic Table', words: ["oxygen", "carbon", "helium"]},
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]}
    ]
  },
  {
    groups: [
      {category: 'Maas - Courts of Prythian', words: ["nightcourt", "daycourt", "wintercourt"]},
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]}
    ]
  },
  {
    groups: [
      {category: 'Yarros - Riders Quadrant', words: ["violet", "xaden", "tairn"]},
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]}
    ]
  },
  {
    groups: [
      {category: 'Philosophical Movements', words: ["stoicism", "existentialism", "nihilism"]},
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]}
    ]
  },
  {
    groups: [
      {category: 'Sat Vocabulary Words', words: ["aberration", "cacophony", "deleterious"]},
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Kingdoms', words: ["westeros", "eleria", "panem"]},
      {category: 'Synonyms for “Happy”', words: ["joyful", "elated", "content"]},
      {category: 'Norse Mythology', words: ["odin", "thor", "loki"]},
      {category: 'Architectural Styles', words: ["gothic", "baroque", "brutalist"]}
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
