export interface ErrorBase {
  message: string;
}

export default {
  error(message: string): void { // TODO string
    console.error(message);
  }
};
