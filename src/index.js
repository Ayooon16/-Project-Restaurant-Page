import './style.css';
import { loadHome } from './modules/loadHome.js';
loadHome()
window.onload=function(){
    document.getElementById('home').onclick='loadHome()';
    };