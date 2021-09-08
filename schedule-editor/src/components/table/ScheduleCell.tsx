import { useEffect} from 'react';

import { PlusCircleIcon } from '@heroicons/react/outline'

import ScheduleCellContent from './ScheduleCellContent'
import HourSchedule from '../schedule/HourSchedule'

interface ScheduleCellParams {
	id: number,
	rowId: number,
	schedule?: HourSchedule,
	onAddButtonClick: (day: number, hour: number) => void;
}

const getRemainingCellSpace = (id: number, rowId: number) => {
	let thisCell = document.getElementById(rowId + '-' + id);
	let thisCellChildren: Element[] = [];

	if (thisCell) {
		thisCellChildren = Array.from(thisCell.children).slice(0, -1);
	}

	let totalChildrenHeight = 0;
	thisCellChildren.forEach(e => {
		var style = getComputedStyle(e as HTMLElement);
		totalChildrenHeight += (e as HTMLElement).offsetHeight +
			parseInt(style.marginTop) + parseInt(style.marginBottom);
	});

	let thisRow = document.getElementById(rowId.toString());
	let thisRowHeight = thisRow !== null ?
		(thisRow as HTMLElement).offsetHeight : 0;

	return thisRowHeight - totalChildrenHeight - 10;
}

const ScheduleCell = ({ id, rowId, schedule, onAddButtonClick }:
	ScheduleCellParams) => {

	useEffect(() => {
		let buttonContainer =
			document.getElementById(rowId + '-' + id)?.lastElementChild;

		if (buttonContainer) {
			let containerHeight = getRemainingCellSpace(id, rowId);

			(buttonContainer as HTMLElement).style.minHeight =
				containerHeight + 'px';
		}
	})

	if (schedule === undefined) {
		return (
			<td id={rowId + '-' + id}>
				<div className="add-lesson-button-container">
					<button className="add-lesson-button"
						id={rowId + '-' + id + '-button'}
						onClick={() => onAddButtonClick(rowId, id)}>
						<PlusCircleIcon />
					</button>
				</div>
			</td>
		)
	}

	return (
		<td id={rowId + '-' + id}>
		{schedule.lessons.map((lesson, index) =>
			<ScheduleCellContent key={index} id={index} cellId={id}
				rowId={rowId} lesson={lesson} />
		)}
			<div className="add-lesson-button-container">
				<button id={rowId + '-' + id + '-button'}
					className="add-lesson-button"
					onClick={() => onAddButtonClick(rowId, id)}>
					<PlusCircleIcon />
				</button>
			</div>
		</td>
	)
}

export default ScheduleCell
