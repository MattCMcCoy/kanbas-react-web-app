import React from 'react';
import {
	FaCheckCircle,
	FaEllipsisV,
	FaPlus,
	FaPlusCircle
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { assignments } from '../../Database';
function Assignments() {
	const { courseId } = useParams();
	const assignmentList = assignments.filter(
		(assignment) => assignment.course === courseId
	);
	return (
		<div className="w-100">
			<div className="w-100 d-flex flex-row border-bottom mb-2 pb-4">
				<form>
					<div className="w-100">
						<input
							type="text"
							className="form-control p-3"
							id="search"
							placeholder="Search For Assignment"
						/>
					</div>
				</form>
				<button className="coursecard btn btn-md ms-auto mb-2 col-2 text-start border-0 rounded-1">
					<FaPlus className="pe-2" />
					Group
				</button>
				<button className="coursecard btn btn-md ms-3 mb-2 col-2 text-start border-0 rounded-1 text-bg-danger">
					<FaPlus color="white" className="pe-2" />
					Assignment
				</button>
			</div>
			<ul className="list-group wd-modules">
				<li className="list-group-item col-12 w-100 coursecard rounded">
					<div className="p-4 w-100">
						<div className="d-flex flex-row align-items-center">
							<FaEllipsisV size={'20'} className="me-2 mb-1" />
							<span className="h4">ASSIGNMENTS</span>
							<span className="ms-auto">
								<FaCheckCircle
									size={'20'}
									className="text-success"
								/>
								<FaPlusCircle size={'20'} className="ms-2" />
								<FaEllipsisV size={'20'} className="ms-2" />
							</span>
						</div>
					</div>
					<ul className="list-group">
						{assignmentList.map((assignment) => (
							<li className="list-group-item coursecardlight">
								<div className="d-flex flex-row align-items-center">
									<FaEllipsisV size={'20'} className="me-2" />
									<div className="d-flex flex-column">
										<Link
											to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
											className="h4 text-decoration-none text-dark"
										>
											{assignment.title}
										</Link>
										<span>
											Multiple Modules | Due Sep 18 at
											11:59pm | 100 pts
										</span>
									</div>
									<span className="ms-auto">
										<FaCheckCircle
											size={'20'}
											className="text-success"
										/>
										<FaEllipsisV
											size={'20'}
											className="ms-2"
										/>
									</span>
								</div>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
}
export default Assignments;
