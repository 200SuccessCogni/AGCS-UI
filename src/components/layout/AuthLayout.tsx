import { ReactElement, useEffect, useState } from "react";

import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    Typography,
    Divider,
    ListItemText,
    ListItemIcon,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    Badge,
    Avatar,
    LinearProgress,
    SwipeableDrawer,
    Link as MuiLink,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import PolylineRoundedIcon from "@mui/icons-material/PolylineRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DateRangePicker from "../modals/DateRangePicker";
import useApp from "../../store/app.context";
import dayjs from "dayjs";
import GlobalSearch from "../app/GlobalSearch";
import CloseIcon from "@mui/icons-material/Close";
import Header from "./Header";

interface Props {
    children?: React.ReactNode;
}

const drawerWidth = 260;

const menuList = [
    { icon: <HomeRoundedIcon />, name: "Dashboard", url: "/" },
    { icon: <TimelineRoundedIcon />, name: "Reviews", url: "/reviews" },
    { icon: <CompareArrowsIcon />, name: "Comparision", url: "/compare" },
    { icon: <QueryStatsRoundedIcon />, name: "Analytics", url: "/analytics" },
    { icon: <DescriptionOutlinedIcon />, name: "Insights", url: "/insights" },
    {
        icon: <PolylineRoundedIcon />,
        name: "Integratation",
        url: "/integration",
    },
];

function setInitialDateRange() {
    const dateRange = {
        startDate: dayjs(new Date()).subtract(6, "day").format("MMM D, YYYY"),
        endDate: dayjs(new Date()).format("MMM D, YYYY"),
    };
    return `${dateRange.startDate} - ${dateRange.endDate}`;
}

export default function SideNav(props: Props) {
    const [drwaerOpen, setDrawerOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState("");
    const [showDateRangePicker, setShowDateRangePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(setInitialDateRange());
    const { loader, setSelectedDateRange, user = { name: "" } } = useApp();

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        navigate("/signin");
    };

    const onDateSelect = (isClose: boolean, selectedDateRange: any[]) => {
        if (Array.isArray(selectedDateRange) && selectedDateRange.length) {
            const startDate = dayjs(selectedDateRange[0].startDate).format(
                "MMM D, YYYY"
            );
            const endDate = dayjs(selectedDateRange[0].endDate).format(
                "MMM D, YYYY"
            );

            setSelectedDateRange({ startDate, endDate });
            setSelectedDate(`${startDate} - ${endDate}`);
        }
        setShowDateRangePicker(isClose);
    };

    return (
        <>
            <Box sx={{ display: "flex", height: "100%" }}>
                <Header setDrawerOpen={setDrawerOpen} />
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            border: "none",
                            backgroundColor: "secondary.light",
                            borderRight: "1px solid #eee",
                        },
                        position: "relative",
                        display: { xs: "none", md: "block" },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <Typography
                                variant="button"
                                color="primary"
                                sx={{
                                    px: 1,
                                    textTransform: "none",
                                    color: "text.primary",
                                    fontWeight: "600",
                                    fontSize: "1.2rem",
                                }}
                            >
                                CFRA
                            </Typography>
                            <Typography
                                variant="caption"
                                color="primary"
                                sx={{
                                    px: 1,
                                    textTransform: "none",
                                    fontWeight: "400",
                                    lineHeight: 1,
                                }}
                            >
                                Customer Feedback and Review Analysis
                            </Typography>
                        </Box>
                    </Toolbar>
                    <MenuList currentPath={currentPath} logout={logout} />
                </Drawer>
                {/* Resposive mobile menu drawer */}
                <SwipeableDrawer
                    anchor="left"
                    open={drwaerOpen}
                    onClose={() => setDrawerOpen(false)}
                    onOpen={() => setDrawerOpen(true)}
                    sx={{ width: "80vw" }}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        p={2}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <Typography
                                variant="button"
                                color="primary"
                                sx={{
                                    px: 1,
                                    textTransform: "none",
                                    color: "text.primary",
                                    fontWeight: "600",
                                    fontSize: "1.2rem",
                                }}
                            >
                                CFRA
                            </Typography>
                            <Typography
                                variant="caption"
                                color="primary"
                                sx={{
                                    px: 1,
                                    textTransform: "none",
                                    fontWeight: "400",
                                    lineHeight: 1,
                                }}
                            >
                                Customer Feedback and Review Analysis
                            </Typography>
                        </Box>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <MenuList currentPath={currentPath} logout={logout} />
                </SwipeableDrawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        height: "calc(100vh - 69px)",
                        marginTop: "69px",
                        overflowY: "auto",
                        overflowX: "hidden",
                        backgroundColor: "secondary.light",
                        position: "relative",
                    }}
                >
                    {!!loader && (
                        <LinearProgress
                            sx={{
                                mt: -3,
                                mx: -3,
                                mb: 3,
                                height: "1.7px",
                                color: "primary.dark",
                            }}
                        ></LinearProgress>
                    )}
                    <Box
                        sx={{
                            display: { xs: "block", md: "none" },
                            background: "#eef2f5",
                            border: "none",
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                        }}
                    >
                        <IconButton
                            onClick={() => setShowDateRangePicker(true)}
                        >
                            <DateRangeRoundedIcon sx={{ color: "#aaa" }} />
                        </IconButton>
                    </Box>
                    <OutlinedInput
                        sx={{
                            fontSize: "0.85rem",
                            background: "#eef2f5",
                            border: "none",
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                            display: { xs: "none", md: "inline-flex" },
                        }}
                        id="dashboard-date-range"
                        placeholder="Chose date range..."
                        value={selectedDate}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowDateRangePicker(true)}
                                >
                                    <DateRangeRoundedIcon
                                        sx={{ color: "#aaa" }}
                                    />
                                </IconButton>
                            </InputAdornment>
                        }
                        inputComponent="input"
                        onClick={() => setShowDateRangePicker(true)}
                    />
                    {props.children}
                    <DateRangePicker
                        show={showDateRangePicker}
                        closeHandler={onDateSelect}
                    />
                </Box>
            </Box>
        </>
    );
}

