import { inject } from 'aurelia-dependency-injection';
import { PersonList } from './person-list';

@inject(PersonList)
export class PersonService {
	constructor(personList){
		this._personList = personList;
	}

	getPersons(){
		return ["Pedro", "Juan"];
	}
}