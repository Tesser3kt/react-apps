import WeekSchedule from "../schedule/WeekSchedule"
import ScheduleRow from './ScheduleRow'

interface ScheduleTableParams {
	hourCount: number,
	schedule: WeekSchedule | undefined,
	onAddButtonClick: (day: number, hour: number) => void;
}

const ScheduleTable = ({ schedule, hourCount, onAddButtonClick }:
	ScheduleTableParams) => {
	let rows = [];
	for (let day = 0; day < 5; day++) {
		let daySchedule = schedule?.daySchedules.filter(x => x.day === day);

		if (daySchedule === undefined || daySchedule.length > 1) {
			alert('Chyba při zobrazování rozvrhu.');
		}
		else {
			if (daySchedule.length === 1) {
				rows.push(<ScheduleRow key={day} id={day}
					schedule={daySchedule[0]} hourCount={hourCount}
					onAddButtonClick={onAddButtonClick} />)
			}
			else {
				rows.push(<ScheduleRow key={day} id={day}
					hourCount={hourCount}
					onAddButtonClick={onAddButtonClick} />)
			}
		}
	}

	let hours = [];
	for (let hour = 0; hour < hourCount; hour++) {
		hours.push(hour);
	}
	const lessonTimes = [
		'8.00 - 8.45',
		'8.55 - 9.40',
		'10.00 - 10.45',
		'10.50 - 11.35',
		'11.45 - 12.30',
		'12.35 - 13.20',
		'13.30 - 14.15',
		'14.20 - 15.05',
		'15.10 - 15.55',
		'16.10 - 16.55',
		'17.00 - 17.45'
	]

	return (
		<>
		{schedule !== undefined &&
		<table className="schedule-table">
			<thead>
				<tr id="hours" className="hours-row">
					<td id="blank-left-top"></td>
					{hours.map(e =>
					<td key={"hour-" + e} id={"hour-" + e}
						className="hours-cell">
						<p className="hour-number">{e + 1}</p>
						<p className="hour-time">{lessonTimes[e]}</p>
					</td>
					)}
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>}
		</>
	)
}

export default ScheduleTable
