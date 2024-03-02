import { Routes, Route, Navigate } from 'react-router';
import Nav from '../Nav';
import Dashboard from './Dashboard';
import KanbasNavigation from './Navigation';
import Courses from './Courses';
import { courses as dbCourses } from './Database';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
function Kanbas() {
	const [courses, setCourses] = useState(dbCourses);
	const [course, setCourse] = useState({
		_id: '0',
		name: 'New Course',
		number: 'New Number',
		startDate: '2023-09-10',
		endDate: '2023-12-15',
		image: 'teslabot.png'
	});
	const deleteCourse = (courseId: string) => {
		setCourses(courses.filter((course) => course._id !== courseId));
	};

	const addNewCourse = () => {
		const newCourse = { ...course, _id: new Date().getTime().toString() };
		setCourses([...courses, { ...course, ...newCourse }]);
	};

	const updateCourse = () => {
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					return course;
				} else {
					return c;
				}
			})
		);
	};
	return (
		<Provider store={store}>
			<div>
				<Nav />
				<div className="d-flex">
					<KanbasNavigation />
					<div style={{ flexGrow: 1 }}>
						<Routes>
							<Route path="/" element={<Navigate to="Dashboard" />} />
							<Route path="Account" element={<h1>Account</h1>} />
							<Route
								path="Dashboard"
								element={
									<Dashboard
										courses={courses}
										course={course}
										setCourse={setCourse}
										addNewCourse={addNewCourse}
										deleteCourse={deleteCourse}
										updateCourse={updateCourse}
									/>
								}
							/>
							<Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
						</Routes>
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default Kanbas;
