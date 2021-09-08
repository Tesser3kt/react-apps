import WeekSchedule from "../schedule/WeekSchedule";
import DaySchedule from "../schedule/DaySchedule";
import HourSchedule from "../schedule/HourSchedule";
import Lesson, { LessonInfo } from "../schedule/Lesson";
import { testSchedule } from "./Writer";

type ScheduleObject = { daySchedules: {
	day: number,
	hourSchedules: {
		hour: number,
		lessons: LessonInfo[]
	}[]
 }[]}

abstract class Reader {
	private static convertSchedule(scheduleObject: ScheduleObject) {
		let schedule = new WeekSchedule(
			scheduleObject.daySchedules.map((daySchedule: {
				day: number,
				hourSchedules: {
					hour: number,
					lessons: LessonInfo[]
				}[]
			}) => new DaySchedule({
					day: daySchedule.day,
					hourSchedules: daySchedule.hourSchedules.map(hourSchedule =>
						new HourSchedule({
							hour: hourSchedule.hour,
							lessons: hourSchedule.lessons.map(lesson =>
								new Lesson(lesson)
							)
						})
					)
				})
			)
		)

		return schedule;
	}

	public static readSchedule(path: string) {
		// TODO
		let jsonString = JSON.stringify(testSchedule);
		let scheduleObject = JSON.parse(jsonString);

		return this.convertSchedule(scheduleObject);
	}
}

export default Reader;
