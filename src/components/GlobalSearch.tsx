import { Autocomplete, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import useApp from "../store/app.context";
import { GET } from "../services/api.service";
import { IResort } from "../interfaces/resort.interface";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";

function GlobalSearch() {
    const [selectedResort, setSelectedResort] = useState("");
    const { resortList, setResort, setSelectedLocation } = useApp();
    const [singleSelections, setSingleSelections] = useState([]);

    useEffect(() => {
        getALlResort();
    }, []);

    const onResortChange = (event: React.SyntheticEvent, value: any) => {
        const reosort = resortList.find(
            (r) => r.resortName.toLowerCase() === value.toLowerCase()
        );
        setSelectedLocation(reosort);
    };

    const getALlResort = useCallback(async () => {
        try {
            const res = await GET("resort/getAllResort");
            if (
                res &&
                res?.data &&
                res.data?.data &&
                Array.isArray(res.data.data)
            ) {
                const resorts: IResort[] = res.data.data.map((r: any) => ({
                    address: r.address,
                    city: r.city,
                    country: r.country,
                    organization: r.organization,
                    resortName: r.resortName,
                    state: r.state,
                    userId: r.userId,
                    id: r._id,
                }));

                if (resorts && resorts.length) {
                    setResort(resorts);
                    setSelectedResort(resorts[0].resortName);
                    setSelectedLocation(resorts[0]);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        // <Autocomplete
        //     freeSolo
        //     id="dashboard-search"
        //     disableClearable
        //     size="small"
        //     value={selectedResort}
        //     onChange={onResortChange}
        //     sx={{
        //         width: "300px",
        //         fontSize: "0.85rem",
        //         background: "#eef2f5",
        //         mr: "auto",
        //         mt: "10px",
        //         mb: "10px",
        //     }}
        //     options={resortList.map((option: IResort) => option.resortName)}
        //     renderInput={(params) => (
        //         <TextField
        //             {...params}
        //             label="Search resort"
        //             InputProps={{
        //                 ...params.InputProps,
        //                 type: "search",
        //             }}
        //         />
        //     )}
        // />
        <Typeahead
            id="basic-typeahead-single"
            onChange={setSingleSelections}
            options={resortList.map((option: IResort) => option.resortName)}
            placeholder="Choose a resort..."
            selected={singleSelections}
        />
    );
}

export default GlobalSearch;
