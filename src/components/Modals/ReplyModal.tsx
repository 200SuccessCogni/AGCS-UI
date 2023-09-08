import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IReplyModal } from "@/interfaces/modal.interface";
import { Typography, TextField, Box, Rating } from "@mui/material";

export default function ReplyModal(props: IReplyModal) {
    const [message, setMessage] = useState(
        "We are thrilled to hear you love your vacation at Club Wyndham Bonnet Creek. We look forward to welcoming you back soon. Thank you!"
    );

    return (
        <div>
            <Dialog
                open={props.show}
                onClose={() => props.closeHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"sm"}
            >
                <DialogTitle id="alert-dialog-title">Reply Message</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                        }}
                    >
                        <Typography variant="body1" fontWeight="600">
                            {props.title}
                        </Typography>
                        <Rating
                            name="read-only"
                            value={props.rating}
                            readOnly
                        />
                    </Box>
                    <Typography variant="body2">{props.description}</Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Reply message"
                        fullWidth
                        multiline
                        maxRows={4}
                        inputProps={{
                            value: message,
                            name: message,
                        }}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{ my: 3 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.closeHandler(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => props.closeHandler(false)} autoFocus>
                        Post
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
