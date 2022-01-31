import { useEffect } from "react";
function useDocumentTitle(text) {
  useEffect(() => {
    document.title = text;
  }, [text]);

  return <div>useDocumentTitle Hook</div>;
}

export default useDocumentTitle;
