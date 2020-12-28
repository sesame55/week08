// index
const nurse = [
    {
        id: '1',
        bgImgUrl: 'assets/images/index-2.jpeg',
        peopleImgUrl: 'assets/images/person-1.png',
        name: 'Jamie',
        skill: '寄宿、美容、寵物行為訓練',
        numOne: '198',
        numTwo: '580',
    },
    {
        id: '2',
        bgImgUrl: 'assets/images/index-3.jpeg',
        peopleImgUrl: 'assets/images/person-2.png',
        name: 'Eric',
        skill: '寄宿、美容',
        numOne: '76',
        numTwo: '208',
    },
    {
        id: '3',
        bgImgUrl: 'assets/images/index-4.jpeg',
        peopleImgUrl: 'assets/images/person-3.png',
        name: 'Yvonne',
        skill: '美容、寵物行為訓練',
        numOne: '52',
        numTwo: '196',
    },
    {
        id: '4',
        bgImgUrl: 'assets/images/index-5.jpeg',
        peopleImgUrl: 'assets/images/person-4.png',
        name: 'Carol',
        skill: '寵物行為訓練',
        numOne: '45',
        numTwo: '123',
    },
    {
        id: '5',
        bgImgUrl: 'assets/images/index-6.jpeg',
        peopleImgUrl: 'assets/images/person-5.png',
        name: 'Wiki',
        skill: '寄宿、美容',
        numOne: '123',
        numTwo: '45',
    },
];
const App = {
    data() {
        return {
            nurse: [],
        };
    },
    created() {
        this.nurse = nurse;
    },
};
Vue.createApp(App).mount('#app');

// index-swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
});

// petHome
const petHome = [
    {
        id: '1',
        imgUrl: 'assets/images/homestay-2.jpeg',
        title: '寵屋屋',
        skill: '寄宿、美容洗澡、到府保姆',
    },
    {
        id: '2',
        imgUrl: 'assets/images/homestay-3.jpeg',
        title: '毛孩好家',
        skill: '寄宿、美容洗澡、到府保姆',
    },
    {
        id: '3',
        imgUrl: 'assets/images/homestay-4.jpeg',
        title: '妖貓X僕SS',
        skill: '寄宿、美容洗澡',
    },
    {
        id: '4',
        imgUrl: 'assets/images/homestay-5.jpeg',
        title: '貓是主我是僕',
        skill: '寄宿、美容洗澡、到府保姆',
    },
    {
        id: '5',
        imgUrl: 'assets/images/homestay-6.jpeg',
        title: '汪汪隊',
        skill: '寄宿、到府保姆、寵物行為訓練',
    },
    {
        id: '6',
        imgUrl: 'assets/images/homestay-7.jpeg',
        title: '卯咪',
        skill: '寄宿、寵物行為訓練',
    },
    {
        id: '7',
        imgUrl: 'assets/images/index-2.jpeg',
        title: '貓狗大戰',
        skill: '寄宿、美容洗澡、到府保姆',
    },
    {
        id: '8',
        imgUrl: 'assets/images/homestay-8.jpeg',
        title: '萌寵底家',
        skill: '寄宿、到府保姆',
    },
];
const list = {
    data() {
        return {
            petHome: [],
        };
    },
    created() {
        this.petHome = petHome;
    },
};
Vue.createApp(list).mount('#list');

// petHomeDetail-showImg
$(document).ready(function () {
    $('.imgList-link img').click(function () {
        $('.showImg img').attr('src', $(this).attr('src'));
        //第一個src是上方顯示圖片位置
        //第二個src是下方來源位置
        return false;//避免跳轉
    });
});
