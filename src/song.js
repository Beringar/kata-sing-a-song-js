"use strict";

/* Kata Sing-a-Song by Volcanic Internet. November 2022, Monday 21st, 19pm  
Team of devs: Oleguer, Laura y Berenguer */

const animals = ["fly", "spider", "bird", "cat", "dog", "cow", "horse"];
const getSwallowedLine = (firstAnimal, secondAnimal) => `She swallowed the ${firstAnimal} to catch the ${secondAnimal}`;
const iDontKnow = `I don't know why she swallowed a ${animals[0]} - perhaps she'll die!`;
const thereWasAnOldLady = (animal) => `There was an old lady who swallowed a ${animal};`;
const chorus = (n) => {
  let chorusLines = "";
  for (let i = n; i > 0; i--) {
    chorusLines += getSwallowedLine(animals[i], animals[i - 1]) + (i === 1 ? ";" : ",\n");
  }
  return chorusLines;
};

const song = `There was an old lady who swallowed a ${animals[0]}.
${iDontKnow}

${thereWasAnOldLady(animals[1])}
That wriggled and wiggled and tickled inside her.
${chorus(1)}
${iDontKnow}

${thereWasAnOldLady(animals[2])}
How absurd to swallow a ${animals[2]}.
${chorus(2)}
${iDontKnow}

${thereWasAnOldLady(animals[3])}
Fancy that to swallow a ${animals[3]}!
${chorus(3)}
${iDontKnow}

${thereWasAnOldLady(animals[4])}
What a hog, to swallow a ${animals[4]}!
${chorus(4)}
${iDontKnow}

${thereWasAnOldLady(animals[5])}
I don't know how she swallowed a ${animals[5]}!
${chorus(5)}
${iDontKnow}

There was an old lady who swallowed a ${animals[6]}...
...She's dead, of course!`;

// console.log(song);

module.exports = song;
