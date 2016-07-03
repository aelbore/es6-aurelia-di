import 'aurelia-polyfills';

import { Person } from './index';
import { Container } from './di';

let container = new Container();
let person = container.get(Person);

console.log(`Persons: ${JSON.stringify(person.persons)}`);
