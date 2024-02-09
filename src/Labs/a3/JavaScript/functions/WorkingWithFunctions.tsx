import ArrowFunction from './ArrowFunctions';
import ES5Functions from './ES5Functions';
import FunctionDestructing from './FunctionDestructuring';
import FunctionParenthesisAndParameters from './FunctionParenthesisAndParameters';
import ImpliedReturn from './ImpliedReturn';

function WorkingWithFunctions() {
	return (
		<div>
			<ES5Functions />
			<ArrowFunction />
			<ImpliedReturn />
			<FunctionParenthesisAndParameters />
		</div>
	);
}

export default WorkingWithFunctions;
