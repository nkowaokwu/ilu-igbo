import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import "./proverbs-json.css";
import * as api from "../../services/db-service";
import { validateProverbs } from "../../utils";

function ProverbsJson() {
  const [info, setInfo] = useState(false);
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(true);
  const [json, setJson] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  function onApiResponse(error) {
    setInfo(true);
    setProcessing(false);
    if (error) {
      setSuccess(false);
      setMessage(error.message);
    } else {
      setSuccess(true);
      const len = JSON.parse(json).length;
      setMessage(`${len} proverb${len > 1 ? "s" : ""} uploaded successfully`);
    }
    // clear json input
    setJson("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("about to create new proverbs:", json);
    setProcessing(true);

    try {
      // validate JSON
      const provs = JSON.parse(json);
      // validate proverbs schema
      const valid = validateProverbs(provs);
      if (!valid) throw new Error("Invalid proverbs schema");
      console.log("proverbs length:", provs.length);
      // push updates to firebase api
      api.batchUpload(provs, onApiResponse);
    } catch (e) {
      console.log("an error occured:", e);
      setInfo(true);
      setSuccess(false);
      setProcessing(false);
      setMessage(e.message);
    }
  }

  return (
    <div className="col-md-7 mx-auto">
      <h2 className="text-center">Batch Upload</h2>
      {info && (
        <div
          className={`info-box d-flex p-2 border border-${
            success ? "success" : "danger"
          }`}
        >
          <div className="info-icon pr-2">
            {success ? (
              <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
            )}
          </div>
          <div className={`text-${success ? "success" : "danger"}`}>
            {message}
          </div>
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
          disabled={processing}
        >
          {processing && <FontAwesomeIcon icon={faSpinner} spin />}
          {processing ? " processing..." : "upload"}
        </button>
      </form>
    </div>
  );
}

export default ProverbsJson;
