export type GlobalSearchV2PropsType = {
    selectedLocation: SelectedResort;
    recommendedItems: earchDataType[];
    searchItemResult: SearchDataType[];
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

export type SelectedResort = {
    locationId: string;
    locationName: string;
    locationAddress: string;
};
