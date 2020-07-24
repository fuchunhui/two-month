export default function () {
  console.log('unions and intersections');

  function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
      return Array(padding + 1).join('') + value;
    }
    if (typeof padding === 'string') {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  const str = padLeft('Hello world', 4);
  console.log('union types: ', str);

  interface Bird {
    fly(): void;
    layEggs(): void;
  }
  interface Fish {
    swim(): void;
    layEggs(): void;
  }

  type NetworkLoadingState = {
    state: 'loading';
  }
  type NetworkFailedState = {
    state: 'failed';
    code: number;
  }
  type NetworkSuccessState = {
    state: 'success';
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  }
  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

  function newworkStatus(state: NetworkState): string {
    switch (state.state) {
      case 'loading':
        return 'downloading...';
      case 'failed':
        return `Error ${state.code} downloading`;
      case 'success':
        return `downloaded ${state.response.title} - ${state.response.summary}`;
    }
  }
  const net: NetworkLoadingState = {
    state: 'loading'
  };
  console.log('Discriminating unions: ', newworkStatus(net));

  interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  interface ArtworksData {
    antworks: { title: string }[];
  }
  interface ArtistsData {
    artists: { name: string }[];
  }
  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;

  const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
      console.log(response.error.message);
      return;
    }
    console.log(response.artists);
  };
  const res: ArtistsResponse = {
    artists: [{name: 'a'}, {name: 'b'}],
    success: false,
    error: {
      message: 'hello'
    }
  };
  const art: ArtworksResponse = {
    antworks: [{title: 'a'}, {title: 'b'}],
    success: false,
    error: {
      message: 'hello'
    }
  };
  console.log(handleArtistsResponse(res), {...art});

  class Person {
    constructor(public name: string) {
      console.log('constructor: ', name);
    }
  }
  const tes = new Person('123');
  console.log({...tes});
  interface Loggable {
    log (name: string): void;
  }
  class ConsoleLogger implements Loggable {
    log(name: string) {
      console.log(`Hello, is ${name}`);
    }
  }

  function extend<First extends {}, Second extends {}>(
    first: First,
    second: Second
  ): First & Second {
    const result: Partial<First & Second> = {};
    for (const prop in first) {
      if (Object.prototype.hasOwnProperty.call(first, prop)) {
        (result as First)[prop] = first[prop];
      }
    }
    for (const prop in second) {
      if (Object.prototype.hasOwnProperty.call(second, prop)) {
        (result as Second)[prop] = second[prop];
      }
    }
    return result as First & Second;
  }
  const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
  console.log({...jim});
  jim.log(jim.name);
};
