"use strict";

const song = require("../src/song.js");
const generateSong = require("../src/generateSong.js");
const {
  originalFullSong,
  tenAnimalsRhinoFoxMonkeyFishWormHorseCatPigBullLemur,
  fiveAnimalsFlySpiderBirdCatHorse,
  threeAnimalsSheepWhalePig,
  twoAnimalsSheepWhale,
  oneAnimalBear,
} = require("./mock/expectedSong.js");

describe("The song", () => {
  it("is sung", () => {
    expect(song).toEqual(originalFullSong);
  });
});

describe("Given a generateSong function", () => {
  describe("when receives 7 animals ['fly','spider','bird','cat','dog','cow','horse']", () => {
    it("song for these 7 animals is generated", () => {
      const createdSong = generateSong(["fly", "spider", "bird", "cat", "dog", "cow", "horse"]);
      expect(createdSong).toEqual(originalFullSong);
    });
  });

  describe("when receives 5 animals ['fly','spider','bird','cat','horse']", () => {
    it("song for these 5 animals is generated", () => {
      const createdSong = generateSong(["fly", "spider", "bird", "cat", "horse"]);
      expect(createdSong).toEqual(fiveAnimalsFlySpiderBirdCatHorse);
    });
  });

  describe("receives 3 animals ['sheep','whale','pig']", () => {
    it("song for these 3 animals is generated", () => {
      const createdSong = generateSong(["sheep", "whale", "pig"]);
      expect(createdSong).toEqual(threeAnimalsSheepWhalePig);
    });
  });

  describe("when receives 2 animals ['sheep','whale']", () => {
    it("song for these 2 animals is generated", () => {
      const createdSong = generateSong(["sheep", "whale"]);
      expect(createdSong).toEqual(twoAnimalsSheepWhale);
    });
  });

  describe("when receives 1 animal ['bear']", () => {
    it("song for this 1 animal is generated", () => {
      const createdSong = generateSong(["bear"]);
      expect(createdSong).toEqual(oneAnimalBear);
    });
  });

  describe("when receives no arguments", () => {
    it("original full song is generated", () => {
      const createdSong = generateSong();
      expect(createdSong).toEqual(originalFullSong);
    });
  });

  describe("when receives 10 animals ['rhino','fox','monkey','fish','worm','horse','cat','pig','bull','lemur']", () => {
    it("song for these 10 animals is generated", () => {
      const createdSong = generateSong([
        "rhino",
        "fox",
        "monkey",
        "fish",
        "worm",
        "horse",
        "cat",
        "pig",
        "bull",
        "lemur",
      ]);
      expect(createdSong).toEqual(tenAnimalsRhinoFoxMonkeyFishWormHorseCatPigBullLemur);
    });
  });
});
