import { ChangeEventHandler } from "react";

interface DataListParams {
	object: string,
	list: string[],
	onChange: ChangeEventHandler<HTMLInputElement>
}

const DataList = ({ object, list, onChange }: DataListParams) => {

	const objectToLabel = new Map([
		["cls", "Název třídy:"],
		["tchr", "Jméno učitele:"],
		["room", "Číslo učebny:"],
		["stud", "Jméno studenta:"],
		["subj", "Název předmětu:"]
	]);

	return (
		<div className="mb-6">
			<label htmlFor={object}>{objectToLabel.get(object)}</label>
			<input id={object} name={object} list={object + "list"} required
			onChange={(e) => onChange(e)} />
			<datalist id={object + "list"}>
			{list.map((elem, index) =>
				<option key={index.toString()} id={index.toString()}
					value={elem}></option>
			)};
			</datalist>
		</div>
	)
}

export default DataList
