export type AnalyticsOverviewCard = {
    bgColor: string;
    headerTitle: string;
    contentText: string;
    iconBgColor: string;
    icon: React.ReactNode;
    iconColor?: string;
};

export type OverallScoreType = {
    scores: { label: string; value: number }[];
    backgroundColor?: string;
};

export type AnalyticsChartType = {
    data: any;
    options?: any;
    label: string;
};
