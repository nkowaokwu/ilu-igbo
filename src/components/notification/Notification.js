import { Alert } from "@material-ui/lab";
import "./Notification.css";

const messages = {
  create: "Your proverb was uploaded successfully",
  delete: "The proverb has been deleted",
};

export function Notification({ severity, action, onClose }) {
  console.log("notification arguments:", severity, action);
  console.log("messages object", messages);
  return (
    <div className="alert-container">
      <Alert severity={severity} onClose={onClose}>
        {messages[action]}
      </Alert>
    </div>
  );
}