const MenuList = ({
    currentPath,
    logout,
}: {
    currentPath: string;
    logout: () => void;
}) => {
    const Menutem = ({
        icon,
        currentPath,
        url,
        name,
    }: {
        icon: ReactElement;
        currentPath: string;
        url: string;
        name: string;
    }) => {
        return (
            <>
                <ListItemIcon
                    sx={{
                        justifyContent: "center",
                        color: `${
                            currentPath === url
                                ? "primary.main"
                                : "text.primary"
                        }`,
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography
                            variant="body2"
                            fontWeight={currentPath === url ? "600" : "500"}
                            color={
                                currentPath === url
                                    ? "primary.main"
                                    : "text.primary"
                            }
                            fontSize="0.85rem"
                        >
                            {name}
                        </Typography>
                    }
                />
            </>
        );
    };

    return (
        <Box p={2}>
            <List>
                {menuList.slice(0, 3).map((e) => {
                    return (
                        <Link to={e.url} key={e.name}>
                            <ListItem disablePadding key={e.name}>
                                <ListItemButton sx={{ p: 0.5 }}>
                                    <Menutem
                                        icon={e.icon}
                                        name={e.name}
                                        url={e.url}
                                        currentPath={currentPath}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
            <Divider />
            <List>
                {menuList.slice(3, 6).map((e) => (
                    <Link to={e.url} key={e.name}>
                        <ListItem disablePadding key={e.name}>
                            <ListItemButton sx={{ p: 0.5 }}>
                                <Menutem
                                    icon={e.icon}
                                    name={e.name}
                                    url={e.url}
                                    currentPath={currentPath}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Box sx={{ position: "absolute", bottom: 0, py: 2 }}>
                <ListItem disablePadding>
                    <ListItemButton sx={{ p: 0.5 }}>
                        <Menutem
                            icon={<SettingsOutlinedIcon />}
                            name={"Settings"}
                            url={"/settings"}
                            currentPath={currentPath}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ p: 0.5 }} onClick={() => logout()}>
                        <Menutem
                            icon={<LogoutIcon />}
                            name={"Logout"}
                            url={"/logout"}
                            currentPath={currentPath}
                        />
                    </ListItemButton>
                </ListItem>
            </Box>
        </Box>
    );
};
