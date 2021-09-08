import { ChangeEventHandler, useState } from 'react';

import { Class } from '../objects/Class';
import { Student } from '../objects/Student';
import { Classroom } from '../objects/Classroom';
import { Teacher } from '../objects/Teacher';
import { Subject } from '../objects/Subject';
import DataList from './DataList';

export interface SearchFormParams {
	isAdmin: boolean,
	cls: Map<string, Class>,
	stud: Map<string, Student>,
	room: Map<string, Classroom>,
	tchr: Map<string, Teacher>,
	subj: Map<string, Subject>,
	onSubmit: React.FormEventHandler<HTMLFormElement>
}


const SearchForm = (params: SearchFormParams) => {
	const [list, setList] = useState(new Array<string>());
	const [object, setObject] = useState('');
	const [showList, setShowList] = useState(false);
	const [showButton, setShowButton] = useState(false);

	const generateList = (e: React.ChangeEvent<HTMLSelectElement>) => {
		let value = e.target.options[e.target.selectedIndex].value;
		setObject(value);

		switch (value) {
			case "cls":
				setList(Array.from(params.cls.keys()));
				break;
			case "stud":
				setList(Array.from(params.stud.keys()));
				break;
			case "room":
				setList(Array.from(params.room.keys()));
				break;
			case "tchr":
				setList(Array.from(params.tchr.keys()));
				break;
			case "subj":
				setList(Array.from(params.tchr.keys()));
				break;
		}

		setShowList(true);
	}

	const onListChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (list.includes(e.target.value)) {
			setShowButton(true);
		}
		else {
			setShowButton(false);
		}
	}

	return (
		<form className="search-form" onSubmit={params.onSubmit}>
			<div className="mb-4">
				<select name="object" id="object" required
				onChange={(e) => generateList(e)} defaultValue="placeholder">
					<option id="0" disabled value="placeholder">
						-- Vyberte --
					</option>
					<option id="1" value="cls">Třída</option>
					<option id="2" value="tchr">Učitel</option>
					<option id="3" value="room">Učebna</option>
					<option id="4" value="stud">Student</option>
					<option id="5" value="subj">Předmět</option>
				</select>
			</div>
			{showList && <DataList object={object} list={list}
			onChange={onListChange} />}
			{showButton &&
			<button className="rounded bg-blue-600 p-3 font-semibold text-white"
			type="submit">
				Upravit rozvrh
			</button>}
		</form>
	)
}

export default SearchForm
