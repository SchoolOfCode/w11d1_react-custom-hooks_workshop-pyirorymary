import useDocumentTitle from "../../hooks/useDocumentTitle";
import useCounter from "../../hooks/useCounter";

function BasicCounter() {
	const { count, increment, decrement } = useCounter();

	return (
		<div>
			{useDocumentTitle(count)}
			<h4>Basic Counter</h4>
			<button onClick={decrement}>Less</button>
			<output>{count}</output>
			<button onClick={increment}>More</button>
		</div>
	);
}

export default BasicCounter;
