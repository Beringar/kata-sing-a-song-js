"use strict";

const fullSong = require("../src/song.js");

const SECOND_VERSES = [
  {
    verse: "That wriggled and wiggled and tickled inside her",
    makeVerse: function () {
      return `${this.verse}.`;
    },
  },
  {
    verse: "How absurd to swallow a",
    makeVerse: function (animal) {
      return `${this.verse} ${animal}.`;
    },
  },
  {
    verse: "Fancy that to swallow a",
    makeVerse: function (animal) {
      return `${this.verse} ${animal}!`;
    },
  },
  {
    verse: "What a hog, to swallow a",
    makeVerse: function (animal) {
      return `${this.verse} ${animal}!`;
    },
  },
  {
    verse: "I don't know how she swallowed a",
    makeVerse: function (animal) {
      return `${this.verse} ${animal}!`;
    },
  },
];

const initialParagraph = (animal) => {
  return `There was an old lady who swallowed a ${animal}.
I don't know why she swallowed a ${animal} - perhaps she'll die!`;
};

const finalParagraph = (animal) => {
  return `There was an old lady who swallowed a ${animal}...
...She's dead, of course!`;
};

const makeChorus = (previousAnimals) => {
  let verses = "";
  for (let i = previousAnimals.length - 1; i >= 1; i--) {
    verses +=
      "She swallowed the " + previousAnimals[i] + " to catch the " + previousAnimals[i - 1] + (i === 1 ? ";" : ",\n");
  }
  return verses;
};

const intermediateParagraph = (animal, secondVerse, previousAnimals) => {
  const firstVerse = `There was an old lady who swallowed a ${animal};`;
  const lastVerse = `I don't know why she swallowed a ${previousAnimals[0]} - perhaps she'll die!`;
  return `${firstVerse}
${secondVerse}
${makeChorus(previousAnimals)}
${lastVerse}
`;
};

const makeIntermediateParagraphs = (animals) => {
  let verses = "";
  let secondVersesIndex = 0;
  for (let i = 1; i < animals.length - 1; i++, secondVersesIndex++) {
    if (secondVersesIndex === SECOND_VERSES.length) secondVersesIndex = 0;
    const previousAnimals = animals.slice(0, i + 1);
    verses = `${verses}
${intermediateParagraph(animals[i], SECOND_VERSES[secondVersesIndex].makeVerse(animals[i]), previousAnimals)}`;
  }
  return verses;
};

const generateSong = (animals) => {
  if (!animals) return fullSong;
  const beginningOfSong = initialParagraph(animals[0]);
  const intermediateParagraphs = animals.length > 2 ? makeIntermediateParagraphs(animals) : "";
  const endOfSong = finalParagraph(animals.at(-1));

  return `${beginningOfSong}
${intermediateParagraphs}
${endOfSong}`;
};

module.exports = generateSong;
