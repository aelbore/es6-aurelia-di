import { Person } from './index';
import { Container } from 'aurelia-dependency-injection';

import 'aurelia-polyfills';

let container = new Container();
let person = container.get(Person);

console.log(`Persons: ${JSON.stringify(person.persons)}`);
