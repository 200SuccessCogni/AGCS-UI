import { useEffect, useState } from "react";
import LinearProgressWithLabel from "../components/core/linearProgressWithLabel";
import LineChart from "../components/charts/LineChart";
import ReviewForm from "../components/module/review/ReviewForm";
import useApp from "../store/app.context";
import { GET } from "../services/api.service";

import {
    Box,
    Grid,
    Typography,
    Container,
    Link,
    Button,
    Chip,
} from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const initChartDataSet = [
    {
        label: "Bathroom",
        data: [2, 4, 2, 4, 2, 3, 2],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.4,
        pointHoverBorderWidth: 1,
    },
    {
        label: "Bedroom",
        data: [4, 4, 2, 4, 2, 3, 3],
        borderColor: "rgb(53, 162, 235)",
        tension: 0.4,
        pointHoverBorderWidth: 1,
    },
    {
        label: "Housekeeping",
        data: [2, 1, 2, 3, 2.5, 3, 2],
        borderColor: "#095F59",
        tension: 0.4,
        pointHoverBorderWidth: 1,
    },
    {
        label: "Restaurant",
        data: [3, 4, 3, 4, 2, 1, 2],
        borderColor: "#FFD681",
        tension: 0.4,
        pointHoverBorderWidth: 1,
    },
];

function Dashboard() {
    const [insights, setInsights] = useState([]);
    const { setLoader } = useApp();
    const [dateSet, setDataSet] = useState(initChartDataSet);
    const [appliedDateSet, setAppliedDateSet] = useState(initChartDataSet);

    const handleDelete = (index: number) => {
        setAppliedDateSet(
            appliedDateSet.filter(
                (e) => e.label !== appliedDateSet[index].label
            )
        );
    };

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
                            pb: 3,
                            pt: 2,
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="text.contrastText"
                            gutterBottom
                        >
                            Overview
                        </Typography>
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
                                                p: 1,
                                                borderRadius: 2,
                                            }}
                                        >
                                            <TrendingUpIcon />
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
                                                p: 1,
                                                borderRadius: 2,
                                                mb: "auto",
                                                color: "text.contrastText",
                                            }}
                                        >
                                            <TrendingDownIcon />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box
                        sx={{
                            borderRadius: "1rem",
                            backgroundColor: "secondary.light",
                            p: 2,
                            my: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="body1"
                                gutterBottom
                                fontWeight={500}
                                // sx={{ mb: 2 }}
                            >
                                General Amenity Activity
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexBasis: "30%",
                                }}
                            >
                                <Link underline="hover">
                                    <small>Last month</small>
                                </Link>
                                <Link underline="hover">
                                    <small>14 days</small>
                                </Link>
                                <Link underline="hover">
                                    <small>Last week</small>
                                </Link>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                {appliedDateSet.map((e, i) => (
                                    <Chip
                                        label={e.label}
                                        variant="outlined"
                                        key={i}
                                        sx={{
                                            color: e.borderColor,
                                            mx: 0.5,
                                            borderColor: e.borderColor,
                                        }}
                                        onDelete={() => handleDelete(i)}
                                        size="small"
                                    />
                                ))}
                            </Box>
                            <Button
                                color="black"
                                variant="contained"
                                sx={{
                                    borderRadius: "10px",
                                    boxShadow: "none",
                                    ml: "auto",
                                    mt: 1,
                                }}
                            >
                                {" "}
                                Report
                            </Button>
                        </Box>
                        <AnalyticsChart dataSet={appliedDateSet} />
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "secondary.light",
                            my: 3,
                            p: 2,
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
                            position: "sticky",
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
            {/* <Grid container spacing={3} sx={{ mt: 0 }}>
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
            </Grid> */}
        </>
    );
}

export default Dashboard;

const AnalyticsChart = ({ dataSet }: { dataSet: any[] }) => {
    const [chartData, setChartData] = useState({
        labels: ["26/06", "27/06", "28/06", "29/06", "30/06", "01/07", "02/07"],
        datasets: dataSet,
    });

    useEffect(() => {
        setChartData({
            labels: [
                "26/06",
                "27/06",
                "28/06",
                "29/06",
                "30/06",
                "01/07",
                "02/07",
            ],
            datasets: dataSet,
        });
    }, [dataSet]);

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
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

    // const chartData = {
    //     labels: ["26/06", "27/06", "28/06", "29/06", "30/06", "01/07", "02/07"],
    //     datasets: [
    //         {
    //             borderColor: "rgb(255, 99, 132)",
    //             // backgroundColor: "rgba(255, 99, 132, 0.5)",
    //             tension: 0.4,
    //             pointHoverBorderWidth: 1,
    //             data: [2, 4, 2, 4, 2, 3, 2],
    //         },
    //         {
    //             borderColor: "rgb(53, 162, 235)",
    //             // backgroundColor: "rgba(53, 162, 235, 0.5)",
    //             tension: 0.4,
    //             pointHoverBorderWidth: 1,
    //             data: [3, 2, 2.5, 3, 2, 3, 1],
    //         },
    //         // {
    //         //     backgroundColor: ["#51EAEA"],
    //         //     data: [2.2, 4.7, 2.8, 4.5, 4.1, 3.5, 2.6],
    //         // },
    //     ],
    // };

    return <LineChart chartData={chartData} options={options} />;
};
