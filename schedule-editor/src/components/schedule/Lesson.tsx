export interface LessonInfo {
	classes: string[],
	students: string[],
	classrooms: string[],
	teachers: string[],
	subjects: string[],
	division?: number
}

class Lesson {
	classes: string[];
	students: string[];
	classrooms: string[];
	teachers: string[];
	subjects: string[];
	division?: number;

	constructor(info: LessonInfo) {
		this.classes = info.classes;
		this.students = info.students;
		this.classrooms = info.classrooms;
		this.teachers = info.teachers;
		this.subjects = info.subjects;
		this.division = info.division;
	}

	getLessonData() {
		return [
			this.classes,
			this.students,
			this.teachers,
			this.classrooms,
			this.subjects
		]
	}
}

export default Lesson;
