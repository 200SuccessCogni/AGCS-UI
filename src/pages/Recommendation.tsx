import UnderConstruction from "../components/app/UnderConstruction";
import {
    Typography,
    OutlinedInput,
    FormControl,
    InputLabel,
    IconButton,
    InputAdornment,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import React from "react";

function Recommendation() {
    return (
        <div>
            <Typography variant="h5" fontWeight={500}>
                Recommendation
            </Typography>
            <UnderConstruction />
            <FormControl
                fullWidth
                sx={{
                    m: 1,
                    position: "sticky",
                    bottom: "1rem",
                    backgroundColor: "secondary.light",
                }}
            >
                <InputLabel htmlFor="outlined-adornment-propmt">
                    Send a propmt
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-propmt"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                //   onClick={handleClickShowPassword}
                                //   onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                <SendRoundedIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Live Propmt"
                />
            </FormControl>
        </div>
    );
}

export default Recommendation;
