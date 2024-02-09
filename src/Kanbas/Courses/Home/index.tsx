import Modules from '../Modules';
import SideBar from './Sidebar';

function Home() {
	return (
		<div className="d-flex flex-row w-100">
			<Modules />
			<div className="ps-5 d-lg-block d-none">
				<SideBar />
			</div>
		</div>
	);
}
export default Home;
