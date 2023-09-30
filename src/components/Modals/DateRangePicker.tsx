import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IDateRangePicker } from "@/interfaces/modal.interface";
import { DateRangePicker } from "react-date-range";
import "../../App.css";
import dayjs from "dayjs";

export default function DateRangePickerModal(props: IDateRangePicker) {
    const [state, setState] = useState([
        {
            startDate: dayjs(new Date()).subtract(6, "day").toDate(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    return (
        <div>
            <Dialog
                open={props.show}
                onClose={() => props.closeHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"lg"}
            >
                <DialogTitle id="alert-dialog-title">
                    Choose Date Range
                </DialogTitle>
                <DialogContent>
                    <DateRangePicker
                        onChange={(item: any) => setState([item.selection])}
                        // showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={state}
                        direction="horizontal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => props.closeHandler(false)}
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button
                        color="black"
                        variant="contained"
                        onClick={() => props.closeHandler(false, state)}
                        autoFocus
                    >
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
