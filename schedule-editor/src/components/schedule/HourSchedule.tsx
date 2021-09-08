import Lesson from './Lesson'

export interface HourScheduleInfo {
	hour: number,
	lessons: Lesson[]
}

class HourSchedule {
	hour: number;
	lessons: Lesson[];

	constructor(info: HourScheduleInfo) {
		this.hour = info.hour;
		this.lessons = info.lessons;
	}
}

export default HourSchedule;
