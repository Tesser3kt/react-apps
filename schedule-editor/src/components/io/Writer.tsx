import WeekSchedule from "../schedule/WeekSchedule";
import DaySchedule from "../schedule/DaySchedule";
import HourSchedule from "../schedule/HourSchedule";
import Lesson from "../schedule/Lesson";

export const testSchedule = new WeekSchedule([
	new DaySchedule({
		day: 0,
		hourSchedules: [
			new HourSchedule({
				hour: 0,
				lessons: [
					new Lesson({
						classes: ["1.C ROCK"],
						students: [],
						classrooms: ["422"],
						teachers: ["O. Balage"],
						subjects: ["Int. - rock"]
					}),
					new Lesson({
						classes: [],
						students: ["M. Pešek"],
						classrooms: ["420"],
						teachers: ["A. Kalivodová"],
						subjects: ["Zpěv - klas. zp."]
					}),
					new Lesson({
						classes: [],
						students: ["M. Chvátil"],
						classrooms: ["422"],
						teachers: ["A. Kalivodová"],
						subjects: ["Zpěv - klas. zp."]
					}),
				]
			}),
			new HourSchedule({
				hour: 2,
				lessons: [
					new Lesson({
						classes: ["5.B MUZ."],
						students: [],
						classrooms: ["368"],
						teachers: ["A. Beneš"],
						subjects: ["IJ"]
					})
				]
			}),
			new HourSchedule({
				hour: 3,
				lessons: [
					new Lesson({
						classes: ["5.B MUZ."],
						students: [],
						classrooms: ["368"],
						teachers: ["A. Kalivodová"],
						subjects: ["Zpěv - klas. zp."],
						division: 1
					})
				]
			})
		]
	}),
	new DaySchedule({
		day: 2,
		hourSchedules: [
			new HourSchedule({
				hour: 3,
				lessons: [
					new Lesson({
						classes: [],
						students: ["F. Jankoš", "A. J. Mrázková"],
						classrooms: ["358"],
						teachers: ["J. Klepáč"],
						subjects: ["POK"]
					})
				]
			})
		]
	})
])

abstract class Writer {
	public static saveSchedule(schedule: WeekSchedule, path: string) {
		// TODO
		let jsonString = JSON.stringify(testSchedule);
	}
}

export default Writer;
