import { useEffect, useState } from "react";
import LineChart from "../components/charts/LineChart";
import ReviewForm from "../components/module/review/ReviewForm";
import useApp from "../store/app.context";
import { GET } from "../services/api.service";

import { Box, Grid, Typography, Container } from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { camelCaseToTitleCase, randomColor } from "../services/shared.service";
import OverviewCard from "../components/module/analytics/OverviewCard";
import OverallScore from "../components/module/analytics/OverallScore";
import AnalyticsChart from "../components/module/analytics/AnalyticsChart";
import dayjs from "dayjs";

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
    const { setLoader, user, selectedLocation } = useApp();
    const [chartsData, setChartsData] = useState<any[]>();
    const [appliedDateSet, setAppliedDateSet] = useState(initChartDataSet);
    const [lowPerfAment, setLowPerfAment] = useState("");
    const [highPerfAment, setHighPerfAment] = useState("");

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
        if (
            user &&
            user?.business &&
            user?.business?.businessId &&
            selectedLocation
        )
            getInsightsAndAnalytics(
                user?.business?.businessId,
                selectedLocation.id
            );
    }, [user, selectedLocation]);

    const getInsightsAndAnalytics = async (
        businessId: string,
        locationId: string
    ) => {
        setLoader(true);
        try {
            const res = await GET(
                `/review/getinsightAnalytics?businessId=${businessId}&locationId=${locationId}`
            );
            if (res && res.status === 200) {
                const insightsRes = res.data.insights;
                let insights;
                if (insightsRes && insightsRes.length) {
                    insights = insightsRes.map((e: any) => ({
                        ...e,
                        label: e._id,
                        value: Math.floor(e.avgMagnitude * 10),
                    }));
                    setInsights(insights);

                    setLowPerfAment(
                        insights.reduce((a: any, b: any) => {
                            return a.count < b.count ? a : b;
                        })._id
                    );

                    setHighPerfAment(
                        insights.reduce((a: any, b: any) => {
                            return a.count > b.count ? a : b;
                        })._id
                    );
                }

                if (res.data.analytics && res.data.analytics.length) {
                    const data = res.data.analytics.map((e: any) => ({
                        entityName: e.entityScores.entityName,
                        date: dayjs(e.entityScores.date.split("T")),
                        score: Math.floor(e.entityScores.sentimentScore * 10),
                    }));

                    const analyticsData: any[] = [];

                    insights.forEach((e: any) => {
                        analyticsData.push({
                            type: e?.label,
                            data: data.filter(
                                (d: any) => d.entityName === e?.label
                            ),
                        });
                    });

                    const newData = analyticsData.map((a) => {
                        const sortedData = a.data.sort((a: any, b: any) =>
                            dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1
                        );
                        const data =
                            sortedData.length < 6
                                ? sortedData
                                : sortedData.slice(
                                      sortedData.length - 6,
                                      sortedData.length
                                  );
                        return {
                            type: a.type,
                            data: data,
                        };
                    });

                    const chartData = newData.map((e: any) => ({
                        type: e.type,
                        data: {
                            labels: e.data.map((n: any) =>
                                dayjs(n.date).format("MMM, YYYY")
                            ),
                            datasets: [
                                {
                                    tension: 0.4,
                                    borderColor: randomColor(),
                                    data: e.data.map((l: any) => l.score),
                                },
                            ],
                        },
                    }));
                    setChartsData(
                        chartData.filter((e) => e.data.labels.length > 1)
                    );
                }
            }
        } catch (err) {
            console.log(err);
        }

        setLoader(false);
    };

    const userData1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        datasets: [
            {
                backgroundColor: ["#51EAEA"],
                data: [4.2, 3.7, 1.8, 5, 4.1, 2.5, 4.6],
            },
        ],
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
                            backgroundColor: "secondary.light",
                            borderRadius: "1rem",
                            px: 2,
                            pb: 3,
                            pt: 2,
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="text.primary"
                            gutterBottom
                        >
                            Overview
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <OverviewCard
                                    bgColor="secondary.main"
                                    icon={<TrendingUpIcon />}
                                    iconBgColor="secondary.dark"
                                    contentText={camelCaseToTitleCase(
                                        highPerfAment
                                    )}
                                    headerTitle="Top Performing Amenity / Category"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <OverviewCard
                                    bgColor="secondary.dark"
                                    icon={<TrendingDownIcon />}
                                    iconBgColor="primary.main"
                                    contentText={camelCaseToTitleCase(
                                        lowPerfAment
                                    )}
                                    iconColor="text.contrastText"
                                    headerTitle="Low Performing Amenity / Category"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                    <OverallScore scores={insights} />
                    {/* <Box
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
                                    flexBasis: "40%",
                                }}
                            >
                                <Link underline="hover">
                                    <small>Last year</small>
                                </Link>
                                <Link underline="hover">
                                    <small>Last 6 month</small>
                                </Link>
                                <Link underline="hover">
                                    <small>Last month</small>
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
                                            color: "text.primary",
                                            m: 0.5,
                                            backgroundColor: e.borderColor,
                                        }}
                                        onDelete={() => handleDelete(i)}
                                        size="small"
                                    />
                                ))}
                                <Chip
                                    label="Customize"
                                    color="primary"
                                    sx={{
                                        m: 0.5,
                                        bgColor: "black",
                                        color: "text.contrastText",
                                    }}
                                    size="small"
                                />
                            </Box>
                            <Button
                                color="black"
                                variant="contained"
                                size="small"
                                sx={{
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
                    </Box> */}
                    <Box
                        sx={{
                            backgroundColor: "secondary.light",
                            borderRadius: "1rem",
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
                            In details analysis
                        </Typography>
                        <Grid container spacing={3} sx={{ mt: 0 }}>
                            {!!chartsData &&
                                !!chartsData.length &&
                                chartsData.map((e: any, i: number) => (
                                    <Grid item xs={12} md={6} key={i}>
                                        <AnalyticsChart
                                            label={e.type}
                                            data={e.data}
                                        />
                                    </Grid>
                                ))}
                        </Grid>
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
        </>
    );
}

export default Dashboard;

// const AnalyticsChart = ({ dataSet }: { dataSet: any[] }) => {
//     const [chartData, setChartData] = useState({
//         labels: ["26/06", "27/06", "28/06", "29/06", "30/06", "01/07", "02/07"],
//         datasets: dataSet,
//     });

//     useEffect(() => {
//         setChartData({
//             labels: [
//                 "26/06",
//                 "27/06",
//                 "28/06",
//                 "29/06",
//                 "30/06",
//                 "01/07",
//                 "02/07",
//             ],
//             datasets: dataSet,
//         });
//     }, [dataSet]);

//     const options = {
//         responsive: true,
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 },
//             },
//             y: {
//                 ticks: {
//                     display: false,
//                 },
//             },
//         },
//         plugins: {
//             legend: {
//                 position: "bottom",
//                 display: false,
//             },
//             title: {
//                 display: true,
//                 // text: "Review Sources",
//             },
//             tooltip: {
//                 enabled: true,
//                 position: "nearest",
//             },
//             chartAreaBorder: {
//                 borderColor: "red",
//                 borderWidth: 2,
//                 borderDash: [5, 5],
//                 borderDashOffset: 2,
//             },
//         },
//     };

//     return <LineChart chartData={chartData} options={options} />;
// };
