export default function interfaces () {
  function printLabel (labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
  const myObj = {
    size: 10,
    label: 'Size 10 Object'
  };
  printLabel(myObj);

  interface LabeledValue {label: string}
  function printLabel2 (labeledObj: LabeledValue) {
    console.log('printLabel2: ', labeledObj.label);
  }
  printLabel2(myObj);

  const d: Date = new Date();
  console.log(d.toDateString());
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; // eslint-disable-line
  }
  function createSquare (config: SquareConfig): SquareConfig {
    const newSquare = {
      color: 'white',
      area: 100
    };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = Math.pow(config.width, 2);
    }
    return newSquare;
  }
  const mySquare = createSquare({
    color: 'black'
  });
  console.log('optional properties: ', { ...mySquare });
  const testSquare = createSquare({
    width: 1000,
    opacity: 0.5
  } as SquareConfig);
  console.log('testSquare: ', { ...testSquare });
  const propSquare = createSquare({
    // width: 10,
    size: 100
  });
  console.log('propSquare: ', { ...propSquare });

  // variables use const whereas properties use readonly
  interface Point {
    readonly x: number;
    y: number;
  }
  const point: Point = {
    x: 10,
    y: 20
  };
  point.y = 100;
  console.log('readonly properties: ', {...point});

  let a: number[] = [1, 2, 3, 4];
  const ro: ReadonlyArray<number> = a;
  console.log('ro: ', { ...ro });
  a = ro as number[];
};
