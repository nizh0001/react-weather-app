import { useEffect } from "react";
import "./FeedbackBar.css";

function FeedbackBar({ errorMessage, setErrorMessage }) {
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, setErrorMessage]);

  if (!errorMessage) return null;
  return <p className="errorMessage">{errorMessage}</p>;
}
export default FeedbackBar;
