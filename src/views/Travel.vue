<template>
  <div class="travel">
    <home />
    <about />
    <div class="count-group" @click="add">
      {{ `${text}: ${count}` }}
    </div>
    <div class="store-group" @click="storeAdd">
      {{ storeCount }}
    </div>
    {{ book }}
  </div>
</template>

<script lang="ts">
import Home from '@/components/road/Home.vue';
import About from '@/components/road/About.vue';
import {ref, defineComponent, PropType} from 'vue';
import {useStore} from 'vuex';

interface Book {
  title: string;
  author: string;
  year: number;
  capacity?: number;
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: false,
      default: 'hh'
    },
    notise: {
      type: String,
      default: ''
    },
    callback: {
      type: Function as PropType<() => void>,
      default: () => {}
    },
    car: {
      type: Object as PropType<Book>,
      default: () => {
        return {
          title: 'two-month',
          author: 'me',
          year: 2020
        };
      }
    },
    bike: {
      type: Object as PropType<Book>,
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    },
    truck: {
      type: Object as PropType<Book>,
      default(this: void) {
        return {
          title: 'Function Expression'
        };
      },
      validator(this: void, book: Book) {
        return !!book.title;
      }
    }
  },
  components: {
    Home,
    About
  },
  emits: {
    addbook(payload: {bookName: string}) {
      return payload.bookName.length > 0;
    },
    'non-declared-event': null
  },
  data() {
    return {
      dataCount: 100,
      book: {
        title: 'two-month',
        author: 'me',
        year: 2020
      } as Book
    };
  },  
  setup(props: any) { // eslint-disable-line
    const text = '点我，来吧';
    const count = ref(0);
    const store = useStore();
    // const storeCount = ref(store.getters.getCount); // 竟然不是响应式，Store的使用，需要跟进。
    console.log('vuex: ', store, store.getters.getCount);
    const add: () => void = () => {
      count.value++;
      console.log('message: ', props.msg);
    };
    const storeAdd = () => {
      store.dispatch('addCount', {num: 100});
    };
    return {
      text,
      count,
      add,
      // storeCount,
      storeAdd
    };
  },
  computed: {
    storeCount(): number {
      return this.$store.getters.getCount; // TODO 放在setup里面的不生效问题
    },
    greeting(): string {
      return this.book.title + '!';
    },
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase();
      },
      set(newValue: string) {
        this.book.title = newValue.toUpperCase();
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('addbook', {
        bookName: 'options api'
      });
      this.$emit('non-declared-event');
    }
  },
  mounted() {
    const result = this.dataCount;
    console.log('result: ', result, this.greeting, this.greetingUppercased);
  }
});
</script>

<style lang="less">
.travel {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .count-group {
    p {
      background: #339966;
      cursor: pointer;
    }
  }
}
</style>
