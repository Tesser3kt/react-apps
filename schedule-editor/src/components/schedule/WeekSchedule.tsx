import DaySchedule from "./DaySchedule";

class WeekSchedule {
	daySchedules: DaySchedule[];

	constructor(info: DaySchedule[]) {
		this.daySchedules = info;
	}
}

export default WeekSchedule;
