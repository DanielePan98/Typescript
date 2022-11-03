// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function correttore(testoA: string, testoB: string): string {
  if (testoA.includes('%')) {
    testoA = '';
    for (let i = testoA.length - 1; i >= 0; i--) {
      testoA += testoA[i];
    }
  }
  if (testoB.includes('%')) {
    testoB = '';
    for (let i = testoB.length - 1; i >= 0; i--) {
      testoB += testoB[i];
    }
  }
  return testoA + testoB;
}

console.log(correttore('tavo', 'o%nil'));
