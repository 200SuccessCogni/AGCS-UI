import { IResort } from "@/interfaces/resort.interface";

export type GlobalSearchV2PropsType = {
    selectedLocation: IResort;
    searchDataResult: SearchDataType[];
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
