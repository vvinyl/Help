export class Autor{
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    constructor(imie:string, nazwisko:string){
        if(!imie || !nazwisko){
            throw new Error(`Pola imie i nazwisko są wymagane`)
        } //else if(){
            
        // }
        
        this._id = Math.floor(Math.random() * 10000);
        this._imie = imie;
        this._nazwisko = nazwisko;
        console.log(`Utworzono obiekt klasy Autor. Parametry: \nImie: ${imie} | nazwisko: ${nazwisko}`)
    }

    get Imie():string{
        return this._imie;
    }
    get Nazwisko():string{
        return this._nazwisko;
    }
    get Email():string{
        return this._email;
    }
    set Email(value:string){
        this._email = value;
    }
}