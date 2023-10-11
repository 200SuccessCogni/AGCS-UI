import { IResort } from "./resort.interface";

export interface IApp {
    theme: string;
    currentPage: string;
    loader: boolean;
    user: any;
    resortList: any[];
    selectedDateRange: any;
    selectedLocation: any;
    allReviews: any[];
    setSelectedDateRange: (data: any) => undefined;
    setSelectedLocation: (data: any) => undefined;
    setLoader: (data: boolean) => undefined;
    setUser: (data: any) => undefined;
    setResort: (data: IResort[]) => undefined;
    setALLReviews: (data: any[]) => undefined;
}

export interface INotification {
    open: boolean;
    anchorEl: any;
    handleClose: () => void;
}
