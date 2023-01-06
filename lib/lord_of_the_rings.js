const isGood = (string) => {
  const goodSoldiers = ["Hobbits", "Elves", "Dwarves", "Eagles"]
  const evilSoldiers = ["Orcs", "Wargs", "Goblins", "Uruk-hai and Trolls"]
  return goodSoldiers.includes(string)
};
console.log(isGood("Orcs"))






// module.exports = { whoWinsTheWar, buildSoldierObject, isGood };
