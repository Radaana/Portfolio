let loader = require ('./modules/preloader');
let webgl = require ('./modules/webgl');
let authBtn = require ('./modules/auth-btn');

let Vue = require ('vue/dist/vue');
var SimpleVueValidation = require('simple-vue-validator');

var Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

loader.init();
webgl.init();

// window.onload= function () {
  // authBtn.init();
// };

const errorMessages = {
  required : "Не заполнено",
  notHuman: "Вход только для людей",
};

Vue.component("auth-form", {
  
  template: "#auth-form",
  props: [''],
  data() {
    return {
      login : '',
      password: '',
      human: false,
      isSure: 0,
    }
  },
  methods: {
      submit: function () {
          // console.log( this.$validate() );
          this.$validate()
            .then(function (success) {
              if (success) {
                console.log('Validation succeeded!');
              }
            });
      }, 
      reset: function() {
        this.validation.reset();
        this.login  = '';
        this.password = '';
        this.human = false;
        this.isSure = 0;
      },
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    login: function(value) {
        return Validator.value(value).required(errorMessages.required);
        },
    password: function(value) {
      return Validator.value(value).required(errorMessages.required);
      },
    human: function (value) {
      return Validator.custom(function () {
          if (!value) return errorMessages.notHuman;
        });
    },
    isSure: function (value) {
      return Validator.custom(function () {
          if (value == "0") return errorMessages.notHuman;
        });
    },      
  } // methods
}); //auth-form

const auth = new Vue({
  data: {
  }
}); // Vue end

auth.$mount("#auth-container");


authBtn.init();