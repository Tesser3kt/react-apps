import React from 'react';
import DaySchedule from '../schedule/DaySchedule'
import ScheduleCell from './ScheduleCell';

interface ScheduleRowParams {
	id: number,
	hourCount: number,
	schedule?: DaySchedule,
	onAddButtonClick: (day: number, hour: number) => void;
}

export const dayNames = ['Po', 'Út', 'St', 'Čt', 'Pá'];

const ScheduleRow = ({ id, hourCount, schedule, onAddButtonClick }:
	ScheduleRowParams) => {

	let cells = [];
	for (let hour = 0; hour < hourCount; hour++) {
		if (schedule === undefined) {
			cells.push(<ScheduleCell key={hour} id={hour} rowId={id}
				onAddButtonClick={onAddButtonClick}/>);
			continue;
		}

		let hourSchedule = schedule.hourSchedules.filter(x => x.hour === hour);
		if (hourSchedule === undefined || hourSchedule.length > 1) {
			alert('Chyba při zobrazování rozvrhu.');
		}
		else {
			if (hourSchedule.length === 1) {
				cells.push(<ScheduleCell key={hour} id={hour} rowId={id}
					schedule={hourSchedule[0]}
					onAddButtonClick={onAddButtonClick}/>)
			}
			else {
				cells.push(<ScheduleCell key={hour} id={hour} rowId={id}
					onAddButtonClick={onAddButtonClick}/>)
			}
		}
	}

	return (
		<tr id={id.toString()}>
			<td id={'day-' + id + '-name'} className="day-cell">
				{dayNames[id]}
			</td>
			{cells}
		</tr>
	)
}

export default ScheduleRow;
