import ReviewItem from "../components/review/ReviewItem";
import { GET } from "../services/api.service";
import { Grid, Typography, Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import useApp from "../store/app.context";
import ReviewForm from "../components/review/ReviewForm";
import { IReviewItem } from "../interfaces/review.interface";
import dayjs from "dayjs";
import ReplyModal from "../components/modals/ReplyModal";

function Reviews() {
    const { setLoader, loader } = useApp();
    const [reviews, setReviews] = useState<IReviewItem[] | null>(null);
    const [isFiltered, setIsFiltered] = useState<boolean>(false);
    const [filterReviews, setFilterReviews] = useState<IReviewItem[] | null>(
        null
    );
    const [selectedReview, setSlectedReview] = useState<IReviewItem | null>(
        null
    );

    const onFilterApply = (filterData: any) => {
        console.log({ filterData });
        // Resetting filter
        if (!filterData) {
            setIsFiltered(false);
            setFilterReviews([]);
            return;
        }

        let buildNewReviews: IReviewItem[] = [];
        if (reviews) {
            if (
                filterData.source &&
                Array.isArray(filterData.source) &&
                filterData.source.length
            ) {
                buildNewReviews = reviews.filter((e) => {
                    return filterData.source.some((i: any) => {
                        return i === e.source;
                    });
                });
            }

            // filter by rating
            if (filterData.rating < 5) {
                buildNewReviews = reviews.filter((e) => {
                    if (e.rating) {
                        return e.rating <= filterData.rating;
                    } else false;
                });
            }

            if (filterData?.categories?.length) {
                buildNewReviews = reviews.filter((e) => {
                    return filterData.categories.some((i: any) => {
                        return i === e.category;
                    });
                });
            }

            setIsFiltered(true);
            setFilterReviews(buildNewReviews);
        }
    };

    useEffect(() => {
        getReviews();
    }, []);

    const getReviews = useCallback(async () => {
        setLoader(true);
        try {
            const res = await GET(
                "/review/getall?resortId=649da34e953f4d5cdeaff1bb"
            );
            if (res && res.status === 200) {
                const allReviews: IReviewItem[] = res.data.data.map(
                    (e: any) => ({
                        ...e,
                        id: e._id,
                    })
                );
                setReviews(allReviews);
            }
        } catch (err) {
            console.log(err);
        }

        setLoader(false);
    }, []);

    return (
        <>
            <Typography variant="h5" fontWeight={500}>
                Reviews
            </Typography>
            <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item md={9}>
                    <Box
                        sx={{ background: "#fff", borderRadius: "10px", p: 3 }}
                    >
                        <Typography
                            variant="body1"
                            gutterBottom
                            fontWeight={500}
                        >
                            List of all reviews
                        </Typography>
                        {reviews &&
                            !!reviews.length &&
                            !isFiltered &&
                            reviews.map((r: any) => (
                                <ReviewItem
                                    key={r.id}
                                    date={dayjs(r.date).format("DD/MM/YYYY")}
                                    onReply={(data) => setSlectedReview(data)}
                                    listView="false"
                                    {...r}
                                />
                            ))}
                        {filterReviews &&
                            !!filterReviews.length &&
                            !!isFiltered &&
                            filterReviews.map((r: any) => (
                                <ReviewItem
                                    key={r.id}
                                    date={dayjs(r.date).format("DD/MM/YYYY")}
                                    onReply={(data) => setSlectedReview(data)}
                                    listView="false"
                                    {...r}
                                />
                            ))}

                        {reviews && !reviews.length && !loader && (
                            <Typography variant="h6">
                                No records found
                            </Typography>
                        )}
                    </Box>
                </Grid>
                <Grid
                    item
                    md={3}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Box
                        sx={{
                            background: "#fff",
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
                            showCategory={true}
                        />
                    </Box>
                </Grid>
            </Grid>

            {selectedReview && (
                <ReplyModal
                    title={selectedReview.title}
                    description={selectedReview.desc}
                    show={!!selectedReview}
                    closeHandler={() => setSlectedReview(null)}
                    rating={selectedReview.rating}
                />
            )}
        </>
    );
}

export default Reviews;
