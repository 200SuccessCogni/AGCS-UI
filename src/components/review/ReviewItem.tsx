import {
    Box,
    Avatar,
    Typography,
    Rating,
    IconButton,
    Chip,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import { IReviewItem } from "../../interfaces/review.interface";

interface IReviewItemProps extends IReviewItem {
    listView: boolean;
    onReply: (data: any) => void;
}

export default function ReviewItem(props: IReviewItemProps) {
    const getSentementColor = (
        type?: "review" | "neutral" | "positive" | "negative"
    ): any => {
        let color = "";
        switch (type) {
            case "review":
                color = "warning";
                break;
            case "neutral":
                color = "primary";
                break;
            case "positive":
                color = "success";
                break;
            case "negative":
                color = "error";
                break;
            default:
                break;
        }

        return color;
    };

    function share() {
        if (navigator.share) {
            navigator
                .share({
                    title: props.title,
                    text: props.desc,
                })
                .then(() => {
                    console.log("Thanks for sharing!");
                })
                .catch(console.error);
        } else {
            // fallback
        }
    }

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignContent="center"
            sx={{ p: "1rem" }}
            borderBottom="1px solid #aaa"
            className="review"
            position="relative"
        >
            {!props.listView && (
                <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignContent="center"
                    sx={{ flex: 0.2 }}
                    className="review__hotel"
                >
                    <Avatar
                        variant="rounded"
                        src="https://www.rci.com/static/Resorts/Assets/3603E02L.jpg"
                    >
                        Hotel
                    </Avatar>
                    <Box sx={{ ml: 0.8 }}>
                        <Typography
                            variant="caption"
                            component="p"
                            fontWeight="600"
                        >
                            {props.resortName}
                        </Typography>
                        <Typography
                            variant="caption"
                            component="p"
                            sx={{ color: "#777", lineHeight: 1 }}
                        >
                            {props.city}, {props.country}
                        </Typography>
                    </Box>
                </Box>
            )}
            <Box
                display="flex"
                justifyContent="flex-start"
                alignContent="center"
                sx={{ flex: 0.2 }}
                className="review__user"
            >
                <Avatar src="https://api.multiavatar.com/kathrin.svg">
                    User
                </Avatar>
                <Box sx={{ ml: 0.8 }}>
                    <Typography
                        variant="caption"
                        component="p"
                        fontWeight="600"
                    >
                        {props.cusName || "John Doe"}
                    </Typography>
                    <Typography
                        variant="caption"
                        component="p"
                        gutterBottom
                        sx={{ color: "#777", lineHeight: 1, mb: 2 }}
                    >
                        {props.cusCity}, {props.cusCountry}
                    </Typography>
                    <Chip
                        size="small"
                        icon={
                            <img
                                src={
                                    (props?.source &&
                                        `/${props?.source
                                            .split(" ")
                                            .join("")}.png`) ||
                                    "https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png"
                                }
                                height={20}
                                width={20}
                                style={{ borderRadius: "50%" }}
                            />
                        }
                        label={
                            <small>{props?.source.toUpperCase()}</small> ||
                            "Source"
                        }
                        variant="outlined"
                        sx={{
                            position: "absolute",
                            left: "2rem",
                            bottom: "1rem",
                        }}
                    />
                </Box>
            </Box>
            <Box
                sx={{ flex: props.listView ? 0.7 : 0.6 }}
                className="review__review"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignContent="center"
                >
                    <Rating name="read-only" value={props.rating} readOnly />

                    <Typography
                        variant="caption"
                        component="p"
                        sx={{ color: "#777", px: 1, lineHeight: 2 }}
                    >
                        {props.date}
                    </Typography>
                    <Chip
                        label={
                            <small>{props.category?.toLocaleUpperCase()}</small>
                        }
                        size="small"
                        color={getSentementColor(props.category)}
                        variant="filled"
                        sx={{ ml: "auto", mr: 0.8 }}
                    />
                    {/* <Chip
                        label={
                            <small>
                                {props.replyMessage
                                    ? "Published "
                                    : "Not Published"}
                            </small>
                        }
                        size="small"
                        color={props.replyMessage ? "success" : "error"}
                        variant="outlined"
                        sx={{ ml: "auto", mr: 0.8 }}
                    /> */}

                    {!props.listView && (
                        <>
                            <IconButton
                                size="small"
                                onClick={() => props.onReply(props)}
                            >
                                <ReplyIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" onClick={share}>
                                <ShareIcon fontSize="small" />
                            </IconButton>
                        </>
                    )}
                </Box>
                <Typography variant="body2" fontWeight="500" gutterBottom>
                    {props.title}
                </Typography>
                <Typography
                    variant="caption"
                    component="p"
                    sx={{ color: "#777", lineHeight: "140%" }}
                >
                    {props.desc}
                </Typography>
            </Box>
        </Box>
    );
}
