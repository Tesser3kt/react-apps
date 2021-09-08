import Reader from "../io/Reader";

export interface SubjectInfo {
	name: string,
	shortcut: string
}

export class Subject {
	name: string;
	shortcut: string;

	constructor(info: SubjectInfo) {
		this.name = info.name;
		this.shortcut = info.shortcut;
	}

	toString() {
		return this.name;
	}

	toShortString() {
		return this.shortcut;
	}

	getSchedule() {
		let fileName = this.toString().normalize('NFKD').replace(/[^\w]/g, '')
		+ '.json';
		console.log(fileName);
		let schedule = Reader.readSchedule('/subjects/' + fileName);

		return schedule;
	}
}
