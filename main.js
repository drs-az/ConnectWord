const levels = [
  {
    groups: [
      {category: 'Jazz Instruments', words: ["saxophone", "double bass", "trumpet"]},
      {category: 'Types of Sculptures', words: ["bust", "relief", "statue"]},
      {category: 'Famous Cathedrals', words: ["notre dame", "sagrada familia", "westminster abbey"]},
      {category: 'Orchestra Sections', words: ["strings", "brass", "percussion"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Ballets', words: ["swan lake", "giselle", "the nutcracker"]},
      {category: 'Opera Terms', words: ["aria", "libretto", "recitative"]},
      {category: 'Art Movements', words: ["cubism", "dadaism", "surrealism"]},
      {category: 'Photography Genres', words: ["portrait", "landscape", "macro"]}
    ]
  },
  {
    groups: [
      {category: 'Film Genres', words: ["thriller", "romance", "documentary"]},
      {category: 'Cinematography Terms', words: ["pan", "zoom", "dolly"]},
      {category: 'Famous Directors', words: ["spielberg", "kubrick", "nolan"]},
      {category: 'Movie Awards', words: ["oscar", "bafta", "cannes"]}
    ]
  },
  {
    groups: [
      {category: 'Screenwriting Terms', words: ["scene", "dialogue", "slug line"]},
      {category: 'Literary Genres', words: ["drama", "satire", "tragedy"]},
      {category: 'Poetry Forms', words: ["haiku", "sonnet", "villanelle"]},
      {category: 'Famous Book Series', words: ["dune", "outlander", "earthsea"]}
    ]
  },
  {
    groups: [
      {category: 'Fantasy Tropes', words: ["chosen one", "magical artifact", "prophecy"]},
      {category: 'Science Fiction Themes', words: ["time travel", "dystopia", "cyborg"]},
      {category: 'Character Archetypes', words: ["mentor", "trickster", "hero"]},
      {category: 'Fictional Governments', words: ["panem", "gilead", "the federation"]}
    ]
  },
  {
    groups: [
      {category: 'Fantasy Creatures', words: ["gryphon", "basilisk", "kelpie"]},
      {category: 'Magic Systems', words: ["elemental", "rune-based", "blood magic"]},
      {category: 'Swords in Fiction', words: ["excalibur", "sting", "longclaw"]},
      {category: 'Fantasy Races', words: ["elf", "orc", "dwarf"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Languages', words: ["klingon", "dothraki", "elvish"]},
      {category: 'Fictional Schools', words: ["hogwarts", "camp half-blood", "scholomance"]},
      {category: 'Book Awards', words: ["pulitzer", "man booker", "hugo"]},
      {category: 'Fictional Kingdoms', words: ["ravka", "prythian", "illea"]}
    ]
  },
  {
    groups: [
      {category: 'Dark Academia Aesthetics', words: ["tweed", "candlelight", "latin"]},
      {category: 'Types of Magic Users', words: ["witch", "sorcerer", "warlock"]},
      {category: 'Famous Witches', words: ["morgana", "circe", "baba yaga"]},
      {category: 'Witchcraft Tools', words: ["wand", "athame", "cauldron"]}
    ]
  },
  {
    groups: [
      {category: 'Tarot Cards (Major Arcana)', words: ["the fool", "the lovers", "death"]},
      {category: 'Astrological Signs', words: ["leo", "scorpio", "aquarius"]},
      {category: 'Astrology Houses', words: ["first house", "seventh house", "tenth house"]},
      {category: 'Crystals and Stones', words: ["amethyst", "obsidian", "citrine"]}
    ]
  },
  {
    groups: [
      {category: 'Chakras', words: ["root", "throat", "third eye"]},
      {category: 'Yoga Styles', words: ["hatha", "vinyasa", "kundalini"]},
      {category: 'Meditation Types', words: ["mantra", "loving-kindness", "body scan"]},
      {category: 'Breathing Techniques', words: ["box breathing", "alternate nostril", "4-7-8"]}
    ]
  },
  {
    groups: [
      {category: 'Manifestation Practices', words: ["scripting", "vision board", "affirmations"]},
      {category: 'New Age Concepts', words: ["aura", "akashic records", "third eye"]},
      {category: 'Mythical Love Stories', words: ["orpheus & eurydice", "tristan & isolde", "eros & psyche"]},
      {category: 'Mythological Tricksters', words: ["loki", "maui", "anansi"]}
    ]
  },
  {
    groups: [
      {category: 'Mythical Realms', words: ["asgard", "elysium", "avalon"]},
      {category: 'Greek Heroes', words: ["heracles", "perseus", "achilles"]},
      {category: 'Greek Monsters', words: ["chimera", "hydra", "minotaur"]},
      {category: 'Underworld Figures', words: ["hades", "charon", "cerberus"]}
    ]
  },
  {
    groups: [
      {category: 'Roman Gods', words: ["mars", "venus", "mercury"]},
      {category: 'Norse Deities', words: ["odin", "freyja", "thor"]},
      {category: 'Egyptian Gods', words: ["ra", "isis", "anubis"]},
      {category: 'Celtic Deities', words: ["brigid", "cernunnos", "lugh"]}
    ]
  },
  {
    groups: [
      {category: 'Hindu Deities', words: ["shiva", "lakshmi", "ganesha"]},
      {category: 'Religious Texts', words: ["torah", "quran", "bhagavad gita"]},
      {category: 'Biblical Books', words: ["genesis", "psalms", "revelation"]},
      {category: 'Christian Denominations', words: ["catholic", "orthodox", "protestant"]}
    ]
  },
  {
    groups: [
      {category: 'Pilgrimage Sites', words: ["mecca", "lourdes", "bodh gaya"]},
      {category: 'Sacred Architecture', words: ["pagoda", "cathedral", "mosque"]},
      {category: 'Monastic Orders', words: ["benedictine", "jesuit", "trappist"]},
      {category: 'Spiritual Leaders', words: ["dalai lama", "pope", "imam"]}
    ]
  },
  {
    groups: [
      {category: 'Peace Prizes', words: ["nobel", "ramon magsaysay", "templeton"]},
      {category: 'Human Rights Org', words: ["amnesty", "hrw", "unhcr"]},
      {category: 'Diplomatic Ranks', words: ["ambassador", "consul", "attach\u00e9"]},
      {category: 'International Treaties', words: ["geneva", "kyoto", "paris"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Wars', words: ["clone wars", "the rebellion", "valkyrie uprising"]},
      {category: 'Dystopian Books', words: ["1984", "brave new world", "scythe"]},
      {category: 'Apocalyptic Fiction', words: ["the road", "station eleven", "swan song"]},
      {category: 'Cyberpunk Novels', words: ["neuromancer", "snow crash", "altered carbon"]}
    ]
  },
  {
    groups: [
      {category: 'Classic Sci-Fi', words: ["foundation", "the time machine", "fahrenheit 451"]},
      {category: 'Alternate History Novels', words: ["man in the high castle", "11/22/63", "fatherland"]},
      {category: 'Books with Maps', words: ["lord of the rings", "wings of fire", "red queen"]},
      {category: 'Fictional Maps', words: ["middle-earth", "erilea", "westeros"]}
    ]
  },
  {
    groups: [
      {category: 'Fantasy Weapons', words: ["valyrian steel", "truth-teller", "shardblade"]},
      {category: 'Dragon Types', words: ["wyvern", "drake", "hydra"]},
      {category: 'Fictional Bookstores', words: ["flourish & blotts", "the last bookstore", "mr. penumbra\u2019s"]},
      {category: 'Fictional Royal Families', words: ["velaris court", "house targaryen", "house galathynius"]}
    ]
  },
  {
    groups: [
      {category: 'Romantic Tropes', words: ["enemies to lovers", "second chance", "fake dating"]},
      {category: 'YA Dystopian Titles', words: ["divergent", "matched", "legend"]},
      {category: 'Epic Fantasy Titles', words: ["wheel of time", "stormlight archive", "malazan"]},
      {category: 'BookTok Favorites', words: ["verity", "icebreaker", "a court of thorns and roses"]}
    ]
  },
  {
    groups: [
      {category: 'Contemporary Romance Authors', words: ["emily henry", "colleen hoover", "christina lauren"]},
      {category: 'Historical Romance Authors', words: ["julia quinn", "lisa kleypas", "tessa dare"]},
      {category: 'Romantic Suspense Authors', words: ["karen rose", "jayne ann krentz", "rebecca zanetti"]},
      {category: 'Fantasy Maps by Author', words: ["sarah j maas", "tolkien", "brandon sanderson"]}
    ]
  },
  {
    groups: [
      {category: 'Book Adaptations', words: ["shadow and bone", "throne of glass", "red queen"]},
      {category: 'Dragon Books', words: ["fourth wing", "eragon", "fireborne"]},
      {category: 'Fantasy Schools', words: ["basgiath", "unseen university", "the scholomance"]},
      {category: 'Grumpy-Sunshine Pairings', words: ["rowan & aelin", "aaron & catalina", "xaden & violet"]}
    ]
  },
  {
    groups: [
      {category: 'Fictional Soldiers', words: ["dane", "cassian", "azriel"]},
      {category: 'Fictional Healing Powers', words: ["syphon", "healer\u2019s touch", "elain\u2019s sight"]},
      {category: 'Fictional Spymasters', words: ["rhysand", "azriel", "helion"]},
      {category: 'Magical Animals', words: ["phoenix", "thestral", "nightmare"]}
    ]
  },
  {
    groups: [
      {category: 'Rebellious Heroines', words: ["celaena", "violet", "tess"]},
      {category: 'Fictional Elites', words: ["illegitimate heirs", "royal guards", "heir apparent"]},
      {category: 'Forbidden Love Stories', words: ["juliette & warner", "rhys & feyre", "violet & xaden"]},
      {category: 'Fantasy Trials', words: ["gauntlet", "rite of passage", "trial by combat"]}
    ]
  },
  {
    groups: [
      {category: 'Book Boyfriends', words: ["hunt athalar", "xaden riorson", "rowan whitethorn"]},
      {category: 'Slow Burn Romances', words: ["crescent city", "kingdom of ash", "iron flame"]},
      {category: 'Healer Characters', words: ["elain", "poppy", "nessa"]},
      {category: 'Found Family Themes', words: ["acotar", "six of crows", "crescent city"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Mountains', words: ["everest", "fuji", "kilimanjaro"]},
      {category: 'World Capitals (Europe)', words: ["paris", "rome", "vienna"]},
      {category: 'World Capitals (Asia)', words: ["tokyo", "bangkok", "jakarta"]},
      {category: 'Famous Deserts', words: ["sahara", "gobi", "kalahari"]}
    ]
  },
  {
    groups: [
      {category: 'Tropical Fruits', words: ["mango", "pineapple", "papaya"]},
      {category: 'Citrus Fruits', words: ["orange", "lemon", "lime"]},
      {category: 'Nut Varieties', words: ["almond", "cashew", "pecan"]},
      {category: 'Types of Berries', words: ["blueberry", "strawberry", "raspberry"]}
    ]
  },
  {
    groups: [
      {category: 'Dried Fruits', words: ["apricot", "date", "fig"]},
      {category: 'Famous Bridges', words: ["golden gate", "brooklyn", "tower"]},
      {category: 'UN Languages', words: ["english", "arabic", "russian"]},
      {category: 'Scandinavian Countries', words: ["sweden", "norway", "denmark"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Islands', words: ["bali", "maui", "santorini"]},
      {category: 'Rare Earth Elements', words: ["neodymium", "yttrium", "lanthanum"]},
      {category: 'Alkali Metals', words: ["lithium", "sodium", "potassium"]},
      {category: 'Noble Gases', words: ["helium", "argon", "neon"]}
    ]
  },
  {
    groups: [
      {category: 'Earth Layers', words: ["crust", "mantle", "core"]},
      {category: 'Types of Clouds (Final Set)', words: ["nimbostratus", "cumulonimbus", "altostratus"]},
      {category: 'Types of Stars', words: ["red giant", "white dwarf", "neutron star"]},
      {category: 'Constellations', words: ["orion", "ursa major", "cassiopeia"]}
    ]
  },
  {
    groups: [
      {category: 'Moon Phases', words: ["waxing gibbous", "full moon", "new moon"]},
      {category: 'Famous Astronauts', words: ["armstrong", "ride", "gagarin"]},
      {category: 'Lunar Missions', words: ["apollo 11", "chang\u2019e 5", "luna 2"]},
      {category: 'Famous Space Telescopes', words: ["spitzer", "kepler", "gaia"]}
    ]
  },
  {
    groups: [
      {category: 'Quantum Terms', words: ["qubit", "entanglement", "superposition"]},
      {category: 'Physics Constants', words: ["planck", "gravitational", "speed of light"]},
      {category: 'Thermodynamics Laws', words: ["zeroth", "first", "second"]},
      {category: 'Types of Energy', words: ["kinetic", "potential", "thermal"]}
    ]
  },
  {
    groups: [
      {category: 'Mathematical Proofs', words: ["induction", "contradiction", "contrapositive"]},
      {category: 'Graph Types', words: ["bar", "pie", "scatter"]},
      {category: 'Types of Matrices', words: ["diagonal", "identity", "symmetric"]},
      {category: 'Number Sets', words: ["natural", "real", "irrational"]}
    ]
  },
  {
    groups: [
      {category: 'Algebraic Properties', words: ["commutative", "associative", "distributive"]},
      {category: 'Trigonometric Functions', words: ["sine", "cosine", "tangent"]},
      {category: 'Calculus Terms', words: ["derivative", "integral", "limit"]},
      {category: 'Statistics Terms', words: ["mean", "median", "mode"]}
    ]
  },
  {
    groups: [
      {category: 'Probability Concepts', words: ["event", "sample space", "outcome"]},
      {category: 'Geometric Shapes', words: ["pentagon", "hexagon", "octagon"]},
      {category: 'Famous Theorems', words: ["pythagorean", "fermat\u2019s last", "fundamental of calculus"]},
      {category: 'Financial Documents', words: ["balance sheet", "income statement", "cash flow"]}
    ]
  },
  {
    groups: [
      {category: 'Tax Forms', words: ["w-2", "1040", "1099"]},
      {category: 'Banking Terms', words: ["interest", "principal", "mortgage"]},
      {category: 'Credit Score Factors', words: ["payment history", "utilization", "length of credit"]},
      {category: 'Loan Types', words: ["student", "auto", "personal"]}
    ]
  },
  {
    groups: [
      {category: 'Investment Vehicles', words: ["stocks", "bonds", "mutual funds"]},
      {category: 'Retirement Accounts', words: ["ira", "401k", "roth"]},
      {category: 'Insurance Types', words: ["life", "health", "disability"]},
      {category: 'Real Estate Terms', words: ["escrow", "appraisal", "title"]}
    ]
  },
  {
    groups: [
      {category: 'Construction Equipment', words: ["crane", "bulldozer", "backhoe"]},
      {category: 'Architecture Styles', words: ["gothic", "modernist", "art deco"]},
      {category: 'Kitchen Appliances', words: ["microwave", "blender", "toaster"]},
      {category: 'Kitchen Utensils', words: ["spatula", "whisk", "ladle"]}
    ]
  },
  {
    groups: [
      {category: 'Measurement Tools', words: ["scale", "measuring cup", "thermometer"]},
      {category: 'Cookware Types', words: ["saucepan", "skillet", "stockpot"]},
      {category: 'Baking Ingredients', words: ["flour", "sugar", "yeast"]},
      {category: 'Culinary Herbs', words: ["basil", "thyme", "oregano"]}
    ]
  },
  {
    groups: [
      {category: 'Spice Types', words: ["cumin", "turmeric", "cinnamon"]},
      {category: 'Cooking Methods', words: ["grill", "steam", "roast"]},
      {category: 'Pastry Types', words: ["croissant", "danish", "strudel"]},
      {category: 'Dessert Varieties', words: ["cheesecake", "mousse", "tiramisu"]}
    ]
  },
  {
    groups: [
      {category: 'Wine Varietals', words: ["merlot", "chardonnay", "sauvignon blanc"]},
      {category: 'Cocktail Types', words: ["martini", "mojito", "old fashioned"]},
      {category: 'Coffee Types', words: ["espresso", "latte", "cappuccino"]},
      {category: 'Tea Varieties', words: ["oolong", "green", "black"]}
    ]
  },
  {
    groups: [
      {category: 'Fermented Foods', words: ["kimchi", "sauerkraut", "miso"]},
      {category: 'World Cuisines', words: ["thai", "ethiopian", "peruvian"]},
      {category: 'Food Textures', words: ["crunchy", "creamy", "chewy"]},
      {category: 'Taste Descriptors', words: ["savory", "bitter", "umami"]}
    ]
  },
  {
    groups: [
      {category: 'Food Allergens', words: ["peanut", "shellfish", "gluten"]},
      {category: 'Food Preservation', words: ["canning", "freezing", "drying"]},
      {category: 'Types of Farms', words: ["dairy", "poultry", "orchard"]},
      {category: 'Agricultural Tools', words: ["plow", "hoe", "sickle"]}
    ]
  },
  {
    groups: [
      {category: 'Farm Animals', words: ["goat", "cow", "chicken"]},
      {category: 'Livestock Breeds', words: ["angus", "jersey", "hereford"]},
      {category: 'Plant Parts', words: ["stem", "leaf", "root"]},
      {category: 'Tree Types', words: ["oak", "birch", "maple"]}
    ]
  },
  {
    groups: [
      {category: 'Flowering Plants', words: ["rose", "tulip", "orchid"]},
      {category: 'Weeds', words: ["dandelion", "crabgrass", "kudzu"]},
      {category: 'Insect Types', words: ["beetle", "dragonfly", "mantis"]},
      {category: 'Pollinators', words: ["bee", "butterfly", "hummingbird"]}
    ]
  },
  {
    groups: [
      {category: 'Predatory Birds', words: ["hawk", "falcon", "owl"]},
      {category: 'Nocturnal Animals', words: ["bat", "possum", "hedgehog"]},
      {category: 'Marsupials', words: ["kangaroo", "koala", "wombat"]},
      {category: 'Hoofed Mammals', words: ["zebra", "antelope", "giraffe"]}
    ]
  },
  {
    groups: [
      {category: 'Aquatic Mammals', words: ["dolphin", "manatee", "orca"]},
      {category: 'Carnivorous Plants', words: ["venus flytrap", "pitcher plant", "sundew"]},
      {category: 'Garden Tools', words: ["rake", "shovel", "trowel"]},
      {category: 'Soil Types', words: ["clay", "silt", "loam"]}
    ]
  },
  {
    groups: [
      {category: 'Composting Materials', words: ["leaves", "food scraps", "paper"]},
      {category: 'Climate Adaptations', words: ["camouflage", "hibernation", "migration"]},
      {category: 'Animal Defenses', words: ["quills", "ink", "mimicry"]},
      {category: 'Reproductive Strategies', words: ["oviparous", "viviparous", "asexual"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Naturalists', words: ["darwin", "muir", "goodall"]},
      {category: 'Types of Volcanoes', words: ["shield", "stratovolcano", "cinder cone"]},
      {category: 'Earthquake Terms', words: ["epicenter", "magnitude", "fault"]},
      {category: 'Weather Tools', words: ["anemometer", "hygrometer", "barometer"]}
    ]
  },
  {
    groups: [
      {category: 'Severe Weather Events', words: ["tornado", "blizzard", "hurricane"]},
      {category: 'Natural Disasters', words: ["tsunami", "earthquake", "wildfire"]},
      {category: 'Ocean Zones', words: ["epipelagic", "mesopelagic", "bathypelagic"]},
      {category: 'Coral Reef Species', words: ["anemone", "clownfish", "parrotfish"]}
    ]
  },
  {
    groups: [
      {category: 'Medieval Armor Parts', words: ["helmet", "gauntlet", "greaves"]},
      {category: 'Types of Archery Equipment', words: ["bow", "quiver", "arrow"]},
      {category: 'Famous Explorers (Sea)', words: ["columbus", "da gama", "hudson"]},
      {category: 'Desert Landforms', words: ["dune", "wadi", "erg"]}
    ]
  },
  {
    groups: [
      {category: 'Renaissance Artists', words: ["leonardo", "raphael", "donatello"]},
      {category: 'Board Game Pieces', words: ["pawn", "rook", "bishop"]},
      {category: 'Puzzle Types (Logic)', words: ["nonogram", "kakuro", "kenken"]},
      {category: 'Musical Instruments (Percussion)', words: ["tambourine", "marimba", "timpani"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Libraries', words: ["library of congress", "british library", "vatican library"]},
      {category: 'River Features', words: ["delta", "meander", "tributary"]},
      {category: 'Parts of a Castle', words: ["keep", "moat", "drawbridge"]},
      {category: 'Medieval Events', words: ["black death", "crusades", "magna carta"]}
    ]
  },
  {
    groups: [
      {category: 'Historical Revolutions', words: ["french", "american", "russian"]},
      {category: 'Historical Periods', words: ["bronze age", "middle ages", "industrial revolution"]},
      {category: 'Famous Prisons', words: ["alcatraz", "sing sing", "pentonville"]},
      {category: 'Types of Transportation Tickets', words: ["boarding pass", "train ticket", "metro card"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Painting Styles', words: ["realism", "abstract", "impressionism"]},
      {category: 'Types of Government', words: ["democracy", "monarchy", "oligarchy"]},
      {category: 'Political Ideologies', words: ["liberalism", "conservatism", "anarchism"]},
      {category: 'Types of Voting Systems', words: ["plurality", "runoff", "ranked choice"]}
    ]
  },
  {
    groups: [
      {category: 'Social Media Actions', words: ["like", "share", "comment"]},
      {category: 'Internet Safety Terms', words: ["phishing", "malware", "firewall"]},
      {category: 'Animal Habitats', words: ["savanna", "wetland", "tundra"]},
      {category: 'Animal Diet Types', words: ["herbivore", "carnivore", "omnivore"]}
    ]
  },
  {
    groups: [
      {category: 'Biomes', words: ["desert", "taiga", "rainforest"]},
      {category: 'Reptiles', words: ["iguana", "python", "alligator"]},
      {category: 'Amphibians', words: ["frog", "salamander", "newt"]},
      {category: 'Types of Lizards', words: ["gecko", "komodo", "monitor"]}
    ]
  },
  {
    groups: [
      {category: 'Space Phenomena', words: ["black hole", "supernova", "wormhole"]},
      {category: 'Types of Fiction', words: ["magical realism", "science fiction", "historical"]},
      {category: 'Mobile Phone Brands', words: ["samsung", "xiaomi", "oneplus"]},
      {category: 'Currency Symbols', words: ["$", "\u20ac", "\u00a5"]}
    ]
  },
  {
    groups: [
      {category: 'Medical Specialists', words: ["dermatologist", "neurologist", "oncologist"]},
      {category: 'Hospital Departments', words: ["radiology", "emergency", "pediatrics"]},
      {category: 'Pharmaceuticals', words: ["ibuprofen", "acetaminophen", "penicillin"]},
      {category: 'Medical Tests', words: ["MRI", "CT scan", "x-ray"]}
    ]
  },
  {
    groups: [
      {category: 'Disabilities', words: ["autism", "dyslexia", "cerebral palsy"]},
      {category: 'Types of Therapy', words: ["cognitive", "behavioral", "humanistic"]},
      {category: 'Mindfulness Practices', words: ["meditation", "breathing", "body scan"]},
      {category: 'Psychoanalytic Terms', words: ["ego", "id", "superego"]}
    ]
  },
  {
    groups: [
      {category: 'Astronomical Units', words: ["light year", "parsec", "AU"]},
      {category: 'Galaxy Types', words: ["spiral", "elliptical", "irregular"]},
      {category: 'Climate Types', words: ["tropical", "arid", "continental"]},
      {category: 'Famous Thinkers', words: ["descartes", "hegel", "wittgenstein"]}
    ]
  },
  {
    groups: [
      {category: 'Religious Symbols', words: ["cross", "crescent", "om"]},
      {category: 'Translation Services', words: ["deepl", "google translate", "bing translator"]},
      {category: 'Cryptographic Algorithms', words: ["aes", "rsa", "sha-256"]},
      {category: 'Security Tools', words: ["vpn", "2fa", "antivirus"]}
    ]
  },
  {
    groups: [
      {category: 'WiFi Terminology', words: ["ssid", "router", "bandwidth"]},
      {category: 'Job Boards', words: ["indeed", "glassdoor", "monster"]},
      {category: 'Employee Benefits', words: ["401k", "health insurance", "pto"]},
      {category: 'Business Documents', words: ["invoice", "contract", "nda"]}
    ]
  },
  {
    groups: [
      {category: 'Legal Agreements', words: ["lease", "license", "settlement"]},
      {category: 'Government Agencies', words: ["epa", "usda", "faa"]},
      {category: 'Space Missions (Modern)', words: ["artemis", "dragon", "starship"]},
      {category: 'Airline Alliances', words: ["skyteam", "oneworld", "star alliance"]}
    ]
  },
  {
    groups: [
      {category: 'Keyboard Shortcuts', words: ["ctrl+c", "alt+tab", "cmd+z"]},
      {category: 'Common Web Domains', words: [".com", ".org", ".net"]},
      {category: 'Productivity Methods', words: ["pomodoro", "kanban", "gtd"]},
      {category: 'Time Zones', words: ["est", "pst", "gmt"]}
    ]
  },
  {
    groups: [
      {category: 'Public Speaking Terms', words: ["pitch", "tone", "body language"]},
      {category: 'Conflict Resolution Styles', words: ["competing", "avoiding", "collaborating"]},
      {category: 'Entrepreneur Types', words: ["innovator", "hustler", "visionary"]},
      {category: 'Startup Roles', words: ["founder", "cto", "cmo"]}
    ]
  },
  {
    groups: [
      {category: 'HR Terms', words: ["onboarding", "feedback", "performance review"]},
      {category: 'Customer Support Tools', words: ["zendesk", "intercom", "freshdesk"]},
      {category: 'Brand Metrics', words: ["reach", "engagement", "conversion"]},
      {category: 'Marketing Channels', words: ["email", "social media", "search"]}
    ]
  },
  {
    groups: [
      {category: 'SEO Elements', words: ["meta description", "keywords", "backlinks"]},
      {category: 'Ecommerce Platforms', words: ["shopify", "woocommerce", "bigcommerce"]},
      {category: 'Online Payment Tools', words: ["stripe", "paypal", "square"]},
      {category: 'Retail Store Types', words: ["boutique", "supermarket", "department"]}
    ]
  },
  {
    groups: [
      {category: 'Supply Chain Stages', words: ["procurement", "manufacturing", "distribution"]},
      {category: 'Energy Sources', words: ["solar", "nuclear", "wind"]},
      {category: 'Environmental Policies', words: ["paris agreement", "green new deal", "kyoto protocol"]},
      {category: 'Nonprofit Roles', words: ["executive director", "fundraiser", "volunteer coordinator"]}
    ]
  },
  {
    groups: [
      {category: 'Donation Types', words: ["one-time", "recurring", "matched"]},
      {category: 'Volunteering Activities', words: ["mentoring", "clean-up", "teaching"]},
      {category: 'Grant Types', words: ["federal", "foundation", "corporate"]},
      {category: 'Journal Article Types', words: ["review", "case study", "meta-analysis"]}
    ]
  },
  {
    groups: [
      {category: 'Citation Styles', words: ["apa", "mla", "chicago"]},
      {category: 'Research Methods', words: ["quantitative", "qualitative", "mixed"]},
      {category: 'Survey Tools', words: ["surveymonkey", "google forms", "typeform"]},
      {category: 'User Experience Metrics', words: ["nps", "csat", "retention"]}
    ]
  },
  {
    groups: [
      {category: 'Usability Testing Methods', words: ["a/b test", "heatmap", "interview"]},
      {category: 'Design Principles', words: ["contrast", "alignment", "proximity"]},
      {category: 'Typography Terms', words: ["serif", "kerning", "leading"]},
      {category: 'Color Models', words: ["rgb", "cmyk", "hsl"]}
    ]
  },
  {
    groups: [
      {category: 'Image Formats', words: ["png", "jpeg", "svg"]},
      {category: 'File Compression Formats', words: ["zip", "rar", "7z"]},
      {category: 'Digital Drawing Tools', words: ["procreate", "krita", "clip studio"]},
      {category: 'Animation Studios', words: ["pixar", "ghibli", "illumination"]}
    ]
  },
  {
    groups: [
      {category: 'Streaming Video Codecs', words: ["h264", "vp9", "av1"]},
      {category: 'Famous Symphonies', words: ["beethoven 5", "mozart 40", "dvorak 9"]},
      {category: 'Ocean Currents', words: ["gulf stream", "kuroshio", "antarctic circumpolar"]},
      {category: 'Micronutrients', words: ["zinc", "magnesium", "iron"]}
    ]
  },
  {
    groups: [
      {category: 'Essential Amino Acids', words: ["lysine", "leucine", "valine"]},
      {category: 'Fitness Trackers', words: ["fitbit", "garmin", "whoop"]},
      {category: 'Protein Types', words: ["whey", "casein", "soy"]},
      {category: 'Types of Dances', words: ["salsa", "ballet", "tango"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Paint', words: ["acrylic", "oil", "watercolor"]},
      {category: 'Famous Cathedrals', words: ["notre dame", "st paul\u2019s", "sagrada familia"]},
      {category: 'Space Agencies', words: ["nasa", "esa", "roscosmos"]},
      {category: 'Famous Marches', words: ["million man", "women\u2019s", "salt"]}
    ]
  },
  {
    groups: [
      {category: 'Deep Sea Creatures', words: ["anglerfish", "giant squid", "gulper eel"]},
      {category: 'Famous Ice Cream Brands', words: ["ben & jerry\u2019s", "haagen-dazs", "breyers"]},
      {category: 'Ice Cream Flavors', words: ["mint chip", "cookies and cream", "butter pecan"]},
      {category: 'Computer Languages (Non-Programming)', words: ["html", "css", "sql"]}
    ]
  },
  {
    groups: [
      {category: 'Digital Audio Formats', words: ["mp3", "wav", "flac"]},
      {category: 'Musical Tempos', words: ["allegro", "adagio", "presto"]},
      {category: 'Classical Philosophers', words: ["plato", "aristotle", "confucius"]},
      {category: 'Common Phobias', words: ["arachnophobia", "agoraphobia", "acrophobia"]}
    ]
  },
  {
    groups: [
      {category: 'Scientific Instruments', words: ["telescope", "microscope", "barometer"]},
      {category: 'Types of Cheese (Extra)', words: ["gouda", "blue", "provolone"]},
      {category: 'Jewish Foods', words: ["latke", "matzo", "gefilte"]},
      {category: 'Christian Holidays', words: ["pentecost", "epiphany", "advent"]}
    ]
  },
  {
    groups: [
      {category: 'Islamic Pillars', words: ["shahada", "salah", "zakat"]},
      {category: 'Hindu Deities', words: ["vishnu", "shiva", "lakshmi"]},
      {category: 'Buddhist Concepts', words: ["karma", "nirvana", "dharma"]},
      {category: 'Famous Lakes', words: ["victoria", "superior", "baikal"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Currency (Historic)', words: ["drachma", "franc", "peso"]},
      {category: 'Video Editing Software', words: ["premiere", "final cut", "resolve"]},
      {category: 'Cameras', words: ["canon", "nikon", "sony"]},
      {category: 'Types of Roads', words: ["highway", "alley", "boulevard"]}
    ]
  },
  {
    groups: [
      {category: 'Sleep Stages', words: ["REM", "light", "deep"]},
      {category: 'Classic Rock Bands', words: ["queen", "zeppelin", "pink floyd"]},
      {category: 'Space Terms', words: ["orbit", "asteroid", "comet"]},
      {category: 'Urban Features', words: ["plaza", "skyscraper", "subway"]}
    ]
  },
  {
    groups: [
      {category: 'Public Transportation', words: ["bus", "tram", "ferry"]},
      {category: 'Email Services', words: ["gmail", "yahoo", "outlook"]},
      {category: 'Art Periods', words: ["baroque", "rococo", "neoclassical"]},
      {category: 'Famous Fountains', words: ["trevi", "bellagio", "buckingham"]}
    ]
  },
  {
    groups: [
      {category: 'Boarding School Books', words: ["harry potter", "nevermoor", "vampire academy"]},
      {category: 'Teen Dramas', words: ["riverdale", "gossip girl", "euphoria"]},
      {category: 'YA Fantasy Heroines', words: ["katniss", "celaena", "alina"]},
      {category: 'YA Dystopian Worlds', words: ["panem", "divergent factions", "scorch trials"]}
    ]
  },
  {
    groups: [
      {category: 'Vampire Lore Terms', words: ["stake", "garlic", "immortal"]},
      {category: 'Witchcraft Tools', words: ["cauldron", "broomstick", "crystal ball"]},
      {category: 'Mythical Realms', words: ["olympus", "asgard", "underworld"]},
      {category: 'Hero’s Journey Stages', words: ["call to adventure", "ordeal", "return"]}
    ]
  },
  {
    groups: [
      {category: 'Author Tools', words: ["typewriter", "notebook", "dictation"]},
      {category: 'Writers’ Genres', words: ["fiction", "nonfiction", "poetry"]},
      {category: 'Book Formats', words: ["hardcover", "paperback", "audiobook"]},
      {category: 'Books of the Bible', words: ["genesis", "exodus", "leviticus"]}
    ]
  },
  {
    groups: [
      {category: 'Classic Poets', words: ["frost", "shakespeare", "poe"]},
      {category: 'Movie Genres', words: ["action", "comedy", "horror"]},
      {category: 'Film Editing Terms', words: ["cut", "transition", "montage"]},
      {category: 'Cinematography Gear', words: ["crane", "dolly", "steadicam"]}
    ]
  },
  {
    groups: [
      {category: 'Theatre Roles', words: ["director", "actor", "stage manager"]},
      {category: 'Play Genres', words: ["tragedy", "farce", "drama"]},
      {category: 'Famous Film Studios', words: ["warner bros", "paramount", "universal"]},
      {category: 'Streaming Services', words: ["netflix", "hulu", "prime"]}
    ]
  },
  {
    groups: [
      {category: 'Character Archetypes', words: ["hero", "mentor", "trickster"]},
      {category: 'Famous Quotes', words: ["to be or not to be", "veni vidi vici", "i have a dream"]},
      {category: 'Presidential Speeches', words: ["gettysburg", "inaugural", "farewell"]},
      {category: 'Genres of Journalism', words: ["investigative", "op-ed", "features"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Journalists', words: ["woodward", "cronkit", "sawyer"]},
      {category: 'Social Reformers', words: ["mlk", "gandhi", "malala"]},
      {category: 'Landmark US Laws', words: ["civil rights act", "voting rights act", "clean air act"]},
      {category: 'Famous Court Cases', words: ["plessy v ferguson", "citizens united", "gideon v wainwright"]}
    ]
  },
  {
    groups: [
      {category: 'Federal Agencies', words: ["fbi", "cia", "irs"]},
      {category: 'Naval Vessels', words: ["destroyer", "submarine", "aircraft carrier"]},
      {category: 'Air Force Jets', words: ["f-16", "f-22", "b-2"]},
      {category: 'Military Branches', words: ["army", "navy", "marines"]}
    ]
  },
  {
    groups: [
      {category: 'Weapons of War', words: ["rifle", "tank", "grenade"]},
      {category: 'Famous Battles', words: ["normandy", "gettysburg", "waterloo"]},
      {category: 'War Memorials', words: ["vietnam wall", "arlington", "iwo jima"]},
      {category: 'US Landmarks', words: ["liberty bell", "mt rushmore", "golden gate"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Scientists', words: ["curie", "einstein", "darwin"]},
      {category: 'Units of Measurement', words: ["inch", "liter", "gram"]},
      {category: 'Scientific Laws', words: ["newton\u2019s 1st", "ohm\u2019s law", "boyle\u2019s law"]},
      {category: 'Chemical Compounds', words: ["h2o", "co2", "nacl"]}
    ]
  },
  {
    groups: [
      {category: 'Academic Titles', words: ["bachelor", "master", "doctor"]},
      {category: 'College Majors', words: ["psychology", "engineering", "history"]},
      {category: 'Dorm Room Items', words: ["microwave", "mini fridge", "bedding"]},
      {category: 'Exam Types', words: ["oral", "written", "practical"]}
    ]
  },
  {
    groups: [
      {category: 'Study Tools', words: ["flashcards", "notes", "highlighter"]},
      {category: 'Classroom Items', words: ["chalkboard", "desk", "projector"]},
      {category: 'School Personnel', words: ["principal", "counselor", "janitor"]},
      {category: 'Grade Levels', words: ["freshman", "sophomore", "junior"]}
    ]
  },
  {
    groups: [
      {category: 'Online Learning Platforms', words: ["coursera", "udemy", "edx"]},
      {category: 'Business Buzzwords', words: ["synergy", "leverage", "pivot"]},
      {category: 'Workplace Roles', words: ["manager", "intern", "executive"]},
      {category: 'Interview Questions', words: ["strengths", "weaknesses", "goals"]}
    ]
  },
  {
    groups: [
      {category: 'Resume Sections', words: ["experience", "education", "skills"]},
      {category: 'Meeting Types', words: ["standup", "retrospective", "planning"]},
      {category: 'Corporate Departments', words: ["marketing", "finance", "hr"]},
      {category: 'Productivity Tools', words: ["trello", "notion", "slack"]}
    ]
  },
  {
    groups: [
      {category: 'Common Passwords', words: ["123456", "password", "qwerty"]},
      {category: 'Tech Giants', words: ["apple", "google", "microsoft"]},
      {category: 'Startup Terms', words: ["pitch", "unicorn", "burn rate"]},
      {category: 'VC Firms', words: ["a16z", "sequoia", "benchmark"]}
    ]
  },
  {
    groups: [
      {category: 'Stock Terms', words: ["ipo", "dividend", "split"]},
      {category: 'Cryptography Terms', words: ["encryption", "hash", "key"]},
      {category: 'Networking Terms', words: ["router", "firewall", "switch"]},
      {category: 'Mobile Apps', words: ["instagram", "whatsapp", "snapchat"]}
    ]
  },
  {
    groups: [
      {category: 'Internet Slang', words: ["brb", "imo", "tbh"]},
      {category: 'News Outlets', words: ["cnn", "bbc", "reuters"]},
      {category: 'Banned Substances in Sports', words: ["steroids", "epo", "hgh"]},
      {category: 'Puzzle Magazines', words: ["games world", "puzzler", "logic lovers"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Bridges', words: ["brooklyn", "golden gate", "tower"]},
      {category: 'Weather Instruments', words: ["barometer", "anemometer", "hygrometer"]},
      {category: 'Firefighting Equipment', words: ["hose", "ladder", "extinguisher"]},
      {category: 'Types of Clouds', words: ["nimbus", "cumulonimbus", "altostratus"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Fish', words: ["salmon", "trout", "halibut"]},
      {category: 'Ocean Currents', words: ["gulf stream", "kuroshio", "canary current"]},
      {category: 'Types of Volcanoes', words: ["shield", "composite", "cinder cone"]},
      {category: 'Mountain Ranges', words: ["andes", "alps", "himalayas"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Forests', words: ["tropical", "temperate", "boreal"]},
      {category: 'Environmental Movements', words: ["greenpeace", "extinction rebellion", "earth first"]},
      {category: 'Recycling Symbols', words: ["plastics", "glass", "paper"]},
      {category: 'Famous Sculptures', words: ["david", "venus de milo", "thinker"]}
    ]
  },
  {
    groups: [
      {category: 'Modern Art Movements', words: ["dada", "minimalism", "pop art"]},
      {category: 'Opera Composers', words: ["verdi", "puccini", "wagner"]},
      {category: 'Banned Books', words: ["1984", "catcher in the rye", "lolita"]},
      {category: 'Art Museums', words: ["louvre", "moma", "uffizi"]}
    ]
  },
  {
    groups: [
      {category: 'Literary Movements', words: ["romanticism", "modernism", "realism"]},
      {category: 'Classic Children’s Books', words: ["charlotte\u2019s web", "matilda", "peter pan"]},
      {category: 'Famous Ballets', words: ["swan lake", "nutcracker", "giselle"]},
      {category: 'Types of Knots', words: ["bowline", "clove hitch", "square knot"]}
    ]
  },
  {
    groups: [
      {category: 'Orchestral Sections', words: ["strings", "brass", "woodwinds"]},
      {category: 'Types of Hats', words: ["panama", "trilby", "bucket"]},
      {category: 'Water Sports', words: ["kayaking", "surfing", "paddleboarding"]},
      {category: 'Punctuation Marks', words: ["comma", "semicolon", "ellipsis"]}
    ]
  },
  {
    groups: [
      {category: 'Famous Astronauts', words: ["armstrong", "gagarin", "ride"]},
      {category: 'Types of Dogs', words: ["husky", "pomeranian", "rottweiler"]},
      {category: 'Types of Bears', words: ["grizzly", "polar", "panda"]},
      {category: 'Famous Explorers', words: ["magellan", "cook", "lewis"]}
    ]
  },
  {
    groups: [
      {category: 'Desert Plants', words: ["cactus", "sagebrush", "yucca"]},
      {category: 'Famous Castles', words: ["neuschwanstein", "windsor", "bodiam"]},
      {category: 'Types of Horses', words: ["arabian", "mustang", "clydesdale"]},
      {category: 'Tree Leaves', words: ["maple", "birch", "elm"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Eggs', words: ["quail", "ostrich", "duck"]},
      {category: 'Fire Elements', words: ["spark", "ember", "flame"]},
      {category: 'Famous Diaries', words: ["anne frank", "samuel pepys", "zlata"]},
      {category: 'Fictional Islands', words: ["neverland", "narnia", "laputa"]}
    ]
  },
  {
    groups: [
      {category: 'Language Families', words: ["romance", "germanic", "slavic"]},
      {category: 'Types of Beans', words: ["black", "kidney", "lima"]},
      {category: 'Architectural Eras', words: ["renaissance", "gothic", "modern"]},
      {category: 'Types of Lakes', words: ["crater", "glacial", "oxbow"]}
    ]
  },
  {
    groups: [
      {category: 'Aquatic Mammals', words: ["manatee", "narwhal", "orca"]},
      {category: 'Gem Shapes', words: ["round", "princess", "emerald cut"]},
      {category: 'Space Missions', words: ["apollo 11", "voyager 1", "curiosity"]},
      {category: 'Science Fields', words: ["chemistry", "biology", "astronomy"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Charts', words: ["bar", "pie", "line"]},
      {category: 'Dessert Sauces', words: ["caramel", "chocolate", "strawberry"]},
      {category: 'Famous Universities', words: ["harvard", "oxford", "stanford"]},
      {category: 'Country Flags', words: ["canada", "japan", "switzerland"]}
    ]
  },
  {
    groups: [
      {category: 'Social Classes', words: ["aristocracy", "bourgeoisie", "proletariat"]},
      {category: 'Intelligences (Gardner)', words: ["linguistic", "kinesthetic", "musical"]},
      {category: 'Types of Metal', words: ["iron", "copper", "aluminum"]},
      {category: 'Units of Energy', words: ["joule", "calorie", "kilowatt-hour"]}
    ]
  },
  {
    groups: [
      {category: 'Computer Brands', words: ["dell", "hp", "lenovo"]},
      {category: '3D Shapes', words: ["cube", "sphere", "cylinder"]},
      {category: 'Kitchen Appliances', words: ["oven", "microwave", "blender"]},
      {category: 'Woodwind Instruments', words: ["flute", "clarinet", "oboe"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Shoes', words: ["boots", "heels", "flip-flops"]},
      {category: 'Mythical Locations', words: ["elysium", "valhalla", "atlantis"]},
      {category: 'Famous Ships', words: ["titanic", "mayflower", "bismarck"]},
      {category: 'Types of Tissues', words: ["muscle", "epithelial", "connective"]}
    ]
  },
  {
    groups: [
      {category: 'Musical Notation Symbols', words: ["clef", "rest", "sharp"]},
      {category: 'Economic Systems', words: ["capitalism", "socialism", "communism"]},
      {category: 'Mental Health Conditions', words: ["anxiety", "depression", "bipolar"]},
      {category: 'Parts of a Cell', words: ["nucleus", "mitochondria", "ribosome"]}
    ]
  },
  {
    groups: [
      {category: 'Human Senses', words: ["sight", "hearing", "touch"]},
      {category: 'Card Games', words: ["poker", "hearts", "solitaire"]},
      {category: 'Types of Sandwiches', words: ["club", "blt", "reuben"]},
      {category: 'Soft Drinks', words: ["pepsi", "dr pepper", "mountain dew"]}
    ]
  },
  {
    groups: [
      {category: 'Units of Speed', words: ["mph", "kph", "knots"]},
      {category: 'Solar Phenomena', words: ["sunspot", "solar flare", "corona"]},
      {category: 'Famous Volcanoes', words: ["etna", "vesuvius", "fujiyama"]},
      {category: 'Famous Painters (Modern)', words: ["pollock", "kandinsky", "hopper"]}
    ]
  },
  {
    groups: [
      {category: 'Languages of India', words: ["hindi", "tamil", "bengali"]},
      {category: 'Types of Bridges (Structural)', words: ["beam", "truss", "suspension"]},
      {category: 'Types of Engines', words: ["diesel", "electric", "hybrid"]},
      {category: 'Types of Trains', words: ["bullet", "freight", "maglev"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Fire', words: ["grease", "electrical", "wildfire"]},
      {category: 'Famous Journals', words: ["nature", "science", "cell"]},
      {category: 'Online Platforms', words: ["reddit", "linkedin", "quora"]},
      {category: 'Internet Protocols', words: ["http", "ftp", "smtp"]}
    ]
  },
  {
    groups: [
      {category: 'Cloud Storage Services', words: ["dropbox", "google drive", "onedrive"]},
      {category: 'Cryptocurrencies', words: ["bitcoin", "ethereum", "dogecoin"]},
      {category: 'Blockchain Terms', words: ["ledger", "wallet", "mining"]},
      {category: 'Math Symbols', words: ["pi", "sigma", "theta"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Waves', words: ["sound", "light", "radio"]},
      {category: 'Anatomical Directions', words: ["anterior", "posterior", "lateral"]},
      {category: 'Famous Philosophers', words: ["socrates", "kant", "nietzsche"]},
      {category: 'Forms of Poetry', words: ["elegy", "epic", "free verse"]}
    ]
  },
  {
    groups: [
      {category: 'Muscle Groups', words: ["biceps", "quadriceps", "deltoid"]},
      {category: 'Types of Clouds (Extra)', words: ["cirrus", "stratus", "altocumulus"]},
      {category: 'Space Telescopes', words: ["hubble", "webb", "chandra"]},
      {category: 'Airport Codes', words: ["lax", "jfk", "ord"]}
    ]
  },
  {
    groups: [
      {category: 'Programming Paradigms', words: ["object-oriented", "functional", "procedural"]},
      {category: 'Logic Gates', words: ["and", "or", "xor"]},
      {category: 'Famous Hackers', words: ["kevin mitnick", "gary mckinnon", "adrian lamo"]},
      {category: 'World Mythologies', words: ["norse", "egyptian", "aztec"]}
    ]
  },
  {
    groups: [
      {category: 'Spoken Accents', words: ["southern", "cockney", "australian"]},
      {category: 'Puzzle Types', words: ["crossword", "sudoku", "jigsaw"]},
      {category: 'Computer File Types', words: ["exe", "mp3", "html"]},
      {category: 'Tea Varieties', words: ["oolong", "chamomile", "earl grey"]}
    ]
  },
  {
    groups: [
      {category: 'Tropical Fruits', words: ["mango", "papaya", "guava"]},
      {category: 'Musical Intervals', words: ["third", "fifth", "octave"]},
      {category: 'Types of Bread', words: ["baguette", "sourdough", "ciabatta"]},
      {category: 'Parts of a Flower', words: ["petal", "stamen", "pistil"]}
    ]
  },
  {
    groups: [
      {category: 'Units of Mass', words: ["gram", "kilogram", "tonne"]},
      {category: 'Construction Tools', words: ["hammer", "chisel", "wrench"]},
      {category: 'Desert Animals', words: ["camel", "meerkat", "jerboa"]},
      {category: 'Underwater Equipment', words: ["snorkel", "scuba", "flippers"]}
    ]
  },
  {
    groups: [
      {category: 'Solar System Moons', words: ["ganymede", "phobos", "callisto"]},
      {category: 'Hiking Gear', words: ["compass", "backpack", "canteen"]},
      {category: 'Math Theorems', words: ["pythagorean", "fermat", "euclid"]},
      {category: 'Dog Commands', words: ["sit", "stay", "heel"]}
    ]
  },
  {
    groups: [
      {category: 'Yoga Styles', words: ["vinyasa", "hatha", "ashtanga"]},
      {category: 'Herbs', words: ["basil", "oregano", "thyme"]},
      {category: 'Medieval Weapons', words: ["mace", "halberd", "flail"]},
      {category: 'Writing Instruments', words: ["pen", "pencil", "marker"]}
    ]
  },
  {
    groups: [
      {category: 'Modes of Transport', words: ["bicycle", "subway", "tram"]},
      {category: 'Classical Dances', words: ["waltz", "minuet", "gavotte"]},
      {category: 'Farm Animals', words: ["cow", "sheep", "goat"]},
      {category: 'Spices', words: ["cumin", "turmeric", "clove"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Butterflies', words: ["swallowtail", "monarch", "viceroy"]},
      {category: 'Occupational Tools', words: ["stethoscope", "trowel", "palette"]},
      {category: 'US States', words: ["arizona", "maine", "ohio"]},
      {category: 'Fabrics', words: ["linen", "denim", "velvet"]}
    ]
  },
  {
    groups: [
      {category: 'Nuts', words: ["almond", "pecan", "cashew"]},
      {category: 'Camping Essentials', words: ["matches", "canteen", "map"]},
      {category: 'Fantasy Weapons', words: ["staff", "wand", "crossbow"]},
      {category: 'Cooking Verbs', words: ["boil", "saute", "bake"]}
    ]
  },
  {
    groups: [
      {category: 'Time Periods', words: ["renaissance", "baroque", "victorian"]},
      {category: 'Communication Methods', words: ["email", "fax", "telegram"]},
      {category: 'Movie Awards', words: ["oscar", "bafta", "palme"]},
      {category: 'Jewish Holidays', words: ["rosh hashanah", "yom kippur", "purim"]}
    ]
  },
  {
    groups: [
      {category: 'Shoes', words: ["loafers", "sneakers", "sandals"]},
      {category: 'Hats', words: ["fedora", "beanie", "beret"]},
      {category: 'Tools for Painting', words: ["brush", "roller", "spatula"]},
      {category: 'Medieval Professions', words: ["blacksmith", "scribe", "bard"]}
    ]
  },
  {
    groups: [
      {category: 'Children’s Games', words: ["hopscotch", "tag", "hide and seek"]},
      {category: 'Magic Spells', words: ["levitate", "illuminate", "disarm"]},
      {category: 'Fictional Wizards', words: ["gandalf", "merlin", "howl"]},
      {category: 'Caves and Formations', words: ["stalactite", "stalagmite", "column"]}
    ]
  },
  {
    groups: [
      {category: 'Bridge Types', words: ["suspension", "arch", "cantilever"]},
      {category: 'Diving Animals', words: ["penguin", "seal", "cormorant"]},
      {category: 'Synonyms for Brave', words: ["valiant", "courageous", "heroic"]},
      {category: 'Synonyms for Smart', words: ["clever", "bright", "sharp"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for Big', words: ["large", "huge", "massive"]},
      {category: 'Synonyms for Cold', words: ["chilly", "frigid", "icy"]},
      {category: 'Synonyms for Run', words: ["sprint", "dash", "jog"]},
      {category: 'Synonyms for Talk', words: ["chat", "converse", "speak"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for Eat', words: ["devour", "munch", "nibble"]},
      {category: 'Synonyms for Sleep', words: ["doze", "nap", "slumber"]},
      {category: 'Synonyms for Love', words: ["adore", "cherish", "treasure"]},
      {category: 'Synonyms for Work', words: ["labor", "toil", "operate"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for Win', words: ["triumph", "prevail", "succeed"]},
      {category: 'Synonyms for Laugh', words: ["giggle", "chuckle", "snicker"]},
      {category: 'Synonyms for Angry', words: ["mad", "furious", "irate"]},
      {category: 'Synonyms for Happy', words: ["gleeful", "jovial", "cheerful"]}
    ]
  },
  {
    groups: [
      {category: 'Synonyms for Tired', words: ["weary", "exhausted", "drained"]},
      {category: 'Synonyms for Sad', words: ["mournful", "gloomy", "depressed"]},
      {category: 'Types of Laws', words: ["civil", "criminal", "constitutional"]},
      {category: 'Legal Professionals', words: ["judge", "paralegal", "barrister"]}
    ]
  },
  {
    groups: [
      {category: 'Courtroom Terms', words: ["verdict", "testimony", "hearing"]},
      {category: 'Law School Courses', words: ["torts", "contracts", "property"]},
      {category: 'Constitution Articles', words: ["supremacy", "commerce", "amendment"]},
      {category: 'Judicial Branch Terms', words: ["dissent", "majority", "appeal"]}
    ]
  },
  {
    groups: [
      {category: 'Types of Courts', words: ["trial", "appellate", "supreme"]},
      {category: 'Types of Evidence', words: ["hearsay", "testimony", "document"]},
      {category: 'Legal Doctrines', words: ["precedent", "stare decisis", "mens rea"]},
      {category: 'Legal Motions', words: ["dismiss", "summary judgment", "continuance"]}
    ]
  },
  {
    groups: [
      {category: 'Trial Participants', words: ["plaintiff", "defendant", "witness"]},
      {category: 'Types of Crime', words: ["theft", "assault", "arson"]},
      {category: 'Punishments', words: ["fine", "probation", "incarceration"]},
      {category: 'Law Enforcement Roles', words: ["sheriff", "marshal", "constable"]}
    ]
  },
  {
    groups: [
      {category: 'Police Tools', words: ["baton", "handcuffs", "radar"]},
      {category: 'Prison Terms', words: ["warden", "inmate", "solitary"]},
      {category: 'Prison Break Films', words: ["escape plan", "the rock", "papillon"]},
      {category: 'Detective Tropes', words: ["gumshoe", "stakeout", "whodunit"]}
    ]
  },
  {
    groups: [
      {category: 'Evidence Types', words: ["DNA", "fingerprint", "footprint"]},
      {category: 'Famous Trials', words: ["nuremberg", "scopes", "oj simpson"]},
      {category: 'Courtroom Dramas', words: ["the verdict", "a few good men", "marshall"]},
      {category: 'Legal TV Shows', words: ["suits", "law and order", "the practice"]}
    ]
  },
  {
    groups: [
      {category: 'USSC Cases', words: ["brown v board", "roe v wade", "miranda v arizona"]},
      {category: 'Law School Exams', words: ["issue spotter", "multiple choice", "essay"]},
      {category: 'Law Review Topics', words: ["constitutional", "tax", "environmental"]},
      {category: 'Bar Exam Topics', words: ["evidence", "ethics", "procedure"]}
    ]
  },
  {
    groups: [
      {category: 'Judicial Garments', words: ["black robe", "lace robe", "silk robe"]},
      {category: 'Law Firm Types', words: ["boutique", "biglaw", "solo"]},
      {category: 'Types of Petitions', words: ["writ", "motion", "appeal"]},
      {category: 'Legal Writing Terms', words: ["brief", "memo", "outline"]}
    ]
  },
  {
    groups: [
      {category: 'Civ Pro Rules', words: ["rule 12", "rule 26", "rule 56"]},
      {category: 'Contracts Terms', words: ["offer", "acceptance", "consideration"]},
      {category: 'Real Property Terms', words: ["easement", "leasehold", "reversion"]},
      {category: 'Torts Concepts', words: ["negligence", "battery", "duty"]}
    ]
  },
  {
    groups: [
      {category: 'Criminal Defenses', words: ["insanity", "self-defense", "duress"]},
      {category: 'Business Entities', words: ["LLC", "partnership", "corporation"]},
      {category: 'Intellectual Property', words: ["copyright", "trademark", "patent"]},
      {category: 'International Law', words: ["treaty", "custom", "convention"]}
    ]
  },
  {
    groups: [
      {category: 'Environmental Law', words: ["EPA", "clean air act", "NEPA"]},
      {category: 'Legal Ethics', words: ["conflict", "confidentiality", "zeal"]},
      {category: 'Law School Roles', words: ["dean", "adjunct", "professor"]},
      {category: 'Genres of Nonfiction', words: ["memoir", "biography", "essay"]}
    ]
  },
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
    if (btn.classList.contains('hinted')) {
      btn.classList.remove('hinted');
    }
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
  for (const btn of grid.querySelectorAll('.selected, .hinted')) {
    btn.classList.remove('selected');
    btn.classList.remove('hinted');
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
  visibleGroups = allGroups.slice(0, 7);
  currentGroupIndex = 7;
  document.getElementById('next-level').style.display = 'none';
  document.getElementById('hint-button').addEventListener('click', useHint);
  score = 0;
  updateScore();
  showMessage('');
  renderBoard();
}

function useHint() {
  if (selected.length === 0) return;
  const grid = document.getElementById('word-grid');
  grid.querySelectorAll('.hinted').forEach(b => b.classList.remove('hinted'));

  for (const group of visibleGroups) {
    if (selected.every(w => group.words.includes(w)) && selected.length < group.words.length) {
      const nextWord = group.words.find(w => !selected.includes(w));
      const btn = Array.from(grid.children).find(b => b.textContent === nextWord);
      if (btn && !btn.classList.contains('selected')) {
        btn.classList.add('hinted');
        score--;
        updateScore();
        showMessage('Hint used: -1 point');
      }
      break;
    }
  }
}

window.addEventListener('DOMContentLoaded', init);
