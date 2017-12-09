import template from './src/main';

export default {
  ...template,
  name: 'alert',
  data() {
    return {
      msg: '提示'
    }
  },
  components: {
    oIcon,
    oBadge,
    oPanel

  },
  created() {

  },
  watch: {

  },
  methods: {
    
  },
  mounted() {
    this.$nextTick(function () {

    })
  }
}

template.install = function (Vue) {
  Vue.component(template.name, template);
};

export default template;
