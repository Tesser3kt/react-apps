import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/outline';
import React from 'react';

interface EditLessonFormParams {
	day: number,
	hour: number,
	classes: string[],
	students: string[],
	classrooms: string[],
	teachers: string[],
	subjects: string[]
}

interface EditFormInputParams {
	id: string,
	objectToList: Map<string, string[]>
}

interface EditFormCheckboxParams {

}

export const fullDayNames = [
	'Pondělí',
	'Úterý',
	'Středa',
	'Čtvrtek',
	'Pátek'
];

const objectToName = new Map([
	['cls', 'Třídy'],
	['stud', 'Studenti'],
	['room', 'Učebna'],
	['tchr', 'Učitelé'],
	['subj', 'Předmět']
]);

class EditFormInput extends React.Component<EditFormInputParams> {
	id: string;
	objectToList: Map<string, string[]>;
	state: { inputValues: string[] };

	constructor({ id, objectToList }: EditFormInputParams) {
		super({ id, objectToList });

		this.id = id;
		this.objectToList = objectToList;
		this.state = { inputValues: [''] };

		this.onInputChange = this.onInputChange.bind(this);
		this.onAddObjectButtonClick = this.onAddObjectButtonClick.bind(this);
		this.onDelObjectButtonClick = this.onDelObjectButtonClick.bind(this);
	}

	onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		let indexString = e.target.id.split('-')[1];

		if (indexString) {
			let index = parseInt(indexString);

			let state = this.state;
			state.inputValues[index] = e.target.value;
			this.setState(state);
		}
	}

	onAddObjectButtonClick() {
		this.setState({ inputValues: [...this.state.inputValues, ''] });
	}

	onDelObjectButtonClick(index: number) {
		let state = this.state.inputValues;
		state.splice(index, 1);

		this.setState(state);
	}

	render() {
		const inputs = this.state.inputValues;
		return (
			<div key={this.id} className="mb-6 flex flex-col">
				<label htmlFor={this.id + "-1"}>
					{objectToName.get(this.id)}
				</label>
				{inputs.map((value, index) =>
					<div className="input-wrapper">
						<input key={index}
							id={this.id + '-' + index}
							name={this.id + '-' + index}
							list={this.id + '-' + index + '-list'}
							value={value}
							onChange={this.onInputChange}
							multiple
						/>
						<datalist id={this.id + '-' + index + '-list'}>
							{this.objectToList.get(this.id)?.map(
								(elem, index) =>
									<option key={index} id={index.toString()}
										value={elem}>
									</option>
							)}
						</datalist>
						<button type="button" className="del-obj-button"
							id={"del-" + this.id + '-' + index}
							onClick={() => this.onDelObjectButtonClick(index)}>
							<MinusCircleIcon />
						</button>
					</div>
				)}
				<button type="button" className="add-obj-button"
					id={"add-" + this.id}
					onClick={this.onAddObjectButtonClick}>
					<PlusCircleIcon />
				</button>
			</div>
		)
	}
}

class EditFormCheckbox extends React.Component<EditFormCheckboxParams> {
	state: { checked: boolean, division: number };

	constructor(props: EditFormCheckboxParams) {
		super(props);
		this.state = { checked: false, division: 0 };

		this.onCheckboxChange = this.onCheckboxChange.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.checked) {
			this.setState({ checked: true, division: 1 });
		}
		else {
			this.setState({ checked: false, division: 0 });
		}
	}

	onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ checked: true, division: parseInt(e.target.value) })
	}

	render() {
		return (
			<>
				<div className="input-wrapper">
					<label htmlFor="divided" className="mb-0">
						Rozdělit hodinu?
					</label>
					<div className="divided-checkbox-container">
						<input type="checkbox" name="divided"
							className="divided-checkbox"
							onChange={this.onCheckboxChange}
						/>
					</div>
				</div>
				{this.state.checked && this.state.division !== 0 &&
					<div className="mt-2">
						<label htmlFor="division">Skupina</label>
						<input type="number" name="division"
							value={this.state.division}
							onChange={this.onInputChange} />
					</div>
				}
			</>
		)
	}
}

class EditLessonForm extends React.Component<EditLessonFormParams> {
	params: EditLessonFormParams;
	objectToList: Map<string, string[]>;

	constructor(params: EditLessonFormParams) {
		super(params);

		this.params = params;
		this.objectToList = new Map([
			['cls', params.classes],
			['stud', params.students],
			['room', params.classrooms],
			['tchr', params.teachers],
			['subj', params.subjects]
		]);
	}

	render() {
		return (
			<div id="add-lesson-container" className="rounded-lg shadow-lg p-8
			bg-blue-50 add-lesson-container">
				<h2 className="add-lesson-form-title">
					{fullDayNames[this.params.day] + ' | ' +
						this.params.hour + '. hodina'}
				</h2>
				<form className="add-lesson-form">
					{['cls', 'stud', 'room', 'tchr', 'subj'].map(value =>
						<EditFormInput id={value}
							objectToList={this.objectToList} />
					)}
					<EditFormCheckbox />
				</form>
			</div>
		)
	}
}

export default EditLessonForm
