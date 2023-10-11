import { useCallback, useEffect, useState } from "react";
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
import GlobalSearchV2 from "../app/GlobalSearch-v2";
import { GET } from "../../services/api.service";
import { IResort } from "../../interfaces/resort.interface";

const drawerWidth = 260;

function Header(props: any) {
    const {
        resortList,
        setResort,
        setSelectedLocation,
        user = { name: "" },
        selectedLocation,
    } = useApp();

    useEffect(() => {
        getAllLocations();
    }, []);

    const onResortChange = (value: any) => {
        const reosort = resortList.find(
            (r) => r.resortName.toLowerCase() === value.toLowerCase()
        );
        setSelectedLocation(reosort);
    };

    // notification popover
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const getAllLocations = useCallback(async () => {
        try {
            const res = await GET(
                "/location/getAll?businessId=65227a4fd7a294d9ee6f18a6"
            );

            if (
                res &&
                res?.data &&
                res.data?.data &&
                Array.isArray(res.data.data)
            ) {
                const resorts: IResort[] = res.data.data.map((r: any) => ({
                    id: r._id,
                    businessId: r.businessId,
                    locationName: r.locationName,
                    locationAddress: r.address,
                    city: r.city,
                    country: r.country,
                    state: r.state,
                    organization: r.organization,
                }));

                if (resorts && resorts.length) {
                    setResort(resorts);
                    setSelectedLocation(resorts[0]);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

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

                <GlobalSearchV2
                    searchDataResult={resortList || []}
                    onChange={onResortChange}
                    onSelect={onResortChange}
                    selectedLocation={selectedLocation}
                />
                {/* <GlobalSearch /> */}
                <Box
                    sx={{
                        ml: "auto",
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    <IconButton
                        sx={{ mx: 1 }}
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
                        display="flex"
                        flexDirection="column"
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            borderLeft: "1px solid #eee",
                            pl: 1,
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
                    <Box mx={1}>
                        <Avatar
                            alt={user?.name || ""}
                            src="/static/images/avatar/1.jpg"
                        />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
