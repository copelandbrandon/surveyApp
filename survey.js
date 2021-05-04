const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerData = {

};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  answerData.answer1 = answer
  console.log(`Thank you for your answer: ${answer}`);
  rl.question('What\'s an activity you like doing? ', (answer1) => {
    answerData.answer2 = answer1
    console.log(`Thank you for your answer: ${answer1}`);
    rl.question('What do you listen to while doing that? ', (answer2) => {
      answerData.answer3 = answer2
      console.log(`Thank you for your answer: ${answer2}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
        answerData.answer4 = answer3
        console.log(`Thank you for your answer: ${answer3}`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
          answerData.answer5 = answer4
          console.log(`Thank you for your answer: ${answer4}`);
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            answerData.answer6 = answer5
            console.log(`Thank you for your answer: ${answer5}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
              answerData.answer7 = answer6
              console.log(`Thank you for your answer: ${answer6}`);
              console.log('Your new BIO:', `Hi! i'm ${answerData.answer1} and I like to ${answerData.answer2} and listen to ${answerData.answer3}. My favorite meal is ${answerData.answer4} because I love ${answerData.answer5} and my favorite sport is ${answerData.answer6}. Lastly my superpower is ${answerData.answer7}`)
              rl.close();
            }) 
          })
        })
      })
    })
  })
});
console.log(answerData)
