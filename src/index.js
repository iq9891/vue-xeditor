import EmCkeditor from './EmCkeditor.vue';

EmCkeditor.install = (Vue) => {
  Vue.component(EmCkeditor.name, EmCkeditor);
};

export default EmCkeditor;
