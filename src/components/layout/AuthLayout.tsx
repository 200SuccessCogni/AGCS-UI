import { useEffect, useState } from "react";

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
    Badge,
    Avatar,
    LinearProgress,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import PolylineRoundedIcon from "@mui/icons-material/PolylineRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DateRangePicker from "../Modals/DateRangePicker";
import useApp from "../../store/app.context";
import dayjs from "dayjs";
import GlobalSearch from "../GlobalSearch";
import NotificationsPopover from "../Popover/Notifications";

interface Props {
    children?: React.ReactNode;
}

const drawerWidth = 260;

const menuList = [
    { icon: <HomeRoundedIcon />, name: "Dashboard", url: "/" },
    { icon: <TimelineRoundedIcon />, name: "Reviews", url: "/reviews" },
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
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState("");
    const [showDateRangePicker, setShowDateRangePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(setInitialDateRange());
    const { loader, setSelectedDateRange, user = { name: "" } } = useApp();

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    // notification popover
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

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
                <AppBar
                    position="fixed"
                    sx={{
                        width: `calc(100% - ${drawerWidth}px)`,
                        ml: `${drawerWidth}px`,
                        boxShadow: "none",
                        border: "none",
                    }}
                >
                    <Toolbar
                        sx={{
                            backgroundColor: "#fff",
                            color: "#555",
                            borderLeft: "1px solid #eee",
                        }}
                    >
                        {/* <OutlinedInput
                            sx={{
                                fontSize: "0.85rem",
                                background: "#eef2f5",
                                border: "none",
                                mr: "auto",
                            }}
                            id="dashboard-search"
                            placeholder="Search here.."
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#aaa" }} />
                                </InputAdornment>
                            }
                            inputComponent="input"
                        /> */}

                        <GlobalSearch />
                        <IconButton
                            size="large"
                            aria-label="show new notifications"
                            color="inherit"
                            onClick={handleClick}
                        >
                            <Badge badgeContent={7} color="primary">
                                <NotificationsIcon sx={{ color: "#777" }} />
                            </Badge>
                        </IconButton>
                        <NotificationsPopover
                            open={open}
                            handleClose={handleClose}
                            anchorEl={anchorEl}
                        />
                        <Box sx={{ borderLeft: "1px solid #eee", mx: 1 }}>
                            <Avatar
                                alt={user?.name || ""}
                                src="/static/images/avatar/1.jpg"
                                sx={{ ml: 1 }}
                            />
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="body2" fontWeight={500}>
                                {!!user && `${user?.name}`}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ lineHeight: 1 }}
                            >
                                Personal
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            border: "none",
                        },
                        position: "relative",
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
                    <Box p={2}>
                        <List>
                            {menuList.slice(0, 2).map((e, index) => {
                                return (
                                    <Link to={e.url} key={e.name}>
                                        <ListItem disablePadding key={e.name}>
                                            <ListItemButton sx={{ p: 0.5 }}>
                                                <ListItemIcon
                                                    sx={{
                                                        justifyContent:
                                                            "center",
                                                        color: `${
                                                            currentPath ===
                                                            e.url
                                                                ? "#3954b9"
                                                                : "#3c3c3c"
                                                        }`,
                                                    }}
                                                >
                                                    {e.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography
                                                            variant="body2"
                                                            fontWeight={
                                                                currentPath ===
                                                                e.url
                                                                    ? "600"
                                                                    : "500"
                                                            }
                                                            color={
                                                                currentPath ===
                                                                e.url
                                                                    ? "#3954b9"
                                                                    : "#3c3c3c"
                                                            }
                                                            fontSize="0.85rem"
                                                        >
                                                            {e.name}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                );
                            })}
                        </List>
                        <Divider />
                        <List>
                            {/* <ListSubheader component="div" sx={{my: 2}} id="nested-list-subheader">
								<Typography variant="body2">A</Typography>
							</ListSubheader> */}
                            {menuList.slice(2, 5).map((e, index) => (
                                <Link to={e.url} key={e.name}>
                                    <ListItem disablePadding key={e.name}>
                                        <ListItemButton sx={{ p: 0.5 }}>
                                            <ListItemIcon
                                                sx={{
                                                    justifyContent: "center",
                                                    color: `${
                                                        currentPath === e.url
                                                            ? "#3954b9"
                                                            : "#3c3c3c"
                                                    }`,
                                                }}
                                            >
                                                {e.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant="body2"
                                                        fontWeight={
                                                            currentPath ===
                                                            e.url
                                                                ? "600"
                                                                : "500"
                                                        }
                                                        color={
                                                            currentPath ===
                                                            e.url
                                                                ? "#3954b9"
                                                                : "#3c3c3c"
                                                        }
                                                        fontSize="0.85rem"
                                                    >
                                                        {e.name}
                                                    </Typography>
                                                }
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{ position: "absolute", bottom: 0, p: 2 }}>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{ p: 0.5 }}
                                // onClick={() => logout()}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: "#3c3c3c",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SettingsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: "0.85rem",
                                                color: "#3c3c3c",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Settings
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{ p: 0.5 }}
                                onClick={() => logout()}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: "#3c3c3c",
                                        justifyContent: "center",
                                    }}
                                >
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: "0.85rem",
                                                color: "#3c3c3c",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Logout
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        height: "calc(100vh - 75px)",
                        marginTop: "75px",
                        overflowY: "auto",
                        overflowX: "hidden",
                        background: "#eef2f5",
                        position: "relative",
                    }}
                >
                    {!!loader && (
                        <LinearProgress
                            sx={{ mt: -3, mx: -3, mb: 3, height: "1.7px" }}
                        ></LinearProgress>
                    )}
                    <OutlinedInput
                        sx={{
                            fontSize: "0.85rem",
                            background: "#eef2f5",
                            border: "none",
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
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
