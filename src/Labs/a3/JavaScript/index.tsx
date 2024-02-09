import WorkingWithFunctions from './functions/WorkingWithFunctions';
import IfElse from './conditionals/IfElse';
import TernaryOperator from './conditionals/TernaryOperator';
import BooleanVariables from './variables/BooleanVariables';
import VariableTypes from './variables/VariableTypes';
import VariablesAndConstants from './variables/VariablesAndConstants';
import WorkingWithArrays from './arrays/WorkingWithArrays';
import JsonStringify from './json/JSONStringify';
import TemplateLiterals from './string/TemplateLiterals';
import House from './json/House';
import Spreading from './json/Spreading';
import Destructing from './json/Destructuring';
import FunctionDestructing from './functions/FunctionDestructuring';

function JavaScript() {
	console.log('Hello World!');
	return (
		<div>
			<h1>JavaScript</h1>
			<VariablesAndConstants />
			<VariableTypes />
			<BooleanVariables />
			<IfElse />
			<TernaryOperator />
			<WorkingWithFunctions />
			<WorkingWithArrays />
			<JsonStringify />
			<TemplateLiterals />
			<House />
			<Spreading />
			<Destructing />
			<FunctionDestructing />
		</div>
	);
}
export default JavaScript;
