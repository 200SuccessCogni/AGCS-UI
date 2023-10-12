import React from "react";
import { Box, Typography } from "@mui/material";
import LineChart from "../../../components/charts/LineChart";
import { AnalyticsChartType } from "../types/analytics";
import { camelCaseToTitleCase } from "../../../services/shared.service";

function AnalyticsChart(props: AnalyticsChartType) {
    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: "bottom",
                display: false,
            },
            title: {
                display: true,
                // text: "Review Sources",
            },
            tooltip: {
                enabled: true,
                position: "nearest",
            },
            chartAreaBorder: {
                borderColor: "red",
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 2,
            },
        },
    };

    return (
        <Box
            sx={{
                background: "secondary.dark",
                borderRadius: "10px",
                width: "100%",
            }}
        >
            <Box p={2}>
                <LineChart
                    chartData={props.data}
                    options={{ ...props.options, ...options }}
                />
            </Box>
            <Typography variant="body2" align="center">
                {camelCaseToTitleCase(props.label)}
            </Typography>
        </Box>
    );
}

export default AnalyticsChart;
