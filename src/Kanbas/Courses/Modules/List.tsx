import React, { useState } from 'react';
import './index.css';
import { modules } from '../../Database';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
function ModuleList() {
	const { courseId } = useParams();
	const modulesList = modules.filter((module) => module.course === courseId);
	const [selectedModule, setSelectedModule] = useState(modulesList[0]);

	return (
		<ul className="list-group wd-modules d-flex flex-col w-100">
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
								<FaCheckCircle
									size={'20'}
									className="text-success"
								/>
								<FaPlusCircle size={'20'} className="ms-2" />
								<FaEllipsisV size={'20'} className="ms-2" />
							</span>
						</div>
						{selectedModule._id === module._id && (
							<ul className="list-group rounded">
								{module.lessons?.map((lesson) => (
									<li className="list-group-item coursecardlight">
										<FaEllipsisV
											size={'20'}
											className="me-2"
										/>
										{lesson.name}
										<span className="float-end">
											<FaCheckCircle
												size={'20'}
												className="text-success"
											/>
											<FaEllipsisV
												size={'20'}
												className="ms-2"
											/>
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
