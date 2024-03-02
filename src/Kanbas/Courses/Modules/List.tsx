import React, { useState } from 'react';
import './index.css';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addModule, deleteModule, updateModule, setModule } from './modulesReducer';
import { KanbasState } from '../../store';

function ModuleList({ show, setShow }) {
	const { courseId } = useParams();

	const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
	const module = useSelector((state: KanbasState) => state.modulesReducer.module);
	const dispatch = useDispatch();

	const modulesList = moduleList.filter((module) => module.course === courseId);
	const [selectedModule, setSelectedModule] = useState(modulesList[0]);

	const handleClose = () => setShow(false);

	return (
		<ul className="list-group wd-modules d-flex flex-col w-100">
			<Modal
				show={show}
				onHide={() => {
					handleClose();
				}}
			>
				<Modal.Header closeButton>Course</Modal.Header>
				<Modal.Body>
					<li className="list-group-item">
						<input
							className="form-control me-5 mt-2"
							value={module.name}
							onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
						/>
						<textarea
							className="form-control me-5 mt-2"
							value={module.description}
							onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
						/>
					</li>
					<button
						className="ms-2 mt-3 btn btn-success rounded-5"
						onClick={() => dispatch(addModule({ ...module, course: courseId }))}
					>
						Add
					</button>
					<button
						className="btn ms-2 mt-3 btn-secondary rounded-5"
						onClick={() => dispatch(updateModule(module))}
					>
						Update
					</button>
				</Modal.Body>
			</Modal>
			{modulesList.map((module) => (
				<div>
					<li
						className="list-group-item col-12 w-100 coursecard rounded"
						onClick={() => setSelectedModule(module)}
					>
						<div className="p-4 w-100">
							<FaEllipsisV size={'20'} className="me-2" />
							{module.name}

							<span className="float-end">
								<FaCheckCircle size={'20'} className="text-success" />
								<FaPlusCircle size={'20'} className="ms-2" />
								<FaEllipsisV size={'20'} className="ms-2" />
								<button
									className="btn btn-secondary me-2"
									onClick={(event) => {
										dispatch(setModule(module));
										setShow(true);
									}}
								>
									Edit
								</button>

								<button
									type="button"
									className="btn btn-danger"
									onClick={() => dispatch(deleteModule(module._id))}
								>
									Delete
								</button>
							</span>
						</div>
						{selectedModule._id === module._id && (
							<ul className="list-group rounded">
								{module.lessons?.map((lesson) => (
									<li className="list-group-item coursecardlight">
										<FaEllipsisV size={'20'} className="me-2" />
										{lesson.name}
										<span className="float-end">
											<FaCheckCircle size={'20'} className="text-success" />
											<FaEllipsisV size={'20'} className="ms-2" />
										</span>
									</li>
								))}
							</ul>
						)}
					</li>
					<br />
					<br />
				</div>
			))}
		</ul>
	);
}
export default ModuleList;
