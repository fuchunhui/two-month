// import Vue from 'vue'

// declare module 'vue/types/vue' {
//     interface vue {
//         mesg: string
//     }
//     interface VueConstructor {
//         $myGlobal: string
//     }
// }

// declare module 'vue/types/options' {
//     interface ComponentOptions<V extends Vue> {
//         myOption?: string
//     }
// }
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
declare function getSmallPet(): Fish | Bird;

declare function f1(arg: {
  a: number;
  b: number;
}): void;

declare function fmath<T extends boolean>(x: T): T extends true ? string : number;
