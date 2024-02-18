import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SmallNav({ show, handleClose }: { show: boolean; handleClose: () => void }) {
	const [showCourses, setShowCourses] = useState(false);
	const links = [
		{ name: 'Dashboard', link: '/Kanbas/Dashboard/screen.html' },
		{ name: 'Account', link: '/Kanbas/Account/Profile/screen.html' },
		{ name: 'Courses', link: '', newTab: () => setShowCourses(true) },
		{ name: 'Calendar', link: '/Kanbas/Calendar/screen.html' },
		{ name: 'Inbox', link: '/Kanbas/Inbox/screen.html' },
		{ name: 'Studio', link: '/Kanbas/Studio/screen.html' },
		{ name: 'Commons', link: '/Kanbas/Commons/screen.html' },
		{ name: 'History', link: '/Kanbas/History/screen.html' },
		{ name: 'Help', link: '/Kanbas/Help/screen.html' }
	];

	const courses = [
		{ name: 'Home', link: '/Kanbas/Dashboard/screen.html' },
		{ name: 'Modules', link: '/Kanbas/Courses/1/Modules/screen.html' },
		{ name: 'Piazza', link: '/Kanbas/Courses/1/Piazza/screen.html' },
		{ name: 'Assignments', link: '/Kanbas/Courses/1/Assignments/screen.html' },
		{ name: 'Grades', link: '/Kanbas/Courses/1/Grades/screen.html' }
	];

	return (
		<>
			<Modal
				show={show}
				onHide={() => {
					setShowCourses(false);
					handleClose();
				}}
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<ul className="list-group">
						<li className="list-group-item">
							<ul className="list-group">
								{showCourses
									? courses.map((link, index) => (
											<li className="list-group-item">
												<Link
													className="w-100 text-start bg-transparent border-0 text-danger d-flex align-items-center text-decoration-none"
													to={`${link.name}`}
													onClick={() => {
														setShowCourses(false);
														handleClose();
													}}
												>
													{link.name}
												</Link>
											</li>
										))
									: links.map((link, index) => (
											<li className="list-group-item">
												{link.newTab ? (
													<button
														className="w-100 text-start bg-transparent border-0 text-danger d-flex align-items-center"
														onClick={() => setShowCourses(true)}
													>
														{link.name}
														<FaCaretRight color="red" className="ms-auto" />
													</button>
												) : (
													<Link
														className="w-100 text-start bg-transparent border-0 text-danger d-flex align-items-center text-decoration-none"
														to={`../${link.name}`}
													>
														{link.name}
													</Link>
												)}
											</li>
										))}
							</ul>
						</li>
					</ul>
				</Modal.Body>
			</Modal>
		</>
	);
}
