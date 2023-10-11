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
                content:
                    props.reviewText ||
                    `"I fancy a Macca's" -- words you'll often hear on a Thursday, Friday, or Saturday night in Clapham Junction. If you want to rub shoulders with the stumbling hordes from The Grand and Northcote Road watering holes as they cure their hangovers with meat, grease, and salt, then this is the place! It's disgusting and not in a good way. The few times I've broken down and eaten there I've felt sicker than I would have if I'd just walked on to the kebab/pasty shops or the Sainsbury's/M&S in Clapham Junction station. Â McDonald's has managed to condition us from an early age. Resistance is futile but do try!`,
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
