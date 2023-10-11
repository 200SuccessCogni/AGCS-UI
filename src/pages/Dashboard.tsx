import {
    Grid,
    Paper,
    Typography,
    Box,
    Button,
    Chip,
    Tooltip,
} from "@mui/material";
import PieChart from "../components/charts/PieChart";
import ReviewItem from "../components/review/ReviewItem";
import { ICountCard } from "@/interfaces/dashboard.interface";
import { useNavigate } from "react-router-dom";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import useApp from "../store/app.context";
import { useCallback, useEffect, useState } from "react";
import { GET } from "../services/api.service";
import dayjs from "dayjs";
import AIChip from "../components/core/chip/AIChip";
import { IReviewItem } from "@/interfaces/review.interface";

const insights = [
    {
        name: "Service",
        mentionedCount: "15",
        unfavourable: "19",
        favourable: "77",
    },
    {
        name: "Fitness",
        mentionedCount: "5",
        unfavourable: "9",
        favourable: "85",
    },
    {
        name: "Family",
        mentionedCount: "7",
        unfavourable: "10",
        favourable: "84",
    },
    {
        name: "Parking",
        mentionedCount: "12",
        unfavourable: "55",
        favourable: "33",
    },
    {
        name: "Cleanliness",
        mentionedCount: "5",
        unfavourable: "11",
        favourable: "87",
    },
    {
        name: "Wellness",
        mentionedCount: "13",
        unfavourable: "9",
        favourable: "13",
    },
];

function StatCard(props: ICountCard) {
    return (
        <Paper
            elevation={0}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0.5rem 1rem",
                minHeight: "130px",
                backgroundColor: props.backgroundColor,
                color: props.color,
                textALign: "left",
            }}
            // className="box-shadow"
        >
            <Typography variant="h2" align="left" color="primary">
                {props.count}
            </Typography>
            <Typography
                variant="body2"
                sx={{ lineHeight: 1, color: "text.secondary", pr: "30%" }}
            >
                {props.label}
            </Typography>
        </Paper>
    );
}

