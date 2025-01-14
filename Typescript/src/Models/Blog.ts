import { Autor } from "./Autor";
import { Artykul } from "./Artykuł";

export class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];
    
    constructor(nazwa:string, autor:Autor){
        if(nazwa.trim()==''){
            throw new Error(`Pole nazwa nie może być puste`)
        }
        if(!autor){
            throw new Error(`Autor musi być podany`)
        }
        this._id=Math.floor(Math.random() * 10000)
        this._nazwa = nazwa;
        this._autor = autor;
        this._artykuly = [];
        console.log(`Utworzono Blog \n Nazwa: ${nazwa} | Autor: ${autor.Imie} ${autor.Nazwisko}`)
    }

    get Nazwa(){
        return this._nazwa;
    }
    get Autor(){
        return this._autor;
    }

    dodajArtykul(artykul:Artykul):void{
        this._artykuly.push(artykul);
        console.log(`Dodano artykul do blogu: ${this._nazwa}. \nTytul artykułu: ${artykul.Tytul} | Tresc: ${artykul.Tresc}`)
    }

    pobierzTytulyArtykulow():string[]{
        return this._artykuly.map((a) => a.Tytul);
    }

    pobierzArtykul(tytul:string){
        return this._artykuly.find((a) => a.Tytul === tytul);
    }
}