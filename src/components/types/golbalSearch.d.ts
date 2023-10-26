export type GlobalSearchV2PropsType = {
    selectedLocation: SelectedLocation;
    recommendedItems: earchDataType[];
    searchItemResult: SearchDataType[];
    // allLocations?: SearchDataType[];
    others?: any[];
    loading?: boolean;
    onChange: (searchQuery: string) => void;
    onSelect: (searchQuery: string) => void;
};

export type SearchDataType = {
    locationId: string;
    locationName: string;
    locationAddress: string;
    locationImg: string;
};

export type SelectedLocation = {
    locationId: string;
    locationName: string;
    locationAddress: string;
};
