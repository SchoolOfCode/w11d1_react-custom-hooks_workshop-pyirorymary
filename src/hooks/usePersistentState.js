import { useState, useEffect } from "react";

  const usePersistentState = () => {
    const [text, setText] = useState(localStorage.getItem("text") || "");

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  function handleChange(e) {
    setText(e.target.value);
  }
  return {handleChange, text}
}

export default usePersistentState