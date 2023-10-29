import React from "react";
import { Box, Typography } from "@mui/material";
import { OverallScoreType } from "../types/analytics";
import { camelCaseToTitleCase } from "../../../services/shared.service";
import LinearProgressWithLabel from "../../../components/core/linearProgressWithLabel";

function OverallScore(props: OverallScoreType) {
    return (
        <Box
            sx={{
                backgroundColor: props.backgroundColor || "#fff",
                my: 3,
                p: 2,
                borderRadius: "1rem",
            }}
        >
            <Typography
                variant="body1"
                gutterBottom
                fontWeight={500}
                sx={{ mb: 2 }}
            >
                Overall Score
            </Typography>
            {props.scores &&
                props.scores.map((e: { label: string; value: number }) => (
                    <Box
                        key={e.label}
                        sx={{
                            px: 2,
                            py: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: 2,
                        }}
                    >
                        <Box flexBasis="20%">
                            <Typography variant="body1">
                                {camelCaseToTitleCase(e.label)}
                            </Typography>
                        </Box>
                        <LinearProgressWithLabel count={e.value} />
                    </Box>
                ))}
        </Box>
    );
}

export default OverallScore;
