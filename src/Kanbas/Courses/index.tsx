import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { HiMiniBars3 } from 'react-icons/hi2';
import CourseNavigation from './Navigation';
import { FaAngleRight } from 'react-icons/fa';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import { useEffect, useState } from 'react';
import SmallNav from './Navigation/SmallNav';
import axios from 'axios';

function Courses() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { courseId } = useParams();
	const { pathname } = useLocation();
	const COURSES_API = 'http://localhost:4000/api/courses';
	const [course, setCourse] = useState({
		_id: '0',
		name: 'New Course',
		number: 'New Number',
		startDate: '2023-09-10',
		endDate: '2023-12-15',
		image: 'teslabot.png'
	});
	const findCourseById = async (courseId: string) => {
		if (!courseId) return;
		const response = await axios.get(`${COURSES_API}/${courseId}`);
		setCourse(response.data);
	};
	useEffect(() => {
		if (courseId) {
			findCourseById(courseId);
		}
	}, [courseId]);

	const breadcrumb = pathname.split('/')[4] === 'Home' ? 'Modules' : pathname.split('/')[4];
	return (
		<div>
			<SmallNav show={show} handleClose={handleClose} />
			<div className="border-bottom p-3 d-flex align-items-center">
				<h1 className="d-flex align-items-center pe-4" onClick={handleShow}>
					<HiMiniBars3 color="red" />
				</h1>
				<h3 className="d-flex align-items-center">
					<text className="text-danger">{course?.name}</text>
					<FaAngleRight color="gray" className="p-1" /> {breadcrumb}
				</h3>
			</div>
			<div className="d-flex flex-row">
				<CourseNavigation />
				<div className="pt-5 ps-5 col-10">
					<Routes>
						<Route path="/" element={<Navigate to={'Home'} />} />
						<Route path="Home" element={<Home />} />
						<Route path="Modules" element={<Modules />} />
						<Route path="Piazza" element={<h1>Piazza</h1>} />
						<Route path="Assignments" element={<Assignments />} />
						<Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
						<Route path=":courseId/Grades" element={<h1>Grades</h1>} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Courses;
