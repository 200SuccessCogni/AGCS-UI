import { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IReplyModal } from "@/interfaces/modal.interface";
import { Typography, TextField, Box, Rating } from "@mui/material";
import { POST } from "../../services/api.service";
import useApp from "../../store/app.context";

export default function ReplyModal(props: IReplyModal) {
    const { setLoader } = useApp();
    const [message, setMessage] = useState("");

    const getReplyMsg = useCallback(async () => {
        const url = "/gen/reply";
        setLoader(true);
        try {
            const res = await POST(url, { content: props.description });
            if (res && res.status === 200) {
                setMessage(res?.data.data);
            }
            setLoader(false);
        } catch (err) {
            setLoader(false);
        }
    }, []);

    useEffect(() => {
        getReplyMsg();
    }, []);

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
                    <Button
                        onClick={() => props.closeHandler(false)}
                        color="black"
                        variant="contained"
                        autoFocus
                    >
                        Post
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
