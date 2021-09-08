import Reader from "../io/Reader";

export interface ClassInfo {
	year: number,
	letter: string,
	division: string,
	divisionShort: string,
	students: string[]
}

export class Class {
	year: number;
	letter: string;
	division: string;
	divisionShort: string;
	students: string[];

	constructor(info: ClassInfo) {
		this.year = info.year;
		this.letter = info.letter;
		this.division = info.division;
		this.divisionShort = info.divisionShort;
		this.students = info.students;
	}

	toString() {
		return this.year + '.' + this.letter + ' ' + this.division;
	}

	toShortString() {
		return this.year + '.' + this.letter + ' ' + this.divisionShort;
	}

	getSchedule() {
		let fileName = this.toString().normalize('NFKD').replace(/[^\w]/g, '')
		.toLowerCase() + '.json';
		console.log(fileName);
		let schedule = Reader.readSchedule('/classes/' + fileName);

		return schedule;
	}
}
