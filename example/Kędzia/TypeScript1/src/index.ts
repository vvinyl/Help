import { CounterApp } from "./CounterApp";
import { App } from './App';


document.addEventListener("DOMContentLoaded", ()=>{
    new CounterApp();
})

const app = new App('http://localhost:9000/dane.json'); // URL do pliku JSON
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});