export interface ApiResponse {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: {
		MakeId: string;
		MakeName: string;
		VehicleTypeId: number;
		VehicleTypeName: string;
	}[];
}
export enum StatusResponse {
	OK = 'OK',
	ERROR = 'ERROR'
}
