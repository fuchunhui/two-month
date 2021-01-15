declare module '*.vue' {
    import {defineComponent} from 'vue';
    const component: ReturnType<typeof defineComponent>;
    export default component;
}

// declare module 'vue/types/vue' {
//   import { AxiosInstance } from 'axios'
//   interface Vue {
//     $axios: AxiosInstance,
//     mesg: string
//   }
//   interface VueConstructor {
//     $myGlobal: string
//   }
// }
