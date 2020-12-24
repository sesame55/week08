"use strict";

var nurse = [{
  id: '1',
  bgImgUrl: 'assets/images/index-2.jpeg',
  peopleImgUrl: 'assets/images/person-1.png',
  name: 'Jamie',
  skill: '寄宿、美容、寵物行為訓練',
  numOne: '198',
  numTwo: '580'
}, {
  id: '2',
  bgImgUrl: 'assets/images/index-3.jpeg',
  peopleImgUrl: 'assets/images/person-2.png',
  name: 'Eric',
  skill: '寄宿、美容',
  numOne: '76',
  numTwo: '208'
}, {
  id: '3',
  bgImgUrl: 'assets/images/index-4.jpeg',
  peopleImgUrl: 'assets/images/person-3.png',
  name: 'Yvonne',
  skill: '美容、寵物行為訓練',
  numOne: '52',
  numTwo: '196'
}, {
  id: '4',
  bgImgUrl: 'assets/images/index-5.jpeg',
  peopleImgUrl: 'assets/images/person-4.png',
  name: 'Carol',
  skill: '寵物行為訓練',
  numOne: '45',
  numTwo: '123'
}, {
  id: '5',
  bgImgUrl: 'assets/images/index-6.jpeg',
  peopleImgUrl: 'assets/images/person-5.png',
  name: 'Wiki',
  skill: '寄宿、美容',
  numOne: '123',
  numTwo: '45'
}];
var App = {
  data: function data() {
    return {
      nurse: []
    };
  },
  created: function created() {
    this.nurse = nurse;
  }
};
Vue.createApp(App).mount('#app'); // index-swiper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: true,
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});
//# sourceMappingURL=all.js.map
