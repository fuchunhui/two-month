// 未测试，参考写法
import Vue, {PropType} from 'vue';

interface ComplexMessage { 
  title: string,
  okMessage: string,
  cancelMessage: string
}

const Component = Vue.extend({
  props: {
    name: String,
    success: { 
      type: String 
    },
    callback: { 
      type: Function as PropType<() => void>
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      required: true,
      validator(message: ComplexMessage) {
        return !!message.title;
      }
    }
  }
});
