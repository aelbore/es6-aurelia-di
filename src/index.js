import { PersonService } from './person.service';
import { inject } from 'aurelia-dependency-injection';

@inject(PersonService)
export class Person {
  constructor(personService){
    this._personService = personService;
  }

  get persons() {
    return this._personService.getPersons();
  }
}
