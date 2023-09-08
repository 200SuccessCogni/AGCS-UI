import { Grid, LinearProgress, Typography } from "@mui/material";

interface Iprops {
    children?: React.ReactNode;
    count: number;
}

export default function LinearProgressWithLabel(props: Iprops) {
    return (
        <>
            <Grid item md={9} sx={{ mt: "10px", ml: 2 }}>
                <LinearProgress
                    variant="determinate"
                    color="primary"
                    value={props.count * 10}
                />
            </Grid>
            <Grid item md={1} sx={{ ml: "40px" }}>
                <Typography>{props.count}</Typography>
            </Grid>
        </>
    );
}
