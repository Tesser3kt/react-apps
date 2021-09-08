import Lesson from "../schedule/Lesson"

interface ScheduleCellContentParams {
	id: number,
	cellId: number,
	rowId: number,
	lesson: Lesson
}

const ScheduleCellContent = ({ id, cellId, rowId, lesson }:
	ScheduleCellContentParams) => {
	let ind = lesson.classes.length === 0 && lesson.students.length > 0;
	let indString = ind ? "ind" : "";

	let divString = lesson.division ? "divided" : "";
	return (
		<div id={rowId + '-' + cellId + '-' + id}
			className={"lesson " + indString + " " + divString}>
			{
				lesson.getLessonData().map((list, index) =>
					list.length !== 0 &&
					<p key={index.toString()}>
						{list.join(', ')}
						{index === 0 && lesson.division &&
							" (" + lesson.division + '. sk.)'}
					</p>
				)
			}
		</div>
	)
}

export default ScheduleCellContent
