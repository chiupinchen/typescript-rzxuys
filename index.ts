// Import stylesheets
import './style.css';
import { Observable, of, OperatorFunction } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

// Write TypeScript code!

const result: string[] = [];

const emitter1: Observable<string> = of('aaa', 'aab', 'c').pipe(
  filter((x) => x.startsWith('a')),
  map((x) => x + 'dd')
);
emitter1.subscribe({
  next: (a: string) => result.push(a),
});

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello world, ' + this.greeting;
  }
}

let greeter = new Greeter('chiupin');

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${greeter.greet()}</h1>`;
