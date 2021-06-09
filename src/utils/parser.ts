console.log('personal');

export default {
  parser(value: string[]): void {
    console.log('hello parser...', value.length);
  }
};
