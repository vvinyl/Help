import { Autor } from './Autor';

export class App {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async init(): Promise<void> {
    try {
      const authorsData = await this.fetchAuthors();
      const authors = this.convertToAuthors(authorsData);
      this.displayAuthors(authors);
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  }

  private async fetchAuthors(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  private convertToAuthors(data: any[]): Autor[] {
    return data.map(
      (item) => new Autor(item.id, item.imie, item.nazwisko, item.email)
    );
  }

  private displayAuthors(authors: Autor[]): void {
    const authorsContainer = document.getElementById('authors')!;
    authorsContainer.innerHTML = ''; // Wyczyszczenie istniejącej zawartości
  
    authors.forEach((author) => {
      const authorElement = document.createElement('div');
      authorElement.className = 'author';
      authorElement.innerHTML = `
        <strong>ID:</strong> ${author.id}<br>
        <strong>Imię:</strong> ${author.imie}<br>
        <strong>Nazwisko:</strong> ${author.nazwisko}<br>
        <strong>Email:</strong> <a href="mailto:${author.email}">${author.email}</a>
      `;
      authorsContainer.appendChild(authorElement);
    });
  }
}