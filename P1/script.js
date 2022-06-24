const fillers = {
    Tony: ["ynoT", "Tonietta", "Tony", "Brother of Tony", "Sister of Tony", "$Tony and $Tony", "$Tony, $Tony, and $Tony", "Brother of Tony", "Sister of Tony"],
    pre: ["Ton", "Bre", "Man", "Trot", "Glen", "Glo"],
    post: ["y", "i", "-by-the-sea" ,"dale", "ora", "amas", "acity"],
    people: ["dastardly", "spooky", "gigantic", "hidden", "clumsy", "half-hearted", "mysterious", "unpredictable", "malicious"],
    item: ["double bladed Tony", "sword of the slayen Tony", "book about Tony", "cape of Tony", "crest fallen shield of Tony", "Tony's number one weakness"],
    num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
    looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    loots: ["coins", "chalices of Tony's blood", "Tony's bones", "Tony's iconic hand", "Exp Points", "The Heart of Tony", "maybe a princess?"],
    baddies: ["Evil Tony's", "Ex-Tony's", "Sea-Tony's", "Sky-Tony's", "mountain Tony's", "Grimlins", "Pepa pigs", "evil $Tony", "agents of the Tony brotherhood"],
    message: ["call", "txt", "post", "decree", "shoutz", "tweets", "choiche", "hearkens", "harkening", "harkenening", "harkenenening", "...wait, no! Come back", "Watermelon"],
    
  };
  
  /*const template = `$Tony, heed my $message!
  
  I have just come from $pre$post where the $people folk are in desperate need. Their town has been overrun by $baddies. You must venture forth at once, taking my $item, and help them.
  
  It is told that the one who can rescue them will be awarded with $num $looty $loots. Surely this must tempt one such as yourself!
  `;
  */
  const template = `$Tony, pay regard to my $message!
  
  There is a place called $pre$post over the mountain, where the $people will stop at nothing to help their One Tony transcend. The road is crawling with $baddies and is up to you to get through them and stop the ritual.

  Take this $item to help yourself fight through the mountain pass and destroy the One Tony once and for all. It is said that you will be rewarded with $num $looty $loots for your troubles`;
  
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
