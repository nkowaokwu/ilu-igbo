import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./proverbs-json.css";
import * as api from "../../services/db-service";

function ProverbsJson() {
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [success, setSuccess] = useState("");
  const [json, setJson] = useState("");

  useEffect(() => {}, []);

  function handleProverbCreateEnd(res) {
    // setCreating(false);
    // setCreated(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("about to create new proverbs:", json);
    // setCreating(true);
    // api.createProverb(prov, handleProverbCreateEnd);
  }

  return (
    <div className="col-md-7 mx-auto">
      <h2 className="text-center">Batch Upload</h2>
      {info && (
        <div className="info-area" class="hidden">
          <div className="info-icon">
            success ? <span className="fa fa-"></span>:
            <span className="fa fa-error"></span>
          </div>
          <div className="info">{message}</div>
        </div>
      )}
      <form className="py-2">
        <label htmlFor="json-input" className="small">
          Paste in JSON of proverbs:
        </label>
        <textarea
          rows="10"
          placeholder={placeholder}
          value={json}
          onChange={(e) => setJson(e.target.value)}
          id="json-input"
          className="form-control mb-1"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="btn btn-primary d-block ml-auto my-1"
        >
          {processing && <span className="fa fa-spinner fa-spin"></span>}
          {processing ? " processing..." : "upload"}
        </button>
      </form>
    </div>
  );
}

export default ProverbsJson;
