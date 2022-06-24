const fillers = {
    Tony: ["ynoT", "Tonietta", "Tony", "Brother of Tony", "Sister of Tony", "$Tony and $Tony", "$Tony, $Tony, and $Tony", "Brother of Tony", "Sister of Tony"],
    transcended: ["The One Tony", "Tony who remains", "The Almighty Tony", "The most powerful Tony of all"],
    town: ["Tony-by-the-sea", "Tonacity", "Ariamas", "Rotsworth", "Glendale", "Glowhoo"],
    townfolk: ["dastardly", "spooky", "gigantic", "hidden", "clumsy", "half-hearted", "mysterious", "unpredictable", "malicious"],
    weapon: ["double bladed Tony", "sword of the slayen Tony", "book about Tony", "cape of Tony", "crest fallen shield of Tony", "Tony's number one weakness"],
    lootpool: ["coins", "chalices of Tony's blood", "Tony's bones", "Tony's iconic hand", "Exp Points", "The Heart of Tony", "maybe a princess?"],
    foes: ["Evil Tony's", "Ex-Tony's", "Sea-Tony's", "Sky-Tony's", "mountain Tony's", "Grimlins", "Pepa pigs", "Evil $Tony", "Agents of the Tony Brotherhood"],
    amount: ["a plethora", "way to many to count", "an insane", "a good amount", "an unknown", "many"],
    late: ["if you are too late", "you fail to get their in time", "are slowed or stopped", "do not succeed in your journey"],
    
  };
  
  const template = `$Tony, you have been tasked to journey through the mountains to take out $transcended!
  
  There is a place called $town over the mountain, where the $townfolk will stop at nothing to help their One Tony transcend. The pass is crawling with $foes and is up to you to get through them and stop the ritual.

  Take this $weapon to help yourself fight through the mountain pass and destroy the One Tony once and for all. It is said that you will be rewarded with $lootpool for your troubles.
  
  It is unknown if and when the ritual will be completed, but $late, then $amount of Powerful Tony's will be released accross the lands. This would mark the begging of a bigger adventure...`;
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;

    let grammar = tracery.createGrammar(spellbook);
    console.log(grammar.flatten('#origin#'))
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
