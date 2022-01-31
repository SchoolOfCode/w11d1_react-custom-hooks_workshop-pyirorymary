import { useState } from "react";

export default function useCounter() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((count) => count + 1);
	}

	function decrement() {
		setCount((count) => Math.max(0, count - 1));
	}

	return { count, increment, decrement };
}
