const randomNumber = (minValue, maxValue) =>  Math.ceil(Math.random() * (maxValue - minValue) + minValue);

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
}

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const mageAttack = (attack) => {
  attack = randomNumber(mage.intelligence, (mage.damage * 2));
  console.log(attack);
}

const mageAttributes = () => {
  mage.damage = {
    mana: mage.mana,
    attack: 0,
  }
  if (mage.damage.mana > 15) {
    mage.damage.mana += -15;
    mage.damage.attack = randomNumber(mage.intelligence,(mage.intelligence * 2));
  } else {
    mage.damage.attack = 'sem mana :(';
  }
  return mage.damage;
}

const battleMembers = { mage, warrior, dragon };

warrior.damage =  randomNumber(warrior.strength, (warrior.strength * warrior.weaponDmg));
dragon.damage = randomNumber(14.1, dragon.strength);
mageAttributes();
/* console.log(warrior);
console.log(dragon); */
console.log(mage)
