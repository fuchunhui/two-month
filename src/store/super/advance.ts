export default function () {
  console.log('advance.');

  const pet = getSmallPet();
  console.log(pet);
  pet.layEggs();
  // (pet as Bird).fly();
  // (pet as Fish).swim();

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
};
