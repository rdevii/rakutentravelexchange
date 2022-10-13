import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './router';
import App from './App.vue';
import HotelList from './components/HotelList.vue';
import HotelCardList from './components/HotelCardList.vue';
import HotelCard from './components/HotelCard.vue';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.component('hotel-list', HotelList);
app.component('hotel-card-list', HotelCardList);
app.component('hotel-card', HotelCard);

app.mount('#app');
