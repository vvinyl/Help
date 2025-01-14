export class Komentarz{
    private _tresc:string;
    private _data:Date;
    private _odpowiedzi:Komentarz[];
    private _nick:string;

    constructor(tesc:string, nick:string){
        this._tresc = tesc;
        this._nick = nick;
        this._data = new Date();
        this._odpowiedzi = [];
    }

    get Tresc():string{
        return this._tresc;
    }
    get Data():Date{
        return this._data;
    }
    get Nick():string{
        return this._nick;
    }

    dodajOdpowiedz(odpowiedz:Komentarz):void{
        if(!(odpowiedz instanceof Komentarz)){
            throw new Error(`Odpowiedz musi być instancja klasy odpowiedz`)
        }
        this._odpowiedzi.push(odpowiedz);
        console.log(`Dodano odpowiedz`)
    }

    pobierzOdpowiedzi():Komentarz[]{
        return this._odpowiedzi;
    }
}