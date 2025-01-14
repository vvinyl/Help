import { Blog } from "./Models/Blog";
import { Artykul } from "./Models/Artykuł";
import { Autor } from "./Models/Autor";
import { Komentarz } from "./Models/Komentarz";
import { CounterApp } from "./CounterApp";
import { Parser } from "./Parser";

function generateArray(len:number, min:number, max:number):number[]{
    let arr:number[]=[];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function calculate(value:number):{pow:number, root:number}{
    let pow:number = Math.pow(value, 2);
    let root:number = Math.sqrt(value)
    return {pow, root}
}

function circleArea(radius:number):number{
    return Math.PI * Math.pow(radius, 2);
}

function fibonacci(len:number):number[]{
    const arr:number[]=[];
    for(let i = 0; i < len; i++){
        if(i === 0){
            arr.push(0)
        } else if (i === 1){
            arr.push(1)
        } else {
            arr.push(arr[i-1]+arr[i-2]);
        }
    }
    return arr;
}


function initApp(){
    // zad 1
    const lenInput = document.getElementById(`len-input`) as HTMLInputElement | null;
    const minInput = document.getElementById(`min-input`) as HTMLInputElement | null;
    const maxInput = document.getElementById(`max-input`) as HTMLInputElement | null;
    const arrBtn = document.getElementById('arr-btn');
    const arrResult = document.getElementById(`arr-result`);

    arrBtn?.addEventListener('click', () => {
        const newArr = generateArray(parseInt(lenInput.value), parseInt(minInput.value), parseInt(maxInput.value));
        arrResult.innerText = `[ ${newArr.join(', ')} ]`
    })

    // zad 2
    const valueInput = document.getElementById('value-input') as HTMLInputElement | null;
    const calcBtn = document.getElementById('calc-btn');
    const calcResult = document.getElementById('calc-result')

    calcBtn?.addEventListener('click', () => {
        const value = calculate(parseInt(valueInput.value));
        calcResult.innerText = `Pow: ${value.pow} | Root: ${value.root.toFixed(2)}`
    })

    // zad 3
    const radiusInput = document.getElementById('radius-input') as HTMLInputElement | null;
    const circleBtn = document.getElementById('circle-btn');
    const circleResult = document.getElementById('circle-result')

    circleBtn?.addEventListener('click', () => {
        const area = circleArea(parseInt(radiusInput.value));
        circleResult.innerText = `Promień: ${parseInt(radiusInput.value)} | Pole koła: ${area.toFixed(4)}`
    })
 
    // zad 4
    const fiboInput = document.getElementById(`fibo-input`) as HTMLInputElement | null;
    const fiboBtn = document.getElementById('fibo-btn');
    const fiboResult = document.getElementById('fibo-result')

    fiboBtn?.addEventListener('click', () => {
        const fibo = fibonacci(parseInt(fiboInput.value));
        fiboResult.innerText = `${fibo.join(` | `)}`
    })
}


// link do danych
const dane = new Parser('http://localhost:9000/dane.json')
document.addEventListener('DOMContentLoaded', () => { 
    new CounterApp();
    dane.init();
    initApp();
})




// pokazanie działania zadania z instrukcji
const autor1 = new Autor(`Bartosz`, `Walaszek`);
const autor2 = new Autor(`Andrzej`, `Wajcha`);

const blog1 = new Blog(`Walaszkowanie`, autor1);
const blog2 = new Blog('Wajchowanie', autor2);

const artykul1 = new Artykul('Walaszek tytul 1', `Tresc pierwszego artykulu Walaszka`);
const artykul2 = new Artykul(`Walaszek ale to VIXA`, `Elo elo 3 2 0`);

blog1.dodajArtykul(artykul1);
blog1.dodajArtykul(artykul2);

const artykul3 = new Artykul(`Wajcha po godzinach`, `No siema`)
blog2.dodajArtykul(artykul3);

console.log(`Pobrano tytuły artykułów z blogu ${blog1.Nazwa}:\n${blog1.pobierzTytulyArtykulow()}`)

console.log(`Pobrano artykul z blogu ${blog2.Nazwa} o tytule ${artykul3.Tytul}:\n${blog2.pobierzArtykul(artykul3.Tresc)}`)