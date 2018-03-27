// let Vue = require ('../../node_modules/vue/dist/vue');
let Vue = require ('vue/dist/vue');
let vuescroll = require ('vue-scroll/dist/vue-scroll');
 
Vue.use(vuescroll)

let ham = require ('./modules/hamburger');

ham.init();

// window.addEventListener

// var scroll;

// window.onscroll = function () {
//     scroll = window.pageYOffset;
//     // console.log(scroll); 
// }

Vue.component('article-list', {
    template: "#article-list",
    props: ['posts'],
    // data() {
    //     return {
    //     }
    //   },
    methods: {
        handleMessage: function (payload) {
            this.$emit('change-id', { changeId: payload })
        }
      }
  });

  Vue.component('article-item', {
    template: "#article-item",
    props: ['post'],
    data() {
        return {
            // id: this.post.id,
            position: {scrollTop: 0, scrollLeft: 0} ,
        }
      },
    // methods: {
        // activate: function () {
        //    let pagey =  window.pageYOffset;
        // if (scroll >200)
        //     console.log("Yay");
          // `this` внутри методов указывает на экземпляр Vue
        //   this.$emit('message', { message: this.id });
          // `event` — нативное событие DOM

        // }
        methods:{
            onScroll:function(e, position){
                this.position = position;
            }
        }
      
  });
  
  Vue.component("names-list", {
    template: "#names-list",
    props: ['posts', 'cid'],
    data() {
      return {
      }
    },
  });
  
  const contents = new Vue({
    data: {
        currentId: 101,
        posts: [
            {
                id: 101,
                title: "Заголовок статьи",
                date: "20 февраля 2018",
                datetime: "2018-01-20",
                text: "Далеко-далеко за словесными горами в стране."
            },
            {
                id: 102,
                title: "Почему именно БЭМ",
                date: "20 февраля 2018",
                datetime: "2018-01-20",
                text: "БЭМ очень удобен для организации кода в CSS стилях. Использование методологии позволяет не думать над тем, как назвать классы, так как в ней имеется уже готовая инструкция к действию. Особенно важно это на самом начальном этапе разработки."
            },
            {
                id: 103,
                title: "Очень длинный заголовок невероятно интересной статьи",
                date: "20 февраля 2018",
                datetime: "2018-01-20",
                text: "Далеко-далеко за словесными горами в стране."
            }
        ]
    }, // data END
    methods: {
        currentIdChange: function (payload) {
          // `this` внутри методов указывает на экземпляр Vue
          this.currentId = payload.changeId.message;
          // `event` — нативное событие DOM

        }
      }
  }); // Vue end
  
  contents.$mount("#contents");
  console.log(contents);