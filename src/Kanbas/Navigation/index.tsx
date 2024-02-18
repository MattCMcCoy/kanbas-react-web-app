import { Link, useLocation } from 'react-router-dom';
import './index.css';
import {
	FaTachometerAlt,
	FaRegUserCircle,
	FaBook,
	FaRegCalendarAlt,
	FaInbox,
	FaClock,
	FaTv,
	FaArrowRight,
	FaQuestionCircle
} from 'react-icons/fa';
function KanbasNavigation() {
	const links = [
		{
			label: 'Account',
			icon: <FaRegUserCircle color="Grey" className="fs-2" />
		},
		{
			label: 'Dashboard',
			icon: <FaTachometerAlt color="red" className="fs-2" />
		},
		{ label: 'Courses', icon: <FaBook color="red" className="fs-2" /> },
		{
			label: 'Calendar',
			icon: <FaRegCalendarAlt color="red" className="fs-2" />
		},
		{ label: 'Inbox', icon: <FaInbox color="red" className="fs-2" /> },
		{
			label: 'History',
			icon: <FaClock color="red" className="fs-2 fa-o" />
		},
		{ label: 'Studio', icon: <FaTv color="red" className="fs-2" /> },
		{
			label: 'Commons',
			icon: <FaArrowRight color="red" className="fs-2" />
		},
		{
			label: 'Help',
			icon: <FaQuestionCircle color="red" className="fs-2" />
		}
	];
	const { pathname } = useLocation();
	return (
		<ul className="wd-kanbas-navigation d-none d-md-block">
			<li className="wd-neu">
				<Link
					className="wd-neu text-danger"
					to={`https://www.northeastern.edu/`}
				>
					N
				</Link>
			</li>
			{links.map((link, index) => (
				<li
					key={index}
					className={pathname.includes(link.label) ? 'wd-active' : ''}
				>
					<Link to={`/Kanbas/${link.label}`}>
						{link.icon} {link.label}{' '}
					</Link>
				</li>
			))}
		</ul>
	);
}
export default KanbasNavigation;
