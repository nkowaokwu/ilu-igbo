import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Loading.css";

export function Loading() {
  return (
    <div className="wrapper">
      <FontAwesomeIcon icon={faSpinner} spin size="lg" />
    </div>
  );
}
