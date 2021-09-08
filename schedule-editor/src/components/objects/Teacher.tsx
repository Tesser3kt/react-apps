import Reader from "../io/Reader";

export interface TeacherInfo {
	name: string,
	middleNames: string[],
	surname: string
}

export class Teacher {
	name: string;
	middleNames: string[];
	surname: string;

	constructor(info: TeacherInfo) {
		this.name = info.name;
		this.middleNames = info.middleNames;
		this.surname = info.surname;
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
		let schedule = Reader.readSchedule('/teachers/' + fileName);

		return schedule;
	}
}
