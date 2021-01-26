export default function (): void {
  console.log('advances.');

  interface Water {
    swim(): void;
  }
  interface Cloud {
    fly(): void;
  }

  class Whale implements Water {
    swim(): void {
      console.log('whale swim');
    }
  }
  class Goose implements Cloud {
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
  // A type guard is some expression that performs a runtime check that guarantees the type in some scope.
  // Using type predicates
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
  // Using the in operator
  function move(pet: Fish | Bird) {
    if ('swim' in pet) {
      return pet.swim();
    }
    return pet.fly();
  }
  const fish: Fish = {
    swim(): void {
      console.log('swim');
    },
    layEggs(): void {
      console.log('hhhh');
    }
  };
  console.log(isFish(fish), move(fish));

  // typeof type guards
  function isNumber(x: any): x is number { // eslint-disable-line
    return typeof x === 'number';
  }
  function isString(x: any): x is string { // eslint-disable-line
    return typeof x === 'string';
  }
  function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
      return Array(padding + 1).join('') + value;
    }
    if (isString(padding)) {
      return padding + value;
    }
    throw new Error(`Expected string or number, got ${padding}`);
  }
  function padRight(value: string, padding: string | number) {
    if (typeof padding === 'number') {
      return Array(padding + 1).join('') + value;
    }
    if (typeof padding === 'string') {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  console.log(padLeft('abc', 100), padRight('xds', 'eslint'));

  // instanceof type guards
  interface Padder {
    getPaddingString(): string;
  }
  class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {
      console.log('SpaceRepeatingPadder constructor.');
    }

    getPaddingString() {
      return Array(this.numSpaces + 1).join('');
    }
  }

  class StringPadder implements Padder {
    constructor(private value: string) {
      console.log('StringPadder constructor.');
    }

    getPaddingString() {
      return this.value;
    }
  }

  function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('100');
  }
  const padder: Padder = getRandomPadder();
  if (padder instanceof SpaceRepeatingPadder) {
    console.log('padder is SpaceRepeatingPadder');
  }
  if (padder instanceof StringPadder) {
    console.log('padder is StringPadder');
  }

  // nullable types
  let exs: string | null | undefined = 'full';
  exs = null;
  exs = undefined;
  console.log(exs, 'exs');
  // optional parameters and properties
  function f(x: number, y?: number) {
    console.log(x + (y || 0));
  }
  f(1, 2);
  f(1);
  f(1, undefined);

  class C {
    a: number;
    b?: number;
    constructor() {
      this.a = 10;
    }
  }
  const c = new C();
  c.a = 12;
  c.b = undefined || 12;
  console.log('Constructor: ', {...c});

  // Type guards and type assertions
  function ff(stringOrNull: string | null): string {
    if (stringOrNull === null) {
      return 'default';
    } else {
      return stringOrNull;
    }
  }
  function fff(stringOrNull: string | null): string {
    return stringOrNull || 'default';
  }
  ff(null);
  fff('abc');
  interface UserAccount {
    id: number;
    email?: string;
  }
  function getUser(id: string): UserAccount | undefined {
    if (id === 'abc') {
      console.log(`${id}--->!`);
    }
    return {} as any;
  }
  const user = getUser('admin');
  console.log('user: ', user&&user.id);

  // Type Aliases
  type Second = number;
  type House = string;
  const color: House = 'red';
  const num: Second = 20;
  console.log('Aliases: ', color, num);

  type Tree<T> = {
    value: T;
    left?: Tree<T>;
    right?: Tree<T>;
  };
  type Container<T> = { value: T };
  const treeContainer: Tree<string> & Container<string> = {
    value: 'abc',
    left: {
      value: 'left'
    }
  };
  console.log('treeContainer: ', treeContainer);

  // Polymorphic this types TODO
  // Index Type
  function small<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => o[n]);
  }
  const origin = {
    a: '1',
    b: 'c',
    c: '23'
  };
  const til = small(origin, ['a', 'c']);
  console.log('Index Type: ', til);

  interface Car {
    manufacturer: string;
    model: string;
    year: number;
  }
  const taxi: Car = {
    manufacturer: 'Toyota',
    model: 'Carma',
    year: 2020
  };
  const mm: string[] = small(taxi, ['model', 'manufacturer']);
  const my = small(taxi, ['year']);
  console.log('index type: ', mm, my);

  function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName];
  }
  const source = {
    key: 'small',
    value: '16px'
  };
  getProperty(source, 'value');
  // Index types and index signatures
  interface Dictionary<T> {
    [key: string]: T;
  }

  const dictionary: Dictionary<boolean> = {
    name: false,
    show: true,
    ready: false,
    loading: true
  };
  console.log('dictionary', dictionary);
  // Mapped types
  interface PersonSubset {
    name?: string;
    age?: number;
  }
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type PersonPartial = Partial<PersonSubset>;
  type ReadonlyPerson = Readonly<PersonSubset>;

  type Keys = 'op1' | 'op2';
  type Flags = {[K in Keys]: boolean};
  type NullablePerson = { [P in keyof PersonSubset]: PersonSubset[P] | null};
  type PartialPerson = { [P in keyof PersonSubset]?: PersonSubset[P] };
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  type Partial1<T> = { [P in keyof T]?: T[P] };
  const flag: Flags = {
    op1: false,
    op2: true
  };
  const noPerson: NullablePerson = {
    name: 'Tomas',
    age: 25
  };
  const partialPerson: PartialPerson = {
    age: 24
  };
  const nullable: Nullable<PersonSubset> = {
    name: null,
    age: 25
  };
  const pp: PersonPartial = {
    name: 'null'
  };
  const readonlyPP: ReadonlyPerson = {
    name: 'Superman'
  };
  const an: number = 123;
  const spa: Partial1<Keys> = 'op2';
  console.log(an, spa, flag, noPerson, partialPerson, nullable, pp, readonlyPP);

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type NewPerson = Proxy<PersonSubset>;
  const sortType: NewPerson = {
    get(): PersonSubset {
      return {
        name: 't'
      };
    },
    set(pos: PersonSubset) {
      console.log(pos);
    }
  };
  console.log('Proxy: ', {...sortType});

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
  };
  type NewProxify = Proxify<PersonSubset>;

  // Conditional Types
  // declare function fmath<T extends boolean>(x: T): T extends true ? string : number;
  function fmath(falg: boolean) {
    // return !falg;
  }
  const x = fmath(Math.random() < 0.5);
  console.log('Conditional Types: ', x);

  type TypeName<T> = T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends undefined
          ? undefined
          : T extends Function
            ? 'function' | never
            : object;
  type TN0 = TypeName<string>;
  type TN1 = TypeName<123>;
  type TN2 = TypeName<true>;
  type TN3 = TypeName<() => void>;
  type TN4 = TypeName<string[]>;
  type TN5 = TypeName<string | (() => void)>;
  type TN6 = TypeName<string | string[] | undefined>;
  type TN7 = TypeName<string[] | number[]>;
  const tn1: TN1 = 222;

  type BoxedValue<T> = { value: T };
  type BoxedArray<T> = { array: T[] };
  type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
  type T1 = Boxed<string>;
  type T2 = Boxed<number[]>;
  type T3 = Boxed<string | number[]>;

  type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
  }[keyof T];
  type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

  type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
  }[keyof T];
  type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

  interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
  }

  type F1 = FunctionPropertyNames<Part>;
  type F2 = NonFunctionPropertyNames<Part>;
  type F3 = FunctionProperties<Part>;
  type F4 = NonFunctionProperties<Part>;

  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
  type Unpacked<T> = T extends (infer U)[]
    ? U
    : T extends (...args: any[]) => infer U
      ? U
      : T extends Promise<infer U>
        ? U
        : T;
  type R0 = Unpacked<string>;
  type R1 = Unpacked<string[]>;
  type R2 = Unpacked<() => string>;
  type R3 = Unpacked<Promise<string>>;
  type R4 = Unpacked<Promise<string>[]>;
  type R5 = Unpacked<R4>;

  type Foo<T> = T extends {
    a: infer U;
    b: infer U;
  } ? U : never;
  type Fo1 = Foo<{
    a: string;
    b: string;
  }>;
  type Fo2 = Foo<{
    a: string;
    b: number;
  }>;

  type Bar<T> = T extends {
    a: (x: infer U) => void;
    b: (y: infer U) => void;
  } ? U : never;
  type B1 = Bar<{
    a: (x: string) => void;
    b: (y: string) => void;
  }>;
  type B2 = Bar<{
    a: (x: string) => void;
    b: (y: number) => void;
  }>;

  type RTE = ReturnType<typeof foor>;
}
