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
      goodSoldierArray.push(soldiers[soldierType])
    } else {
      evilSoldierArray.push(soldiers[soldierType])
    }
  });

  sumGoodSoldier = goodSoldierArray.reduce((a, b) => (a + b), 0);
  sumEvilSoldier = evilSoldierArray.reduce((a, b) => (a + b), 0);

  if (sumGoodSoldier < sumEvilSoldier) {
    return "Evil";
  }
  if (sumGoodSoldier > sumEvilSoldier) {
    return "Good";
  }
  return "Tie";
}

// Simpler implementation
// const whoWinsTheWar = (battlefield) =>{
//   const soldiers = buildSoldierObject(battlefield)
//   let sum = 0;
//   Object.keys(soldiers).forEach((soldierType) => {
//     sum = isGood(soldierType) ? sum + soldiers[soldierType] : sum - soldiers[soldierType];
//   });
//   if (sum < 0) {
//     return "Evil"
//   }
//   if (sum > 0) {
//     return "Good"
//   }
//   return "Tie";

// };

//console.log(buildSoldierObject("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk-hai:1"))
console.log(whoWinsTheWar(""))






module.exports = { whoWinsTheWar, buildSoldierObject, isGood };
