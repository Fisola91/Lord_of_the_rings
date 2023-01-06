const isGood = (soldierType) => {
  const goodSoldiers = ["Hobbits", "Elves", "Dwarves", "Eagles"]
  return goodSoldiers.includes(soldierType)
}

const buildSoldierObject = (battlefield) => {
  soldierObject = {};
  battle = battlefield.split(",");
  battle.forEach((soldier) => {
    const splitSoldier = soldier.split(":");
    soldierObject[splitSoldier[0]] = Number(splitSoldier[1]);
  });
  return soldierObject;
}

console.log(buildSoldierObject("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk-hai:1"))






// module.exports = { whoWinsTheWar, buildSoldierObject, isGood };
