import './style.css';
import { loadHome } from './modules/loadHome.js';
import { loadAbout } from './modules/loadAbout.js';
loadHome()
window.onload=function(){
    document.getElementById('home').onclick=loadHome;
    document.getElementById('about').onclick=loadAbout;
    };