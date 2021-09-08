import Reader from "../io/Reader";

export interface ClassroomInfo {
	number: number,
	description: string
}

export class Classroom {
	number: number;
	description: string;

	constructor(info: ClassroomInfo) {
		this.number = info.number;
		this.description = info.description;
	}

	toString() {
		return this.number + ' (' + this.description + ')';
	}

	toShortString() {
		return this.number.toString();
	}

	getSchedule() {
		let fileName = this.toString().normalize('NFKD').replace(/[^\w]/g, '')
		+ '.json';
		console.log(fileName);
		let schedule = Reader.readSchedule('/classrooms/' + fileName);

		return schedule;
	}
}
