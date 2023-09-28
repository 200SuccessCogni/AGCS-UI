import { useState } from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsPopover from "../popover/Notifications";

import GlobalSearch from "../app/GlobalSearch";
import useApp from "../../store/app.context";

const drawerWidth = 260;

function Header(props: any) {
    const { user = { name: "" } } = useApp();

    // notification popover
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <AppBar
            position="fixed"
            sx={{
                width: {
                    xs: "100%",
                    md: `calc(100% - ${drawerWidth}px)`,
                },
                ml: { xs: 0, md: `${drawerWidth}px` },
                boxShadow: "none",
                border: "none",
                backgroundColor: "secondary.light",
                borderBottom: "1px solid",
                borderBottomColor: "#eee",
            }}
        >
            <Toolbar>
                <IconButton
                    sx={{
                        display: { xs: "block", md: "none" },
                        transform: "rotate(180deg)",
                        mr: 3,
                    }}
                    onClick={() => props.setDrawerOpen(true)}
                >
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="4"
                        style={{
                            display: "block",
                            height: "50px",
                            transform: "scale(0.9)",
                        }}
                    >
                        <line x1="50" y1="75" x2="100" y2="75" stroke="#222" />{" "}
                        <line x1="10" y1="50" x2="100" y2="50" stroke="#222" />{" "}
                        <line x1="50" y1="25" x2="100" y2="25" stroke="#222" />
                    </svg>
                    {/* <MenuIcon /> */}
                </IconButton>

                <GlobalSearch />
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                    }}
                >
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
                    <Box
                        sx={{
                            borderLeft: "1px solid #eee",
                            mx: 1,
                        }}
                    >
                        <Avatar
                            alt={user?.name || ""}
                            src="/static/images/avatar/1.jpg"
                            sx={{ ml: 1 }}
                        />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontWeight={500}
                            color="text.primary"
                        >
                            {!!user && `${user?.name}`}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{ lineHeight: 1 }}
                            color="text.primary"
                        >
                            Personal
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
