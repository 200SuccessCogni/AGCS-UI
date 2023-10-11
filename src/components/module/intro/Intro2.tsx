import {
    Box,
    Typography,
    Button,
    TextField,
    OutlinedInput,
} from "@mui/material";
import DragDropFileUpload from "../../app/DragDropFileUpload";
// import { useEffect, useState } from "react";

function Intro2(props: any) {
    return (
        <Box display="flex" height="100%" position="relative">
            <Box
                className="bg-secondary"
                py={3}
                sx={{
                    flexBasis: { xs: "100%", md: "60%" },
                    maxWidth: { xs: "100%", md: "50%" },
                    overflowY: "auto",
                    overflowX: "hidden",
                    backgroundColor: "secondary.light",
                    position: "relative",
                }}
            >
                <Box
                    px={4}
                    sx={{
                        backgroundColor: "secondary.light",
                        position: "relative",
                        zIndex: 10,
                        pb: 4,
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box mb={3}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                lineHeight={0.9}
                            >
                                CFRA
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                                Customer Feedback and Review Analysis
                            </Typography>
                        </Box>
                        <Typography variant="caption" gutterBottom>
                            Step 2 of 3
                        </Typography>
                    </Box>
                    <Typography variant="h6" fontWeight={400}>
                        One time Integrate
                    </Typography>
                    <Typography variant="h4" fontWeight={600}>
                        Integrate own hotels or resorts
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        mt: "20%",
                    }}
                >
                    <DragDropFileUpload />
                </Box>

                {/* <Box my={3}>
                    <OutlinedInput
                        id="outlined-basic"
                        label="API url"
                        placeholder="Enter the full URL"
                        value="https://cfra.onrender.com/api/v1.0/resort/getAllResort"
                        sx={{ width: "100%", mb: 2 }}
                    />
                    <Typography variant="body2" fontWeight={600} gutterBottom>
                        Query Params
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        // label="Headers"
                        multiline
                        rows={4}
                        InputProps={{
                            placeholder: "Enter your query in JSON format.",
                        }}
                        sx={{ width: "100%", mb: 2 }}
                    />
                    <Typography variant="body2" fontWeight={600} gutterBottom>
                        Headers
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        // label="Headers"
                        multiline
                        rows={4}
                        InputProps={{
                            placeholder: "Enter your headers in JSON format.",
                        }}
                        sx={{ width: "100%", mb: 2 }}
                    />
                    <Typography variant="body2" fontWeight={600} gutterBottom>
                        Payload
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        // label="Headers"
                        multiline
                        rows={4}
                        InputProps={{
                            placeholder: "Enter your payload in JSON format.",
                        }}
                        sx={{ width: "100%", mb: 2 }}
                    />
                </Box> */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        bottom: "2rem",
                        right: "2rem",
                        width: "100%",
                        zIndex: 10,
                    }}
                >
                    <Button
                        variant="outlined"
                        color="black"
                        onClick={() => props.setStep(1)}
                        sx={{
                            boxShadow: "none",
                            width: "100px",
                            marginLeft: "60%",
                        }}
                    >
                        Prev
                    </Button>
                    <Button
                        variant="contained"
                        color="black"
                        onClick={() => props.setStep(3)}
                        sx={{
                            boxShadow: "none",
                            width: "100px",
                            marginLeft: "20px",
                        }}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    flexBasis: "40%",
                    maxWidth: "50%",
                    display: { xs: "none", md: "block" },
                }}
            >
                <Box
                    sx={{
                        mt: "10%",
                        ml: "10%",
                    }}
                >
                    <img
                        src="/review.png"
                        alt="review page"
                        style={{
                            border: "10px solid",
                            borderRadius: "15px",
                            height: "450px",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Intro2;