function Dashboard() {
    const { setLoader, selectedLocation, loader, setALLReviews, allReviews } =
        useApp();
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const [posReview, setPosReview] = useState(0);
    const [negReview, setNegReview] = useState(0);
    const [neuReview, setNeuReview] = useState(0);
    const [mixReview, setMixReview] = useState(0);

    useEffect(() => {
        getInsightsAndAnalytics();
        getAllReviews();
        // console.log({ selectedLocation });
        // if (selectedLocation) getReviews(selectedLocation.id);
        // else getReviews();
    }, [selectedLocation]);

    const getAllReviews = useCallback(async () => {
        setLoader(true);
        try {
            const res = await GET(
                "/review/getall?businessId=65227a4fd7a294d9ee6f18a6&locationId=65227ab4d7a294d9ee6f18db"
            );
            if (res && res.status === 200) {
                const allReviews: IReviewItem[] = res.data.data.map(
                    (e: any) => ({
                        ...e,
                        id: e._id,
                    })
                );
                setALLReviews(allReviews);
            }
        } catch (err) {
            console.log(err);
        }

        setLoader(false);
    }, []);

    const getInsightsAndAnalytics = async (
        businessId = "65227a4fd7a294d9ee6f18a6",
        locationId = "65227ab4d7a294d9ee6f18db"
    ) => {
        setLoader(true);
        try {
            const res = await GET(
                `/review/getinsightAnalytics?businessId=${businessId}&locationId=${locationId}`
            );
            if (res && res.status === 200) {
                if (res.data.categories && res.data.categories.length) {
                    res.data.categories.map((e: any) => {
                        switch (e._id) {
                            case "negative":
                                setNegReview(e.count);
                                break;
                            case "positive":
                                setPosReview(e.count);
                                break;
                            case "neutral":
                                setNeuReview(e.count);
                                break;
                            default:
                                setMixReview(e.count);
                                break;
                        }
                    });
                }
                // setReviews(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }

        setLoader(false);
    };

    const userData = {
        labels: [
            "Google",
            "Booking.com",
            "GoIbibo",
            "TripAdvisor",
            "MakeMyTrip",
        ],
        datasets: [
            {
                backgroundColor: [
                    "#51EAEA",
                    "#FCDDB0",
                    "#FF9D76",
                    "#FB3569",
                    "#82CD47",
                ],
                data: [1, 3, 1, 1, 1],
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
                Dashboard
            </Typography>
            <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={12} md={7.5}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={3}>
                            <StatCard
                                count={neuReview}
                                label="Neutral Reviews"
                                backgroundColor="rgb(178 226 254 / 50%)"
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <StatCard
                                count={posReview}
                                label="Positive Reviews"
                                backgroundColor="rgb(178 254 206 / 50%)"
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <StatCard
                                count={negReview}
                                label="Negative Reviews"
                                backgroundColor="rgb(254 178 178 / 46%)"
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <StatCard count={mixReview} label="Mixed Reviews" />
                        </Grid>
                    </Grid>
                    <Box
                        // className="box-shadow"
                        sx={{
                            p: 2,
                            my: 3,
                            bgcolor: "secondary.light",
                            borderRadius: "1rem",
                        }}
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignContent="center"
                        >
                            <Typography variant="h6">Latest Reviews</Typography>
                            <Button onClick={() => navigate("/reviews")}>
                                See All
                            </Button>
                        </Box>
                        {!!allReviews.length &&
                            allReviews
                                .slice(0, 5)
                                .map((r: any) => (
                                    <ReviewItem
                                        key={r.id}
                                        {...r}
                                        date={dayjs(r.date).format(
                                            "DD/MM/YYYY"
                                        )}
                                        listView="false"
                                    />
                                ))}
                        {allReviews && !allReviews.length && !loader && (
                            <Typography variant="body2">
                                No records found
                            </Typography>
                        )}
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4.5}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        // className="box-shadow"
                        sx={{
                            bgcolor: "secondary.light",
                            borderRadius: "10px",
                            width: "100%",
                            p: 2,
                            mb: 3,
                        }}
                    >
                        <Typography variant="h6" fontWeight={500}>
                            Review Source
                        </Typography>
                        <Box px={10}>
                            <PieChart chartData={userData} options={options} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            bgcolor: "secondary.light",
                            borderRadius: "10px",
                            width: "100%",
                            p: 2,
                            mb: 2,
                        }}
                        // className="box-shadow"
                    >
                        <Typography
                            variant="h6"
                            color="black"
                            gutterBottom
                            fontWeight={500}
                        >
                            Insights
                        </Typography>
                        <Box>
                            {insights.map((e: any) => (
                                <Tooltip
                                    title={`${e.favourable}% favourable, ${e.unfavourable}% unfavourable`}
                                    key={e.namme}
                                >
                                    <Chip
                                        size="small"
                                        icon={
                                            e.unfavourable > 50 ? (
                                                <ThumbDownOffAltOutlinedIcon />
                                            ) : (
                                                <ThumbUpOutlinedIcon />
                                            )
                                        }
                                        label={<small>{e.name}</small>}
                                        variant="outlined"
                                        color={
                                            e.unfavourable < 50
                                                ? "success"
                                                : "error"
                                        }
                                        sx={{
                                            m: 0.5,
                                            px: 0.5,
                                            // color: "primary.dark",
                                        }}
                                    />
                                </Tooltip>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            bgcolor: "secondary.light",
                            borderRadius: "10px",
                            width: "100%",
                            p: 2,
                        }}
                        // className="box-shadow"
                    >
                        <Typography variant="h6" gutterBottom fontWeight={500}>
                            Recommended actions
                        </Typography>
                        <Typography variant="body2">
                            5 unread reviews
                        </Typography>
                        <Typography variant="body2">
                            10 no replied reviews
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;
