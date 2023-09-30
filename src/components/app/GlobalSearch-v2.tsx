import React from "react";
import {
    Button,
    Typography,
    Divider,
    List,
    ListSubheader,
    ListItemButton,
    Avatar,
    Box,
    IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const SearchForm = styled("form")({
    alignItems: "center",
    borderRadius: "4px",
    display: "flex",
    height: "56px",
    margin: 0,
    padding: " 0 12px",
    position: "relative",
    width: "100%",
});

const SearchInput = styled("input")({
    appearance: "none",
    background: "transparent",
    border: 0,
    flex: 1,
    font: "inherit",
    fontSize: "1rem",
    height: "100%",
    outline: "none",
    padding: "0 0 0 8px",
    width: "80%",
    // minWidth: "300px",
});

const SearchLabel = styled("label")({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
});

function GlobalSearchV2() {
    const searchInpRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            console.log(searchInpRef.current, open);
            if (open && searchInpRef.current) {
                console.log("before focus....");
                searchInpRef.current?.focus();
            }
        }, 500);
    }, [open]);

    const SearchItem = ({
        imgUrl = "https://www.rci.com/static/Resorts/Assets/3603E02L.jpg",
        name,
        address,
    }: {
        imgUrl: string;
        name: string;
        address: string;
    }) => {
        return (
            <ListItemButton>
                <Avatar variant="rounded" src={imgUrl}>
                    Hotel
                </Avatar>
                <Box px={2}>
                    <Typography variant="body2" fontWeight={500}>
                        {name}
                    </Typography>
                    <Typography variant="caption">{address}</Typography>
                </Box>
            </ListItemButton>
        );
    };

    return (
        <>
            <Button
                variant="outlined"
                onClick={() => setOpen(true)}
                sx={{ backgroundColor: "secondary.main", borderColor: "#eee" }}
            >
                <SearchIcon />
                <Typography variant="body2" sx={{ px: { xs: 1, md: 2 } }}>
                    Search your resorts...
                </Typography>
                <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                    <kbd>⌘ + k</kbd>
                </Box>
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <header>
                    <SearchForm>
                        <SearchLabel>
                            <SearchIcon />
                        </SearchLabel>
                        <SearchInput
                            placeholder="Search your resorts..."
                            value={searchText}
                            onChange={(e: any) => setSearchText(e.target.value)}
                            ref={searchInpRef}
                        />

                        <IconButton
                            sx={{
                                visibility: searchText ? "visible" : "hidden",
                            }}
                            onClick={() => setSearchText("")}
                        >
                            <CloseIcon />
                        </IconButton>
                    </SearchForm>
                </header>
                <Divider />
                <DialogContent sx={{ p: 0 }}>
                    <List
                        sx={{
                            width: "100%",
                            bgcolor: "background.paper",
                        }}
                        component="nav"
                        aria-labelledby="suggested-resort"
                        subheader={
                            <ListSubheader
                                component="div"
                                id="suggested-resort"
                            >
                                Suggested
                            </ListSubheader>
                        }
                    >
                        <SearchItem
                            imgUrl="https://www.rci.com/static/Resorts/Assets/3603E02L.jpg"
                            name="Club Wyndham Bonnet Greek"
                            address="Orlando, Florida, USA"
                        />
                        <SearchItem
                            imgUrl="https://www.rci.com/static/Resorts/Assets/3603E02L.jpg"
                            name="Club Wyndham Bonnet Greek"
                            address="Orlando, Florida, USA"
                        />
                        <SearchItem
                            imgUrl="https://www.rci.com/static/Resorts/Assets/3603E02L.jpg"
                            name="Club Wyndham Bonnet Greek"
                            address="Orlando, Florida, USA"
                        />
                        <SearchItem
                            imgUrl="https://www.rci.com/static/Resorts/Assets/3603E02L.jpg"
                            name="Club Wyndham Bonnet Greek"
                            address="Orlando, Florida, USA"
                        />
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default GlobalSearchV2;
