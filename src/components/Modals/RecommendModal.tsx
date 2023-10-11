import { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { POST } from "../../services/api.service";
import useApp from "../../store/app.context";

interface IRecModal {
    reviewText: string;
    show: boolean;
    closeHandler: () => void;
}

function RecommendModal(props: IRecModal) {
    const { setLoader, loader } = useApp();
    const [message, setMessage] = useState("");

    const getRecommendation = useCallback(async () => {
        const url = "/gen/recommend";
        setLoader(true);
        try {
            const res = await POST(url, {
                content: props.reviewText,
            });
            if (res && res.status === 200) {
                setMessage(res?.data.data);
            }
            setLoader(false);
        } catch (err) {
            setLoader(false);
        }
    }, [props.reviewText]);

    useEffect(() => {
        setMessage("");
        getRecommendation();
    }, [props.reviewText]);

    return (
        <div>
            <Dialog
                open={props.show}
                onClose={() => props.closeHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"sm"}
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    AI Recommendation
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2">
                        {loader ? "Please wait..." : message}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={props.closeHandler}
                        color="black"
                        variant="contained"
                        autoFocus
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default RecommendModal;
