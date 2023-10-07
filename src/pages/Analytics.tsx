import { useEffect, useState } from "react";
import LinearProgressWithLabel from "../components/core/linearProgressWithLabel";
import LineChart from "../components/charts/LineChart";
import ReviewForm from "../components/review/ReviewForm";
import useApp from "../store/app.context";
import { GET } from "../services/api.service";

import { Box, Grid, Typography, Container } from "@mui/material";

function Dashboard() {
    const [insights, setInsights] = useState([]);
    const { setLoader } = useApp();
    const onFilterApply = (data: any) => {
        // console
    };

    useEffect(() => {
        getInsights();
    }, []);

    const getInsights = async (resortId = "649da3f7953f4d5cdeaff1c1") => {
        setLoader(true);
        try {
            const res = await GET(`/review/reviewStats?resortId=${resortId}`);
            if (res && res.status === 200) {
                setInsights(res.data.analytics);
            }
        } catch (err) {
            console.log(err);
        }

        setLoader(false);
    };
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
                Insights & Analytics
            </Typography>
            <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={12} md={9}>
                    <Container
                        sx={{
                            backgroundColor: "primary.light",
                            borderRadius: "1rem",
                            px: 2,
                            py: 4,
                        }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        backgroundColor: "primary.main",
                                        borderRadius: "1rem",
                                        p: 2,
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        color="text.contrastText"
                                    >
                                        Top Performing Amenity
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            color="text.contrastText"
                                            fontWeight={500}
                                        >
                                            Food & Drinks
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor:
                                                    "secondary.dark",
                                                px: 2,
                                                py: 1,
                                                borderRadius: 2,
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                color="text"
                                                fontWeight={500}
                                            >
                                                9
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        backgroundColor: "secondary.dark",
                                        borderRadius: "1rem",
                                        p: 2,
                                        height: "100%",
                                    }}
                                >
                                    <Typography variant="caption">
                                        Low Performing Amenity
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            color="text"
                                            fontWeight={500}
                                        >
                                            Parking
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "primary.main",
                                                px: 2,
                                                py: 1,
                                                borderRadius: 2,
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                color="text.contrastText"
                                                fontWeight={500}
                                            >
                                                2
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box
                        sx={{
                            backgroundColor: "secondary.light",
                            my: 3,
                            py: 2,
                        }}
                    >
                        {insights &&
                            insights.map((e: any) => (
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        borderRadius: 2,
                                    }}
                                >
                                    <Grid item xs={5} md={2}>
                                        <Typography variant="body1">
                                            {e._id.toUpperCase()}
                                        </Typography>
                                    </Grid>
                                    <LinearProgressWithLabel count={e.count} />
                                </Box>
                            ))}
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "secondary.light",
                            borderRadius: "10px",
                            p: 3,
                            width: "100%",
                        }}
                    >
                        <Typography
                            variant="body1"
                            gutterBottom
                            fontWeight={500}
                        >
                            Filters
                        </Typography>
                        <ReviewForm
                            sourcesFilter={onFilterApply}
                            showCategory={false}
                        />
                    </Box>
                </Grid>
            </Grid>
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
