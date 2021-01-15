export default function () {
  console.log('custom');

  interface Base1 {
    run: (options: { message?: string }) => void;
  }
  interface Box1 extends Base1 {
    run2(options: { message: string }): void;
  }

  interface Base2 {
    run(options: { message?: string }): void;
  }
  interface Box2 extends Base2 {
    run(options: { message: string }): void;
  }
}
