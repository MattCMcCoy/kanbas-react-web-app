import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="p-4">
			<h1>Dashboard</h1> <hr />
			<Modal
				show={show}
				onHide={() => {
					handleClose();
				}}
			>
				<Modal.Header closeButton>Course</Modal.Header>
				<Modal.Body>
					<input
						value={course.name}
						className="form-control"
						onChange={(e) => setCourse({ ...course, name: e.target.value })}
					/>
					<input
						value={course.number}
						className="form-control mt-2"
						onChange={(e) => setCourse({ ...course, number: e.target.value })}
					/>
					<input
						value={course.startDate}
						className="form-control mt-2"
						type="date"
						onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
					/>
					<input
						value={course.endDate}
						className="form-control mt-2"
						type="date"
						onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
					/>
					<button className="btn btn-success mt-3" onClick={addNewCourse}>
						Add
					</button>
					<button className="btn btn-secondary ms-2 mt-3" onClick={updateCourse}>
						Update
					</button>
				</Modal.Body>
			</Modal>
			<h2>
				Published Courses (12)
				<button
					onClick={() => {
						handleShow();
					}}
					className="btn btn-primary ms-5"
				>
					+
				</button>
			</h2>
			<hr />
			<div className="row">
				<div className="row row-cols-1 row-cols-md-5 g-4">
					{courses.map((course) => (
						<div key={course._id} className="col" style={{ width: 300 }}>
							<div className="card">
								<img
									src={require(`./images/${course.image}`)}
									alt={course.name}
									className="card-img-top"
									style={{ height: 150 }}
								/>
								<div className="card-body">
									<Link
										className="card-title"
										to={`/Kanbas/Courses/${course._id}/Home`}
										style={{
											textDecoration: 'none',
											color: 'navy',
											fontWeight: 'bold'
										}}
									>
										{course.name}
									</Link>
									<p className="card-text">{course.name}</p>
									<Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
										Go
									</Link>
									<button
										onClick={(event) => {
											event.preventDefault();
											setCourse(course);
											handleShow();
										}}
										className="btn btn-secondary ms-5"
									>
										Edit
									</button>

									<button
										onClick={(event) => {
											event.preventDefault();
											deleteCourse(course._id);
										}}
										className="btn ms-2 btn-danger"
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
