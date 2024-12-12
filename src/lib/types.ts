export type VehicleMake = {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: {
		MakeId: number;
		MakeName: string;
		VehicleTypeId: number;
		VehicleTypeName: string;
	}[];
};
export enum StatusResponse {
	OK = 'OK',
	ERROR = 'ERROR'
}
