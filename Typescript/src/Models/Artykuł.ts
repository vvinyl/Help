import { Komentarz } from "./Komentarz";
export class Artykul{
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[];

    constructor(tytul:string, tresc:string){
        if(!tytul){
            throw new Error(`Pole tytul nie moze być puste`)
        }
        this._id = Math.floor(Math.random() * 1000)
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
        this._komentarze = [];
    }

    get Tytul(){
        return this._tytul;
    }
    get Tresc(){
        return this._tresc
    }

    dodajKomentarz(komentarz:Komentarz):void{
        if(!(komentarz instanceof Komentarz)){
            throw new Error("Komentarz musi być instancją klasy Komentarz")
        }
        this._komentarze.push(komentarz)
        console.log(`Dodano komentarz. Autor komentarza: ${komentarz.Nick} | Tresc: ${komentarz.Tresc}`)
    }
    pobierzKomentarze():Komentarz[]{
        return this._komentarze;
    }
}