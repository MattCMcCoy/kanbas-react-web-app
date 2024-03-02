import { useState } from 'react';
import Buttons from './Buttons';
import ModuleList from './List';
function Modules() {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	return (
		<div className="d-flex flex-column w-100">
			<Buttons handleShow={handleShow} />
			<div className="pt-3">
				<ModuleList show={show} setShow={setShow} />
			</div>
		</div>
	);
}
export default Modules;
