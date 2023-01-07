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

const whoWinsTheWar = (battlefield) => {
  let goodSoldierArray = [];
  let evilSoldierArray = [];
  const soldiers = buildSoldierObject(battlefield)

  Object.keys(soldiers).forEach((soldierType) => {
    if (isGood(soldierType)) {
      const goodSoldierKey = soldiers[soldierType]
      goodSoldierArray.push(goodSoldierKey)
      return goodSoldierArray;
    } else {
      const evilSoldierKey = soldiers[soldierType]
      evilSoldierArray.push(evilSoldierKey)
      return evilSoldierArray;
    }
  });

  sumGoodSoldier = goodSoldierArray.reduce((a, b) => (a + b), 0);
  sumEvilSoldier = evilSoldierArray.reduce((a, b) => (a + b), 0);

  if (sumGoodSoldier < sumEvilSoldier) {
    return "Evil";
  } else if (sumGoodSoldier > sumEvilSoldier) {
    return "Good";
  } else{
    return "Tie";
  }
}


console.log(buildSoldierObject("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk-hai:1"))
console.log(whoWinsTheWar("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk-hai:1"))






module.exports = { whoWinsTheWar, buildSoldierObject, isGood };
