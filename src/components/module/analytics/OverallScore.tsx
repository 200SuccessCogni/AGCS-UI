import React from "react";
import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { OverallScoreType } from "../types/analytics";
import { camelCaseToTitleCase } from "../../../services/shared.service";
import LinearProgressWithLabel from "../../../components/core/linearProgressWithLabel";
import AppPrompt from "../../app/AppPrompt";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
        width: "100%",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function OverallScore(props: OverallScoreType) {
    const [expanded, setExpanded] = React.useState<number>(0);

    const handleChange = (index: number) => setExpanded(index);
    const onSearch = (data: any) => {
        console.log(data);
    };

    return (
        <>
            {props.scores &&
                props.scores.map(
                    (e: { label: string; value: number }, i: number) => (
                        <Accordion
                            key={e.label}
                            expanded={expanded === i}
                            onChange={() => handleChange(i)}
                        >
                            <AccordionSummary
                                color="w9"
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                            >
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        borderRadius: 2,
                                        width: "100%",
                                    }}
                                >
                                    <Box flexBasis="30%">
                                        <Typography variant="body1">
                                            {camelCaseToTitleCase(e.label)}
                                        </Typography>
                                    </Box>
                                    <LinearProgressWithLabel count={e.value} />
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                {/* <AppPrompt onClick={onSearch} />  */}
                            </AccordionDetails>
                        </Accordion>
                    )
                )}
        </>
    );
}

export default OverallScore;
