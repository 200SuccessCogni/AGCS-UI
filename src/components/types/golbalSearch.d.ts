export type GlobalSearchV2PropsType = {
    searchDataResult: SearchData[];
    others?: any[];
    loading?: boolean;
    onChange: (searchQuery: string) => void;
    onSelect: (searchQuery: string) => void;
};

export type SearchData = {
    locationId: string;
    locationName: string;
    locationAddress: string;
    locationImg: string;
};
