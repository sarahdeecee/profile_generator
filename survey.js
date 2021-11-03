const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) > `, (name) => {
  console.log(`So your name is ${name}? Awesome!`);
  rl.question(`What's an activity you like doing? > `, (activity) => {
    console.log(`Oh, ${activity} sounds fun!`);
    rl.question(`What do you listen to while doing that? > `, (listen) => {
      console.log(`I've never heard of ${listen} before.`);
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) > `, (meal) => {
        console.log(`I like dinner, myself.`);
        rl.question(`What's your favourite thing to eat for that meal? > `, (food) => {
          console.log(`Sounds tasty!`);
          rl.question(`Which sport is your absolute favourite? > `, (sport) => {
          console.log(`You must be good at ${sport}!`);
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! > `, (superpower) => {
              console.log(`Wow, that's amazing!`);
              rl.close();
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
            });
          });
        });
      });
    });
  });
});