import { useEffect } from "react";

function useDocumentTitle(text) {
	useEffect(() => {
		document.title = text;
	}, [text]);
}

export default useDocumentTitle;
