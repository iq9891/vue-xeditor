import VueXeditor from './VueXeditor.vue';

VueXeditor.install = (Vue) => {
  Vue.component(VueXeditor.name, VueXeditor);
};

export default VueXeditor;
