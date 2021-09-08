import React, { Dispatch, useState } from 'react';

import Header from './components/Header'
import SearchForm from './components/form/SearchForm';
import ScheduleTable from './components/table/ScheduleTable';
import WeekSchedule from './components/schedule/WeekSchedule';
import EditLessonForm from './components/form/EditLessonForm';

import { Class } from './components/objects/Class';
import { Student } from './components/objects/Student';
import { Classroom } from './components/objects/Classroom';
import { Teacher } from './components/objects/Teacher';
import { Subject } from './components/objects/Subject';
import { SearchFormParams } from './components/form/SearchForm';

const App = () => {
	const hourNumber = 11;

	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let formSelect: HTMLSelectElement | null =
			document.querySelector('#object');
		let formInput: HTMLInputElement | null =
			document.querySelector('#' + formSelect?.value);

		if (formInput) {
			switch (formSelect?.value) {
				case "cls":
					let cls = classes.get(formInput.value);
					if (cls !== undefined) {
						setSchedule(cls.getSchedule());
						setShowSchedule(true);
					}
					break;
				case "stud":
					let stud = students.get(formInput.value);
					if (stud !== undefined) {
						setSchedule(stud.getSchedule());
						setShowSchedule(true);
					}
					break;
				case "tchr":
					let tchr = teachers.get(formInput.value);
					if (tchr !== undefined) {
						setSchedule(tchr.getSchedule());
						setShowSchedule(true);
					}
					break;
				case "room":
					let room = classrooms.get(formInput.value);
					if (room !== undefined) {
						setSchedule(room.getSchedule());
						setShowSchedule(true);
					}
					break;
				case "subj":
					let subj = subjects.get(formInput.value);
					if (subj !== undefined) {
						setSchedule(subj.getSchedule());
						setShowSchedule(true);
					}
					break;
			}
		}
	}

	const onAddLessonButtonClick = (day: number, hour: number) => {
		setEditLessonData({
			hour: hour,
			day: day,
			classes: Array.from(classes.keys()),
			students: Array.from(students.keys()),
			classrooms: Array.from(classrooms.keys()),
			teachers: Array.from(teachers.keys()),
			subjects: Array.from(subjects.keys())
		});

		setShowAddLessonForm(true);
	}

	let admin = true;
	const [classes, setClasses] = useState(new Map([
		["1.A HUDBA", new Class({
			year: 1,
			letter: "A",
			division: "HUDBA",
			divisionShort: "HUDBA",
			students: ["Milan Pešek, Švanda Dudák"]
		})],
		["3.C POPULÁRNÍ ZPĚV", new Class({
			year: 3,
			letter: "C",
			division: "POPULÁRNÍ ZPĚV",
			divisionShort: "POP",
			students: ["Jurij Gagarin, Miloš Zeman, Agatha Christie"]
		})],
		["5.B MUZIKÁL", new Class({
			year: 5,
			letter: "B",
			division: "MUZIKÁL",
			divisionShort: "MUZ.",
			students: ["Jára Cimrman"]
		})]
	]));
	const [students, setStudents] = useState(new Map([
		["Milan Pešek", new Student({
			name: "Milan",
			surname: "Pešek",
			middleNames: [],
			class: "1.A HUDBA"
		})],
		["Agatha Christie", new Student({
			name: "Agatha",
			surname: "Christie",
			middleNames: [],
			class: "3.C POPULÁRNÍ ZPĚV"
		})],
		["Jurij Gagarin", new Student({
			name: "Jurij",
			surname: "Gagarin",
			middleNames: [],
			class: "3.C POPULÁRNÍ ZPĚV"
		})],
	]));
	const [teachers, setTeachers] = useState(new Map([
		["Jaromír Klepáč", new Teacher({
			name: "Jaromír",
			surname: "Klepáč",
			middleNames: []
		})],
		["Ota Balage", new Teacher({
			name: "Ota",
			surname: "Balage",
			middleNames: []
		})]
	]));
	const [classrooms, setClassrooms] = useState(new Map([
		["463 (rock)", new Classroom({
			number: 463,
			description: "rock"
		})],
		["377 (3.A HUDBA)", new Classroom({
			number: 377,
			description: "3.A HUDBA"
		})]
	]));
	const [subjects, setSubjects] = useState(new Map([
		["Anglický jazyk", new Subject({
			name: "Anglický jazyk",
			shortcut: "AJ"
		})],
		["Český jazyk", new Subject({
			name: "Český jazyk",
			shortcut: "ČJ"
		})],
		["Zpěv - muzikál", new Subject({
			name: "Zpěv - muzikál",
			shortcut: "Zpěv - muz."
		})]
	]));
	const [schedule, setSchedule]: [
		WeekSchedule | undefined,
		Dispatch<React.SetStateAction<WeekSchedule | undefined>>
	] = useState(classes.get('1.A HUDBA')?.getSchedule());
	const [tableTitle, setTableTitle] = useState('1.A HUDBA');
	const [showSchedule, setShowSchedule] = useState(true);
	const [editLessonData, setEditLessonData] = useState({
		day: 0,
		hour: 0,
		classes: Array.from(classes.keys()),
		students: Array.from(students.keys()),
		classrooms: Array.from(classrooms.keys()),
		teachers: Array.from(teachers.keys()),
		subjects: Array.from(subjects.keys())
	});
	const [showAddLessonForm, setShowAddLessonForm] = useState(false);

	let searchFormData: SearchFormParams = {
		isAdmin: admin,
		cls: classes,
		stud: students,
		room: classrooms,
		tchr: teachers,
		subj: subjects,
		onSubmit: onFormSubmit
	}

	return (
		<>
			<div className="App w-11/12 mx-auto my-12 p-10 border-2
			border-gray-400 flex items-center flex-col">
				{!showSchedule ?
					<>
						<Header isAdmin={admin} />
						<SearchForm {...searchFormData} />
					</> :
					<>
						<h1 className="table-title">{tableTitle}</h1>
						<ScheduleTable schedule={schedule}
							hourCount={hourNumber}
							onAddButtonClick={onAddLessonButtonClick} />
					</>}
			</div>
			{showAddLessonForm && <EditLessonForm {...editLessonData} />}
		</>
	);
}

export default App;
