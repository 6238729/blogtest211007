import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Sidebar from 'primevue/sidebar';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';

import Toast from 'primevue/toast';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './assets/styles/layout.scss';
// import 'prismjs/themes/prism-coy.css';
import 'primevue/resources/themes/vela-purple/theme.css';



const app = createApp(App);


app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('Card', Card);
app.component('Toast', Toast);
app.use(router).mount('#app')

app.use(PrimeVue);

