import Reader from "../io/Reader";

export interface StudentInfo {
	name: string,
	surname: string,
	middleNames: string[],
	class: string
}

export class Student {
	name: string;
	surname: string;
	middleNames: string[];
	class: string;

	constructor(info: StudentInfo) {
		this.name = info.name;
		this.surname = info.surname;
		this.middleNames = info.middleNames;
		this.class = info.class;
	}

	toString() {
		return this.name + ' ' +
			this.middleNames.join(' ') + ' ' + this.surname;
	}

	toShortString() {
		return Array.from(this.name)[0] + '. ' + this.middleNames.map(name =>
			Array.from(name)[0] + '. '
		) + this.surname;
	}

	getSchedule() {
		let fileName = this.toString().normalize('NFKD').replace(/[^\w]/g, '')
		+ '.json';
		console.log(fileName);
		let schedule = Reader.readSchedule('/students/' + fileName);

		return schedule;
	}
}
