export class Autor {
    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;
  
    constructor(id: number, imie: string, nazwisko: string, email: string) {
      this._id = id;
      this._imie = imie;
      this._nazwisko = nazwisko;
      this._email = email;
    }
  
    get id(): number {
      return this._id;
    }
  
    get imie(): string {
      return this._imie;
    }
  
    get nazwisko(): string {
      return this._nazwisko;
    }
  
    get email(): string {
      return this._email;
    }
  }
  