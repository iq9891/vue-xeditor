<template>
  <div class="em-editor" :class="className">
    <textarea :id="id"></textarea>
  </div>
</template>
<script>
import config from './config';

export default {
  name: 'VueXeditor',
  props: {
    text: String,
    value: String,
    height: {
      type: Number,
      default: 200,
    },
    className: Object,
    config: Object,
    id: {
      type: String,
      default: 'emeditor',
    },
    change: {
      type: Function,
      default: () => {},
    },
    uploadlink: {
      type: String,
      default: 'http://shared-client.inner.evente.cn:30340/upload/upImg',
    },
    cdnjs: {
      type: String,
      default: 'https://cdn.ckeditor.com/4.7.3/standard-all/ckeditor.js',
    },
    cdncss: {
      type: String,
      default: 'https://cdn.ckeditor.com/4.7.3/standard-all/contents.css',
    },
  },
  mounted() {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.src = this.cdnjs;
    head.appendChild(script);
    script.onload = () => {
      this.configEditor();
      this.afterLoadScript();
    };
  },
  methods: {
    configEditor() {
      config.filebrowserUploadUrl = this.uploadlink;
      config.contentsCss.push(this.cdncss);
    },
    afterLoadScript() {
      const editorElement = window.CKEDITOR.document.getById(this.id);
      const editor = window.CKEDITOR.replace(this.id, this.config || config);
      editorElement.setHtml(this.text || this.value || '');
      editor.on('change', (evt) => {
        const value = evt.editor.getData();
        this.$emit('input', value);
        this.$emit('change', value);
        this.change(value);
      });
    },
  },
};
</script>
