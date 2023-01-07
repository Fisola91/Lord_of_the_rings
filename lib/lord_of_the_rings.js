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
  // iterate on the string
  // know the key that belongs to good soldier and bad soldier
  // if it's a good soldier, count t

  // for every good soldier keys get their value

  // const goodSoldiers = ["Hobbits", "Elves", "Dwarves", "Eagles"]
  // const evilSoldiers =["Orcs", "Wargs", "Goblins", "Uruk-hai"]
  // soldierObject = {};
  // battle = battlefield.split(",");
  let goodSoldierArray = [];
  let evilSoldierArray = [];

  Object.keys(buildSoldierObject(battlefield)).forEach((key, index) => {
    if (isGood(key) === true) {
      const goodSoldierKey = buildSoldierObject(battlefield)[key]
      goodSoldierArray.push(goodSoldierKey)
      return goodSoldierArray;
    } else {
      const evilSoldierKey = buildSoldierObject(battlefield)[key]
      evilSoldierArray.push(evilSoldierKey)
      return evilSoldierArray
    }
  });

  // sumGoodSoldier = goodSoldierArray.reduce((a, b) => a + b);
  // sumEvilSoldier = evilSoldierArray.reduce((a, b) => a + b);

  // if

  // console.log(goodSoldierArray);
  // console.log(evilSoldierArray);
  // battlefield.map()

  // let soldierKeys = Object.keys(buildSoldierObject(battlefield))
  // // output => [ 'Hobbits', 'Dwarves', 'Elves', 'Goblins', 'Uruk-hai' ]
  // soldierKeys.forEach((soldier) => {
  //   isGood(soldier)

  // })

  // return buildSoldierObject(battlefield)
  // separate good soldier from evil soldier


}

console.log(whoWinsTheWar("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk-hai:1"))






// module.exports = { whoWinsTheWar, buildSoldierObject, isGood };
