<template>
  <div :id="id" :class="className" v-html="val"></div>
</template>
<script>
import config from './config';

export default {
  name: 'VueXeditor',
  data() {
    return {
      val: this.value,
      editor: null,
    };
  },
  props: {
    value: String,
    height: {
      type: Number,
      default: 200,
    },
    className: {
      type: [Object, String],
      default: 'xe',
    },
    config: Object,
    id: {
      type: String,
      default: 'xe',
    },
    change: {
      type: Function,
      default: () => {},
    },
    cdnjs: {
      type: String,
      default: 'https://unpkg.com/xeditor/dist/xeditor.min.js',
    },
  },
  mounted() {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.src = this.cdnjs;
    head.appendChild(script);
    script.onload = () => this.afterLoadScript();
  },
  methods: {
    afterLoadScript() {
      /* eslint-disable new-cap */
      this.editor = new window.xEditor(`#${this.id}`);
      this.editor.config(this.config || config);
      this.editor.create();
      this.editor.text.$text.on('input', (evt) => {
        const value = evt.target.innerHTML;
        this.$emit('input', value);
        this.$emit('change', value);
        this.change(value);
      });
    },
  },
};
</script>
