import {
    Typography,
    Grid,
    Box,
    Switch,
    Avatar,
    TextField,
} from "@mui/material";
import { useState } from "react";

interface IFeatureCard {
    title: string;
    subtitle: string;
    src: string;
}

function FeatureCard(props: IFeatureCard) {
    const [enabled, setEnabled] = useState(false);

    return (
        <Box
            borderRadius={2}
            p={1.5}
            mb={1}
            border="1px solid"
            width="70%"
            position="relative"
        >
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
                <Avatar src={props.src} alt={props.title} variant="rounded">
                    {props.src}
                </Avatar>
                <Box pl={2}>
                    <Typography variant="body2" fontWeight="bold">
                        {props.title}
                    </Typography>
                    <Typography
                        variant="caption"
                        gutterBottom
                        sx={{
                            lineHeight: "120%",
                            display: "inline-block",
                        }}
                    >
                        {props.subtitle}
                    </Typography>
                </Box>
                <Switch
                    checked={props.title === "Demo" ? true : enabled}
                    onChange={() => setEnabled(!enabled)}
                />
            </Box>

            {!!enabled && (
                <Box mt={2}>
                    <TextField
                        label="Partner Key"
                        size="small"
                        InputProps={{
                            placeholder: "Enter partner key",
                        }}
                        fullWidth
                    />
                </Box>
            )}
        </Box>
    );
}

function Integrations() {
    return (
        <>
            <Typography variant="h5" fontWeight={500}>
                Integrations
            </Typography>
            <Grid container spacing={5}>
                <Grid item md={7}>
                    <Box my={4}>
                        <FeatureCard
                            src=""
                            title="Demo"
                            subtitle="Integrate demo API to get all reviews and take action accrodingly."
                        />
                        <FeatureCard
                            src="./tripadvisor.png"
                            title="Tripadvisor"
                            subtitle="Integrate Tripadvisor to get all reviews and take action accrodingly."
                        />
                        <FeatureCard
                            src="./google.png"
                            title="Google"
                            subtitle="Integrate Google to get all reviews and take action accrodingly."
                        />
                        <FeatureCard
                            src="./booking.png"
                            title="Booking.com"
                            subtitle="Integrate Booking.com to get all reviews and take action accrodingly."
                        />
                    </Box>
                </Grid>
                <Grid item md={5}></Grid>
            </Grid>
        </>
    );
}

export default Integrations;
