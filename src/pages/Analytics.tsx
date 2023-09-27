import LineChart from "../components/charts/LineChart";
import { Box, Grid, Typography } from "@mui/material";

function Dashboard() {
    const userData1 = {
        labels: ["26/06", "27/06", "28/06", "29/06", "30/06", "01/07", "02/07"],
        datasets: [
            {
                backgroundColor: [
                    "#51EAEA",
                    "#FCDDB0",
                    "#FF9D76",
                    "#FB3569",
                    "#82CD47",
                    "#DACD47",
                    "#AACD47",
                ],
                data: [4.2, 3.7, 1.8, 5, 4.1, 2.5, 4.6],
            },
        ],
    };
    const userData2 = {
        labels: ["26/06", "27/06", "28/06", "29/06", "30/06", "01/07", "02/07"],
        datasets: [
            {
                backgroundColor: [
                    "#51EAEA",
                    "#FCDDB0",
                    "#FF9D76",
                    "#FB3569",
                    "#82CD47",
                    "#DACD47",
                    "#AACD47",
                ],
                data: [2.2, 4.7, 2.8, 4.5, 4.1, 3.5, 2.6],
            },
        ],
    };
    const userData3 = {
        labels: ["26/06", "27/06", "28/06", "29/06", "30/06", "01/07", "02/07"],
        datasets: [
            {
                backgroundColor: [
                    "#51EAEA",
                    "#FCDDB0",
                    "#FF9D76",
                    "#FB3569",
                    "#82CD47",
                    "#DACD47",
                    "#AACD47",
                ],
                data: [3.2, 4.7, 2.8, 4.5, 1.1, 3.5, 4.6],
            },
        ],
    };
    const userData4 = {
        labels: ["26/06", "27/06", "28/06", "29/06", "30/06", "01/07", "02/07"],
        datasets: [
            {
                backgroundColor: [
                    "#51EAEA",
                    "#FCDDB0",
                    "#FF9D76",
                    "#FB3569",
                    "#82CD47",
                    "#DACD47",
                    "#AACD47",
                ],
                data: [3.2, 4.7, 2.8, 3.5, 4.1, 4.5, 3.6],
            },
        ],
    };
    const options = {
        responsive: true,
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
        <>
            <Typography variant="h5" fontWeight={500}>
                Analytics
            </Typography>
            <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "10px",
                            width: "100%",
                        }}
                    >
                        <Box px={10}>
                            <LineChart
                                chartData={userData1}
                                options={options}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            Cleanliness
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "10px",
                            width: "100%",
                        }}
                    >
                        <Box px={10}>
                            <LineChart
                                chartData={userData2}
                                options={options}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            Activities
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "10px",
                            width: "100%",
                        }}
                    >
                        <Box px={10}>
                            <LineChart
                                chartData={userData3}
                                options={options}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            Comfort
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "10px",
                            width: "100%",
                        }}
                    >
                        <Box px={10}>
                            <LineChart
                                chartData={userData4}
                                options={options}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            Destination
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "10px",
                            width: "100%",
                        }}
                    >
                        <Box px={10}>
                            <LineChart
                                chartData={userData2}
                                options={options}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            Facilities
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "10px",
                            width: "100%",
                        }}
                    >
                        <Box px={10}>
                            <LineChart
                                chartData={userData1}
                                options={options}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            Food & Drinks
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;
