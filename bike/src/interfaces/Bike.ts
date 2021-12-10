interface StolenRecord {
    dateStolen: number;
    location: string;
    latitude: number;
    longitude: number;
    theftDescription: string;
    lockingDescription: string;
    lockDefeatDescription: string;
    policeReportNumber: string;
    policeReportDepartment: string;
    createdAt: number;
    createOpen311: boolean;
    id: number;
}

export interface IBike {
    dateStolen: number;
    description: string;
    frameColors: string[];
    frameModel: string;
    id: number;
    isStockImg: string;
    largeImg: string;
    locationFound: string;
    manufacturerName: string;
    externalId: number;
    registryName: string;
    registryUrl: string;
    serial: string;
    status: string;
    stolen: boolean;
    stolenLocation: string;
    thumb: string;
    title: string;
    url: string;
    year: number;
    stolenRecord: StolenRecord;
}
