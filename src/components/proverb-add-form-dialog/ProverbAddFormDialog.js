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

export function ProverbAddFormDialog({ handleClose, handleSubmit, isOpen }) {
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
        />
        <TextField
          margin="dense"
          id="literalTranslation"
          label="literal translation"
          type="text"
          fullWidth
          required
        />
        <TextField
          margin="dense"
          id="meaning"
          label="actual meaning"
          type="text"
          fullWidth
          required
        />
        <TextField
          margin="dense"
          id="moreInfo"
          label="more information: examples, background etc..."
          type="text"
          fullWidth
        />
        {/* TODO accept only audio files */}
        <Input
          margin="dense"
          id="audio"
          label="audio file"
          type="file"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
