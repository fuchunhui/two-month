export default function () {
  console.log('advances.');

  interface Fish {
    swim(): void;
  }
  interface Bird {
    fly(): void;
  }

  class Whale implements Fish {
    swim(): void {
      console.log('whale swim');
    }
  }
  class Goose implements Bird {
    fly(): void {
      console.log('goose fly..');
    }
  }
  function getSomeType(type: string): Whale | Goose {
    if (type === '1') {
      return new Whale();
    }
    if (type === '2') {
      return new Goose();
    }
    throw new Error(`Excepted Whale or Goose, get ${type}`);
  }
  const realType = getSomeType('1');
  if ('swim' in realType) {
    realType.swim();
  }
  const flyTyle = getSomeType('2');
  const bt = flyTyle as Bird;
  bt.fly();

  // User-Defined
};
