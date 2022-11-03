// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/*let name: string | string[] = 'daniele';

type Cliente = {
  nome: string;
  cognome: string;
  eta: number;
  tel?: number;
};

let nuovoCliente: Cliente = {
  nome: 'Daniele',
  cognome: 'Pan',
  eta: 24,
};

function somma(a: number, b: number): string | number {
  const stringa = a + b + '';
  return stringa;
}

const risultato = somma(2, 7);
console.log(risultato);*/

class Alunno {
  nome: string;
  cognome: string;
  eta: number;
  hobbies: string[];

  constructor(
    nomeAlunno: string,
    cognomeAlunno: string,
    etaAlunno: number,
    hobbies: string[]
  ) {
    this.nome = nomeAlunno;
    this.cognome = cognomeAlunno;
    this.eta = etaAlunno;
    this.hobbies = hobbies;
  }

  addHobbies(nuovoHobby: string) {
    this.hobbies.push(nuovoHobby);
  }
}

const nuovoAlunno = new Alunno('Daniele', 'Pan', 24, [
  'Pc',
  'Mangiare',
  'Netflix',
]);

nuovoAlunno.addHobbies('pittura');
console.log('nome: ', nuovoAlunno);
