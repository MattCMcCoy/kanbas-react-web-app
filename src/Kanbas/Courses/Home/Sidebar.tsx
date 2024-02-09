export default function SideBar() {
	const coursestatusbuttons = [
		'Import Existing Content',
		'Import From Commons',
		'Choose Home Page',
		'View Course Stream',
		'New Announcement',
		'View Course Notifications'
	];
	const todo = [
		{
			Assignment: 'Grade A1 - ENV + HTML',
			PointDue: '100 points - Sep 18 at 11:59pm'
		}
	];
	const comingup = [
		{
			type: 'Lecture',
			class: 'CS4550.12631.202410',
			date: 'Sep 7 at 11:45am'
		}
	];

	return (
		<div>
			<div className="row">
				<h5>Course Status</h5>
			</div>
			{coursestatusbuttons.map((button, index) => (
				<div className="row pb-1" key={index}>
					<button
						className="text-start border-0 rounded-1 p-3"
						type="button"
					>
						{button}
					</button>
				</div>
			))}
			<div className="border-bottom justify-content-center align-content-center pt-2">
				<h5>To Do</h5>
			</div>
			<div>
				{todo.map((button, index) => (
					<button
						className="border-0 rounded-1 bg-transparent"
						key={index}
					>
						<div className="text-start text-danger">
							{button.Assignment}
						</div>
						<div className="text-muted text-start">
							{button.PointDue}
						</div>
					</button>
				))}
			</div>
			<div className="row border-bottom justify-content-center align-content-center">
				<h5 className="col-6">Coming Up</h5>
				<button
					className="col-6 border-0 rounded-1 bg-transparent text-danger"
					type="button"
				>
					<small>
						<small>View Calendar</small>
					</small>
				</button>
			</div>
			<div>
				{comingup.map((button, index) => (
					<button
						className="border-0 rounded-1 bg-transparent"
						key={index}
					>
						<div className="text-start text-danger">
							{button.type}
						</div>
						<div className="text-muted text-start">
							{button.class}
						</div>
						<div className="text-muted text-start">
							{button.date}
						</div>
					</button>
				))}
			</div>
		</div>
	);
}
