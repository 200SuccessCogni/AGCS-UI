import { Grid, LinearProgress, Typography } from "@mui/material";

interface Iprops {
    children?: React.ReactNode;
    count: number;
}

export default function LinearProgressWithLabel(props: Iprops) {
    return (
        <>
            <Grid item xs={6} md={9} sx={{ mt: "10px", ml: 2 }}>
                <LinearProgress
                    variant="determinate"
                    color="primary"
                    value={props.count * 10}
                />
            </Grid>
            <Grid item xs={1} md={1} sx={{ ml: "40px" }}>
                <Typography>{props.count}</Typography>
            </Grid>
        </>
    );
}
