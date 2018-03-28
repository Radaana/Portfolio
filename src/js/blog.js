// let Vue = require ('../../node_modules/vue/dist/vue');
let Vue = require ('vue/dist/vue');

let ham = require ('./modules/hamburger');
let blogBtn = require ('./modules/blog-btn');

ham.init();


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
            id: this.post.id,
        }
      },
    methods: {
        handleScroll: function (event) {
            let pageY =  window.pageYOffset;
            let post = document.getElementById(`${this.id}`);
            let topMargin = window.innerHeight / 6;
            let postRect = post.getBoundingClientRect();
            let postY = postRect.top;
            let change = postY;
            if (change > -10 && change < 50) {
                this.$emit('message', { message: this.id });
            } 
        }
    },
    
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }
      
  });
  
  Vue.component("names-list", {
    template: "#names-list",
    props: ['posts', 'cid'],
    data() {
      return {
 
      }
    },
    methods: {
        handleClick: function (event) {
            let clicked = event.currentTarget.href.slice(-3);
            this.$emit('clicked', { clicked: clicked  });
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
                datetime: "2018-02-20",
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, "
            },
            {
                id: 102,
                title: "Почему именно БЭМ",
                date: "20 февраля 2018",
                datetime: "2018-02-20",
                text: "БЭМ очень удобен для организации кода в CSS стилях. Использование методологии позволяет не думать над тем, как назвать классы, так как в ней имеется уже готовая инструкция к действию. Особенно важно это на самом начальном этапе разработки. БЭМ предлагает удобные инструменты для структуризации кода и четкие правила стилизации (например не использовать для стилизации теги и id)"
            },
            {
                id: 103,
                title: "Как работает position: sticky; ",
                date: "20 февраля 2018",
                datetime: "2018-02-20",
                text: "Элемент с position: sticky; фиксируется в рамках ближайшего родителя, когда расстояние до границы ближайшего прокручиваемого родителя достигает указанного в свойствах top, right, bottom, left значения. при вертикальной прокрутке для элемента имеет смысл указывать только top и bottom. При горизонтальной прокрутке будут работать только свойства left и right. Также имеет значение, чтобы высота или ширина родительского контейнера была больше размера элемента. На то, в каком месте элемент прикрепится и где отцепиться, также влияют свойства padding, margin и transform. Размещение элемента над другими элементами правится с помощью свойства z-index. Значение sticky является относительно новым и не все браузеры его поддерживают, в частности, Internet Explorer, Opera Mini и есть ограничения в последних версиях Chrome"
            },
            {
                id: 104,
                title: "Flexbox или Grid?",
                date: "21 марта 2018",
                datetime: "2018-03-21",
                text: "Flexbox это удобный инструмент для манипулирования блоками, но он предоставляет рычаги полного управления только в одном направлении, Т.К. поперечная ось поворачивается вместе с главной, отдельно повернуть ее нельзя. Grid дает возможности для двумерной расстановки блоков или элементов любым необходимым способом. Grid подходит для разметки макета в целом. Эта система облегчает управление макетом страницы и даже может иметь дело с нестандартным и асимметричным дизайном. Но поддержка этого свойста сейчас пока не так высока, как у Flexbox"
            },
            {
                id: 105,
                title: "HTTP",
                date: "21 марта 2018",
                datetime: "2018-03-21",
                text: "HTTP (англ. HyperText Transfer Protocol — «протокол передачи гипертекста») — протокол прикладного уровня передачи данных (изначально — в виде гипертекстовых документов в формате «HTML», в настоящий момент используется для передачи произвольных данных). Основой HTTP является технология «клиент-сервер». Потребитель (клиент) инициирует соединение и посылают запрос. Поставщик (сервер) ожидает соединение для получения запроса, производит необходимые действия и возвращант обратно сообщение с результатом.  Особенностью протокола HTTP является возможность указать в запросе и ответе способ представления одного и того же ресурса по различным параметрам: формату, кодировке, языку и т. д. (в частности, для этого используется HTTP-заголовок). Именно благодаря возможности указания способа кодирования сообщения, клиент и сервер могут обмениваться двоичными данными, хотя данный протокол является текстовым. HTTP — протокол прикладного уровня; аналогичными ему являются FTP и SMTP. Обмен сообщениями идёт по обыкновенной схеме «запрос-ответ». Для идентификации ресурсов HTTP использует глобальные URI. В отличие от многих других протоколов, HTTP не сохраняет своего состояния. Это означает отсутствие сохранения промежуточного состояния между парами «запрос-ответ». Компоненты, использующие HTTP, могут самостоятельно осуществлять сохранение информации о состоянии, связанной с последними запросами и ответами (например, «куки» на стороне клиента, «сессии» на стороне сервера). Браузер, посылающий запросы, может отслеживать задержки ответов. Сервер может хранить IP-адреса и заголовки запросов последних клиентов. Однако сам протокол не осведомлён о предыдущих запросах и ответах, в нём не предусмотрена внутренняя поддержка состояния, к нему не предъявляются такие требования. Метод HTTP (англ. HTTP Method) — последовательность из любых символов, кроме управляющих и разделителей, указывающая на основную операцию над ресурсом. Обычно метод представляет собой короткое английское слово, записанное заглавными буквами. Обратите внимание, что название метода чувствительно к регистру. Сервер может использовать любые методы, не существует обязательных методов для сервера или клиента. Если сервер не распознал указанный клиентом метод, то он должен вернуть статус 501 (Not Implemented). Если серверу метод известен, но он неприменим к конкретному ресурсу, то возвращается сообщение с кодом 405 (Method Not Allowed). В обоих случаях серверу следует включить в сообщение ответа заголовок Allow со списком поддерживаемых методов. Кроме методов GET и HEAD, часто применяется метод POST. "
            },
        ]
    }, // data END
    methods: {
        currentIdChange: function (payload) {
          this.currentId = payload.changeId.message;
        },
        changeByClick: function (payload) {
            this.currentId = payload;
        }
      }
  }); // Vue end
  
  contents.$mount("#contents");

  blogBtn.init();
