import { FaPlus, FaPlusSquare } from 'react-icons/fa';

export default function Buttons({ handleShow }) {
	return (
		<div>
			<ul className="list-group wd-modules w-100">
				<ul className="py-2 col-12 border-bottom border-dark-subtle">
					<div className="ps-auto d-flex flex-row">
						<div className="col-2" />
						<button className="btn btn-md col-2 text-start border-0 rounded-1 coursecard me-2">
							Collapse All
						</button>
						<button
							type="button"
							className="btn btn-md col-2 text-start border-0 rounded-1 coursecard me-2"
						>
							View Progress
						</button>
						<select className="w-25 me-2 border-0 rounded-1 me-1 coursecard me-2">
							<option value="PublishAll" className="small coursecard">
								<i className="fa fa-check-circle text-success me-2"></i>
								Publish All
							</option>
						</select>
						<button
							onClick={handleShow}
							className="coursecard btn btn-md col-2 text-start border-0 rounded-1 text-bg-danger"
						>
							<FaPlus color="white" className="pe-2" />
							Module
						</button>
					</div>
				</ul>
			</ul>
		</div>
	);
}
