import { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import * as api from "../../services/db-service";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export function ProverbAddFormDialog({ handleClose, handleSubmit, isOpen }) {
  const [text, setText] = useState("");
  const [literalTranslation, setLiteralTranslation] = useState("");
  const [meaning, setMeaning] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  // const [audio, setAudio] = useState("");
  const [tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    api.initializeFirebase();
    api.fetchTags(setAllTags);
  }, []);
  useEffect(() => {
    console.log("allTags", allTags);
  });

  function onSubmit() {
    const proverb = {
      text,
      literalTranslation,
      meaning,
      moreInfo,
      tags,
    };
    handleSubmit(proverb);
  }

  function handleAutocomplete(e, value) {
    setTags([...value]);
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="add-form-dialog-title">Add New Proverb</DialogTitle>
      <DialogContent>
        <DialogContentText>fields marked * are required</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="text"
          label="proverb in igbo"
          type="text"
          fullWidth
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          margin="dense"
          id="literalTranslation"
          label="literal translation"
          type="text"
          fullWidth
          required
          value={literalTranslation}
          onChange={(e) => setLiteralTranslation(e.target.value)}
        />
        <TextField
          margin="dense"
          id="meaning"
          label="actual meaning"
          type="text"
          fullWidth
          required
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
        <TextField
          margin="dense"
          id="moreInfo"
          label="more information: examples, background etc..."
          type="text"
          fullWidth
          value={moreInfo}
          onChange={(e) => setMoreInfo(e.target.value)}
        />
        {/* TODO accept only audio files */}
        {/* TODO on submit, push audio to file server first then return url for submission to API */}
        {/*<Input
          margin="dense"
          id="audio"
          label="audio file"
          type="file"
          fullWidth
        />*/}

        {/* TODO create a new tag in backend when user enters a tag that doesn't already exist */}
        <Autocomplete
          multiple
          limitTags={2}
          id="tags"
          options={allTags}
          autoComplete={true}
          autoHighlight={true}
          disableCloseOnSelect={true}
          renderInput={(params) => (
            <TextField {...params} label="Tags" placeholder="Tags" />
          )}
          freeSolo
          value={tags}
          onChange={handleAutocomplete}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button onClick={onSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
