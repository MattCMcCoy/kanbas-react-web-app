import Buttons from './Buttons';
import ModuleList from './List';
function Modules() {
	return (
		<div className="d-flex flex-column w-100">
			<Buttons />
			<div className="pt-3">
				<ModuleList />
			</div>
		</div>
	);
}
export default Modules;
