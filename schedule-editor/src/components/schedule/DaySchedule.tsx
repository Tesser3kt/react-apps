import HourSchedule from './HourSchedule'

export interface DayScheduleInfo {
	day: number,
	hourSchedules: HourSchedule[]
}

class DaySchedule {
	day: number;
	hourSchedules: HourSchedule[];

	constructor(info: DayScheduleInfo) {
		this.day = info.day;
		this.hourSchedules = info.hourSchedules;
	}
}

export default DaySchedule;
