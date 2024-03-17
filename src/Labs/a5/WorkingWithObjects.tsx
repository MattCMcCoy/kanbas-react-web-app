import axios from 'axios';
import React, { useEffect, useState } from 'react';
function WorkingWithObjects() {
	const [assignment, setAssignment] = useState({
		id: 1,
		title: 'NodeJS Assignment',
		description: 'Create a NodeJS server with ExpressJS',
		due: '2021-10-10',
		completed: false,
		score: 0
	});
	const [module, setModule] = useState({
		id: 1,
		name: 'NodeJS',
		description: 'NodeJS Module',
		course: 'NodeJS Course'
	});
	const ASSIGNMENT_URL = 'http://localhost:4000/a5/assignment';
	const MODULE_URL = 'http://localhost:4000/a5/module';

	const fetchAssignment = async () => {
		const response = await axios.get(`${ASSIGNMENT_URL}`);
		setAssignment(response.data);
	};
	const updateTitle = async () => {
		const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
		setAssignment(response.data);
	};
	useEffect(() => {
		fetchAssignment();
	}, []);

	return (
		<div>
			<h3>Working With Objects</h3>
			<h4>Modifying Properties</h4>
			<a className="btn btn-primary me-2" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
				Update Title
			</a>
			<input
				type="text"
				onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
				value={assignment.title}
			/>
			<a className="btn btn-primary me-2 ms-2" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
				Update Score
			</a>
			<input
				type="number"
				onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
				value={assignment.score}
			/>
			<a className="btn btn-primary me-2 ms-2" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
				Update Completed
			</a>
			<input
				type="checkbox"
				onChange={(e) => setAssignment({ ...assignment, completed: !assignment.completed })}
				value={assignment.completed ? 'true' : 'false'}
			/>
			<h4>Retrieving Objects</h4>
			<a className="btn btn-primary me-2" href="http://localhost:4000/a5/assignment">
				Get Assignment
			</a>
			<h4>Retrieving Properties</h4>
			<a className="btn btn-primary me-2" href="http://localhost:4000/a5/assignment/title">
				Get Title
			</a>
			<h4>Retrieving Objects</h4>
			<a className="btn btn-primary me-2" href={`${MODULE_URL}`}>
				Get Module
			</a>
			<h4>Retrieving Properties</h4>
			<a className="btn btn-primary me-2" href={`${MODULE_URL}/name`}>
				Get Name
			</a>
			<a className="btn btn-primary me-2" href={`${MODULE_URL}/name/${module.name}`}>
				Update Name
			</a>
			<input type="text" onChange={(e) => setModule({ ...module, name: e.target.value })} value={module.name} />
			<a className="btn btn-primary me-2 ms-2" href={`${MODULE_URL}/description/${module.description}`}>
				Update Description
			</a>
			<input
				type="text"
				onChange={(e) => setModule({ ...module, description: e.target.value })}
				value={module.description}
			/>
			<h3>Modifying Properties</h3>
			<input
				onChange={(e) =>
					setAssignment({
						...assignment,
						title: e.target.value
					})
				}
				value={assignment.title}
				type="text"
			/>
			<button onClick={updateTitle}>Update Title to: {assignment.title}</button>
			<button onClick={fetchAssignment}>Fetch Assignment</button>
		</div>
	);
}
export default WorkingWithObjects;
